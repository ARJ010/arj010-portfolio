import { Github, Linkedin, Instagram } from "lucide-react";


const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ARJ010",
    label: "GitHub",
  },

  {
    icon: Linkedin,
    href: "https://linkedin.com/in/arj010",
    label: "LinkedIn",
  },

  {
    icon: Instagram,
    href: "https://instagram.com/_sky_lvr_/",
    label: "Instagram",
  },
];

const quotes = [
  {
    text: "What I cannot create, I do not understand.",
    author: "Richard Feynman",
  },

  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
  },

  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },

  {
    text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    author: "Grace Hopper",
  },

  {
    text: "Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
  },

  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },

  {
    text: "Research is what I'm doing when I don't know what I'm doing.",
    author: "Wernher von Braun",
  },

  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },

  {
    text: "The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson",
  },

  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },

  {
    text: "The science of today is the technology of tomorrow.",
    author: "Edward Teller",
  },
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/50 relative overflow-hidden border-t bg-[#F8F4EE] py-12">
      {/* Top Accent */}
      <div className="via-primary/30 absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent to-transparent" />

      {/* Soft Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,58,58,0.18), transparent 72%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <a
              href="#"
              className="inline-flex items-center justify-center transition-transform hover:scale-[1.02] lg:justify-start"
            >
              <img
                src="/arj010-logo.svg"
                alt="ARJ010"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain md:h-12"
              />
            </a>

            <p className="text-muted-foreground mt-4 text-xs">
              © {currentYear} Abhinav Raj. All rights
              reserved.
            </p>
          </div>

          {/* CENTER QUOTE */}
          <div className="max-w-xl px-4 text-center">
            <blockquote className="font-serif text-sm leading-7 text-slate-600 italic md:text-base">
              “{randomQuote.text}”
            </blockquote>

            <p className="mt-3 text-xs tracking-[0.18em] text-slate-500 uppercase">
              — {randomQuote.author}
            </p>
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass hover:text-primary rounded-full p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
