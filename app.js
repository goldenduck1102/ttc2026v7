import { initLanguage } from './src/language.mjs';
import { TICKET_TIERS } from './src/content.mjs';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = () => matchMedia('(prefers-reduced-motion:reduce)').matches;

/* Load below-the-fold images near the viewport, including horizontal slides. */
function loadImage(image) {
  image.loading = 'eager';
  if (image.dataset.srcset) image.srcset = image.dataset.srcset;
  image.src = image.dataset.src;
  image.removeAttribute('data-src');
  image.removeAttribute('data-srcset');
  image.removeAttribute('data-deferred-image');
}
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    loadImage(entry.target);
    imageObserver.unobserve(entry.target);
  }), { rootMargin: '160px' });
  $$('[data-deferred-image]').forEach(image => imageObserver.observe(image));
} else {
  $$('[data-deferred-image]').forEach(loadImage);
}

/* Header: mobile menu + active link */
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
function setMenu(open, focus = false) { toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu'); nav.classList.toggle('is-open', open); if (focus) toggle.focus(); }
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false); });
matchMedia('(min-width:1001px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
const panel = $('.nut-panel');
const nutOffer = document.getElementById('nut-offer');
const offerStart = Date.parse('2026-11-25T00:00:00+07:00');
const offerEnd = Date.parse('2026-12-01T00:00:00+07:00');
let offerTimer;
function updateNutOffer() {
  clearTimeout(offerTimer);
  const now = Date.now();
  nutOffer.hidden = now < offerStart || now >= offerEnd;
  if (now < offerEnd) {
    const nextChange = now < offerStart ? offerStart : offerEnd;
    offerTimer = setTimeout(updateNutOffer, Math.min(nextChange - now, 2147483647));
  }
}
updateNutOffer();
window.addEventListener('pageshow', updateNutOffer);
document.addEventListener('visibilitychange', updateNutOffer);
function alignHeaderWithPanel() {
  document.documentElement.style.setProperty('--nut-panel-height', panel.offsetHeight + 'px');
}
new ResizeObserver(alignHeaderWithPanel).observe(panel);
alignHeaderWithPanel();
panel.querySelector('button').addEventListener('click', () => {
  panel.hidden = true;
  $('.hdr-logo').focus();
});
const navLinks = $$('a', nav);
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-45% 0px -50% 0px' });
['su-kien', 'chon-ve', 'khoanh-khac', 'dia-diem', 'hoi-dap', 'nutcracker-rec'].forEach(id => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });

/* Reveal on scroll */
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
}), { threshold: .12 });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; revealObserver.observe(el); });

/* Hero snow */
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let flakes = [], W = 0, H = 0, heroVisible = false, snowFrame = 0, lastSnowTime = 0;
function sizeSnow() {
  const r = canvas.getBoundingClientRect(), d = Math.min(devicePixelRatio, 2);
  W = r.width; H = r.height; canvas.width = W * d; canvas.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  flakes = Array.from({ length: Math.round(W / 10) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.2 + .6, s: Math.random() * .6 + .25, w: Math.random() * 6.28 }));
}
sizeSnow(); addEventListener('resize', sizeSnow);
function updateSnow() {
  const running = heroVisible && !document.hidden && !reduced();
  if (running && !snowFrame) { lastSnowTime = 0; snowFrame = requestAnimationFrame(snow); }
  if (!running && snowFrame) { cancelAnimationFrame(snowFrame); snowFrame = 0; }
  if (reduced()) ctx.clearRect(0, 0, W, H);
}
new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; updateSnow(); }).observe(canvas);
document.addEventListener('visibilitychange', updateSnow);
matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change', updateSnow);
function snow(time) {
  snowFrame = requestAnimationFrame(snow);
  if (lastSnowTime && time - lastSnowTime < 1000 / 30) return;
  const step = lastSnowTime ? Math.min((time - lastSnowTime) / (1000 / 60), 3) : 1;
  lastSnowTime = time;
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = 'rgba(255,251,243,.85)';
  for (const f of flakes) { f.y += f.s * step; f.w += .01 * step; f.x += Math.sin(f.w) * .3 * step; if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; } ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.283); ctx.fill(); }
}

