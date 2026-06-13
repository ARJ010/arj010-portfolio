import { useEffect } from "react";
import { X, Github, ArrowUpRight } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  // ESC close
  useEffect(() => {
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
  }, [onClose]);

  return (
    <div
      className="animate-in fade-in fixed inset-0 z-999 flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-md duration-300"
      onClick={onClose}
    >
      {/* ================= MODAL ================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-in zoom-in-95 relative max-h-[92vh] w-full max-w-6xl overflow-x-hidden overflow-y-auto rounded-4xl border border-[#ffffff40] bg-[#f6f1eb]/96 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl duration-300"
      >
        {/* ================= BG GLOWS ================= */}

        <div
          className="pointer-events-none absolute top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,58,58,0.18), transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-[-5%] left-[-5%] h-80 w-[320px] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,166,107,0.18), transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* ================= CLOSE ================= */}
        <button
          onClick={onClose}
          className="sticky top-5 z-50 ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/80 shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <X className="h-5 w-5 text-slate-700" />
        </button>

        <div className="overflow-x-hidden px-6 pt-8 pb-8 md:px-10">
          {/* ================= VIDEO ================= */}
          {project.video && (
            <div className="relative aspect-video overflow-hidden rounded-4xl bg-[#e8dfd5] shadow-lg">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* ================= HEADER ================= */}
          <div className="mt-6 gap-7 lg:grid lg:grid-cols-[1fr_auto]">
            {/* LEFT */}
            <div className="max-w-4xl">
              <h2 className="text-secondary-foreground text-4xl leading-[1.05] font-bold wrap-break-word md:text-5xl">
                {project.title}
              </h2>

              <p className="text-primary mt-3 text-lg font-medium">
                {project.shortDescription}
              </p>

              {/* META */}
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-slate-700">
                  {project.type}
                </span>

                <span className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-slate-700">
                  {project.year}
                </span>

                <span className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-green-700">
                  {project.status}
                </span>
              </div>

              {/* ================= TECH STATS ================= */}
              {project.techStats && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.techStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/40 bg-[#f7f2ed]/92 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_6px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* GITHUB */}
            {project.github && (
              <div className="h-fit shrink-0 lg:sticky lg:top-20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#8b3a3a] px-6 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#783232] hover:shadow-xl"
                >
                  <Github className="h-5 w-5" />

                  <span>View on GitHub</span>

                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            )}
          </div>

          {/* ================= PROJECT DESCRIPTION ================= */}
          <div className="mt-8">
            <div className="rounded-4xl border border-white/40 bg-[#f7f2ed]/92 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Project Overview
              </h3>

              <div className="space-y-4 leading-8 text-slate-700">
                <p>{project.overview}</p>

                {project.keyContributions && (
                  <ul className="space-y-2 pt-1">
                    {project.keyContributions.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3"
                        >
                          <span className="text-primary mt-0.5">
                            •
                          </span>

                          {item}
                        </li>
                      )
                    )}
                  </ul>
                )}

                <div className="pt-3">
                  <span className="font-semibold text-slate-900">
                    Tech Stack:
                  </span>{" "}
                  {project.tags.join(", ")}
                </div>
              </div>
            </div>
          </div>

          {/* ================= CERTIFICATE ================= */}
          {project.certificate && (
            <div className="mt-8">
              <h3 className="mb-5 text-xl font-semibold text-slate-900">
                Documentation & Validation
              </h3>

              <div className="flex justify-center">
                <div
                  onContextMenu={(e) => e.preventDefault()}
                  className={`relative w-full overflow-hidden rounded-4xl border border-black/5 bg-[#fffdfb] shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:scale-[1.01] ${
                    project.orientation === "landscape"
                      ? "max-w-[780px]"
                      : "max-w-[620px]"
                  } `}
                >
                  {/* Certificate */}
                  <img
                    src={project.certificate}
                    alt="certificate"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="pointer-events-none h-full w-full bg-[#f3ece4] object-contain select-none"
                  />

                  {/* Soft watermark */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rotate-[-28deg] text-[clamp(1.5rem,4vw,3rem)] font-semibold tracking-[0.2em] text-black/[0.035] uppercase select-none">
                      Portfolio Preview
                    </span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 backdrop-blur-md">
                    Verification Preview
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
