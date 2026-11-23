// Content from ATOTC V1 and the verified OrcheStars artwork sources.
export const EVENT_NAME = 'A TALE OF TWO CHRISTMASES';
export const FAQ_ITEMS = [
  {
    "question": "Chương trình có phù hợp với trẻ em không?",
    "answer": "Chương trình chào đón gia đình và trẻ nhỏ. Trẻ từ 3 tuổi trở lên cần có vé riêng. Trẻ dưới 3 tuổi được ngồi trên lòng người lớn."
  },
  {
    "question": "Tôi mua vé và chọn vị trí như thế nào?",
    "answer": "Xem các hạng vé và sơ đồ khán phòng tại đây, sau đó mở “Mua vé ngay” để chọn suất diễn, vị trí và hoàn tất đặt vé trên hệ thống OrcheStars."
  },
  {
    "question": "Tôi cần đến lúc mấy giờ?",
    "answer": "Check-in từ 16:45 cho suất 17:30–19:00; từ 19:15 cho suất 20:00–21:30. Bạn nên đến trước giờ diễn ít nhất 30 phút. Ban tổ chức ngừng nhận check-in lúc 17:45 hoặc 20:15, tương ứng từng suất."
  },
  {
    "question": "Tôi cần mang gì để check-in?",
    "answer": "Vui lòng xuất trình email kèm vé điện tử chính thức do OrcheStars gửi. Ban tổ chức không chấp nhận ảnh chụp màn hình hoặc ảnh chụp vé."
  },
  {
    "question": "Vé có được đổi hoặc hoàn tiền không?",
    "answer": "Theo điều khoản của chương trình, vé đã mua không được đổi, trả, chuyển nhượng hoặc hoàn tiền. Vui lòng kiểm tra kỹ ngày và suất diễn trước khi thanh toán."
  },
  {
    "question": "Tôi có thể chụp ảnh hoặc quay phim không?",
    "answer": "Không sử dụng máy quay chuyên dụng, livestream hoặc chụp ảnh có đèn flash trong buổi diễn. Vui lòng làm theo hướng dẫn của ban tổ chức và giữ không gian thưởng thức chung."
  }
];

export const TICKET_TIERS = [
  { key: 'platinum', name: 'Platinum', price: '2.900.000', kind: 'Vé ngồi', color: '#00798F' },
  { key: 'diamond', name: 'Diamond', price: '1.900.000', kind: 'Vé ngồi', color: '#E8432F' },
  { key: 'gold', name: 'Gold', price: '1.200.000', kind: 'Vé ngồi', color: '#FAC41E' },
  { key: 'silver', name: 'Silver', price: '800.000', kind: 'Vé ngồi', color: '#3D8BF4' },
  { key: 'student', name: 'Student', price: '200.000', kind: 'Vé đứng', color: '#85B35B' },
];

export const PROGRAMMES = [
  {
    "title": EVENT_NAME,
    "eyebrow": "CHRISTMAS / 2025",
    "image": "/assets/programmes/ttc-2025.jpg",
    "backdrop": true,
    "href": "https://www.orchestars.vn/a-tale-of-two-christmas"
  },
  {
    "title": "Once Upon a Time",
    "eyebrow": "DISNEY / 2025",
    "image": "/assets/programmes/disney-25.jpg",
    "backdrop": true,
    "href": "https://www.orchestars.vn/events/disney-25"
  },
  {
    "title": "Attack on Titan",
    "eyebrow": "ORCHESTARS / 2025",
    "image": "/assets/programmes/aot-25.jpg",
    "href": "https://www.orchestars.vn/events/aot-25"
  },
  {
    "title": "Dear Ghibli, My Friend",
    "eyebrow": "THE DREAM EXPRESS",
    "image": "/assets/programmes/ghibli.jpg",
    "portrait": true,
    "backdrop": true
  }
];

// Public homepage footer, verified 30/10/2026; source: https://www.orchestars.vn/.
export const COMPANY = {
  name: 'Công ty Cổ phần Orchestars',
  address: '675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM',
  phone: '+(84) 906 502 925',
  phoneHref: 'tel:+84906502925',
  email: 'info@orchestars.vn',
  registration: 'Giấy chứng nhận đăng ký doanh nghiệp số: 0318788336 cấp lần đầu ngày 23 tháng 12 năm 2024 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh.',
  policies: ['Điều khoản và Chính sách', 'Chính sách thanh toán', 'Chính sách vận chuyển', 'Chính sách bảo mật thông tin', 'Chính sách xử lý khiếu nại', 'Chính sách kiểm hàng'],
  socials: [
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/orchestarsvn' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/orchestars.vn/' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@orchestars_vn' },
    { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@orchestars' },
  ],
};


export const BOOKING_DAYS = [
  { value: '19', label: 'Thứ Bảy 19.12', full: 'Thứ Bảy 19.12.2026' },
  { value: '20', label: 'Chủ Nhật 20.12', full: 'Chủ Nhật 20.12.2026' },
];
export const BOOKING_SHOWS = [
  { time: '17:30', end: '19:00', checkin: '16:45' },
  { time: '20:00', end: '21:30', checkin: '19:15' },
];