/* Lightbox: Christmas 2025 gallery cycles through the gallery photos; poster/programme open alone. */
const imageDialog = document.getElementById('gallery-dialog');
const picture = document.getElementById('gallery-image');
const caption = document.getElementById('gallery-caption');
const galleryItems = $$('#christmas-gallery [data-gallery-src]');
let activeItems = galleryItems, activeIndex = 0, opener = null;
function lockScroll() { document.body.style.overflow = 'hidden'; }
function unlockScroll() { if (!document.querySelector('dialog[open]')) document.body.style.overflow = ''; }
function displayImage(index) {
  activeIndex = (index + activeItems.length) % activeItems.length;
  const item = activeItems[activeIndex];
  picture.hidden = false; picture.alt = item.dataset.galleryAlt || 'OrcheStars';
  picture.sizes = item.dataset.gallerySizes || '94vw';
  if (item.dataset.gallerySrcset) picture.srcset = item.dataset.gallerySrcset;
  else picture.removeAttribute('srcset');
  picture.src = item.dataset.gallerySrc;
  caption.textContent = picture.alt + (activeItems.length > 1 ? ` / ${activeIndex + 1} of ${activeItems.length}` : '');
  $('#gallery-prev').hidden = $('#gallery-next').hidden = activeItems.length < 2;
}
$$('[data-gallery-src]').forEach(item => item.addEventListener('click', e => {
  e.preventDefault();
  opener = item; activeItems = item.closest('#christmas-gallery') ? galleryItems.filter(el => !matchMedia('(max-width:700px)').matches || !el.classList.contains('gallery-portrait')) : [item];
  displayImage(activeItems.indexOf(item)); imageDialog.showModal(); lockScroll(); $('#gallery-close').focus();
}));
$('#gallery-close').addEventListener('click', () => imageDialog.close());
$('#gallery-prev').addEventListener('click', () => displayImage(activeIndex - 1));
$('#gallery-next').addEventListener('click', () => displayImage(activeIndex + 1));
imageDialog.addEventListener('keydown', e => { if (['ArrowLeft', 'ArrowRight'].includes(e.key) && activeItems.length > 1) { e.preventDefault(); displayImage(activeIndex + (e.key === 'ArrowLeft' ? -1 : 1)); } });
imageDialog.addEventListener('close', () => { unlockScroll(); opener?.focus({ preventScroll: true }); });
picture.addEventListener('error', () => { picture.hidden = true; caption.textContent = 'Không tải được ảnh. Vui lòng chuyển ảnh hoặc đóng và thử lại.'; });

document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const dialog = document.getElementById(button.dataset.open);
  button.focus({ preventScroll: true });
  dialog.showModal(); lockScroll();
  dialog.querySelector('.bio-copy')?.scrollTo({ top: 0, behavior: 'instant' });
  const frame = dialog.querySelector('iframe[data-src]'); if (frame && !frame.src) frame.src = frame.dataset.src;
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', unlockScroll);
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (dialog === imageDialog || e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });
});

/* Early Bird opens at 70% scroll depth once per page load. */
const earlyBirdDialog = $('#early-bird-dialog');
const earlyBirdClaim = earlyBirdDialog.querySelector('.early-bird-claim');
const claimDestination = earlyBirdClaim.href;
const lastDay = earlyBirdDialog.querySelector('time').dateTime;
const offerEndsAt = Date.parse(lastDay + 'T00:00:00+07:00') + 86400000;
let expiryTimer;

function updateEarlyBird() {
  clearTimeout(expiryTimer);
  const remaining = offerEndsAt - Date.now();
  const expired = remaining <= 0;
  earlyBirdClaim.firstElementChild.hidden = expired;
  earlyBirdClaim.lastElementChild.hidden = !expired;
  earlyBirdClaim.href = expired ? '#benefits-title' : claimDestination;
  if (!expired) expiryTimer = setTimeout(updateEarlyBird, Math.min(remaining, 2147483647));
}

earlyBirdClaim.addEventListener('click', () => {
  updateEarlyBird();
  if (earlyBirdClaim.hash === '#benefits-title') earlyBirdDialog.close();
});
earlyBirdDialog.addEventListener('close', () => clearTimeout(expiryTimer));
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && earlyBirdDialog.open) updateEarlyBird();
});

