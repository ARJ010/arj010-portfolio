import {
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";

const certificates = [
  {
    title: "TensorFlow Developer Professional Certificate",

    issuer: "DeepLearning.AI / Coursera",

    date: "2025",

    image: "/certificates/tensorflow-pro.webp",

    description:
      "Completed TensorFlow specialization covering CNNs, NLP, Time Series Forecasting, and deep learning workflows using TensorFlow 2.x.",

    technologies: [
      "TensorFlow",
      "CNNs",
      "NLP",
      "Time Series",
    ],

    credential: "UABTJPA585N8",
  },

  {
    title:
      "Mathematical Foundations for Machine Learning (Elite)",

    issuer: "NPTEL & IISc Bangalore",

    date: "2025",

    image: "/certificates/math-foundations.webp",

    description:
      "Awarded Elite certification for advanced coursework covering Linear Algebra, Probability, Optimization, and Machine Learning mathematics.",

    technologies: [
      "Linear Algebra",
      "Probability",
      "Optimization",
      "Elite",
    ],
  },

  {
    title: "Generative AI Workshop",

    issuer: "ASAP Kerala & 360DigiTMG",

    date: "2024",

    image: "/certificates/genai-workshop.webp",

    description:
      "Participated in a hands-on workshop exploring Generative AI concepts and practical applications.",

    technologies: ["GenAI", "AI Tools", "Workshop"],
  },

  {
    title: "Cloud Computing Certificate",

    issuer: "ASAP Kerala",

    date: "2024",

    image: "/certificates/cloud-computing.webp",

    description:
      "Completed foundational cloud computing concepts including cloud infrastructure, services, and distributed workflows.",

    technologies: ["Cloud", "Infrastructure", "Systems"],
  },

  {
    title: "Web Development Foundations",

    issuer: "University of Michigan",

    date: "2023",

    image: "/certificates/web-foundations.webp",

    description:
      "Completed foundational web development coursework covering HTML5, CSS3, and JavaScript.",

    technologies: ["HTML5", "CSS3", "JavaScript"],

    credential: "F26NYDE6TBYC",
  },

  {
    title: "Programming for Everybody (Python)",

    issuer: "University of Michigan",

    date: "2021",

    image: "/certificates/python.webp",

    description:
      "Built foundational programming knowledge in Python, focusing on logic building, scripting, and problem-solving.",

    technologies: ["Python", "Programming", "Logic"],

    credential: "P2XYRZ3W3F96",
  },
];

export const Certificates = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const [imageRatio, setImageRatio] = useState(1);

  const activeCertificate = certificates[activeIdx];

  // Read actual image dimensions
  useEffect(() => {
    const img = new Image();

    img.src = activeCertificate.image;

    img.onload = () => {
      setImageRatio(img.width / img.height);
    };
  }, [activeCertificate]);

  const next = useCallback(() => {
    setExpanded(false);

    setActiveIdx(
      (prev) => (prev + 1) % certificates.length
    );
  }, []);

  const previous = useCallback(() => {
    setExpanded(false);

    setActiveIdx(
      (prev) =>
        (prev - 1 + certificates.length) %
        certificates.length
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      const tag = document.activeElement?.tagName;

      const isTyping =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT";

      if (isTyping) return;

      if (e.key === "ArrowRight") {
        next();
      }

      if (e.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [next, previous]);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,58,58,0.22), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* Subtle Pattern Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,58,58,0.9)_1px,transparent_1px)] bg-size-[26px_26px] opacity-[0.1]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Verified Learning
          </span>

          <h2 className="text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Certifications &
            <span className="font-serif font-normal text-slate-700 italic">
              {" "}
              continuous learning.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Professional certifications, research
            preparation, and continuous learning across AI,
            ML, mathematics, software engineering, and cloud
            technologies.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-[#f7f2ed]/92 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl">
            {/* Glow */}
            <div
              className="pointer-events-none absolute top-[-10%] right-[-8%] h-[220px] w-[220px] rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,58,58,0.12), transparent 72%)",
                filter: "blur(60px)",
              }}
            />

            <div className="p-7 md:p-10">
              {/* CERTIFICATE */}
              <div className="flex justify-center">
                <div
                  onClick={() => setExpanded(!expanded)}
                  className="relative w-full cursor-pointer overflow-hidden rounded-4xl border border-black/5 bg-[#fffdfb] shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                  style={{
                    aspectRatio: imageRatio,

                    maxWidth:
                      imageRatio > 1 ? "780px" : "500px",
                  }}
                >
                  <img
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                    className="h-full w-full bg-[#f3ece4] object-contain select-none"
                  />
                  {/* Click Hint */}
                  <div className="absolute right-5 bottom-5 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-md">
                    {expanded
                      ? "Hide details"
                      : "Click to view details"}
                  </div>

                  {/* Watermark */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rotate-[-28deg] text-[clamp(1.2rem,3vw,2.8rem)] font-semibold tracking-[0.22em] text-black/3 uppercase">
                      ARJ010 • VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= EXPANDABLE DETAILS ================= */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  expanded
                    ? "mt-8 max-h-[900px] opacity-100"
                    : "mt-0 max-h-0 opacity-0"
                } `}
              >
                <div className="rounded-4xl border border-black/5 bg-white/70 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#8b3a3a]/10 px-4 py-2 text-sm font-medium text-[#8b3a3a]">
                    <Award className="h-4 w-4" />
                    Verified Learning
                  </div>

                  {/* Title */}
                  <h3 className="text-secondary-foreground mt-5 text-3xl leading-[1.1] font-bold md:text-4xl">
                    {activeCertificate.title}
                  </h3>

                  {/* Meta */}
                  <p className="mt-4 text-slate-500">
                    {activeCertificate.issuer}

                    <span className="mx-2">•</span>

                    {activeCertificate.date}
                  </p>

                  {/* Description */}
                  <p className="mt-6 text-lg leading-8 text-slate-700">
                    {activeCertificate.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {activeCertificate.technologies.map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-black/5 bg-[#f7f2ed] px-4 py-2 text-sm text-slate-700"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Credential */}
                  {activeCertificate.credential && (
                    <div className="mt-7 rounded-3xl border border-black/5 bg-[#f7f2ed] p-5">
                      <p className="text-sm text-slate-500">
                        Credential ID
                      </p>

                      <p className="mt-1 text-base font-medium break-all text-slate-800">
                        {activeCertificate.credential}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              className="glass hover:bg-primary/10 hover:text-primary rounded-full p-3 transition-all"
              onClick={previous}
              aria-label="Previous certificate"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setExpanded(false);

                    setActiveIdx(idx);
                  }}
                  aria-label={`Go to certificate ${idx + 1}`}
                  aria-current={idx === activeIdx ? "true" : "false"}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  } `}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="glass hover:bg-primary/10 hover:text-primary rounded-full p-3 transition-all"
              aria-label="Next certificate"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
