import { useState } from "react";
import {
  GraduationCap,
  Brain,
  Microscope,
  Trophy,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { MarklistModal } from "@/components/MarklistModal";

const experiences = [
  {
    year: "2021 — 2026",
    title: "Integrated M.Sc. Computer Science (AI/ML)",

    organization:
      "Nehru Arts & Science College / Kannur University",

    description:
      "Graduated with First Class with Distinction (8.803 OGPA / 88.03%), securing a 9.004 OGPA (A+) in Core Computer Science. Specialized in Artificial Intelligence, Machine Learning, biosignal processing, and research-driven implementation.",

    technologies: [
      "First Class with Distinction",
      "8.803 OGPA",
      "AI/ML",
      "Research",
    ],

    link: "/Result/abhinav_raj_Consolidated_marklist.pdf",

    icon: GraduationCap,
    featured: false,
    current: false,
  },

  {
    year: "2023",
    title: "Checklist Management System",

    organization: "TH&Co Chartered Accountants",

    description:
      "Developed and deployed a role based workflow system for audit tracking, checklist automation, revision management, and procedural streamlining for a CA firm.",

    technologies: ["Django", "SQLite", "Industry Project"],

    icon: Briefcase,
    featured: false,
    current: false,
  },

  {
    year: "2024",
    title: "Attendance Tracking System",

    organization: "Institutional Deployment",

    description:
      "Built and deployed an attendance management platform for the Four Year UG Programme with automated attendance tracking and reporting workflows.",

    technologies: ["Django", "MySQL", "Deployment"],

    icon: Briefcase,
    featured: false,
    current: false,
  },

  {
    year: "2025",
    title: "NINAPRO DB1 Benchmark Replication",

    organization: "Research Validation",

    description:
      "Replicated the Atzori et al. NINAPRO DB1 benchmark to validate sEMG processing pipelines. Built a custom two pass numpy.memmap workflow for efficient large scale feature processing under hardware constraints.",

    technologies: [
      "Python",
      "Benchmarking",
      "numpy.memmap",
      "ML",
    ],

    icon: Microscope,
    featured: true,
    current: false,
  },

  {
    year: "2025",
    title: "MEDICERA Research Presentation",

    organization: "International Conference",

    description:
      "Presented research findings on biosignal processing and intelligent systems at MEDICERA, building upon benchmark replication work for resource efficient real time sEMG applications.",

    technologies: [
      "Research Paper",
      "Conference",
      "Biosignals",
    ],

    icon: Microscope,
    featured: true,
    current: false,
  },

  {
    year: "2026",
    title: "FrugalMyo Research",

    organization: "Academic Project",

    description:
      "Designed and developed a real time sEMG gesture recognition system using deep learning, integrating signal preprocessing, 1D CNN classification, and live inference for intelligent gesture recognition.",

    technologies: [
      "TensorFlow",
      "1D-CNN",
      "sEMG",
      "Deep Learning",
      "Streamlit",
    ],

    icon: Brain,
    featured: true,
    current: false,
  },

  {
    year: "2026",
    title: "UGC NET Qualification",

    organization: "National Eligibility Test",

    description:
      "Qualified UGC NET in Computer Science and Applications with 95.31 percentile, strengthening academic, analytical, and research foundations in AI and intelligent systems.",

    technologies: [
      "UGC-NET",
      "Computer Science",
      "Research",
    ],

    icon: Trophy,
    featured: true,
    current: true,
  },
];

export const Journey = () => {
  const [isMarklistOpen, setIsMarklistOpen] = useState(false);
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,58,58,0.18), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* Subtle Pattern Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,58,58,0.9)_1px,transparent_1px)] bg-size-[26px_26px] opacity-[0.1]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-secondary-foreground animate-fade-in text-sm font-medium tracking-wider uppercase">
            Journey
          </span>

          <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Research, deployment &
            <span className="font-serif font-normal text-slate-700 italic">
              {" "}
              growth.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of academic growth, research,
            intelligent systems, and real world
            implementation.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 overflow-hidden rounded-full md:left-1/2 md:-translate-x-1/2">
            {/* Base Line */}
            <div className="absolute inset-0 bg-[#8b3a3a]/12" />

            {/* Glow Line */}
            <div className="absolute inset-x-0 top-0 h-full bg-linear-to-b from-[#8b3a3a] via-[#8b3a3a]/60 to-transparent opacity-80" />
          </div>

          {/* ================= TIMELINE ITEMS ================= */}
          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isFeatured = exp.featured;
              return (
                <div
                  key={idx}
                  className="animate-fade-in relative grid items-start gap-8 md:grid-cols-[1fr_auto_1fr]"
                  style={{
                    animationDelay: `${idx * 120}ms`,
                  }}
                >
                  {/* LEFT SPACING */}
                  <div
                    className={
                      idx % 2 === 0 ? "hidden md:block" : ""
                    }
                  />

                  {/* ================= NODE ================= */}
                  <div className="absolute top-10 left-4 z-10 -translate-x-1/2 md:left-1/2">
                    <div
                      className={`relative flex items-center justify-center rounded-full border border-white/20 bg-[#8b3a3a] transition-all duration-500 ${
                        isFeatured
                          ? `h-12 w-12 shadow-[0_0_35px_rgba(139,58,58,0.30)]`
                          : `h-10 w-10 shadow-[0_0_20px_rgba(139,58,58,0.16)]`
                      } `}
                    >
                      <Icon
                        className={`text-white ${
                          isFeatured ? "h-6 w-6" : "h-5 w-5"
                        } `}
                      />

                      {exp.current && (
                        <span className="bg-primary/30 absolute inset-0 animate-ping rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* ================= CARD ================= */}
                  <div
                    className={`ml-14 md:ml-0 ${
                      idx % 2 === 0
                        ? "md:col-start-3"
                        : "md:col-start-1"
                    } `}
                  >
                    <div
                      className={`rounded-4xl border bg-[#f7f2ed]/92 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                        isFeatured
                          ? `border-[#8b3a3a]/10 shadow-[0_14px_45px_rgba(139,58,58,0.08)] md:scale-[1.02] `
                          : `border-white/40 shadow-[0_10px_35px_rgba(0,0,0,0.05)] `
                      } hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]`}
                    >
                      {/* YEAR */}
                      <span className="inline-flex items-center rounded-full bg-[#8b3a3a]/10 px-4 py-2 text-sm font-medium text-[#8b3a3a]">
                        {exp.year}
                      </span>

                      {/* TITLE */}
                      <h3 className="text-secondary-foreground mt-4 text-xl font-semibold md:text-2xl">
                        {exp.title}
                      </h3>

                      {/* ORGANIZATION */}
                      <p className="mt-1 font-medium text-slate-500">
                        {exp.organization}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-5 leading-8 text-slate-700">
                        {exp.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {exp.technologies.map((tech, techIdx) => {
                          if (tech === "8.803 OGPA" && exp.link) {
                            return (
                              <button
                                key={techIdx}
                                onClick={() => setIsMarklistOpen(true)}
                                className="inline-flex items-center gap-1.5 rounded-full border border-[#8b3a3a]/20 bg-[#8b3a3a]/8 hover:bg-[#8b3a3a]/15 px-4 py-2 text-sm font-semibold text-[#8b3a3a] transition-all duration-300 hover:scale-105 cursor-pointer"
                                title="Click to view consolidated marklist"
                              >
                                {tech}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </button>
                            );
                          }
                          return (
                            <span
                              key={techIdx}
                              className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-slate-700"
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MarklistModal
        isOpen={isMarklistOpen}
        onClose={() => setIsMarklistOpen(false)}
      />
    </section>
  );
};
