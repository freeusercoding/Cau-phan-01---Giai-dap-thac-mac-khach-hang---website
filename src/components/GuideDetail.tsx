import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Play,
  ExternalLink,
  Phone,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Layers,
  ListOrdered,
  ImageOff
} from 'lucide-react';
import { GuideTopic, GuideStep, ADVISOR_INFO } from '../data/guidesData';
import { ImageLightboxModal } from './ImageLightboxModal';

interface GuideDetailProps {
  guide: GuideTopic;
  onBackToMenu: () => void;
  onEndConversation: () => void;
}

export const GuideDetail: React.FC<GuideDetailProps> = ({
  guide,
  onBackToMenu,
  onEndConversation,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'walkthrough' | 'all'>('walkthrough');
  const [lightboxStep, setLightboxStep] = useState<GuideStep | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [feedbackState, setFeedbackState] = useState<'unanswered' | 'success' | 'need_help'>('unanswered');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});

  const currentStep = guide.steps[activeStepIndex];
  const totalSteps = guide.steps.length;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(ADVISOR_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const openLightbox = (step: GuideStep, index: number) => {
    if (step.imageUrl) {
      setLightboxStep(step);
      setLightboxIndex(index);
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex < totalSteps - 1) {
      const nextIndex = lightboxIndex + 1;
      setLightboxIndex(nextIndex);
      setLightboxStep(guide.steps[nextIndex]);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex > 0) {
      const prevIndex = lightboxIndex - 1;
      setLightboxIndex(prevIndex);
      setLightboxStep(guide.steps[prevIndex]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-20 animate-in fade-in duration-300">
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToMenu}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#003B70] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại menu chính</span>
        </button>

        {/* View Mode Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg text-xs font-medium">
          <button
            onClick={() => setViewMode('walkthrough')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              viewMode === 'walkthrough'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Từng bước</span>
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
              viewMode === 'all'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Tất cả các bước ({totalSteps})</span>
          </button>
        </div>
      </div>

      {/* Guide Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
          <span>VietinBank iPay</span>
          <span aria-hidden="true">·</span>
          <span>{guide.badge}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{totalSteps} bước chi tiết</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003B70] tracking-tight mb-3">
          {guide.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          {guide.shortDescription}
        </p>

        {/* Quick jump to video */}
        {guide.videoUrl && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Có sẵn video hướng dẫn thực tế trên ứng dụng YouTube
            </span>
            <a
              href="#video-huong-dan-chi-tiet"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700"
            >
              <Play className="w-3.5 h-3.5 fill-red-600" />
              <span>Xem video YouTube</span>
            </a>
          </div>
        )}
      </div>

      {/* CONTENT AREA: Walkthrough View vs All Steps View */}
      {viewMode === 'walkthrough' ? (
        <div className="space-y-6">
          {/* Step Progress Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span>Tiến trình thực hiện</span>
              <span className="font-mono text-[#0072CE]">
                Bước {activeStepIndex + 1} / {totalSteps}
              </span>
            </div>
            {/* Progress Track */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#0072CE] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((activeStepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
            {/* Step Selector Badges */}
            <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1">
              {guide.steps.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-[#003B70] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Bước {step.stepNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#003B70] font-bold text-sm flex items-center justify-center shrink-0">
                  {currentStep.stepNumber}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentStep.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="text-base text-slate-700 leading-relaxed whitespace-pre-line mb-6 font-normal">
                {currentStep.description}
              </div>

              {/* Optional Tip */}
              {currentStep.tips && (
                <div className="p-3.5 mb-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Lưu ý: </span>
                    {currentStep.tips}
                  </div>
                </div>
              )}

              {/* Step Image */}
              {currentStep.imageUrl ? (
                <div className="mt-4">
                  <div className="relative group rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-4 flex flex-col items-center justify-center overflow-hidden">
                    {!imageErrorMap[currentStep.stepNumber] ? (
                      <div className="relative max-w-xl w-full flex flex-col items-center">
                        <img
                          src={currentStep.imageUrl}
                          alt={`Minh họa ${currentStep.title}`}
                          referrerPolicy="no-referrer"
                          className="max-h-[460px] w-auto max-w-full rounded-lg shadow-md object-contain cursor-zoom-in transition-transform duration-200 group-hover:scale-[1.01]"
                          onClick={() => openLightbox(currentStep, activeStepIndex)}
                          onError={() => {
                            setImageErrorMap((prev) => ({ ...prev, [currentStep.stepNumber]: true }));
                          }}
                        />
                        <button
                          onClick={() => openLightbox(currentStep, activeStepIndex)}
                          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#003B70] hover:bg-slate-50 shadow-sm transition-colors cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Phóng to hình ảnh</span>
                        </button>
                      </div>
                    ) : (
                      <div className="py-12 px-4 text-center">
                        <ImageOff className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-slate-600">
                          Hình ảnh minh họa cho {currentStep.title}
                        </p>
                        <a
                          href={currentStep.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs text-[#0072CE] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Mở đường dẫn ảnh gốc</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Step Navigation Controls */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeStepIndex === 0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Bước trước</span>
              </button>

              <span className="text-xs text-slate-500 font-medium">
                {activeStepIndex + 1} trên {totalSteps}
              </span>

              {activeStepIndex < totalSteps - 1 ? (
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(totalSteps - 1, prev + 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#003B70] text-white hover:bg-[#00284d] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Bước tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="#phan-hoi-khach-hang"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hoàn tất các bước</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ALL STEPS LIST VIEW */
        <div className="space-y-8">
          {guide.steps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#003B70] font-bold text-sm flex items-center justify-center shrink-0">
                  {step.stepNumber}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-4">
                {step.description}
              </p>

              {step.tips && (
                <div className="p-3 mb-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Lưu ý: </span>
                    {step.tips}
                  </div>
                </div>
              )}

              {step.imageUrl && (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 flex flex-col items-center">
                  {!imageErrorMap[step.stepNumber] ? (
                    <div className="max-w-xl w-full flex flex-col items-center">
                      <img
                        src={step.imageUrl}
                        alt={`Minh họa ${step.title}`}
                        referrerPolicy="no-referrer"
                        className="max-h-[420px] w-auto max-w-full rounded-lg shadow-sm object-contain cursor-zoom-in hover:opacity-95 transition-opacity"
                        onClick={() => openLightbox(step, idx)}
                        onError={() => {
                          setImageErrorMap((prev) => ({ ...prev, [step.stepNumber]: true }));
                        }}
                      />
                      <button
                        onClick={() => openLightbox(step, idx)}
                        className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-600 hover:text-[#003B70]"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Xem ảnh phóng to</span>
                      </button>
                    </div>
                  ) : (
                    <div className="py-6 text-center text-xs text-slate-500">
                      <span>Hình ảnh minh họa bước {step.stepNumber}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* YOUTUBE VIDEO SECTION */}
      {guide.videoUrl && (
        <section
          id="video-huong-dan-chi-tiet"
          className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-600 font-bold uppercase tracking-wider mb-1">
                <Play className="w-3.5 h-3.5 fill-red-600" />
                <span>Video hướng dẫn trực quan</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Video hướng dẫn trên YouTube
              </h2>
            </div>

            {/* DIRECT BUTTON WITH YOUTUBE ICON AS REQUIRED BY USER PROMPT */}
            <a
              href={guide.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FF0000] hover:bg-[#D90000] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap shrink-0"
              title="Mở video trên ứng dụng YouTube"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Xem trên ứng dụng YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded YouTube Player */}
          {guide.youtubeId ? (
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-md">
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${guide.youtubeId}`}
                title={`Video hướng dẫn: ${guide.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="text-center py-8">
              <a
                href={guide.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline"
              >
                Nhấn vào đây để xem trực tiếp video tại: {guide.videoUrl}
              </a>
            </div>
          )}
        </section>
      )}

      {/* FEEDBACK & CONVERSATION SECTION (MANDATORY REQUIREMENT) */}
      <section
        id="phan-hoi-khach-hang"
        className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
      >
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#003B70] flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Quý khách đã thực hiện ổn hay chưa?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Vui lòng cho chúng tôi biết kết quả để được hỗ trợ chu đáo nhất
          </p>

          {/* User Feedback Choices */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={() => setFeedbackState('success')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                feedbackState === 'success'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã ổn, tôi đã làm được</span>
            </button>

            <button
              onClick={() => setFeedbackState('need_help')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                feedbackState === 'need_help'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>Chưa ổn / Cần hỗ trợ thêm</span>
            </button>
          </div>

          {/* RESPONSE 1: SUCCESS STATE */}
          {feedbackState === 'success' && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-8 animate-in fade-in duration-200">
              <p className="font-semibold text-base mb-2">
                Tuyệt vời! VietinBank rất vui vì đã hỗ trợ Quý khách thao tác thành công.
              </p>
              <p className="text-sm text-emerald-800">
                Quý khách có thể quay lại menu để xem các hướng dẫn khác hoặc kết thúc cuộc trò chuyện.
              </p>
            </div>
          )}

          {/* RESPONSE 2: NEED HELP STATE (EXACT TEXT FROM PDF) */}
          {feedbackState === 'need_help' && (
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-200 text-left mb-8 animate-in fade-in duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#003B70] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#003B70] mb-1">
                    Thông điệp hỗ trợ từ Chuyên viên
                  </h4>
                  {/* EXACT PROMPT TEXT */}
                  <blockquote className="text-slate-800 font-medium text-base leading-relaxed mb-4 italic">
                    “{ADVISOR_INFO.supportTextUnsatisfied}”
                  </blockquote>

                  {/* Immediate Action Buttons for Calling or Copying Phone */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-blue-100">
                    <a
                      href={`tel:${ADVISOR_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#003B70] hover:bg-[#00284d] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4 text-emerald-300" />
                      <span>Gọi ngay: {ADVISOR_INFO.phone}</span>
                    </a>

                    <button
                      onClick={handleCopyPhone}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700">Đã sao chép số!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-500" />
                          <span>Sao chép số điện thoại</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TWO MANDATORY BUTTONS SIDE BY SIDE */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBackToMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Quay lại menu chính</span>
            </button>

            <button
              onClick={onEndConversation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
            >
              <span>Kết thúc cuộc trò chuyện</span>
            </button>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {lightboxStep && (
        <ImageLightboxModal
          isOpen={!!lightboxStep}
          onClose={() => setLightboxStep(null)}
          imageUrl={lightboxStep.imageUrl || ''}
          title={lightboxStep.title}
          stepNumber={lightboxStep.stepNumber}
          totalSteps={totalSteps}
          onPrev={lightboxIndex > 0 ? handlePrevLightbox : undefined}
          onNext={lightboxIndex < totalSteps - 1 ? handleNextLightbox : undefined}
        />
      )}
    </div>
  );
};
