import { FAQ_ITEMS } from './content.mjs';

const translations = {
 "Sắp diễn": "Next show",
 "Hai suất mỗi tối · 17:30 & 20:00": "Two performances each evening · 17:30 & 20:00",
 "Trang chủ OrcheStars": "OrcheStars homepage",
 "Nhập mã WORLDCLASS giảm 15% đến hết 30/11! ·": "Save 15% with WORLDCLASS through 30 November! ·",
 "ĐẶT VÉ NGAY": "BOOK NOW",
 "Đặt vé ngay!": "Book now!",
 "Giáng Sinh giữa hai thế giới âm nhạc.": "Christmas in two musical worlds.",
 "Giáng Sinh có thể vang lên trong sự tĩnh lặng của một thánh đường, cũng có thể cất lên giữa nhịp điệu rộn ràng của một đêm hội. Mùa Giáng Sinh năm nay, OrcheStars đặt hai sắc thái ấy cạnh nhau để kể một câu chuyện hoàn toàn mới trong A Tale of Two Christmases 2026.": "Christmas can ring out in the hush of a church or rise above the bustle of a festive evening. This year, OrcheStars brings those two sounds together to tell a new story in A Tale of Two Christmases 2026.",
 "Từ âm nhạc Baroque và Cổ điển đến những ca khúc lễ hội quen thuộc, chương trình đưa khán giả từ cái lạnh buốt giá của mùa đông đến hơi ấm của những phút giây sum vầy.": "From Baroque and Classical music to familiar festive songs, the concert takes us from the bitter cold of winter to the warmth of being together.",
 "Đêm nhạc có sự tham gia của dàn nhạc giao hưởng chuyên nghiệp dưới sự dẫn dắt của nhạc trưởng trẻ Việt Nam - Nguyễn Phú Sơn và Dàn Hợp xướng Thiếu nhi OrcheStars dưới sự chỉ huy của Craig Haggart, đến từ Vương quốc Anh.": "Young Vietnamese conductor Nguyễn Phú Sơn leads a professional symphony orchestra, joined by the OrcheStars Children’s Choir under the direction of Craig Haggart from the United Kingdom.",
 "Bật mí: Đêm nhạc mở màn bằng sự lạnh lẽo, gai góc và đầy kịch tính của bản Concerto Mùa Đông (Winter) trong chuỗi Bốn Mùa của Antonio Vivaldi.": "A glimpse of the programme: the evening opens with the biting cold and drama of Winter, the concerto from Antonio Vivaldi’s The Four Seasons.",
 "Từ cái lạnh buốt giá ban đầu ấy, câu chuyện dần dịch chuyển vào không gian trầm tư, ấm áp và mang sắc màu phúc lành của âm nhạc thời kỳ Baroque và Cổ điển, hoà cùng âm thanh rộn rã của những giai điệu Giáng Sinh quen thuộc, tiếng hát trong trẻo của dàn hợp xướng thiếu nhi và khép lại bằng sự vui nhộn, phóng khoáng của Jingle Bell Rock.": "As the chill lifts, Baroque and Classical music bring a sense of quiet warmth and blessing. Familiar Christmas melodies ring out alongside the clear voices of the children’s choir, before the evening closes with the playful swing of Jingle Bell Rock.",
 "MUA VÉ NGAY và cùng chờ đón nhiều điều bất ngờ hơn khi OrcheStars đưa bạn đi qua hai thế giới âm nhạc, A Tale of Two Christmases trở về với niềm vui ấm áp của mùa lễ hội, niềm vui được ở bên nhau.": "BOOK NOW and join OrcheStars for more surprises along the way. After a journey through two musical worlds, A Tale of Two Christmases comes home to the simple joy of spending the holidays together.",
 "Ballet Kẹp Hạt Dẻ tại Nhà hát Hòa Bình": "The Nutcracker ballet at Hoa Binh Theatre",
 "Đóng thông báo": "Dismiss announcement",
 "Sự kiện từ OrcheStars": "More from OrcheStars",
 "Có thể bạn cũng thích": "You might also like",
 "Ballet mùa Giáng sinh · Kẹp Hạt Dẻ": "A Christmas ballet",
 "Nhà hát Hòa Bình": "Hoa Binh Theatre",
 "Xem chương trình The Nutcracker": "Explore The Nutcracker",
 "Xem chương trình": "Explore the show",
 "Đặt vé Nutcracker": "Book Nutcracker tickets",
 "Thông tin trên OrcheStars": "Event details on OrcheStars",
 "Ảnh trước": "Previous photo",
 "Ảnh tiếp theo": "Next photo",
 "Dàn nhạc giao hưởng quy tụ những nghệ sĩ tài năng, được đào tạo bài bản và sở hữu kinh nghiệm biểu diễn phong phú trên các sân khấu hòa nhạc chuyên nghiệp. Với nền tảng chuyên môn vững chắc, kỹ thuật trình tấu điêu luyện cùng khả năng diễn giải đa dạng các tác phẩm âm nhạc cổ điển, các nghệ sĩ mang đến sự kết hợp hài hòa giữa tính chuẩn xác trong diễn tấu và chiều sâu biểu cảm của nghệ thuật giao hưởng.": "The symphony orchestra brings together musicians with formal training and extensive experience on the concert stage. Their command of their instruments and the range of interpretations they bring to the classical repertoire give their performances both precision and expressive depth.",
 "Đặc biệt, dàn nhạc có sự góp mặt của nhiều nghệ sĩ đã gắn bó lâu năm cùng OrcheStars, đồng hành trong những chương trình hòa nhạc thành công và được đông đảo khán giả đón nhận. Kinh nghiệm cộng tác qua nhiều chương trình tạo nên sự ăn ý, khả năng phối hợp nhuần nhuyễn và tính thống nhất trong trình diễn, góp phần duy trì chất lượng nghệ thuật và dấu ấn chuyên môn đặc trưng trong các chương trình hòa nhạc của OrcheStars.": "Many of the musicians have played with OrcheStars for years, appearing together in concerts warmly received by audiences. That shared experience can be heard in the way they listen and respond to one another, shaping the distinctive sound of an OrcheStars concert.",
 "Nhạc trưởng | Nghệ sĩ Clavecin | Nhà soạn nhạc": "Conductor | Harpsichordist | Composer",
 "Nghệ sĩ Thanh nhạc | Giám đốc Nghệ thuật | Chỉ huy Hợp xướng": "Vocalist | Artistic Director | Choral Conductor",
 "Hòa tấu": "Ensemble",
 "Dàn nhạc giao hưởng": "Symphony Orchestra",
 "Nhiều nghệ sĩ trong dàn nhạc đã cùng OrcheStars biểu diễn qua nhiều mùa hòa nhạc.": "Many of these musicians have played together for several OrcheStars concert seasons.",
 "Tìm hiểu thêm": "Learn more",
 "Thu gọn": "Show less",
 "Chi tiết": "Details",
 "Khách sạn 5 sao Renaissance Riverside Hotel Saigon chuẩn bị Set Menu thượng hạng dành cho bạn.": "The five-star Renaissance Riverside Hotel Saigon prepares a premium set menu for you.",
 "Khách Diamond và Platinum được ưu tiên vị trí ngồi và làm thủ tục vào cửa.": "Diamond and Platinum guests receive preferred seating and priority check-in.",
 "Khách Diamond và Platinum được ưu tiên chụp ảnh với nhiếp ảnh gia chuyên nghiệp của OrcheStars. Bạn có thể chụp riêng, cùng người thương hoặc cùng gia đình tại backdrop sự kiện được thiết kế và trang trí đặc biệt cho mùa Giáng sinh.": "Diamond and Platinum guests get priority for portraits with a professional OrcheStars photographer. Pose on your own, as a couple or with your family against a backdrop designed and decorated especially for Christmas.",
 "Mỗi khách có vé Silver, Gold, Diamond hoặc Platinum được tặng một chai nước uống kèm theo.": "Each Silver, Gold, Diamond or Platinum guest receives one bottle of water.",
 "nanoHome mang đến nội thất cao cấp từ các thương hiệu nổi tiếng châu Âu, với nhiều thiết kế dành cho không gian sinh hoạt của gia đình.": "nanoHome offers premium furniture from renowned European brands, including designs for everyday family living.",
 "Khi mua sắm tại nanoHome Gallery, khách giữ vé Platinum hoặc Diamond được giảm 20%, khách giữ vé Gold hoặc Silver được giảm 15%. Ưu đãi không áp dụng cho sản phẩm do bên thứ ba ký gửi và không áp dụng đồng thời với các chương trình khuyến mãi khác.": "At nanoHome Gallery, Platinum and Diamond ticket holders receive 20% off, and Gold and Silver ticket holders receive 15% off. The offer excludes items sold on consignment by third parties and cannot be combined with other promotions.",
 "Thưởng thức ẩm thực tại Renaissance Riverside Hotel Saigon với voucher giảm 40% dành cho khách Gold, Diamond và Platinum.": "Enjoy dining at Renaissance Riverside Hotel Saigon with a 40% discount voucher for Gold, Diamond and Platinum guests.",
 "Mang một chút ngọt ngào của đêm Giáng Sinh về nhà. Khách Gold nhận một túi Cookie.": "Take home a sweet reminder of the Christmas concert. Gold guests receive a bag of cookies.",
 "Với vé Diamond hoặc Platinum, món quà dành cho bạn là một túi Cookie hoặc Chocolate.": "Diamond and Platinum guests receive a bag of cookies or chocolates.",
 "Ưu đãi ẩm thực khách sạn": "Hotel dining offer",
 "Ưu đãi nội thất nanoHome": "nanoHome furniture offer",
 "Nước uống (1 chai)": "Bottled water (1 bottle)",
 "Chụp ảnh riêng": "Private photo session",
 "Ưu tiên ghế & check-in": "Priority seats & check-in",
 "Dining Experience\ntại Khách sạn 5 sao": "Dining experience\nat a five-star hotel",
 "Quyền lợi theo hạng vé": "Benefits by ticket tier",
 "Quyền lợi": "Benefit",
 "Chỉ 20 vé mỗi suất": "Only 20 per show",
 "Đáng giá nhất": "Best value",
 "quyền lợi": "benefits",
 "Chọn": "Choose",
 "Giá vé": "Ticket price",
 "Quà tặng đêm nhạc": "Concert gift",
 "Quà tặng Giáng sinh\nđặc biệt": "Special Christmas gift",
 "Quà tặng Giáng sinh": "Christmas gift",
 "Bao gồm": "Included",
 "Không bao gồm": "Not included",
 "Tầng 8": "Floor 8",
 "Voucher nanoHome và ẩm thực": "nanoHome and dining vouchers",
 "Platinum có 20 vé mỗi suất, tổng cộng 80 vé. Diamond có tổng cộng 274 vé.": "There are 20 Platinum tickets per performance, 80 in total. There are 274 Diamond tickets across all performances.",
 "Set menu Platinum phục vụ món Hoa vào thứ Bảy 19/12 và món Việt vào Chủ nhật 20/12.": "The Platinum set menu features Chinese cuisine on Saturday, 19 December and Vietnamese cuisine on Sunday, 20 December.",
 "Khách Platinum và Diamond có thể chụp ảnh gia đình, cặp đôi hoặc cá nhân tại khu chụp ảnh ở sảnh Việt Kitchen.": "Platinum and Diamond guests can take private family, couple or individual portraits at the photo booth in the Việt Kitchen lobby.",
 "Student là vé đứng dành cho học sinh, sinh viên tại tầng 8.": "Student tickets are for students in the standing area on floor 8."
,
 'GIẢM 10%':'SAVE 10%', 'Nhập mã':'Enter code', 'khi đặt vé.':'when booking.', 'Áp dụng từ':'Valid from', 'đến hết':'through', 'Đóng ưu đãi':'Close offer',
 'Đến nội dung chính':'Skip to content', 'Sự kiện':'Event', 'Hạng vé':'Tickets', 'Khoảnh khắc 2025':'2025 Gallery', 'Kí ức':'Memories', 'Địa điểm':'Venue', 'Hỏi đáp':'FAQ',
 'Mua vé':'Book tickets', 'Mua vé ngay':'Book now', 'Về đêm nhạc':'About the concert', 'Giao hưởng cổ điển & Âm nhạc đương đại':'Classical Symphony & Contemporary Music', 'Vé từ 200.000đ':'Tickets from 200,000₫',
 'Xem hạng vé & sơ đồ':'View tickets & seat map', 'Poster chính thức':'Official poster', 'Ngày tổ chức':'Dates', 'Thời gian':'Showtimes', 'Thứ Bảy':'Saturday', 'Suất diễn':'Showtimes', 'Chủ Nhật':'Sunday', 'Các hạng vé & Giá vé':'Ticket tiers & prices', 'Từ 200,000 VNĐ':'From 200,000 VND', 'Từ 200.000đ':'From 200,000₫',
 'Nhạc trưởng':'Conductor', 'Xem thông tin':'View details', 'Đóng hồ sơ':'Close profile',
 'Anh học chỉ huy dàn nhạc tại Mannheim, chơi đàn clavecin và đồng sáng lập Maestoso Vietnam.':'A Mannheim-trained conductor and harpsichordist, he co-founded Maestoso Vietnam.',
 'Anh chỉ huy hợp xướng thiếu nhi OrcheStars và từng hát trong chuyến lưu diễn của Hans Zimmer.':'He directs the OrcheStars Children’s Choir and sang on Hans Zimmer’s international tour.',
 'Các giọng ca nhí kể chuyện Giáng Sinh cùng dàn nhạc.':'Young voices join the orchestra to tell a Christmas story.',
 'Chọn vị trí':'Choose your seat', 'thưởng thức buổi diễn':'and enjoy the show', 'Ghế ngồi':'Seated', 'Ghế đứng':'Standing', 'Vé ngồi':'Seated', 'Vé đứng':'Standing', 'Khu giữa, gần sân khấu nhất':'Central area, closest to the stage', 'Khu giữa, ngay sau First Class':'Central area, behind First Class', 'Các tầng xa sân khấu hơn':'Upper floors, further from the stage', 'Khu vé đứng ở các tầng xa':'Standing areas on the upper floors', 'Bạn đang xem':'You’re viewing',
 'Sơ đồ khán phòng':'Seat map', 'Sơ đồ khán phòng TTC26 gồm 5 hạng vé':'TTC26 seating chart with five ticket tiers', 'Sơ đồ tham khảo vị trí các khu vực. Tình trạng ghế được cập nhật tại trang đặt vé.':'Map for reference. Current seat availability is shown on the booking page.',
 'Thế giới âm nhạc':'Our musical world', 'Những câu chuyện':'Stories', 'được kể bằng âm nhạc':'told through music', 'Những kí ức luôn tồn tại':'Memories that stay', 'mãi mãi với thời gian.':'with us forever.',
 'Điểm hẹn':'The venue', 'Khách sạn':'A', '5 sao':'five-star hotel', 'Renaissance Riverside Sài Gòn':'Renaissance Riverside Saigon', '8–15 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh.':'8–15 Ton Duc Thang, Saigon Ward, Ho Chi Minh City.', '8–15 Tôn Đức Thắng, Phường Sài Gòn, TP. Hồ Chí Minh':'8–15 Ton Duc Thang, Saigon Ward, Ho Chi Minh City', 'Suất 1':'Show 1', 'Suất 2':'Show 2',
 'Check-in mở 45 phút trước giờ biểu diễn. Bạn nên có mặt ít nhất 30 phút trước khi chương trình bắt đầu.':'Check-in opens 45 minutes before each show. Please arrive at least 30 minutes before the performance.', 'Xem địa điểm & bản đồ':'View venue & directions', 'Mở chỉ đường trên Google Maps':'Get directions on Google Maps', 'Ảnh: Marriott':'Photo: Marriott', 'Điểm hẹn · Sài Gòn':'Venue · Saigon', 'Áp dụng cho cả hai ngày 19 & 20/12/2026. Bạn nên có mặt trước giờ diễn ít nhất 30 phút.':'Applies to both 19 & 20 December 2026. Please arrive at least 30 minutes before the show.',
 'Trước buổi hẹn':'Before the show', 'Bạn hỏi,':'You ask,', 'OrcheStars trả lời':'OrcheStars answers', 'Thông tin để cả nhà yên tâm tận hưởng đêm nhạc.':'Everything you need for a wonderful family concert.', 'Cần thêm hỗ trợ?':'Need help?', 'Xem đầy đủ thông tin và điều khoản sự kiện ↗':'View event details and terms ↗',
 'Đơn vị tài trợ':'Sponsors', 'Màn nhung sẽ mở sau':'The curtain rises in', 'Ngày':'Days', 'Giờ':'Hours', 'Phút':'Minutes', 'Giây':'Seconds', 'Giữ một chỗ ngồi cho':'Save a seat for', 'người bạn thương.':'someone you love.', 'Mua vé — từ 200.000đ':'Book tickets — from 200,000₫', '19 & 20.12.2026 · 2 suất/ngày':'19 & 20.12.2026 · 2 shows/day',
 'Liên hệ & Kết nối với chúng tôi':'Contact & connect', 'Công ty Cổ phần Orchestars':'Orchestars Joint Stock Company', 'Về công ty chúng tôi':'About us', 'Điều khoản và Chính sách':'Terms & policies', 'Chính sách thanh toán':'Payment policy', 'Chính sách vận chuyển':'Delivery policy', 'Chính sách bảo mật thông tin':'Privacy policy', 'Chính sách xử lý khiếu nại':'Complaints policy', 'Chính sách kiểm hàng':'Inspection policy',
 '675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM':'675–677 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City', 'Địa chỉ: 675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM':'Address: 675–677 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City', 'Giấy chứng nhận đăng ký doanh nghiệp số: 0318788336 cấp lần đầu ngày 23 tháng 12 năm 2024 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh.':'Business registration no. 0318788336, first issued on 23 December 2024 by the Ho Chi Minh City Department of Planning and Investment.', '© 2025 Công ty Cổ phần Orchestars. All rights reserved.':'© 2025 Orchestars Joint Stock Company. All rights reserved.',
 'A · Vé giấy':'A · Paper', 'B · Nhung đỏ':'B · Velvet', 'Mở menu':'Open menu', 'Đóng menu':'Close menu', 'Điều hướng sự kiện':'Event navigation', 'Chọn hạng vé':'Choose a ticket tier', 'Phóng to sơ đồ khán phòng':'Enlarge seat map', 'Đóng sơ đồ khán phòng':'Close seat map', 'Xem ảnh':'View image', 'Đóng ảnh':'Close image', 'Ảnh trước':'Previous image', 'Ảnh tiếp theo':'Next image', 'Đóng địa điểm':'Close venue',
};
Object.assign(translations, {
  "Những buổi học piano ở Hà Nội là khởi đầu của Nguyễn Phú Sơn. Với Maestoso Vietnam, nhóm anh đồng sáng lập, khán giả có thể gặp anh trên bục chỉ huy, bên cây piano hoặc đàn clavecin. Anh đảm nhiệm cả ba vai trò qua những chương trình trải từ hòa nhạc Baroque trong nhà thờ đến âm nhạc đương đại.": "Nguyễn Phú Sơn’s life in music began with piano lessons in Hanoi. With Maestoso Vietnam, the ensemble he co-founded, audiences can find him at the podium, the piano or the harpsichord. He has taken on all three roles in programmes ranging from Baroque church concerts to contemporary music.",
  "Từ bản giao hưởng đầu tay đến Mannheim": "From a first symphony to Mannheim",
  "Sau những năm học piano với nghệ sĩ Trịnh Hồng Trang, Phú Sơn theo chuyên ngành sáng tác tại Học viện Âm nhạc Quốc gia Việt Nam. Bản Giao hưởng số 1 mang về cho anh điểm tốt nghiệp 10/10. Năm 2015, anh sang Đức học chỉ huy tại Nhạc viện Mannheim với Klaus Arp và sau đó là Stefan Blunier. Anh cũng theo học đàn clavecin và thực hành biểu diễn theo phong cách lịch sử với Miklós Spányi.": "After studying piano with Trịnh Hồng Trang, Phú Sơn went on to study composition at the Vietnam National Academy of Music. His First Symphony earned him a graduation mark of 10 out of 10. In 2015 he moved to Germany to study conducting at Mannheim University of Music with Klaus Arp and later Stefan Blunier. He also studied harpsichord and historically informed performance with Miklós Spányi.",
  "Sau ba năm chỉ huy và biểu diễn tại Việt Nam, anh trở lại Mannheim để học cao học với Blunier và hoàn thành chương trình vào năm 2024. Anh đạt điểm thi tốt nghiệp 1,0 ở cả hai bậc học và đứng đầu hệ cao học với điểm toàn khóa 1,1. Tại châu Âu, anh đã làm việc với các dàn nhạc như Württembergische Philharmonie Reutlingen và Deutsche Staatsphilharmonie Rheinland-Pfalz, cũng như Nhà hát Opera Quốc gia Plovdiv tại Bulgaria.": "After three years of conducting and performing in Vietnam, he returned to Mannheim for a master’s degree with Blunier, which he completed in 2024. He earned a final examination mark of 1.0 at both degree levels and led his master’s cohort with an overall grade of 1.1. His engagements in Europe have included the Württembergische Philharmonie Reutlingen, the Deutsche Staatsphilharmonie Rheinland-Pfalz and State Opera Plovdiv in Bulgaria.",
  "Từ sân khấu Hồ Gươm đến lớp học chỉ huy": "From the Hồ Gươm stage to the classroom",
  "Tại Việt Nam, Phú Sơn là nhạc trưởng khách mời thường niên của Dàn nhạc Giao hưởng Hà Nội và Dàn nhạc Giao hưởng Quốc gia Việt Nam. Năm 2023, anh đồng tổ chức Liên hoan Âm nhạc Quốc tế Maestoso tại Johor Bahru và chỉ huy ba buổi hòa nhạc. Năm sau, anh lần đầu chỉ huy ballet Hồ Thiên Nga cùng Nhà hát Nhạc Vũ Kịch Việt Nam tại Nhà hát Hồ Gươm. Tháng 10/2025, anh tiếp tục với hai đêm opera La Traviata.": "Phú Sơn is a regular guest conductor of the Hanoi Philharmonic Orchestra and the Vietnam National Symphony Orchestra. In 2023 he co-organised the Maestoso International Music Festival in Johor Bahru and conducted three concerts there. The following year, he conducted Swan Lake for the first time with the Vietnam National Opera and Ballet at Hồ Gươm Opera House. In October 2025 he conducted two performances of La Traviata.",
  "Năm 2026, anh cùng Dàn nhạc Thính phòng Trẻ Nhạc viện TP.HCM biểu diễn tại Moskva và Sochi, đồng thời có lần đầu cộng tác với Sun Symphony Orchestra trong vai trò nghệ sĩ clavecin khách mời. Từ tháng 9, anh giảng dạy chuyên ngành chỉ huy dàn nhạc tại Học viện Âm nhạc Quốc gia Việt Nam. Anh vẫn sáng tác cho piano, clavecin và các nhóm hòa tấu, đôi khi viết riêng một tác phẩm để tặng bạn bè hoặc người thân.": "In 2026 he conducted the Ho Chi Minh City Conservatory’s youth chamber orchestra in Moscow and Sochi and made his first appearances with the Sun Symphony Orchestra as a guest harpsichordist. In September he joined the conducting faculty at the Vietnam National Academy of Music. He continues to write for piano, harpsichord and chamber ensembles, sometimes composing pieces as gifts for friends and family.",
  "Craig Haggart từng hát nhạc phim của Hans Zimmer trong một chuyến lưu diễn quốc tế, đệm đàn cho ca sĩ trong phòng tập nhạc kịch và đứng trên bục chỉ huy tại TP. Hồ Chí Minh. Ở OrcheStars, anh phụ trách dàn hợp xướng.": "Craig Haggart has sung Hans Zimmer’s film scores on an international tour, accompanied singers in musical theatre rehearsals and conducted orchestras in Ho Chi Minh City. At OrcheStars, he leads the choir.",
  "Từ hợp xướng Scotland đến sân khấu Anh": "From Scotland’s youth choir to British stages",
  "Là cựu thành viên Hợp xướng Thanh niên Quốc gia Scotland, Craig từng biểu diễn tại nhiều phòng hòa nhạc ở Vương quốc Anh, trên BBC Radio và truyền hình quốc gia. Anh góp mặt trong vở The Divide của The Old Vic tại Liên hoan Quốc tế Edinburgh. Tại Liên hoan Lammermuir, anh đảm nhiệm cả hướng dẫn thanh nhạc lẫn đệm đàn cho vở opera Noye’s Fludde của Benjamin Britten.": "A former member of the National Youth Choir of Scotland, Craig has performed in concert halls across the UK and on BBC Radio and national television. He appeared in The Old Vic’s The Divide at the Edinburgh International Festival. At the Lammermuir Festival, he coached singers and accompanied Benjamin Britten’s opera Noye’s Fludde.",
  "Trên bục chỉ huy tại TP. Hồ Chí Minh": "On the podium in Ho Chi Minh City",
  "Craig là Giám đốc nghệ thuật của Dàn Hợp xướng và Dàn nhạc Quốc tế TP.HCM, đồng thời phụ trách dàn nhạc tại International School Ho Chi Minh City. Trong chương trình City2City kết nối TP. Hồ Chí Minh và Liverpool, anh chỉ huy dàn hợp xướng và dàn nhạc trong một dự án hợp tác với Royal Liverpool Philharmonic Orchestra.": "Craig is Artistic Director of the International Choir and Orchestra of Ho Chi Minh City and Orchestra Director at International School Ho Chi Minh City. For the City2City partnership between Ho Chi Minh City and Liverpool, he conducted the choir and orchestra in a project with the Royal Liverpool Philharmonic Orchestra.",
  "Từ phòng tập đến sân khấu nhạc kịch": "From the rehearsal room to musical theatre",
  "Trong phòng tập, Craig làm việc cùng ca sĩ với vai trò huấn luyện viên thanh nhạc và nghệ sĩ đệm đàn. Anh tham gia đưa bản dựng Broadway đầu tiên của Shrek: The Musical tại Việt Nam đến Hà Nội. Ở TP. Hồ Chí Minh, anh đệm đàn cho các vở như Legally Blonde, RENT và Mamma Mia! cùng Impact Theatre Saigon. Anh cũng từng hát độc tấu trong chương trình La La Land cùng Imagine Philharmonic Orchestra và trình diễn tập ca khúc Let Us Garlands Bring của Gerald Finzi tại Đà Lạt.": "In rehearsal, Craig works with singers as a vocal coach and accompanist. He helped bring Vietnam’s first Broadway production of Shrek: The Musical to Hanoi. In Ho Chi Minh City, he has accompanied Impact Theatre Saigon productions including Legally Blonde, RENT and Mamma Mia! His solo performances include La La Land with the Imagine Philharmonic Orchestra and Gerald Finzi’s Let Us Garlands Bring in Da Lat.",
  "Để hát cùng nhau, trước hết các em học cách lắng nghe. Tại OrcheStars Children’s Choir, các bạn nhỏ ở TP. Hồ Chí Minh rèn kỹ thuật thanh nhạc và tập hòa giọng trong một tập thể. Đến với A Tale of Two Christmases 2026, các em sẽ cùng dàn nhạc OrcheStars kể chuyện Giáng Sinh bằng tiếng hát.": "Singing together begins with listening to one another. At OrcheStars Children’s Choir, young singers in Ho Chi Minh City develop their voices and learn how to sing as an ensemble. At A Tale of Two Christmases 2026, they will join the OrcheStars orchestra to tell a Christmas story in song.",
  "Tổng quan": "Overview",
  "Dàn Hợp xướng Thiếu nhi OrcheStars (OCC) là chương trình âm nhạc kết nối trẻ em qua ca hát. Chương trình nuôi dưỡng tình yêu âm nhạc và giúp các em xây dựng nền tảng thanh nhạc vững chắc từ sớm.": "OrcheStars Children’s Choir (OCC) brings children together through singing. The programme nurtures a love of music and helps young singers build a strong foundation in vocal technique.",
  "Bên cạnh việc đào tạo âm nhạc, OCC xây dựng một cộng đồng nơi các em làm quen với bạn mới, tham gia những hoạt động cộng đồng ý nghĩa và chia sẻ niềm vui ca hát. Qua đó, các em phát triển cả về nghệ thuật lẫn kỹ năng xã hội.": "Alongside music training, OCC gives children a community where they can make friends, take part in meaningful community activities and share the joy of singing. They develop artistically and build social skills along the way.",
  "Tầm nhìn & mục đích": "Vision & aims",
  "OCC được xây dựng trên niềm tin rằng âm nhạc là ngôn ngữ toàn cầu kết nối mọi người. Thông qua hát hợp xướng, OCC hướng tới bốn mục tiêu.": "OCC was founded on the belief that music is a universal language that brings people together. Through choral singing, the programme helps children achieve four goals.",
  "Phát triển tình yêu âm nhạc trong mỗi trẻ nhỏ.": "Discover and develop a love of music.",
  "Xây dựng sự tự tin, tinh thần đồng đội và những tình bạn bền chặt.": "Grow in confidence, learn to work as a team and form lasting friendships.",
  "Phát triển các kỹ năng thanh nhạc và âm nhạc bài bản từ sớm.": "Build solid vocal and musical skills from an early age.",
  "Giúp âm nhạc hợp xướng và thính phòng trở nên gần gũi, hấp dẫn hơn với thế hệ trẻ.": "Make choral and chamber music more accessible and engaging for young people.",
  "Phương pháp tiếp cận": "How the choir learns",
  "Lộ trình giảng dạy của OCC kết hợp việc học với các hoạt động thú vị để các em luôn hào hứng trong quá trình luyện tập.": "OCC combines structured music instruction with activities that keep children curious and engaged as they practise.",
  "Tham gia trò chơi âm nhạc tương tác để cảm nhận nhịp điệu, cao độ và rèn kỹ năng lắng nghe.": "Play interactive musical games to develop a sense of rhythm and pitch and practise listening.",
  "Làm quen với nhiều tác phẩm, từ các bản nhạc cổ điển đến những bài hát phổ biến.": "Explore a varied repertoire ranging from classical pieces to popular songs.",
  "Rèn kỹ thuật thanh nhạc qua cách lấy hơi, phát âm, nhả chữ và tạo cộng hưởng âm thanh.": "Practise vocal techniques including breathing, pronunciation, diction and resonance.",
  "Tập hát nhóm để học cách phối hợp nhịp nhàng với nhau.": "Rehearse as a group and learn to sing in sync with one another.",
  "Phương pháp này giúp các em phát triển kỹ năng thanh nhạc một cách tự nhiên và vui vẻ, đồng thời xây dựng mối liên kết tích cực với âm nhạc.": "This approach lets children develop their voices naturally and enjoyably while building a positive connection with music.",
  "Cấu trúc chương trình": "Programme structure",
  "Mỗi khóa học gồm 15 buổi, mỗi buổi kéo dài 1 giờ.": "Each course consists of 15 one-hour sessions.",
  "OCC tổ chức hai đợt tuyển sinh mỗi năm.": "OCC runs two admissions rounds each year.",
  "Mỗi khóa tiếp nhận tối đa 30 học viên để xây dựng một cộng đồng hợp xướng năng động và gắn kết.": "Each course admits up to 30 students to build an active, close-knit choir community.",
  "Từ phòng tập đến sân khấu": "From rehearsal to the stage",
  "Năm 2026, OCC tổ chức hai khóa hợp xướng thiếu nhi. Ở cả hai khóa, các em được hướng dẫn kỹ thuật thanh nhạc, tập hòa giọng cùng nhau và chuẩn bị cho các buổi biểu diễn.": "In 2026, OCC ran two children’s choir courses. In both, the singers received vocal coaching, rehearsed as an ensemble and prepared for live performances.",
  "Khóa mùa Xuân 2026": "Spring 2026",
  "Các em tham gia buổi hòa nhạc đặc biệt kỷ niệm 30 năm của ICO và chương trình Special, Special Afternoon Tea tại khách sạn 5 sao Renaissance Riverside Hotel Saigon.": "The spring singers took part in ICO’s special 30th anniversary concert and in Special, Special Afternoon Tea at the five-star Renaissance Riverside Hotel Saigon.",
  "Khóa mùa Hè–Thu 2026": "Summer–Autumn 2026",
  "Tại AHI Halloween Bazaar ngày 31/10/2026, các em bước lên sân khấu trong trang phục hóa trang và hát ba ca khúc trước bạn bè, gia đình và khách tham dự lễ hội của Anne Hill International School. Ảnh và video của buổi diễn có trong album OCC Summer-Fall trên fanpage của dàn hợp xướng.": "At the AHI Halloween Bazaar on 31 October 2026, the children took to the stage in costume and sang three songs for friends, families and visitors at Anne Hill International School. Photos and videos from the performance are in the OCC Summer-Fall album on the choir’s Facebook page.",
  "Về OrcheStars": "About OrcheStars",
  "OrcheStars là công ty âm nhạc tại Việt Nam, tập trung vào các buổi biểu diễn giao hưởng và dàn nhạc. Sứ mệnh của OrcheStars là làm cho âm nhạc cổ điển trở nên dễ tiếp cận và hấp dẫn hơn với công chúng, đặc biệt tại TP. Hồ Chí Minh.": "OrcheStars is a music company in Vietnam focused on symphonic and orchestral performances. Its mission is to make classical music more accessible and engaging, particularly for audiences in Ho Chi Minh City.",
  "Qua các chương trình sáng tạo, nghệ thuật kể chuyện trên sân khấu và sự hợp tác với các nghệ sĩ tài năng, OrcheStars giúp khán giả trải nghiệm vẻ đẹp vượt thời gian của âm nhạc giao hưởng qua những buổi biểu diễn trực tiếp.": "Through imaginative programmes, storytelling on stage and collaborations with talented artists, OrcheStars brings audiences closer to the enduring beauty of live orchestral music.",
  "OrcheStars cũng xây dựng những sân chơi bổ ích để các bạn nhỏ có cơ hội tiếp cận môi trường âm nhạc giao hưởng chuyên nghiệp.": "OrcheStars also creates opportunities for children to learn and take part in a professional orchestral setting.",
  "Ươm mầm tài năng trẻ, gắn kết bằng âm nhạc.": "Nurturing young talent and bringing people together through music.",
  "Liên hệ OrcheStars": "Contact OrcheStars",
  "675–677 Điện Biên Phủ, phường Thạnh Mỹ Tây, TP. Hồ Chí Minh": "675–677 Dien Bien Phu, Thanh My Tay Ward, Ho Chi Minh City",
  "Điện thoại trên fanpage ·": "Facebook contact number ·",
  "Xem album biểu diễn": "View the performance album",
  "Hợp xướng thiếu nhi": "Children’s choir"
});
Object.assign(translations, {
 'Xem điều kiện ưu đãi': 'View offer terms', 'Loại vé': 'Ticket type', 'Ưu đãi nanoHome': 'nanoHome discount',
 'Vé ngồi': 'Seated', 'Vé đứng': 'Standing', 'Không bao gồm voucher': 'No voucher included',
 'Điều kiện sử dụng voucher': 'Voucher terms and conditions',
 'Chỉ áp dụng khi mua hàng trực tiếp tại nanoHome Gallery.': 'Valid only for in-store purchases at nanoHome Gallery.',
 'Không áp dụng cho sản phẩm do bên thứ ba ký gửi.': 'Excludes products consigned by third parties.',
 'Không dùng chung với các chương trình khuyến mãi khác.': 'Cannot be combined with other promotions.',
 'Mỗi voucher chỉ sử dụng được một lần.': 'Each voucher can be used once.',
 'Voucher có giá trị đến hết ngày 31/12/2026.': 'Valid through 31 December 2026.',
 'Mỗi voucher có điều kiện sử dụng riêng.': 'Each voucher is subject to its own terms and conditions.',
 'Xem điều kiện voucher nanoHome': 'View nanoHome voucher terms'
});
const faqEnglish = [
 ['What nanoHome benefit comes with my ticket, and how can I use the voucher?', 'Your nanoHome Gallery benefit depends on your ticket tier.'],
 ['Is the concert suitable for children?', 'Families and young children are welcome. Children aged 3 and above need their own ticket. Children under 3 may sit on an adult’s lap.'],
 ['How do I book tickets and choose seats?', 'Explore the ticket tiers and seat map here, then select “Book now” to choose your showtime and seats and complete your booking on OrcheStars.'],
 ['What time should I arrive?', 'Check-in starts at 16:45 for the 17:30–19:00 show and 19:15 for the 20:00–21:30 show. Please arrive at least 30 minutes early. Check-in closes at 17:45 and 20:15 respectively.'],
 ['What should I bring for check-in?', 'Please present the email with your official e-ticket sent by OrcheStars. Screenshots or photographs of tickets are not accepted.'],
 ['Can I exchange or refund my ticket?', 'Under the event terms, purchased tickets cannot be exchanged, returned, transferred or refunded. Please check your date and showtime carefully before paying.'],
 ['May I take photos or record videos?', 'Professional video equipment, livestreaming and flash photography are not permitted during the performance. Please follow the organisers’ guidance and respect other audience members.'],
];
FAQ_ITEMS.forEach((item, i) => { translations[item.question] = faqEnglish[i][0]; translations[item.answer] = faqEnglish[i][1]; });
const dictionary = new Map(Object.entries(translations).map(([vi,en]) => [vi.toLocaleLowerCase('vi'),en]));
function translate(value) {
 const clean = value.trim();
 if (clean.startsWith('Mua vé A TALE')) return value.replace('Mua vé', 'Book tickets for').replace(', từ 200.000 đồng', ', from 200,000 VND');
 if (/^(Platinum|Diamond|Gold|Silver|Student), /.test(clean)) return value.replace('Vé ngồi', 'Seated').replace('Vé đứng', 'Standing').replace('đồng', 'VND');
 const translated = dictionary.get(clean.toLocaleLowerCase('vi')) || (clean.startsWith('· ') ? '· ' + (dictionary.get(clean.slice(2).toLocaleLowerCase('vi')) || clean.slice(2)) : null);
 return translated ? value.replace(clean, translated) : value;
}
export function initLanguage() {
 const button = document.getElementById('language-toggle');
 const texts = []; const attrs = [];
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (!node.parentElement.closest('script, style, .bio-copy p[lang], #language-toggle, [data-tk-cta], #count b, [data-tk-name], [data-tk-price]') && node.textContent.trim()) texts.push([node,node.textContent]);
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
