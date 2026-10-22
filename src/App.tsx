import React, { useState, useMemo } from 'react';
import {
  Search,
  Phone,
  ShieldCheck,
  Video,
  ExternalLink,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  Play,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { Header } from './components/Header';
import { GuideCard } from './components/GuideCard';
import { GuideDetail } from './components/GuideDetail';
import { EndConversationModal } from './components/EndConversationModal';
import { GUIDES, GuideTopic, ADVISOR_INFO } from './data/guidesData';

export default function App() {
  const [selectedGuide, setSelectedGuide] = useState<GuideTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Filtered guides based on search query and category
  const filteredGuides = useMemo(() => {
    return GUIDES.filter((guide) => {
      const matchesSearch =
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.steps.some(
          (s) =>
            s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        activeCategory === 'all' || guide.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(ADVISOR_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSelectGuide = (guide: GuideTopic) => {
    setSelectedGuide(guide);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedGuide(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEndConversation = () => {
    setIsEndModalOpen(true);
  };

  const handleRestartConversation = () => {
    setIsEndModalOpen(false);
    setSelectedGuide(null);
    setSearchQuery('');
    setActiveCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#0072CE] selection:text-white">
      {/* Top Bar Header */}
      <Header onGoHome={handleGoHome} onSelectTopic={(id) => {
        const found = GUIDES.find(g => g.id === id);
        if (found) handleSelectGuide(found);
      }} />

      {/* Main Content View */}
      <main className="flex-1">
        {selectedGuide ? (
          /* Detail Guide View */
          <GuideDetail
            guide={selectedGuide}
            onBackToMenu={handleGoHome}
            onEndConversation={handleEndConversation}
          />
        ) : (
          /* Main Landing / Question Cards View */
          <div>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/80 pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0072CE] mb-4">
                  <span>Trung tâm trợ giúp khách hàng</span>
                  <span aria-hidden="true">·</span>
                  <span>VietinBank iPay</span>
                </div>

                {/* THE CORE QUESTION REQUIRED BY USER PROMPT */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003B70] tracking-tight leading-tight mb-4">
                  Anh/chị đang gặp khó khăn với nội dung nào?
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
                  Chọn một trong các hướng dẫn bên dưới để xem chi tiết từng bước thực hiện kèm hình ảnh minh họa và video hướng dẫn trực quan trên YouTube.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-6">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm: quên mật khẩu, đóng thẻ, CCCD sinh trắc học, nộp thuế..."
                    className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0072CE] focus:border-transparent text-sm sm:text-base text-slate-900 shadow-sm placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-medium text-slate-400 hover:text-slate-600"
                    >
                      Xóa tìm kiếm
                    </button>
                  )}
                </div>

                {/* Interactive Category Filter Tabs (Zero-pill discipline, clean segmented buttons) */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'all'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Tất cả nội dung ({GUIDES.length})
                  </button>
                  <button
                    onClick={() => setActiveCategory('taikhoan')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'taikhoan'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Quên mật khẩu
                  </button>
                  <button
                    onClick={() => setActiveCategory('the')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'the'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Đóng thẻ
                  </button>
                  <button
                    onClick={() => setActiveCategory('baomat')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'baomat'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Sinh trắc học CCCD
                  </button>
                  <button
                    onClick={() => setActiveCategory('thanhtoan')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'thanhtoan'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Nộp thuế điện tử
                  </button>
                  <button
                    onClick={() => setActiveCategory('tienich')}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === 'tienich'
                        ? 'bg-[#003B70] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Đặt lịch giao dịch
                  </button>
                </div>
              </div>
            </section>

            {/* GUIDES GRID SECTION */}
            <section id="danh-sach-huong-dan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Danh sách các chủ đề hướng dẫn
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Nhấn vào từng chủ đề để xem các bước minh họa chi tiết và video
                  </p>
                </div>
                <div className="hidden sm:block text-xs text-slate-400 font-medium">
                  Hiển thị {filteredGuides.length} / {GUIDES.length} chủ đề
                </div>
              </div>

              {filteredGuides.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide) => (
                    <GuideCard
                      key={guide.id}
                      guide={guide}
                      onSelect={handleSelectGuide}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    Không tìm thấy nội dung phù hợp
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Quý khách vui lòng thử tìm kiếm bằng từ khóa khác hoặc bấm nút bên dưới để xem tất cả.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#003B70] rounded-lg hover:bg-[#00284d]"
                  >
                    Xem tất cả hướng dẫn
                  </button>
                </div>
              )}
            </section>

            {/* YOUTUBE VIDEO HIGHLIGHT SECTION */}
            <section id="video-huong-dan" className="bg-slate-100/70 border-t border-slate-200/80 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mb-8">
                  <div className="flex items-center gap-2 text-xs text-red-600 font-bold uppercase tracking-wider mb-2">
                    <Play className="w-3.5 h-3.5 fill-red-600" />
                    <span>Video thực tế</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Kho Video Hướng Dẫn Trực Tiếp Trên YouTube
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Xem nhanh video thao tác trực tiếp trên màn hình điện thoại giúp Quý khách dễ dàng làm theo.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {GUIDES.filter((g) => g.youtubeId).map((guide) => (
                    <div
                      key={guide.id}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="relative aspect-video bg-slate-900 group">
                        {guide.youtubeId && (
                          <img
                            src={`https://img.youtube.com/vi/${guide.youtubeId}/hqdefault.jpg`}
                            alt={guide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-slate-500 font-medium mb-1">
                            {guide.badge}
                          </div>
                          <h3 className="font-bold text-slate-900 text-base mb-2 line-clamp-1">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                            {guide.shortDescription}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => handleSelectGuide(guide)}
                            className="text-xs font-semibold text-[#0072CE] hover:text-[#003B70]"
                          >
                            Xem các bước
                          </button>

                          <a
                            href={guide.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 text-xs font-semibold transition-colors"
                          >
                            <span>Mở YouTube</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DIRECT ADVISOR SUPPORT SECTION */}
            <section id="chuyen-vien-tu-van" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="bg-[#003B70] text-white rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
                <div className="max-w-3xl relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Hỗ trợ trực tiếp từ Chuyên viên VietinBank</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
                    Chuyên viên tư vấn: {ADVISOR_INFO.name}
                  </h2>

                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
                    Nếu Quý khách gặp bất kỳ trở ngại nào trong quá trình thao tác trên ứng dụng VietinBank iPay hoặc cần hỗ trợ mở thẻ, xác thực CCCD, giải quyết lỗi giao dịch, xin vui lòng liên hệ ngay để được phục vụ chu đáo nhất.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${ADVISOR_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#003B70] hover:bg-blue-50 font-bold text-sm sm:text-base transition-colors shadow-lg"
                    >
                      <Phone className="w-5 h-5 text-emerald-600" />
                      <span>Gọi ngay: {ADVISOR_INFO.phone}</span>
                    </a>

                    <button
                      onClick={handleCopyPhone}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base transition-colors border border-white/20 cursor-pointer"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-5 h-5 text-emerald-300" />
                          <span className="text-emerald-200">Đã sao chép!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5 text-blue-200" />
                          <span>Sao chép số {ADVISOR_INFO.phone}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Subtle Decorative VietinBank Shield Element in background */}
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-80 h-80 text-white" />
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#003B70]">VietinBank</span>
            <span aria-hidden="true">·</span>
            <span>Ngân hàng TMCP Công Thương Việt Nam</span>
            <span aria-hidden="true">·</span>
            <span>Hỗ trợ khách hàng iPay</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleGoHome}
              className="hover:text-[#003B70] transition-colors"
            >
              Trang chủ
            </button>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${ADVISOR_INFO.phoneRaw}`}
              className="hover:text-[#003B70] transition-colors font-medium text-slate-700"
            >
              Hotline tư vấn: {ADVISOR_INFO.phone}
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={handleEndConversation}
              className="hover:text-red-600 transition-colors"
            >
              Kết thúc phiên hỗ trợ
            </button>
          </div>
        </div>
      </footer>

      {/* End Conversation Modal */}
      <EndConversationModal
        isOpen={isEndModalOpen}
        onRestart={handleRestartConversation}
        onClose={() => setIsEndModalOpen(false)}
      />
    </div>
  );
}
