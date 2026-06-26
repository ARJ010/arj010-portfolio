import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// import later
import { ProjectModal } from "@/components/ProjectModal";

const projects = [
  {
    title: "FrugalMyo",

    shortDescription: "Real-time sEMG gesture recognition",

    description:
      "FrugalMyo is a real-time sEMG gesture recognition system developed for intelligent hand gesture classification using deep learning and biosignal processing.",

    image: "/projects/frugalmyo.gif",

    video: "",
    short_video: "/projects/frugalmyo.mp4",

    certificate: "/certificates/frugalmyo-certificate.webp",
    orientation: "landscape",

    github: "",

    type: "Research Project",
    year: "2026",
    status: "Completed",

    tags: [
      "TensorFlow",
      "Python",
      "1D-CNN",
      "Streamlit",
      "sEMG",
    ],

    overview:
      "Developed a real-time biosignal recognition system for intelligent hand gesture classification using deep learning and custom signal preprocessing workflows.",

    keyContributions: [
      "Designed and implemented the full sEMG acquisition pipeline",
      "Developed preprocessing workflows for biosignal stabilization",
      "Built a 1D-CNN deep learning model for gesture classification",
      "Integrated real-time inference for live gesture prediction",
      "Created an interactive dashboard for testing and monitoring",
    ],
  },

  {
    title: "NINAPRO DB1 Benchmark Replication",

    shortDescription: "Research benchmark validation",

    description:
      "Replication of the foundational Atzori et al. benchmark on the NINAPRO DB1 dataset, validating sEMG pipelines and optimizing real-time prosthetic control workflows.",

    image: "/projects/ninapro.gif",

    video: "",
    short_video: "/projects/ninapro.mp4",

    certificate: "/certificates/ninapro-certificate.webp",
    orientation: "landscape",

    github:
      "https://github.com/ARJ010/ninapro-db1-benchmark-replication",

    type: "Research Replication",
    year: "2025",
    status: "Completed",

    tags: [
      "Python",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "ML",
    ],

    overview:
      "Replicated the foundational NINAPRO DB1 benchmark to validate biosignal classification pipelines and improve reproducibility.",

    keyContributions: [
      "Replicated Atzori et al. benchmark workflow",
      "Validated preprocessing and feature extraction pipelines",
      "Optimized classification performance for reproducibility",
      "Benchmarked results against published research outcomes",
      "Strengthened real-time prosthetic-control research workflow",
    ],
  },

  {
    title: "Attendance Tracking System",

    shortDescription: "Institutional attendance platform",

    description:
      "An institutional attendance management platform deployed for the Four-Year UG Programme, featuring automated reporting and instructor-friendly workflows.",

    image: "/projects/ats.gif",

    video: "",
    short_video: "/projects/ats.mp4",

    certificate: "/certificates/ats-certificate.webp",
    orientation: "landscape",

    github:
      "https://github.com/ARJ010/Attendance_Tracking_System",

    type: "Institutional Software",
    year: "2024",
    status: "Deployed",

    tags: ["Django", "MySQL", "Bootstrap", "Python"],

    overview:
      "Built an attendance management system for institutional use with automated reporting and academic workflow support.",

    keyContributions: [
      "Built instructor-friendly attendance workflows",
      "Implemented automated attendance reporting",
      "Designed database architecture for academic records",
      "Improved usability for Four-Year UG Programme operations",
      "Developed scalable backend using Django and MySQL",
    ],
  },

  {
    title: "Checklist Management System",

    shortDescription: "Audit workflow automation",

    description:
      "A role-based workflow management system developed for TH&Co Chartered Accountants, enabling audit tracking, automation, and revision management.",

    image: "/projects/cms.gif",

    video: "",
    short_video: "/projects/cms.mp4",

    certificate: "/certificates/cms-certificate.webp",
    orientation: "landscape",

    github: "https://github.com/ARJ010/checklist_app",

    type: "Industry Project",
    year: "2023",
    status: "Deployed",

    tags: ["Django", "SQLite", "JavaScript", "HTML/CSS"],

    overview:
      "Developed a role-based checklist workflow system for audit and compliance tracking.",

    keyContributions: [
      "Developed role-based access and permissions",
      "Implemented audit workflow tracking system",
      "Built revision and checklist management features",
      "Automated operational audit processes",
      "Delivered a deployable solution for real organizational use",
    ],
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const INITIAL_PROJECTS_COUNT = 4;

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS_COUNT);
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* ================= BG ================= */}

      {/* Soft Maroon Glow */}
      <div
        className="pointer-events-none absolute top-[10%] right-[-10%] h-[700px] w-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(139,58,58,0.08), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* Subtle Pattern Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,58,58,0.9)_1px,transparent_1px)] bg-size-[26px_26px] opacity-[0.1]" />

      {/* Soft Gold Accent */}
      <div
        className="pointer-events-none absolute bottom-[0%] left-[-10%] h-[500px] w-[500px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(201,166,107,0.06), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-secondary-foreground animate-fade-in text-sm font-medium tracking-[0.18em] uppercase">
            Selected Projects
          </span>

          <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground mt-4 mb-6 text-[2.5rem] leading-[1.08] font-bold md:text-[4rem]">
            Real systems,
            <span className="font-serif font-normal text-slate-700 italic">
              {" "}
              built for impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 mx-auto max-w-[680px] leading-8">
            A selection of AI, machine learning, and
            software systems built across research,
            automation, and institutional deployment,
            focused on solving meaningful real-world
            problems.
          </p>
        </div>

        {/* ================= PROJECTS ================= */}
        <div className="grid gap-8 md:grid-cols-2">
          {visibleProjects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group glass animate-fade-in min-h-[560px] cursor-pointer overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* IMAGE */}
              <div className="bg-secondary relative aspect-video overflow-hidden">
                {project.short_video ? (
                  <video
                    src={project.short_video}
                    preload="metadata"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-900 group-hover:scale-[1.04]"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-900 group-hover:scale-[1.04]"
                  />
                )}

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                    linear-gradient(
                      to top,
                      rgba(20,16,16,0.22) 0%,
                      rgba(139,58,58,0.08) 22%,
                      rgba(139,58,58,0.04) 38%,
                      transparent 72%
                    )
                  `,
                  }}
                />

                {/* Click Hint */}
                <div className="glass text-foreground absolute right-4 bottom-4 rounded-full border border-white/10 px-4 py-2 text-xs font-medium">
                  View Details
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-secondary-foreground text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-primary mt-1 text-sm">
                      {project.shortDescription}
                    </p>
                  </div>

                  <ArrowUpRight className="text-muted-foreground mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="text-muted-foreground text-sm leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-surface border-border/50 text-muted-foreground rounded-full border px-4 py-1.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ================= CTA ================= */}
        {projects.length > INITIAL_PROJECTS_COUNT && (
          <div className="animate-fade-in animation-delay-500 mt-14 text-center">
            <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
              {showAll
                ? "Show Less"
                : "Explore More Work"}

              <ArrowUpRight className="h-5 w-5" />
            </AnimatedBorderButton>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