function showEarlyBird() {
  const page = document.scrollingElement;
  const scrollableHeight = page.scrollHeight - page.clientHeight;
  if (scrollableHeight <= 0 || page.scrollTop < scrollableHeight * 0.7 || $('dialog[open]')) return;
  removeEventListener('scroll', showEarlyBird);
  updateEarlyBird();
  earlyBirdDialog.showModal();
  lockScroll();
}
addEventListener('scroll', showEarlyBird, { passive: true });

/* Count-up stats */
const countObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  countObserver.unobserve(entry.target);
  if (reduced()) return;
  const el = entry.target, end = Number(el.dataset.count), t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1200, 1); el.textContent = String(Math.round(end * (1 - (1 - p) ** 3))).padStart(2, '0'); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), { threshold: .6 });
$$('[data-count]').forEach(el => countObserver.observe(el));

/* Countdown to the first show: 19/12/2026 17:30 (GMT+7) */
const target = new Date('2026-12-19T17:30:00+07:00').getTime();
function tick() {
  const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
  const v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
  $$('#count b').forEach(b => { b.textContent = String(v[b.dataset.k]).padStart(2, '0'); });
}
tick(); setInterval(tick, 1000);

/* Mobile sticky buy bar: after the hero, hidden over the ticket section and footer */
const hero = $('.hero'), tickets = document.getElementById('chon-ve'), footer = document.getElementById('footer'), mBuy = $('.m-buy');
function updateBuyBar() {
  const inView = el => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; };
  const show = hero.getBoundingClientRect().bottom < 0 && !inView(tickets) && !inView(footer);
  document.body.classList.toggle('show-mbuy', show); mBuy.setAttribute('aria-hidden', String(!show)); mBuy.inert = !show;
}
let buyBarFrame = 0;
addEventListener('scroll', () => {
  if (buyBarFrame) return;
  buyBarFrame = requestAnimationFrame(() => { buyBarFrame = 0; updateBuyBar(); });
}, { passive: true }); updateBuyBar();


/* 02 Hạng vé — tier selection drives the seat map, summary and CTA in each option. */
const ticketSection = document.getElementById('chon-ve');
const tkDialog = document.getElementById('tk-map-dialog');
const tkDialogMap = tkDialog.querySelector('.tk-dialog-map');
let tkOpener = null;
$$('.tk-opt').forEach(option => {
  const form = $('form', option);
  const map = $('.tk-map-graphic', option);
  const benefitFilter = $('.benefits-filter select', option);
  function showBenefitTier(key) {
    if (!benefitFilter) return;
    benefitFilter.value = key || '';
    option.querySelector('.benefits table').classList.toggle('mobile-tier-hidden', !key);
    for (const cell of option.querySelectorAll('.benefits tr > :not(:first-child)')) {
      cell.classList.toggle('mobile-tier-hidden', !cell.classList.contains('col-' + key));
    }
  }
  benefitFilter?.addEventListener('change', () => showBenefitTier(benefitFilter.value));
  let selectedTier = new FormData(form).get(`tier-${option.dataset.tkOption}`);
  function selectTier() {
    const tier = TICKET_TIERS.find(item => item.key === new FormData(form).get(`tier-${option.dataset.tkOption}`));
    $('.tk-sum', option).hidden = !tier;
    if (!tier) {
      map.dataset.active = '';
      map.dataset.focus = '';
      $('[data-tk-cta]', option).textContent = document.documentElement.lang === 'en' ? 'Choose your seat' : 'Chọn ghế';
      $('.tk-cta', option).setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Choose your seat' : 'Chọn ghế');
      return;
    }
    map.dataset.active = tier.key;
    $('[data-tk-name]', option).textContent = tier.name;
    $('[data-tk-price]', option).textContent = `${tier.price}đ`;
    $('[data-tk-cta]', option).textContent = document.documentElement.lang === 'en' ? 'Choose your seat' : 'Chọn ghế';
    $('.tk-cta', option).setAttribute('aria-label', `${document.documentElement.lang === 'en' ? 'Choose your seat' : 'Chọn ghế'} — ${tier.name}, ${tier.price} VND`);
  }
  form.addEventListener('click', event => {
    const input = event.target.closest('input[type="radio"]');
    if (!input) return;
    const clear = selectedTier === input.value;
    input.checked = !clear;
    selectedTier = clear ? null : input.value;
    map.dataset.focus = selectedTier || '';
    showBenefitTier(selectedTier);
    selectTier();
  });
  form.addEventListener('change', () => {
    selectedTier = new FormData(form).get(`tier-${option.dataset.tkOption}`);
    map.dataset.focus = selectedTier || '';
    showBenefitTier(selectedTier);
    selectTier();
  });
  showBenefitTier(selectedTier);
  document.addEventListener('languagechange', selectTier);
  form.addEventListener('submit', event => event.preventDefault());
  $('[data-map-open]', option).addEventListener('click', event => {
    tkOpener = event.currentTarget;
    tkDialogMap.dataset.active = map.dataset.active;
    tkDialogMap.dataset.focus = map.dataset.focus || ''; 
    tkDialog.showModal(); resetMapZoom(); lockScroll(); $('#tk-map-close').focus();
  });
  selectTier();
});
$('#tk-map-close').addEventListener('click', () => tkDialog.close());
tkDialog.addEventListener('close', () => tkOpener?.focus({ preventScroll: true }));

