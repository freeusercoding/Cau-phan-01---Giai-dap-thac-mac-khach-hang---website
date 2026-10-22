import React from 'react';
import { KeyRound, CreditCard, ShieldCheck, ReceiptText, CalendarClock, ArrowRight, Play } from 'lucide-react';
import { GuideTopic } from '../data/guidesData';

interface GuideCardProps {
  guide: GuideTopic;
  onSelect: (guide: GuideTopic) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({ guide, onSelect }) => {
  const getIcon = () => {
    switch (guide.id) {
      case 'quen-mat-khau-ipay':
        return <KeyRound className="w-6 h-6 text-[#0072CE]" />;
      case 'dong-the':
        return <CreditCard className="w-6 h-6 text-[#0072CE]" />;
      case 'cap-nhat-sinh-trac-hoc':
        return <ShieldCheck className="w-6 h-6 text-[#0072CE]" />;
      case 'nop-thue-dien-tu':
        return <ReceiptText className="w-6 h-6 text-[#0072CE]" />;
      case 'dat-lich-giao-dich':
        return <CalendarClock className="w-6 h-6 text-[#0072CE]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0072CE]" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(guide)}
      className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 hover:border-[#0072CE]/60 hover:shadow-lg transition-all duration-200 p-6 text-left cursor-pointer overflow-hidden"
    >
      <div>
        {/* Unboxed clean metadata line */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-400 font-semibold">{guide.orderNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{guide.badge}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{guide.steps.length} bước</span>
          </div>
          {guide.videoUrl && (
            <div className="flex items-center gap-1 text-red-600 font-medium">
              <Play className="w-3.5 h-3.5 fill-red-600" />
              <span>Có video</span>
            </div>
          )}
        </div>

        {/* Card Header & Icon */}
        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#003B70] group-hover:text-white transition-colors duration-200">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#003B70] transition-colors leading-snug">
              {guide.title}
            </h3>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
          {guide.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Hình ảnh minh họa từng bước
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0072CE] group-hover:text-[#003B70] group-hover:translate-x-0.5 transition-all">
          <span>Xem chi tiết</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
