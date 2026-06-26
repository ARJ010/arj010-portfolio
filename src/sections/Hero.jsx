import { Button } from "@/components/Button";
import ShapeGrid from "@/components/ShapeGrid";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/ARJ010",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/arj010",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/_sky_lvr_/",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F4EE] pb-16 lg:pb-8">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Watercolor Texture */}
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src="/watercolor-bg.webp"
            alt="A watercolor image of a garden Background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-[0.18]">
          <ShapeGrid
            direction="diagonal"
            speed={0.3}
            squareSize={52}
            borderColor="rgba(139,58,58,0.14)"
            hoverFillColor="rgba(139,58,58,0.18)"
            shape="square"
            hoverTrailAmount={2}
            className="h-full w-full"
          />
        </div>
      </div>
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid min-h-[82vh] translate-y-18 content-center items-center pt-16 md:pt-18 lg:min-h-[88vh] lg:grid-cols-[1fr_1.05fr] lg:pt-2">
          {/* ================= LEFT ================= */}
          <div className="order-1 w-full max-w-[720px] space-y-5">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                AI/ML Engineer • UGC-NET Qualified
              </span>
            </div>

            {/* TEXT */}
            <div className="animate-fade-in animation-delay-100 mt-8">
              <p className="mb-4 text-base text-slate-500 sm:text-lg">
                Hello, I'm
              </p>

              <h1
                className="leading-[0.92] font-black tracking-[-0.055em] text-[#1A1C24] lg:tracking-[-0.065em]"
                style={{
                  fontSize: "clamp(2.5rem, 5.8vw, 6.4rem)",
                }}
              >
                ABHINAV RAJ
              </h1>

              <div className="mt-4 text-[1.4rem] leading-tight font-medium text-slate-700 sm:text-[1.8rem] md:text-[2rem] lg:text-[2.15rem] xl:text-[2.8rem]">
                Building Intelligent Systems &
                <br />
                <span className="text-primary glow-text">
                  Scalable Applications
                </span>
              </div>

              <p className="mt-6 max-w-[650px] text-[0.95rem] leading-7 text-slate-600 sm:text-[1rem] md:text-[1.05rem]">
                Integrated M.Sc. Computer Science (AI/ML)
                First Class with Distinction graduate and UGC-NET qualified
                researcher focused on building intelligent,
                real-time AI systems and scalable
                applications using TensorFlow, PyTorch,
                Django, and modern machine learning
                workflows.
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-in animation-delay-200 mt-10 flex flex-wrap gap-4">
              {/* VIEW PROJECTS */}
              <Button
                size="lg"
                className="shadow-primary/20 shadow-lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                View Projects
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>

              {/* RESUME */}
              <a
                href="/resume/Abhinav_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <AnimatedBorderButton className="h-13 px-7">
                  <Download className="h-5 w-5" />
                  Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="animate-fade-in animation-delay-300 mt-8 flex items-center gap-4">
              <span className="text-sm text-slate-500">
                Connect:
              </span>

              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-full p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
                >
                  <social.icon className="h-5 w-5 text-slate-700" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative order-2 flex min-h-[420px] items-end justify-center overflow-visible sm:min-h-[520px] md:min-h-[700px] md:translate-y-0 lg:min-h-[720px] lg:translate-x-6 lg:translate-y-4 lg:justify-end xl:min-h-[760px]">
            {/* LOWER BODY GLOW */}
            <div
              className="absolute bottom-[4%] left-1/2 h-40 w-60 -translate-x-1/2 rounded-full opacity-55 blur-[90px] sm:h-[220px] sm:w-[320px] md:h-[260px] md:w-[420px] lg:h-80 lg:w-[520px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(139,58,58,0.18) 0%, rgba(139,58,58,0.10) 40%, rgba(80,50,40,0.04) 60%, transparent 78%)",
              }}
            />

            {/* SOFT CONTACT SHADOW */}
            <div
              className="absolute bottom-[2%] left-1/2 z-1 h-[22px] w-[180px] -translate-x-1/2 rounded-full opacity-15 blur-[20px] sm:h-7 sm:w-[220px] md:h-8 md:w-[260px] lg:h-[38px] lg:w-[320px]"
              style={{
                background: "rgba(20,15,15,0.35)",
              }}
            />

            {/* Portrait Halo */}
            <div
              className="absolute top-[18%] left-1/2 h-80 w-[280px] -translate-x-1/2 rounded-full opacity-40 blur-[90px] md:h-[460px] md:w-[360px] lg:h-[520px] lg:w-[420px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,245,230,0.55), rgba(166,72,72,0.06), transparent 72%)",
              }}
            />

            <img
              src="/profile.webp"
              fetchPriority="high"
              decoding="async"
              alt="Abhinav Raj"
              className="pointer-events-none relative z-10 h-auto max-h-[460px] w-auto self-end object-contain object-bottom drop-shadow-[0_45px_70px_rgba(0,0,0,0.20)] transition-all duration-500 select-none sm:max-h-[560px] md:max-h-[660px] md:translate-y-6 lg:max-h-[720px] lg:translate-y-0 xl:max-h-[760px]"
            />
          </div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}
      <div className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 lg:block">
        <a
          href="#about"
          className="hover:text-primary flex flex-col items-center gap-2 text-slate-500 transition-all duration-300 hover:-translate-y-1"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Scroll
          </span>

          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