/* SVG viewBox zoom keeps the numbered original crisp, including pinch and drag. */
let zoomSvg;
function getZoomSvg() {
  if (!zoomSvg) {
    zoomSvg = $('.tk-map-button .seat-map-original').cloneNode(true);
    tkDialogMap.append(zoomSvg);
  }
  return zoomSvg;
}
const mapBase = { x: -715, y: -25, width: 1430, height: 1050 };
let mapScale = 1, mapX = mapBase.x, mapY = mapBase.y;
const mapPointers = new Map();
function drawMapZoom() {
  const w = mapBase.width / mapScale, h = mapBase.height / mapScale;
  mapX = Math.max(mapBase.x, Math.min(mapX, mapBase.x + mapBase.width - w));
  mapY = Math.max(mapBase.y, Math.min(mapY, mapBase.y + mapBase.height - h));
  getZoomSvg().setAttribute('viewBox', `${mapX} ${mapY} ${w} ${h}`);
  $('[data-map-zoom="reset"]').textContent = `${Math.round(mapScale * 100)}%`;
  $('[data-map-zoom="out"]').disabled = mapScale <= 1;
  $('[data-map-zoom="in"]').disabled = mapScale >= 5;
  tkDialogMap.classList.toggle('is-zoomed', mapScale > 1);
}
function zoomMap(factor, point) {
  const oldScale = mapScale;
  const anchor = point || { x: mapX + mapBase.width / mapScale / 2, y: mapY + mapBase.height / mapScale / 2 };
  mapScale = Math.max(1, Math.min(5, mapScale * factor));
  mapX = anchor.x - (anchor.x - mapX) * oldScale / mapScale;
  mapY = anchor.y - (anchor.y - mapY) * oldScale / mapScale;
  drawMapZoom();
}
function resetMapZoom() {
  mapScale = 1; mapX = mapBase.x; mapY = mapBase.y; mapPointers.clear(); drawMapZoom();
}
function mapPoint(x, y) {
  return new DOMPoint(x, y).matrixTransform(getZoomSvg().getScreenCTM().inverse());
}
$$('[data-map-zoom]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.mapZoom === 'reset') resetMapZoom();
  else zoomMap(button.dataset.mapZoom === 'in' ? 1.5 : 1 / 1.5);
}));
tkDialogMap.addEventListener('wheel', event => {
  event.preventDefault();
  zoomMap(Math.exp(-event.deltaY * .002), mapPoint(event.clientX, event.clientY));
}, { passive: false });
tkDialogMap.addEventListener('pointerdown', event => {
  if (event.button !== 0) return;
  mapPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  tkDialogMap.setPointerCapture(event.pointerId);
});
tkDialogMap.addEventListener('pointermove', event => {
  const previous = mapPointers.get(event.pointerId);
  if (!previous) return;
  const current = { x: event.clientX, y: event.clientY };
  const other = [...mapPointers.entries()].find(([id]) => id !== event.pointerId)?.[1];
  if (other) {
    const before = Math.hypot(previous.x - other.x, previous.y - other.y);
    const after = Math.hypot(current.x - other.x, current.y - other.y);
    if (before > 0) zoomMap(after / before, mapPoint((previous.x + other.x) / 2, (previous.y + other.y) / 2));
  }
  const from = mapPoint(previous.x, previous.y), to = mapPoint(current.x, current.y);
  mapX += from.x - to.x; mapY += from.y - to.y;
  mapPointers.set(event.pointerId, current); drawMapZoom();
});
for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) {
  tkDialogMap.addEventListener(type, event => mapPointers.delete(event.pointerId));
}
tkDialog.addEventListener('close', resetMapZoom);

