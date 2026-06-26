import {
  Brain,
  Code2,
  Microscope,
  Wrench,
} from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    featured: true,
    description:
      "Designing intelligent systems using machine learning, deep learning, biosignal processing, and real time inference for practical applications.",

    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Deep Learning",
      "Signal Processing",
      "Computer Vision",
      "Feature Engineering",
      "1D-CNN",
    ],
  },

  {
    icon: Microscope,
    title: "Research & Engineering",
    featured: true,
    description:
      "Conducting benchmark replication, experimentation, and intelligent system research with focus on reproducibility and real world deployment.",

    technologies: [
      "Research Implementation",
      "Benchmark Replication",
      "Model Evaluation",
      "Experimentation",
      "Real-Time Systems",
      "Data Processing",
    ],
  },

  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing scalable web applications and backend systems with strong emphasis on usability and performance.",

    technologies: [
      "Django",
      "React",
      "JavaScript",
      "Python",
      "MySQL",
      "SQLite",
      "REST APIs",
      "GitHub",
    ],
  },

  {
    icon: Wrench,
    title: "Tools & Workflow",
    description:
      "Using modern tools for development, experimentation, versioning, and deployment workflows.",

    technologies: [
      "Git",
      "VS Code",
      "Jupyter",
      "Streamlit",
      "Google Colab",
      "Linux",
      "Figma",
      "Deployment",
    ],
  },
];

export const Expertise = () => {
  return (
    <section
      id="expertise"
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
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-secondary-foreground animate-fade-in text-sm font-medium tracking-wider uppercase">
            Technical Expertise
          </span>

          <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Tools, technologies &
            <span className="font-serif font-normal text-slate-700 italic">
              {" "}
              research capability.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A blend of AI/ML research, intelligent systems,
            full-stack development, and real-world
            implementation.
          </p>
        </div>

        {/* ================= EXPERTISE GRID ================= */}
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
          {expertise.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`group animate-fade-in relative overflow-hidden rounded-4xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                  item.featured
                    ? `border border-[#8b3a3a]/10 bg-[#f7f2ed]/95 shadow-[0_16px_45px_rgba(139,58,58,0.08)] md:scale-[1.015] hover:md:scale-[1.025] `
                    : `border border-white/40 bg-[#f7f2ed]/92 shadow-[0_10px_35px_rgba(0,0,0,0.05)] `
                } p-5 sm:p-7 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Soft Glow */}
                <div
                  className="pointer-events-none absolute top-[-20%] right-[-10%] h-[180px] w-[180px] rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,58,58,0.10), transparent 72%)",
                    filter: "blur(50px)",
                  }}
                />

                {/* ICON */}
                <div
                  className={`mb-5 flex items-center justify-center rounded-2xl border border-[#8b3a3a]/10 transition-all duration-300 group-hover:scale-105 ${
                    item.featured
                      ? `h-16 w-16 bg-[#8b3a3a]/14 shadow-[0_0_25px_rgba(139,58,58,0.10)]`
                      : `h-14 w-14 bg-[#8b3a3a]/10`
                  } `}
                >
                  <Icon className="h-7 w-7 text-[#8b3a3a]" />
                </div>

                {/* TITLE */}
                <h3 className="text-secondary-foreground text-2xl font-semibold">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-8 text-slate-700">
                  {item.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {item.technologies.map(
                    (tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm text-slate-700 transition-all duration-300 hover:border-[#8b3a3a]/20 hover:text-[#8b3a3a]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
