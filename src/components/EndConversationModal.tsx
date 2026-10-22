import React from 'react';
import { CheckCircle2, RotateCcw, Phone, HeartHandshake } from 'lucide-react';
import { ADVISOR_INFO } from '../data/guidesData';

interface EndConversationModalProps {
  isOpen: boolean;
  onRestart: () => void;
  onClose: () => void;
}

export const EndConversationModal: React.FC<EndConversationModalProps> = ({
  isOpen,
  onRestart,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-center">
        {/* VietinBank Icon / Badge */}
        <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003B70] mb-5">
          <HeartHandshake className="w-8 h-8" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Cảm ơn Quý khách!
        </h3>

        {/* Exact required wording from the document */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-[#003B70] font-medium text-base leading-relaxed mb-6">
          “{ADVISOR_INFO.goodbyeText}”
        </div>

        <p className="text-sm text-slate-600 mb-6">
          Nếu cần thêm thông tin giải đáp bất kỳ lúc nào, Quý khách luôn có thể kết nối với Chuyên viên{' '}
          <strong className="text-slate-900">{ADVISOR_INFO.name}</strong> qua số điện thoại{' '}
          <a
            href={`tel:${ADVISOR_INFO.phoneRaw}`}
            className="text-[#0072CE] font-bold hover:underline"
          >
            {ADVISOR_INFO.phone}
          </a>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#003B70] text-white hover:bg-[#00284d] transition-colors cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Quay lại menu chính</span>
          </button>

          <a
            href={`tel:${ADVISOR_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Gọi chuyên viên tư vấn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