const aboutToggle = document.querySelector('.about-toggle');
const aboutContinuation = document.getElementById('about-continuation');
function setAboutExpanded(expanded) {
  aboutToggle.setAttribute('aria-expanded', String(expanded));
  aboutToggle.firstElementChild.hidden = expanded;
  aboutToggle.lastElementChild.hidden = !expanded;
  aboutContinuation.inert = !expanded;
}
setAboutExpanded(false);
aboutToggle.hidden = false;
aboutToggle.addEventListener('click', () => setAboutExpanded(aboutToggle.getAttribute('aria-expanded') === 'false'));

initLanguage();

/* Mobile carousels keep the desktop grids and the existing gallery lightbox. */
for (const [selector, itemSelector] of [['.acts', '.act'], ['.show-grid', '.show-card'], ['#christmas-gallery .collage', '.snap']]) {
 const track = $(selector), allItems = $$(itemSelector, track);
 const phone = matchMedia('(max-width:700px)');
 let items = [], dots = [];
 const controls = document.createElement('div');
 controls.className = 'carousel-controls';
 track.after(controls);
 let current = 0;
 let updateFrame = 0;
 function update() {
  if (updateFrame) return;
  updateFrame = requestAnimationFrame(() => { updateFrame = 0; updateNow(); });
 }
 function updateNow() {
  const edge = track.getBoundingClientRect().left + track.clientWidth/2;
  const distance = item => { const r=item.getBoundingClientRect(); return Math.abs(r.left+r.width/2-edge); };
  current = items.reduce((best,item,i) => distance(item) < distance(items[best]) ? i : best,0);
  dots.forEach((dot,i) => dot.setAttribute('aria-pressed',String(i===current)));
  if (selector.includes('christmas-gallery')) track.style.height = matchMedia('(max-width:700px)').matches ? `${items[current].offsetHeight+48}px` : '';
 }
 function configure() {
  items = allItems.filter(item => !phone.matches || !item.classList.contains('gallery-portrait'));
  controls.innerHTML = items.map((_,i) => `<button type="button" class="carousel-dot" aria-label="${i+1} / ${items.length}" aria-pressed="${i===0}"></button>`).join('');
  dots = $$('button',controls);
  dots.forEach((dot,i) => dot.addEventListener('click',() => showItem(i)));
  update();
 }
 function showItem(index) {
  const rect = items[index].getBoundingClientRect(), bounds = track.getBoundingClientRect();
  track.scrollBy({left:rect.left + rect.width/2 - bounds.left - track.clientWidth/2, behavior:reduced() ? 'instant' : 'smooth'});
 }
 if (selector === '.acts') {
  let inView = false;
  let timer;
  function scheduleAdvance() {
   clearTimeout(timer);
   if (!phone.matches || !inView || document.hidden || reduced()) return;
   timer = setTimeout(() => {
    if (!document.querySelector('dialog[open]') && !track.matches(':active') && !track.querySelector(':focus-visible') && !controls.querySelector(':focus-visible')) {
     showItem((current + 1) % items.length);
    }
    scheduleAdvance();
   }, 5000);
  }
  new IntersectionObserver(([entry]) => {
   inView = entry.isIntersecting;
   scheduleAdvance();
  }).observe(track);
  phone.addEventListener('change', scheduleAdvance);
  matchMedia('(prefers-reduced-motion:reduce)').addEventListener('change', scheduleAdvance);
  document.addEventListener('visibilitychange', scheduleAdvance);
  track.addEventListener('scrollend', scheduleAdvance);
 }
 phone.addEventListener('change',configure); configure();
 track.querySelectorAll('img').forEach(img=>img.addEventListener('load',update));
 track.addEventListener('scroll',update,{passive:true}); addEventListener('resize',update); update();
}
new IntersectionObserver(([entry]) => ticketSection.classList.toggle('is-in-view',entry.isIntersecting),{threshold: .1}).observe(ticketSection);

