import { FAQ_ITEMS } from './content.mjs';

const translations = {
 'Đến nội dung chính':'Skip to content', 'Sự kiện':'Event', 'Hạng vé':'Tickets', 'Khoảnh khắc 2025':'2025 Gallery', 'Kí ức':'Memories', 'Địa điểm':'Venue', 'Hỏi đáp':'FAQ',
 'Mua vé':'Book tickets', 'Mua vé ngay':'Book now', 'Về đêm nhạc':'About the concert', 'Giao hưởng & Broadway':'Symphony & Broadway', 'Vé từ 200.000đ':'Tickets from 200,000₫',
 'Hãy cùng OrcheStars bước vào':'Join OrcheStars for',
 '— một hành trình âm nhạc qua những mùa Giáng Sinh, từ niềm háo hức chờ quà thời thơ bé đến những cảm xúc khi trưởng thành.':'— a musical journey through Christmases past and present, from childhood anticipation to the emotions of growing up.',
 'Giao hưởng truyền thống và nhạc kịch Broadway kể hai sắc màu của cùng một mùa lễ hội. Những giai điệu kinh điển, du dương gặp nhịp điệu đương đại sôi nổi, cùng những giọng ca trong trẻo.':'Classical symphony and Broadway bring two colours to the festive season. Timeless melodies meet vibrant contemporary rhythms and pure young voices.',
 'Xem hạng vé & sơ đồ':'View tickets & seat map', 'Poster chính thức':'Official poster', 'Ngày tổ chức':'Dates', 'Thời gian':'Showtimes', 'Thứ Bảy & Chủ Nhật, ngày 19 và ngày 20 tháng 12 năm 2026':'Saturday & Sunday, 19 and 20 December 2026', 'Hai suất mỗi ngày':'Two shows daily', 'Giá vé':'Ticket prices', 'Từ 200.000đ':'From 200,000₫', '4 hạng vé: Standing, Eco, Premium, First Class':'4 ticket tiers: Standing, Eco, Premium, First Class',
 'Nhạc trưởng Phú Sơn':'Conductor Phú Sơn', 'Những giai điệu kinh điển, du dương của mùa lễ hội.':'Timeless, flowing melodies for the festive season.', 'Nhạc trưởng Craig':'Conductor Craig', 'Nhịp điệu đương đại sôi nổi, rực rỡ sắc màu.':'Vibrant contemporary rhythms, full of colour.', 'Món quà Giáng Sinh dành cho cả gia đình.':'A Christmas gift for the whole family.',
 'Chọn vị trí':'Choose your seat', 'thưởng thức buổi diễn':'and enjoy the show', 'Ghế ngồi':'Seated', 'Ghế đứng':'Standing', 'Vé ngồi':'Seated', 'Vé đứng':'Standing', 'Khu giữa, gần sân khấu nhất':'Central area, closest to the stage', 'Khu giữa, ngay sau First Class':'Central area, behind First Class', 'Các tầng xa sân khấu hơn':'Upper floors, further from the stage', 'Khu vé đứng ở các tầng xa':'Standing areas on the upper floors', 'Đang chọn':'Selected',
 'Sơ đồ khán phòng':'Seat map', 'Sơ đồ tham khảo vị trí các khu vực. Tình trạng ghế được cập nhật tại trang đặt vé.':'Map for reference. Current seat availability is shown on the booking page.',
 'Thế giới âm nhạc':'Our musical world', 'Những cuộc':'Encounters', 'gặp gỡ định mệnh':'written in the stars', 'Những kí ức luôn tồn tại':'Memories that stay', 'mãi mãi với thời gian.':'with us forever.',
 'Điểm hẹn':'The venue', 'Giữa lòng':'In the heart of', 'Sài Gòn.':'Saigon.', 'Renaissance Riverside Sài Gòn':'Renaissance Riverside Saigon', '8–15 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh.':'8–15 Ton Duc Thang, Saigon Ward, Ho Chi Minh City.', '8–15 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh':'8–15 Ton Duc Thang, Saigon Ward, Ho Chi Minh City', 'Suất 1':'Show 1', 'Suất 2':'Show 2',
 'Check-in mở 45 phút trước giờ biểu diễn. Bạn nên có mặt ít nhất 30 phút trước khi chương trình bắt đầu.':'Check-in opens 45 minutes before each show. Please arrive at least 30 minutes before the performance.', 'Xem địa điểm & bản đồ':'View venue & directions', 'Mở chỉ đường trên Google Maps':'Get directions on Google Maps', 'Ảnh: Marriott':'Photo: Marriott', 'Điểm hẹn · Sài Gòn':'Venue · Saigon', 'Áp dụng cho cả hai ngày 19 & 20/12/2026. Bạn nên có mặt trước giờ diễn ít nhất 30 phút.':'Applies to both 19 & 20 December 2026. Please arrive at least 30 minutes before the show.',
 'Trước buổi hẹn':'Before the show', 'Câu hỏi':'Frequently asked', 'thường gặp.':'questions.', 'Thông tin để cả nhà yên tâm tận hưởng đêm nhạc.':'Everything you need for a wonderful family concert.', 'Cần thêm hỗ trợ?':'Need help?', 'Xem đầy đủ thông tin và điều khoản sự kiện ↗':'View event details and terms ↗',
 'Màn nhung sẽ mở sau':'The curtain rises in', 'Ngày':'Days', 'Giờ':'Hours', 'Phút':'Minutes', 'Giây':'Seconds', 'Giữ một chỗ ngồi cho':'Save a seat for', 'người bạn thương.':'someone you love.', 'Mua vé — từ 200.000đ':'Book tickets — from 200,000₫', '19 & 20.12.2026 · 2 suất/ngày':'19 & 20.12.2026 · 2 shows/day',
 'Liên hệ & Kết nối với chúng tôi':'Contact & connect', 'Công ty Cổ phần Orchestars':'Orchestars Joint Stock Company', 'Về công ty chúng tôi':'About us', 'Điều khoản và Chính sách':'Terms & policies', 'Chính sách thanh toán':'Payment policy', 'Chính sách vận chuyển':'Delivery policy', 'Chính sách bảo mật thông tin':'Privacy policy', 'Chính sách xử lý khiếu nại':'Complaints policy', 'Chính sách kiểm hàng':'Inspection policy',
 '675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM':'675–677 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City', 'Địa chỉ: 675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM':'Address: 675–677 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City', 'Giấy chứng nhận đăng ký doanh nghiệp số: 0318788336 cấp lần đầu ngày 23 tháng 12 năm 2024 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh.':'Business registration no. 0318788336, first issued on 23 December 2024 by the Ho Chi Minh City Department of Planning and Investment.', '© 2025 Công ty Cổ phần Orchestars. All rights reserved.':'© 2025 Orchestars Joint Stock Company. All rights reserved.',
 'A · Vé giấy':'A · Paper', 'B · Nhung đỏ':'B · Velvet', 'Mở menu':'Open menu', 'Đóng menu':'Close menu', 'Điều hướng sự kiện':'Event navigation', 'Chọn hạng vé':'Choose a ticket tier', 'Phóng to sơ đồ khán phòng':'Enlarge seat map', 'Đóng sơ đồ khán phòng':'Close seat map', 'Xem ảnh':'View image', 'Đóng ảnh':'Close image', 'Ảnh trước':'Previous image', 'Ảnh tiếp theo':'Next image', 'Đóng địa điểm':'Close venue',
};
const faqEnglish = [
 ['Is the concert suitable for children?', 'Families and young children are welcome. Children aged 3 and above need their own ticket. Children under 3 may sit on an adult’s lap.'],
 ['How do I book tickets and choose seats?', 'Explore the ticket tiers and seat map here, then select “Book now” to choose your showtime and seats and complete your booking on OrcheStars.'],
 ['What time should I arrive?', 'Check-in starts at 16:45 for the 17:30–19:00 show and 18:45 for the 19:30–21:00 show. Please arrive at least 30 minutes early. Check-in closes at 17:45 and 19:45 respectively.'],
 ['What should I bring for check-in?', 'Please present the email with your official e-ticket sent by OrcheStars. Screenshots or photographs of tickets are not accepted.'],
 ['Can I exchange or refund my ticket?', 'Under the event terms, purchased tickets cannot be exchanged, returned, transferred or refunded. Please check your date and showtime carefully before paying.'],
 ['May I take photos or record videos?', 'Professional video equipment, livestreaming and flash photography are not permitted during the performance. Please follow the organisers’ guidance and respect other audience members.'],
];
FAQ_ITEMS.forEach((item, i) => { translations[item.question] = faqEnglish[i][0]; translations[item.answer] = faqEnglish[i][1]; });
const dictionary = new Map(Object.entries(translations).map(([vi,en]) => [vi.toLocaleLowerCase('vi'),en]));
function translate(value) {
 const clean = value.trim();
 if (clean.startsWith('Mua vé A TALE')) return value.replace('Mua vé', 'Book tickets for');
 if (/^(First Class|Premium|Eco|Standing), /.test(clean)) return value.replace('Vé ngồi', 'Seated').replace('Vé đứng', 'Standing').replace('đồng', 'VND');
 const translated = dictionary.get(clean.toLocaleLowerCase('vi')) || (clean.startsWith('· ') ? '· ' + (dictionary.get(clean.slice(2).toLocaleLowerCase('vi')) || clean.slice(2)) : null);
 return translated ? value.replace(clean, translated) : value;
}
export function initLanguage() {
 const button = document.getElementById('language-toggle');
 const texts = []; const attrs = [];
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (!node.parentElement.closest('script, style, #language-toggle, [data-tk-cta], #count b, [data-tk-name], [data-tk-price]') && node.textContent.trim()) texts.push([node,node.textContent]);
 }
 document.querySelectorAll('[aria-label], [title]').forEach(el => {
  if (el === button || el.matches('.tk-cta')) return;
  for (const name of ['aria-label','title']) if(el.hasAttribute(name)) attrs.push([el,name,el.getAttribute(name)]);
 });
 function apply(lang) {
  document.documentElement.lang = lang;
  texts.forEach(([node,vi]) => { if(node.isConnected) node.textContent = lang === 'en' ? translate(vi) : vi; });
  attrs.forEach(([el,name,vi]) => el.setAttribute(name,lang === 'en' ? translate(vi) : vi));
  button.textContent = lang === 'en' ? 'VI' : 'EN';
  button.setAttribute('aria-label',lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English');
  document.dispatchEvent(new Event('languagechange'));
  try { localStorage.setItem('site-language',lang); } catch {}
 }
 button.addEventListener('click',() => apply(document.documentElement.lang === 'en' ? 'vi' : 'en'));
 let saved; try { saved = localStorage.getItem('site-language'); } catch {}
 apply(saved === 'en' ? 'en' : 'vi');
}
