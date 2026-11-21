import { readFileSync } from 'node:fs';
import { FAQ_ITEMS, TICKET_TIERS, PROGRAMMES, COMPANY, EVENT_NAME } from './content.mjs';

/** Static UI components, rendered by Vite for both dev and production. */
export const PURCHASE_URL = 'https://www.orchestars.vn/events/ttc26';

function escapeAttribute(value = '') {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export function Icon({ name = 'arrow-right' } = {}) {
  const paths = {
    'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
    'arrow-up-right': 'M6 18 18 6M6 6h12v12',
    'phone': 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z',
    'pin': 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    'mail': 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM2 6l10 7L22 6',
    'facebook': 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z',
    'instagram': 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM17.5 6.5h.01',
    'youtube': 'M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 50 50 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 50 50 0 0 1-16.2 0A2 2 0 0 1 2.5 17ZM10 9l5 3-5 3Z',
    'tiktok': 'M13 3h3c0 3 2 5 5 5v3a9 9 0 0 1-5-2v8a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2Z',
  };
  if (!paths[name]) throw new Error(`Unknown icon: ${name}`);
  return `<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
}

export function Button({ ariaLabel = `Mua vé ${EVENT_NAME}`, variant = 'pill', label } = {}) {
  if (variant === 'booking') return `<a class="concert-booking-cta purchase-cta" href="${PURCHASE_URL}" target="_blank" rel="noopener" aria-label="${escapeAttribute(ariaLabel)}"><span>Đặt vé</span>${Icon({ name: 'arrow-up-right' })}</a>`;
  if (variant === 'header') return `<a class="pill pill-red purchase-cta" href="${PURCHASE_URL}" target="_blank" rel="noopener" aria-label="${escapeAttribute(ariaLabel)}">${escapeAttribute(label || 'Mua vé')}</a>`;
  const tone = variant === 'snow' ? 'pill-snow' : 'pill-ink';
  return `<a class="pill ${tone} purchase-cta" href="${PURCHASE_URL}" target="_blank" rel="noopener" aria-label="${escapeAttribute(ariaLabel)}"><span>${escapeAttribute(label || 'Mua vé ngay')}</span>${Icon({ name: 'arrow-right' })}</a>`;
}

/** Numbered section tag in the paper style: ink badge + uppercase label. */
export function NumTag({ number, label, tone = '' }) {
  if (!number || !label) throw new Error('NumTag requires number and label');
  return `<p class="num-tag ${tone}"><b>${String(Number(number)).padStart(2, '0')}</b>${escapeAttribute(label)}</p>`;
}

export function Eyebrow({ number, label }) {
  if (!number || !label) throw new Error('Eyebrow requires number and label');
  return `<p class="eyebrow"><span>${String(Number(number)).padStart(2, '0')}</span> ${escapeAttribute(label)}</p>`;
}

function attributes(source) {
  return Object.fromEntries([...source.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
}

export function renderComponents(html) {
  return html
    .replaceAll('{{EVENT_NAME}}', escapeAttribute(EVENT_NAME))
    .replaceAll('{{EVENT_HEADING}}', '<span class="about-title-line">A Tale Of</span><span class="about-title-line">Two Christmases</span>')
    .replaceAll('<ui-ticket-options></ui-ticket-options>', TicketOptions())
    .replaceAll('<ui-programmes></ui-programmes>', ProgrammePanels())
    .replaceAll('<ui-faq-list></ui-faq-list>', FaqList())
    .replaceAll('<ui-venue-stack></ui-venue-stack>', VenueStack())
    .replaceAll('<ui-site-footer></ui-site-footer>', SiteFooter())
    .replace(/<ui-button\b([^>]*)><\/ui-button>/g, (_, source) => Button(attributes(source)))
    .replace(/<ui-num-tag\b([^>]*)><\/ui-num-tag>/g, (_, source) => NumTag(attributes(source)))
    .replace(/<ui-eyebrow\b([^>]*)><\/ui-eyebrow>/g, (_, source) => Eyebrow(attributes(source)))
    .replace(/<ui-icon\b([^>]*)><\/ui-icon>/g, (_, source) => Icon(attributes(source)));
}


export function ProgrammePanels() {
  return PROGRAMMES.map((programme, index) => {
    const image = escapeAttribute(programme.image);
    const title = escapeAttribute(programme.title);
    return `<article class="show-card${programme.portrait ? ' is-portrait' : ''}"><span class="show-no show-sold-out">SOLD OUT</span><a class="show-art" href="${image}" data-gallery-src="${image}" data-gallery-alt="Banner ${title} từ OrcheStars" aria-label="Phóng to banner ${title}">${programme.backdrop ? `<img class="show-backdrop" src="${image}" alt="" aria-hidden="true" loading="lazy">` : ''}<img class="show-img" src="${image}" alt="Banner ${title} từ OrcheStars" loading="lazy"></a><div class="show-body"><span class="show-tag">${escapeAttribute(programme.eyebrow)}</span><h3>${title}</h3></div></article>`;
  }).join('');
}

export function FaqList() {
  return `<div class="faq-list">${FAQ_ITEMS.map((item, index) => `<details${index === 0 ? ' open' : ''}><summary>${escapeAttribute(item.question)}</summary><div><p>${escapeAttribute(item.answer)}</p></div></details>`).join('')}</div>`;
}

export function VenueStack() {
  const directions = 'https://www.google.com/maps/dir/?api=1&destination=Renaissance+Riverside+Hotel+Saigon+8-15+Ton+Duc+Thang';
  return `<div class="venue-stack"><figure class="venue-building"><img src="/assets/renaissance-exterior.jpg" alt="Tòa nhà Renaissance Riverside Hotel Saigon bên sông Sài Gòn" width="1200" height="800" loading="lazy"><figcaption>Renaissance Riverside Hotel Saigon <a href="https://www.marriott.com/en-us/hotels/sgnbr-renaissance-riverside-hotel-saigon/photos/" target="_blank" rel="noopener">Ảnh: Marriott</a></figcaption></figure><div class="venue-directions"><iframe title="Bản đồ dẫn đường đến Renaissance Riverside Sài Gòn" src="https://www.google.com/maps?q=Renaissance+Riverside+Hotel+Saigon+8-15+Ton+Duc+Thang&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a href="${directions}" target="_blank" rel="noopener">${Icon({ name: 'pin' })}<span>Mở chỉ đường trên Google Maps</span>${Icon({ name: 'arrow-up-right' })}</a></div></div>`;
}

export function SiteFooter() {
  return `<footer class="site-footer" id="footer"><div class="site-footer-grid"><div class="site-footer-connect"><h3>Liên hệ &amp; Kết nối với chúng tôi</h3><a class="footer-contact-row" href="https://www.google.com/maps/search/?api=1&query=675-677+Dien+Bien+Phu+Binh+Thanh+Ho+Chi+Minh" target="_blank" rel="noopener">${Icon({ name: 'pin' })}<span>${escapeAttribute(COMPANY.address)}</span></a><a class="footer-contact-row" href="${COMPANY.phoneHref}">${Icon({ name: 'phone' })}<span>${COMPANY.phone}</span></a><a class="footer-contact-row" href="mailto:${COMPANY.email}">${Icon({ name: 'mail' })}<span>${COMPANY.email}</span></a></div><div class="site-footer-company"><a class="site-footer-name" href="https://www.orchestars.vn/" target="_blank" rel="noopener">${escapeAttribute(COMPANY.name)}</a><p>Địa chỉ: ${escapeAttribute(COMPANY.address)}<br>Hotline OrcheStars: 0906502925<br>Email: ${COMPANY.email}<br>${escapeAttribute(COMPANY.registration)}</p></div><div class="site-footer-policies"><h3>Về công ty chúng tôi</h3><nav aria-label="Điều khoản và chính sách">${COMPANY.policies.map(label => `<a href="https://www.orchestars.vn/terms-policies" target="_blank" rel="noopener">${escapeAttribute(label)}</a>`).join('')}</nav></div></div><div class="site-footer-bottom"><p>© 2025 Công ty Cổ phần Orchestars. All rights reserved.</p><div class="site-footer-socials">${COMPANY.socials.map(social => `<a href="${social.href}" target="_blank" rel="noopener" aria-label="${social.name}">${Icon({ name: social.icon })}</a>`).join('')}</div></div></footer>`;
}

/* Section 02 — Hạng vé. The map matches the seating chart attached to TTC26. */
const seatingMap = readFileSync(new URL('./seating-map-ttc26.svg', import.meta.url), 'utf8');

function TierInput(tier, option) {
  return `<input type="radio" autocomplete="off" name="tier-${option}" value="${tier.key}" aria-label="${tier.name}, ${tier.kind}, ${tier.price} đồng">`;
}

function TicketHead(option) {
  const id = option === 'a' ? 'lineup-title' : `lineup-title-${option}`;
  const tone = option === 'b' ? ' tone="on-red"' : '';
  return `<div class="tk-head"><div><ui-num-tag number="02" label="Hạng vé"${tone}></ui-num-tag><h2 class="display" id="${id}">Chọn vị trí <em>thưởng thức buổi diễn</em></h2></div><div class="tk-head-copy"><p class="tk-when"><span>19 &amp; 20.12.2026</span><span>17:30–19:00 | 20:00–21:30</span></p></div></div>`;
}

function TicketMap() {
  return `<figure class="tk-map"><button type="button" class="tk-map-button tk-map-graphic" data-active="" data-map-open aria-label="Phóng to sơ đồ khán phòng">${seatingMap}<span class="tk-zoom"><span class="tk-zoom-plus" aria-hidden="true"></span></span></button></figure>`;
}

function TicketSummary(option) {
  return `<div class="tk-buy"><p class="tk-sum" hidden aria-live="polite"><small>Đang chọn</small><b data-tk-name></b><span data-tk-price></span></p><a class="pill ${option === 'b' ? 'pill-ink' : 'pill-red'} tk-cta purchase-cta" href="${PURCHASE_URL}" target="_blank" rel="noopener" aria-label="Chọn vị trí ngồi"><span data-tk-cta>Chọn vị trí ngồi</span>${Icon({ name: 'arrow-right' })}</a></div>`;
}

const featured = { platinum: 'Chỉ 20 vé mỗi suất', diamond: 'Đáng giá nhất' };

function TicketBenefits() {
  const included = '<span class="benefit-check" aria-hidden="true">✓</span><span class="sr-only">Bao gồm</span>';
  const empty = '<span aria-hidden="true">—</span><span class="sr-only">Không bao gồm</span>';
  const rows = [
    ['Nước uống (1 chai)', 'Mỗi khách có vé Silver, Gold, Diamond hoặc Platinum được tặng một chai nước uống kèm theo.', [true, true, true, true]],
    ['Ưu đãi nội thất nanoHome', 'nanoHome mang đến nội thất cao cấp từ các thương hiệu nổi tiếng châu Âu, với nhiều thiết kế dành cho không gian sinh hoạt của gia đình.<br>Khi mua sắm tại nanoHome, khách Gold và Diamond được giảm 15%, khách Platinum được giảm 20%.', ['20%', '15%', '15%']],
    ['Ưu đãi ẩm thực khách sạn', 'Thưởng thức ẩm thực tại Renaissance Riverside Hotel Saigon với voucher giảm 40% dành cho khách Gold, Diamond và Platinum.', ['40%', '40%', '40%']],
    ['Quà tặng đêm nhạc', 'Mang một chút ngọt ngào của đêm Giáng Sinh về nhà. Khách Gold nhận một túi Cookie.<br>Với vé Diamond hoặc Platinum, món quà dành cho bạn là một túi Cookie hoặc Chocolate.', ['1 túi Cookie<br>hoặc Chocolate', '1 túi Cookie<br>hoặc Chocolate', '1 túi Cookie']],
    ['Ưu tiên ghế & check-in', 'Khách Diamond và Platinum được ưu tiên vị trí ngồi và làm thủ tục vào cửa.', [true, true]],
    ['Chụp ảnh riêng', 'Khách Diamond và Platinum được ưu tiên chụp ảnh với nhiếp ảnh gia chuyên nghiệp của OrcheStars. Bạn có thể chụp riêng, cùng người thương hoặc cùng gia đình tại backdrop sự kiện được thiết kế và trang trí đặc biệt cho mùa Giáng sinh.', [true, true]],
    ['Set Menu thượng hạng', 'Khách sạn 5 sao Renaissance Riverside Hotel Saigon chuẩn bị Set Menu thượng hạng dành cho bạn.', [true]],
  ];
  const columns = [...TICKET_TIERS.entries()].reverse();
  const tierOptions = columns.map(([, tier]) => `<option value="${tier.key}">${tier.name}</option>`).join('');
  const col = tier => `col-${tier.key}${featured[tier.key] ? ' is-featured' : ''}`;
  const head = columns.map(([, tier]) => `<th scope="col" class="${col(tier)}" style="--tier:${tier.color}"><span class="benefits-name"><i class="benefits-dot" aria-hidden="true"></i>${tier.name}</span><span class="benefits-amount">${tier.price}đ</span></th>`).join('');
  const body = rows.map(([label, explanation, values], index) => {
    const cells = columns.map(([i, tier]) => `<td class="${col(tier)}">${values[i] === true ? included : values[i] || empty}</td>`).join('');
    return `<tr class="benefit-row"><th scope="row"><div class="benefit-label"><span id="benefit-label-${index}">${label}</span><button class="benefit-info" type="button" aria-labelledby="benefit-help-${index} benefit-label-${index}" aria-controls="benefit-detail-${index}" aria-describedby="benefit-detail-${index}" aria-expanded="false"><span aria-hidden="true">i</span><span class="sr-only" id="benefit-help-${index}">Chi tiết</span></button></div><p class="benefit-detail" id="benefit-detail-${index}" role="tooltip" popover="manual">${explanation}</p></th>${cells}</tr>`;
  }).join('');
  return `<div class="benefits"><h3 id="benefits-title">Quyền lợi theo hạng vé</h3>
    <div class="benefits-scroll" role="region" aria-labelledby="benefits-title" tabindex="0"><label class="benefits-filter"><span>Hạng vé</span><select><option value="">Chọn hạng vé</option>${tierOptions}</select></label><table>
    <thead><tr><th scope="col">Quyền lợi</th>${head}</tr></thead>
    <tbody>${body}</tbody>
    </table></div>${TicketBenefitsMobile(rows)}</div>`;
}

// Mobile-only benefits: tier tabs + one detail card, Diamond selected by default.
function TicketBenefitsMobile(rows) {
  const tiers = [...TICKET_TIERS.entries()];
  const cls = tier => `bm-${tier.key}${featured[tier.key] ? ' is-featured' : ''}`;
  const pick = tier => `<button type="button" class="bm-pick" data-bm-pick="${tier.key}"><span>Chọn</span> ${tier.name}</button>`;
  const list = i => `<ul class="bm-list">${rows.map(([label, , values]) => {
    const value = values[i];
    return value
      ? `<li class="is-on"><span class="bm-tick" aria-hidden="true">✓</span><span class="bm-label">${label}</span>${value === true ? '' : `<b class="bm-val">${value.replace('<br>', ' ')}</b>`}</li>`
      : `<li class="is-off"><span class="bm-tick" aria-hidden="true">—</span><span class="bm-label">${label}</span><span class="sr-only">Không bao gồm</span></li>`;
  }).join('')}</ul>`;
  const head = tier => `<span class="bm-head"><span class="bm-name"><i class="benefits-dot" style="--tier:${tier.color}" aria-hidden="true"></i>${tier.name}</span><span class="bm-price">${tier.price}đ</span>${tier.key === 'student' ? `<small class="bm-kind">${tier.kind}</small>` : ''}</span>`;

  const optionB = `<div class="bm-b"><div class="bm-tabs" role="group" aria-label="Chọn hạng vé để xem quyền lợi">${tiers.map(([, tier]) => `<button type="button" class="${cls(tier)}" data-bm-tab="${tier.key}" aria-pressed="${tier.key === 'diamond'}"><i class="benefits-dot" style="--tier:${tier.color}" aria-hidden="true"></i>${tier.name}</button>`).join('')}</div>${tiers.map(([i, tier]) => `<div class="bm-panel ${cls(tier)}" data-bm-panel="${tier.key}"${tier.key === 'diamond' ? '' : ' hidden'}>${head(tier)}${list(i)}${pick(tier)}</div>`).join('')}</div>`;

  return `<div class="bm">${optionB}</div>`;
}

function TicketOptionB() {
  const cards = TICKET_TIERS.map(tier => `<label class="tcard" style="--tier:${tier.color}">${TierInput(tier, 'b')}<span class="tier-heading"><span class="tcard-top"><i></i>${tier.name}</span></span><span class="tcard-price">${tier.price}<small>đ</small></span></label>`).join('');
  return `<div class="tk-opt tk-b" data-tk-option="b"><div class="wrap">${TicketHead('b')}<form class="tk-layout" aria-label="Chọn hạng vé"><div class="tk-mapcard">${TicketMap()}</div><div class="tk-choice"><fieldset class="tk-cards"><legend class="sr-only">Hạng vé</legend>${cards}</fieldset>${TicketSummary('b')}</div></form>${TicketBenefits()}</div></div>`;
}

export function TicketOptions() {
  return `<section id="chon-ve" class="tk" aria-labelledby="lineup-title-b" data-option="b">${TicketOptionB()}<dialog class="tk-dialog" id="tk-map-dialog" aria-labelledby="tk-map-title"><div class="tk-dialog-head"><h3 id="tk-map-title">Sơ đồ khán phòng</h3><button type="button" class="lb-x" id="tk-map-close" aria-label="Đóng sơ đồ khán phòng">×</button></div><div class="tk-map-tools"><button type="button" data-map-zoom="out" aria-label="Thu nhỏ sơ đồ">−</button><button type="button" data-map-zoom="reset" aria-label="Hiện toàn bộ sơ đồ">100%</button><button type="button" data-map-zoom="in" aria-label="Phóng to sơ đồ">+</button></div><div class="tk-map-graphic tk-dialog-map" data-active=""></div><p class="tk-map-note">Sơ đồ tham khảo vị trí các khu vực. Tình trạng ghế được cập nhật tại trang đặt vé.</p></dialog></section>`;
}
