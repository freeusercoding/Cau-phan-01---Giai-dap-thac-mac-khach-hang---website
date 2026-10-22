import React, { useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  stepNumber?: number;
  totalSteps?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  stepNumber,
  totalSteps,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            {stepNumber && (
              <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#0072CE] text-white">
                Bước {stepNumber} {totalSteps ? `/ ${totalSteps}` : ''}
              </span>
            )}
            <h4 className="text-sm sm:text-base font-semibold text-slate-100 truncate max-w-md">
              {title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative flex-1 min-h-[300px] max-h-[72vh] flex items-center justify-center p-4 bg-slate-950 overflow-auto">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain rounded shadow-lg"
          />

          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer shadow-lg"
              title="Bước trước"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer shadow-lg"
              title="Bước tiếp theo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>Sử dụng phím mũi tên ← → để chuyển bước hoặc Esc để đóng</span>
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium"
          >
            <ZoomIn className="w-4 h-4" />
            <span>Mở ảnh gốc trong tab mới</span>
          </a>
        </div>
      </div>
    </div>
  );
};
