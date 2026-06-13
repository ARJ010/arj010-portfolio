import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#expertise", label: "Expertise" },
  { href: "#certifications", label: "Certificates" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? "hidden"
      : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/20 bg-white/60 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src="/arj010-logo.svg"
              alt="ARJ010"
              loading="lazy"
              decoding="async"
              className="h-9 w-auto object-contain select-none xl:h-11"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 xl:flex">
            <div className="glass flex items-center gap-0.5 rounded-full px-2 py-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-3 py-2 text-[13px] transition-all duration-300 xl:px-4 xl:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button
              size="sm"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="shadow-primary/10 shadow-md"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="hover:bg-surface rounded-lg p-2 transition-colors xl:hidden"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 xl:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`glass-strong absolute top-20 right-4 left-4 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 p-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-xl px-4 py-4 text-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <Button
                className="w-full"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });

                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