let activeInfo = null;
let pinnedInfo = false;
let closeTimer;
const detailFor = button => document.getElementById(button.getAttribute('aria-controls'));

function positionDetail() {
  if (!activeInfo) return;
  const anchor = activeInfo.getBoundingClientRect();
  const popup = detailFor(activeInfo);
  const space = 8;
  const left = Math.min(innerWidth - popup.offsetWidth - space,
    Math.max(space, anchor.left + (anchor.width - popup.offsetWidth) / 2));
  const below = anchor.bottom + space;
  popup.style.left = left + 'px';
  popup.style.top = (below + popup.offsetHeight <= innerHeight - space
    ? below : Math.max(space, anchor.top - popup.offsetHeight - space)) + 'px';
}

function closeDetail() {
  clearTimeout(closeTimer);
  if (!activeInfo) return;
  detailFor(activeInfo).hidePopover();
  activeInfo.setAttribute('aria-expanded', 'false');
  activeInfo = null;
  pinnedInfo = false;
}

function openDetail(button) {
  clearTimeout(closeTimer);
  if (button === activeInfo) return;
  closeDetail();
  activeInfo = button;
  detailFor(button).showPopover();
  button.setAttribute('aria-expanded', 'true');
  positionDetail();
}

function scheduleClose() {
  if (!pinnedInfo) closeTimer = setTimeout(closeDetail, 180);
}

for (const button of document.querySelectorAll('.benefit-info')) {
  const popup = detailFor(button);
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') openDetail(button);
  });
  button.addEventListener('pointerleave', scheduleClose);
  popup.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  popup.addEventListener('pointerleave', scheduleClose);
  button.addEventListener('focus', () => {
    if (button.matches(':focus-visible')) openDetail(button);
  });
  button.addEventListener('blur', event => {
    if (activeInfo === button && !popup.contains(event.relatedTarget)) closeDetail();
  });
  popup.addEventListener('focusout', event => {
    if (activeInfo === button && !popup.contains(event.relatedTarget) && event.relatedTarget !== button) closeDetail();
  });
  button.addEventListener('click', () => {
    if (activeInfo === button && pinnedInfo) return closeDetail();
    openDetail(button);
    pinnedInfo = true;
  });
}
document.addEventListener('pointerdown', event => {
  if (activeInfo && !activeInfo.contains(event.target) && !detailFor(activeInfo).contains(event.target)) closeDetail();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeDetail();
});
window.addEventListener('resize', positionDetail);
document.addEventListener('scroll', () => {
  if (!activeInfo) return;
  const anchor = activeInfo.getBoundingClientRect();
  if (anchor.bottom <= 0 || anchor.top >= innerHeight) closeDetail();
  else positionDetail();
}, true);

// Mobile benefits: tier tabs and "Chọn" buttons.
document.querySelectorAll('.bm').forEach(bm => {
  bm.addEventListener('click', event => {
    const tab = event.target.closest('[data-bm-tab]');
    if (tab) {
      bm.querySelectorAll('[data-bm-tab]').forEach(b => b.setAttribute('aria-pressed', String(b === tab)));
      bm.querySelectorAll('[data-bm-panel]').forEach(p => { p.hidden = p.dataset.bmPanel !== tab.dataset.bmTab; });
      return;
    }
    const pick = event.target.closest('[data-bm-pick]');
    if (!pick) return;
    const input = document.querySelector(`#chon-ve form input[type="radio"][value="${pick.dataset.bmPick}"]`);
    if (!input) return;
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    (document.querySelector('#chon-ve .tk-buy') || input).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  });
});

const voucherFaq = document.getElementById('voucher-nanohome');
for (const link of document.querySelectorAll('a[href="#voucher-nanohome"]')) {
  link.addEventListener('click', () => {
    closeDetail();
    voucherFaq.open = true;
    voucherFaq.querySelector('summary').focus({ preventScroll: true });
  });
}
function openLinkedVoucher() {
  if (location.hash === '#voucher-nanohome') voucherFaq.open = true;
}
openLinkedVoucher();
window.addEventListener('hashchange', openLinkedVoucher);
