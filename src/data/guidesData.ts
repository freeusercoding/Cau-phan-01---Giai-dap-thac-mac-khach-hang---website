export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl?: string;
  tips?: string;
}

export interface GuideTopic {
  id: string;
  orderNumber: string;
  title: string;
  shortDescription: string;
  badge: string;
  videoUrl: string;
  youtubeId?: string;
  category: 'taikhoan' | 'the' | 'baomat' | 'thanhtoan' | 'tienich';
  steps: GuideStep[];
}

export const ADVISOR_INFO = {
  name: 'Trần Văn Thành',
  title: 'Chuyên viên tư vấn VietinBank',
  phone: '0982.939.353',
  phoneRaw: '0982939353',
  supportTextUnsatisfied:
    'Cảm ơn Quý khách đã phản hồi. Quý khách có thể liên hệ Chuyên viên tư vấn Trần Văn Thành – số điện thoại: 0982.939.353 để hỗ trợ trực tiếp. Em sẽ cố gắng cải thiện để phục vụ Quý khách tốt hơn!',
  goodbyeText:
    'Cảm ơn Quý khách đã sử dụng dịch vụ của VietinBank. Chúc Quý khách một ngày tốt lành!',
};

export const GUIDES: GuideTopic[] = [
  {
    id: 'quen-mat-khau-ipay',
    orderNumber: '01',
    title: 'Hướng dẫn quên mật khẩu iPay',
    shortDescription: 'Lấy lại mật khẩu đăng nhập VietinBank iPay nhanh chóng bằng xác thực OTP và khuôn mặt.',
    badge: 'Đăng nhập & Tài khoản',
    videoUrl: 'https://www.youtube.com/watch?v=86r0pxPOzbs',
    youtubeId: '86r0pxPOzbs',
    category: 'taikhoan',
    steps: [
      {
        stepNumber: 1,
        title: 'Màn hình đăng nhập',
        description: 'Ở màn hình đăng nhập ứng dụng VietinBank iPay, chọn mục "Quên mật khẩu".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.1.png',
        tips: 'Đảm bảo ứng dụng VietinBank iPay được cập nhật phiên bản mới nhất trên App Store hoặc Google Play.',
      },
      {
        stepNumber: 2,
        title: 'Nhập thông tin xác thực',
        description: 'Nhập tên đăng nhập và số điện thoại đã đăng ký với VietinBank, sau đó bấm "Tiếp tục".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.2.png',
        tips: 'Số điện thoại phải trùng khớp với số đã đăng ký dịch vụ iPay tại quầy giao dịch.',
      },
      {
        stepNumber: 3,
        title: 'Nhập mã xác thực OTP',
        description: 'Nhập mã OTP được gửi về tin nhắn SMS của số điện thoại, sau đó bấm "Tiếp tục".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.3.png',
        tips: 'Tuyệt đối không chia sẻ mã xác thực OTP này cho bất kỳ ai, kể cả nhân viên ngân hàng.',
      },
      {
        stepNumber: 4,
        title: 'Xác thực khuôn mặt (eKYC)',
        description: 'Xác thực khuôn mặt theo yêu cầu trên màn hình. Sau khi hoàn thành, iPay sẽ gửi mật khẩu mới về tin nhắn SMS. Bấm đăng nhập iPay để tiếp tục.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.4.png',
        tips: 'Giữ khuôn mặt trong khung hình tròn, không đội mũ, đeo kính râm hoặc ở nơi quá tối.',
      },
      {
        stepNumber: 5,
        title: 'Đổi mật khẩu theo yêu cầu',
        description: 'Nhập mật khẩu theo yêu cầu:\n• Mật khẩu hiện tại: Nhập mật khẩu tạm thời gửi về tin nhắn SMS\n• Mật khẩu mới: Đặt mật khẩu mới theo mong muốn của Quý khách\n• Bấm "Tiếp tục".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.5.png',
        tips: 'Mật khẩu cần từ 8-20 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt để đảm bảo an toàn.',
      },
      {
        stepNumber: 6,
        title: 'Xác nhận hoàn tất',
        description: 'Thực hiện quét khuôn mặt lần cuối để xác nhận đổi mật khẩu thành công và truy cập tài khoản.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/1.6.png',
        tips: 'Sau bước này Quý khách có thể bật đăng nhập bằng vân tay/Face ID để tiện lợi cho các lần sau.',
      },
    ],
  },
  {
    id: 'dong-the',
    orderNumber: '02',
    title: 'Hướng dẫn đóng thẻ',
    shortDescription: 'Thực hiện đóng hoặc khóa vĩnh viễn thẻ thanh toán, thẻ tín dụng VietinBank an toàn ngay trên iPay.',
    badge: 'Quản lý Thẻ',
    videoUrl: 'https://www.youtube.com/watch?v=acdT3KxET40',
    youtubeId: 'acdT3KxET40',
    category: 'the',
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập ứng dụng',
        description: 'Đăng nhập vào ứng dụng VietinBank iPay bằng vân tay, FaceID hoặc mật khẩu.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.1.png',
      },
      {
        stepNumber: 2,
        title: 'Truy cập danh sách thẻ',
        description: 'Tại màn hình chính, vào mục "Danh sách thẻ" hoặc chọn phần Quản lý thẻ.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.2.png',
      },
      {
        stepNumber: 3,
        title: 'Chọn thẻ cần đóng',
        description: 'Kiểm tra đúng thông tin thẻ cần đóng (số thẻ, loại thẻ), bấm vào phần "Xem thêm".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.3.png',
        tips: 'Nếu có dư nợ thẻ tín dụng, Quý khách cần thanh toán hết trước khi yêu cầu đóng thẻ.',
      },
      {
        stepNumber: 4,
        title: 'Chọn tính năng đóng thẻ',
        description: 'Trong menu chức năng chi tiết của thẻ, chọn mục "Đóng thẻ".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.4.png',
      },
      {
        stepNumber: 5,
        title: 'Nhập mã xác thực OTP',
        description: 'Nhập mã xác thực OTP gửi về SMS hoặc xác thực qua VietinBank Soft OTP.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.5.png',
      },
      {
        stepNumber: 6,
        title: 'Xác nhận hoàn thành',
        description: 'Kiểm tra thông báo xác nhận đóng thẻ thành công trên màn hình ứng dụng.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/Anh-CN3/main/2.6.png',
        tips: 'Sau khi đóng thẻ, thẻ vật lý sẽ bị hủy hiệu lực giao dịch lập tức để đảm bảo an toàn tài chính.',
      },
    ],
  },
  {
    id: 'cap-nhat-sinh-trac-hoc',
    orderNumber: '03',
    title: 'Xác thực CCCD gắn chip & Sinh trắc học',
    shortDescription: 'Cập nhật sinh trắc học khuôn mặt và quét NFC thẻ CCCD gắn chip theo Quyết định 2345/QĐ-NHNN.',
    badge: 'Bảo mật & Xác thực',
    videoUrl: 'https://www.youtube.com/watch?v=9yYn3SbMT9A',
    youtubeId: '9yYn3SbMT9A',
    category: 'baomat',
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập VietinBank iPay',
        description: 'Mở ứng dụng VietinBank iPay và đăng nhập vào tài khoản của Quý khách.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.1.png',
        tips: 'Chuẩn bị sẵn thẻ Căn cước công dân gắn chip vật lý còn nguyên vẹn, không bị cong gãy.',
      },
      {
        stepNumber: 2,
        title: 'Bắt đầu cập nhật sinh trắc học',
        description: 'Chọn banner "Cập nhật sinh trắc học" hoặc vào Cài đặt > Sinh trắc học, sau đó click vào nút "Bắt đầu chụp".',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.2.png',
      },
      {
        stepNumber: 3,
        title: 'Chụp mặt trước Căn cước công dân',
        description: 'Đặt mặt trước thẻ CCCD gắn chip vào khung viền hiển thị trên màn hình để hệ thống tự động quét nhận diện.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.3.png',
        tips: 'Tránh ánh đèn phản quang hoặc lóa sáng vào thông tin thẻ CCCD.',
      },
      {
        stepNumber: 4,
        title: 'Chụp mặt sau Căn cước công dân',
        description: 'Lật mặt sau của thẻ CCCD, canh chỉnh các góc thẻ nằm trọn trong khung hình để quét thông tin mã MRZ.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.4.png',
      },
      {
        stepNumber: 5,
        title: 'Xác nhận hướng dẫn',
        description: 'Đọc kỹ hướng dẫn hiển thị và click vào nút "Đã hiểu" để chuyển sang bước quét khuôn mặt.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.5.png',
      },
      {
        stepNumber: 6,
        title: 'Quét gương mặt nhận diện',
        description: 'Đưa gương mặt vào khung hình tròn, giữ thẳng đầu, thực hiện các cử động theo hướng dẫn (chớp mắt, quay trái/phải).',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.6.png',
        tips: 'Thực hiện ở nơi đủ ánh sáng tự nhiên, không đeo khẩu trang hoặc kính đổi màu.',
      },
      {
        stepNumber: 7,
        title: 'Đọc chip NFC trên CCCD',
        description: 'Đặt mặt trước CCCD áp sát ngay mặt sau điện thoại (vị trí đầu camera hoặc logo máy) để điện thoại đọc chip NFC.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.7.png',
        tips: 'Nên tháo ốp lưng điện thoại dày và giữ yên cả thẻ và điện thoại trong 3-5 giây đến khi máy rung báo đọc thành công.',
      },
      {
        stepNumber: 8,
        title: 'Hoàn tất cập nhật',
        description: 'Kiểm tra lại dữ liệu trích xuất từ chip và bấm "Tiếp tục" để hoàn thành cập nhật dữ liệu sinh trắc học.',
        imageUrl: 'https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/3.8.png',
      },
    ],
  },
  {
    id: 'nop-thue-dien-tu',
    orderNumber: '04',
    title: 'Hướng dẫn nộp thuế điện tử trên iPay',
    shortDescription: 'Tra cứu và nộp thuế nội địa, thuế trước bạ, đất đai trực tiếp vào Ngân sách Nhà nước trên VietinBank iPay.',
    badge: 'Thanh toán & Dịch vụ công',
    videoUrl: 'https://www.youtube.com/watch?v=ASKGDLi1tGE',
    youtubeId: 'ASKGDLi1tGE',
    category: 'thanhtoan',
    steps: [
      {
        stepNumber: 1,
        title: 'Đăng nhập ứng dụng iPay',
        description: 'Đăng nhập ứng dụng VietinBank iPay trên điện thoại di động.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.1.png',
      },
      {
        stepNumber: 2,
        title: 'Vào danh mục Tất cả dịch vụ',
        description: 'Tại màn hình chính của ứng dụng, chọn mục "Tất cả dịch vụ".',
      },
      {
        stepNumber: 3,
        title: 'Chọn Dịch vụ thanh toán',
        description: 'Tại màn hình Tất cả dịch vụ, tìm và chọn nhóm "Dịch vụ thanh toán".',
      },
      {
        stepNumber: 4,
        title: 'Chọn Nộp thuế điện tử',
        description: 'Chọn biểu tượng "Nộp thuế điện tử" trong danh sách dịch vụ.',
      },
      {
        stepNumber: 5,
        title: 'Chọn Nộp thuế',
        description: 'Bấm chọn tính năng "Nộp thuế" để bắt đầu quy trình tra cứu nghĩa vụ thuế.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.2.jpg',
      },
      {
        stepNumber: 6,
        title: 'Chọn hình thức nộp thuế',
        description: 'Tại màn hình Thuế nội địa, chọn mục danh sách droplist [Hình thức nộp thuế].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.3.jpg',
      },
      {
        stepNumber: 7,
        title: 'Phương thức kê khai',
        description: 'Chọn [Tự kê khai] để nộp cho chính mình hoặc chọn [Nộp cho người khác]. Lưu ý: Trường hợp chọn Truy vấn bằng Mã số thuế cá nhân chính là số Căn cước công dân.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.4.jpg',
      },
      {
        stepNumber: 8,
        title: 'Truy vấn thông tin thuế',
        description: 'Sau khi nhập mã số thuế / số CCCD, nhấn nút [Truy vấn].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.5.jpg',
      },
      {
        stepNumber: 9,
        title: 'Chọn tài khoản nguồn và người nộp',
        description: 'Màn hình hiển thị thông tin người nộp thuế và danh sách các khoản chưa nộp. Khách hàng chọn: [1. Tài khoản nguồn trích tiền; 2. Thông tin người nộp thuế, người nộp thay].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.6.jpg',
      },
      {
        stepNumber: 10,
        title: 'Kiểm tra danh sách khoản nộp',
        description: 'Kiểm tra kỹ mục [Danh sách các khoản chưa nộp] và tích chọn khoản thuế cần thực hiện thanh toán.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.7.jpg',
      },
      {
        stepNumber: 11,
        title: 'Kiểm tra thông tin người nộp',
        description: 'Kiểm tra đầy đủ thông tin [Họ tên người nộp thuế, địa chỉ, cơ quan thuế quản lý thu].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.8.jpg',
      },
      {
        stepNumber: 12,
        title: 'Đối chiếu số tiền thuế',
        description: 'Kiểm tra chính xác [Số tiền thuế] và [Các thông tin chi tiết liên quan đến món thuế cần nộp].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.9.jpg',
      },
      {
        stepNumber: 13,
        title: 'Bấm nộp thuế',
        description: 'Sau khi rà soát toàn bộ thông tin chuẩn xác, nhấn nút [Nộp thuế].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.10.jpg',
      },
      {
        stepNumber: 14,
        title: 'Nhập mã xác thực giao dịch',
        description: 'Nhập OTP SMS hoặc phê duyệt bằng Soft OTP VietinBank.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.11.jpg',
      },
      {
        stepNumber: 15,
        title: 'Xác nhận & Hoàn tất',
        description: 'Chọn [Xác nhận & Hoàn tất] để ngân hàng trích tiền và hạch toán giao dịch vào Kho bạc Nhà nước.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.12.jpg',
      },
      {
        stepNumber: 16,
        title: 'Xem chứng từ nộp NSNN',
        description: 'Để nhận chứng từ nộp Ngân sách Nhà nước, chọn tab [Lịch sử nộp thuế].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.13.jpg',
      },
      {
        stepNumber: 17,
        title: 'Tra cứu theo khoảng thời gian',
        description: 'Chọn khoảng thời gian truy vấn giao dịch >> Nhấn chọn [Áp dụng].',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.14.jpg',
      },
      {
        stepNumber: 18,
        title: 'Xem chi tiết món thuế',
        description: 'Chọn [Chi tiết] của giao dịch để xem toàn bộ thông tin và trạng thái đã nộp thành công.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.15.jpg',
      },
      {
        stepNumber: 19,
        title: 'Gửi chứng từ qua Email',
        description: 'Chọn button [Nhận chứng từ qua Email], có thể tùy chỉnh hoặc thay đổi địa chỉ Email nhận biên lai nộp thuế.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.16.jpg',
      },
      {
        stepNumber: 20,
        title: 'Nhận Giấy nộp tiền NSNN',
        description: 'Truy cập hòm thư Email đã đăng ký để tải về hoặc in Giấy nộp tiền vào Ngân sách Nhà nước có chữ ký số hợp lệ.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Nop-thue-dien-tu/6.17.jpg',
      },
    ],
  },
  {
    id: 'dat-lich-giao-dich',
    orderNumber: '05',
    title: 'Hướng dẫn đặt lịch qua iPay',
    shortDescription: 'Chủ động đặt lịch hẹn giao dịch tại các Chi nhánh / Phòng giao dịch VietinBank trên toàn quốc.',
    badge: 'Tiện ích Chi nhánh',
    videoUrl: 'https://www.youtube.com/watch?v=86r0pxPOzbs',
    category: 'tienich',
    steps: [
      {
        stepNumber: 1,
        title: 'Tìm kiếm tính năng trên iPay',
        description: 'Truy cập ứng dụng VietinBank iPay và click vào thanh tìm kiếm ở đầu trang.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.1.jpg',
      },
      {
        stepNumber: 2,
        title: 'Tìm từ khóa "Đặt lịch"',
        description: 'Gõ từ khóa “đặt lịch” vào ô tìm kiếm.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.2.jpg',
      },
      {
        stepNumber: 3,
        title: 'Thêm mới lịch hẹn',
        description: 'Chọn mục “Thêm mới lịch hẹn” để tạo phiên đặt chỗ mới.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.3.jpg',
      },
      {
        stepNumber: 4,
        title: 'Tab Thông tin đặt lịch',
        description: 'Click vào tab “Thông tin đặt lịch”.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.4.jpg',
      },
      {
        stepNumber: 5,
        title: 'Chọn loại dịch vụ',
        description: 'Chọn “Loại dịch vụ” Quý khách cần giao dịch (Gửi tiết kiệm, Mở tài khoản, Thẻ, Vay vốn, Chuyển tiền...).',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.5.jpg',
      },
      {
        stepNumber: 6,
        title: 'Chọn Phòng giao dịch',
        description: 'Chọn “Phòng giao dịch” và lựa chọn Chi nhánh / PGD gần địa điểm của Quý khách nhất.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.6.jpg',
      },
      {
        stepNumber: 7,
        title: 'Chọn ngày và giờ hẹn',
        description: 'Chọn khung giờ và ngày Quý khách dự kiến đến quầy giao dịch.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.7.jpg',
      },
      {
        stepNumber: 8,
        title: 'Rà soát thông tin lịch hẹn',
        description: 'Nhìn lại ngày và giờ đã chọn, điều chỉnh nếu có thay đổi trong lịch trình.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.8.jpg',
      },
      {
        stepNumber: 9,
        title: 'Xác nhận đặt lịch',
        description: 'Chốt ngày và giờ đặt lịch, sau đó click vào nút “Xác nhận đặt lịch”.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.9.jpg',
      },
      {
        stepNumber: 10,
        title: 'Lưu mã và ảnh ngày đặt lịch',
        description: 'Lưu lại ảnh màn hình có chứa mã đặt lịch và QR để quét lấy số ưu tiên khi đến điểm giao dịch VietinBank.',
        imageUrl: 'https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Giai-dap-thac-mac/Dat-lich/4.10.jpg',
      },
    ],
  },
];
