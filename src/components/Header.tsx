import React, { useState } from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import { ADVISOR_INFO } from '../data/guidesData';

interface HeaderProps {
  onGoHome: () => void;
  onSelectTopic?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Zone */}
          <div className="flex items-center gap-4 shrink-0 cursor-pointer" onClick={onGoHome}>
            {!logoError ? (
              <img
                src="https://raw.githubusercontent.com/giadinhbanker/anh-super-app-bac-phu-tho/main/Logo%20VietinBank.png"
                alt="VietinBank Logo"
                className="h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-10 px-3 bg-[#003B70] text-white flex items-center justify-center font-bold text-lg rounded tracking-wider">
                VietinBank
              </div>
            )}
            <div className="hidden sm:block border-l border-slate-300 pl-4">
              <span className="text-sm font-bold text-[#003B70] tracking-wide block">
                iPay Hướng Dẫn & Giải Đáp
              </span>
              <span className="text-xs text-slate-500">
                Chuyên viên tư vấn: {ADVISOR_INFO.name}
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={onGoHome}
              className="hover:text-[#003B70] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Trang chủ
            </button>
            <a
              href="#danh-sach-huong-dan"
              className="hover:text-[#003B70] transition-colors whitespace-nowrap shrink-0"
            >
              Danh sách hướng dẫn
            </a>
            <a
              href="#video-huong-dan"
              className="hover:text-[#003B70] transition-colors whitespace-nowrap shrink-0"
            >
              Video YouTube
            </a>
            <a
              href="#chuyen-vien-tu-van"
              className="hover:text-[#003B70] transition-colors whitespace-nowrap shrink-0"
            >
              Hỗ trợ trực tiếp
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${ADVISOR_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#003B70] hover:bg-[#00284d] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
              title="Gọi trực tiếp chuyên viên tư vấn"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Hotline: {ADVISOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
