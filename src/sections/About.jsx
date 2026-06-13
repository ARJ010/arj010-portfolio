import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI/ML Systems",
    description:
      "Building intelligent systems using machine learning, deep learning, biosignal processing, and real-time inference workflows.",
  },

  {
    icon: Rocket,
    title: "Full-Stack Development",
    description:
      "Developing scalable applications using Django, React, databases, and modern engineering practices.",
  },

  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "Exploring benchmark replication, experimentation, and intelligent system design through research-driven implementation.",
  },

  {
    icon: Users,
    title: "Real-World Solutions",
    description:
      "Creating deployable systems that solve practical academic and organizational problems with measurable impact.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Subtle Pattern Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,58,58,0.9)_1px,transparent_1px)] bg-size-[26px_26px] opacity-[0.1]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-7 lg:pr-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground max-w-[720px] text-[2.3rem] leading-[1.08] font-bold md:text-[3.7rem]">
              Engineering intelligent systems,
              <span className="font-serif font-normal text-slate-700 italic">
                {" "}
                powered by research & innovation.
              </span>
            </h2>
            <div className="text-muted-foreground animate-fade-in animation-delay-200 max-w-[680px] space-y-5 text-[1.02rem] leading-8">
              <p>
                I’m an Integrated M.Sc. Computer Science
                (AI/ML) graduate candidate and UGC-NET
                qualified researcher focused on building
                intelligent, scalable, and real world AI
                systems.
              </p>

              <p>
                My work spans machine learning, deep
                learning, biosignal processing, and full
                stack development, combining research and
                engineering to create systems that are
                practical, efficient, and impactful.
              </p>

              <p>
                From real time EMG gesture recognition to
                workflow automation systems, I enjoy solving
                meaningful problems through AI, software
                engineering, and intelligent system design.
              </p>
            </div>

            <div className="glass border-primary/5 animate-fade-in animation-delay-300 rounded-4xl border p-6">
              <p className="text-base leading-8 font-medium text-slate-700 italic md:text-lg">
                “The best technology is not just
                intelligent. It solves real problems,
                creates meaningful impact, and quietly
                improves the way people work.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass animate-fade-in rounded-2xl p-5"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="bg-primary/10 hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <item.icon className="text-primary h-6 w-6" />
                </div>

                <h3 className="mb-2 text-base font-semibold">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
