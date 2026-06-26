import { useEffect } from "react";
import { X } from "lucide-react";

export const MarklistModal = ({ isOpen, onClose }) => {
  // ESC close
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-[1000] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-md duration-300"
      onClick={onClose}
    >
      {/* ================= MODAL ================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-in zoom-in-95 relative flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-4xl border border-[#ffffff40] bg-[#f6f1eb]/96 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl duration-300"
      >
        {/* ================= CLOSE ================= */}
        <div className="flex items-center justify-between border-b border-black/5 bg-[#f6f1eb]/80 px-6 py-4 backdrop-blur-md">
          <h2 className="text-xl font-bold text-slate-800">
            Consolidated Marklist
          </h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {/* ================= SCROLLABLE IMAGES ================= */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 space-y-8 bg-[#f6f1eb]/50">
          <p className="text-sm text-slate-500 text-center italic mb-4">
            Scroll down to view all 4 pages. Right-click and downloading are disabled for privacy and verification integrity.
          </p>

          {[1, 2, 3, 4].map((page) => (
            <div
              key={page}
              onContextMenu={(e) => e.preventDefault()}
              className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-[1.005]"
            >
              <img
                src={`/Result/marklist_page-${page}.webp`}
                alt={`Consolidated Marklist - Page ${page}`}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="pointer-events-none w-full h-auto bg-[#f3ece4] object-contain select-none"
              />

              {/* Watermark */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rotate-[-28deg] text-[clamp(1.2rem,3vw,2.5rem)] font-semibold tracking-[0.22em] text-black/[0.025] uppercase select-none">
                  ARJ010 • VERIFIED PREVIEW
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
