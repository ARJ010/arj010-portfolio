import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/Button";

import { useState } from "react";

import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abhinavmuzhakom@gmail.com",
    href: "mailto:abhinavmuzhakom@gmail.com",
  },

  {
    icon: Phone,
    label: "Phone",
    value: "+91 9074142692",
    href: "tel:+919074142692",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Kasaragod, Kerala, India",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env
        .VITE_EMAILJS_SERVICE_ID;

      const templateId = import.meta.env
        .VITE_EMAILJS_TEMPLATE_ID;

      const publicKey = import.meta.env
        .VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,

          email: formData.email,

          message: formData.message,

          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",

        message:
          "Message sent successfully. Thanks for reaching out!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setSubmitStatus({
        type: "error",

        message:
          err?.text ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-x-hidden py-32"
    >
      {/* BG GLOW */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div
          className="absolute top-1/4 left-1/4 h-[260px] w-[260px] rounded-full opacity-30 blur-[110px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,58,58,0.12), transparent 72%)",
          }}
        />

        {/* Subtle Pattern Texture */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,58,58,0.9)_1px,transparent_1px)] bg-size-[26px_26px] opacity-[0.1]" />

        <div
          className="absolute right-1/4 bottom-1/4 h-[380px] w-[380px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,166,107,0.10), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Let’s build
            <span className="font-serif font-normal text-slate-700 italic">
              {" "}
              something meaningful.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Interested in AI, Machine Learning, research
            collaboration, or full-stack development? Let’s
            connect and discuss ideas, opportunities, or
            impactful projects.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-8 px-1 lg:grid-cols-2">
          {/* ================= FORM ================= */}
          <div className="w-full min-w-0 rounded-[2.2rem] border border-[#8b3a3a]/8 bg-[#f7f2ed]/92 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-3 md:p-8">
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      name: e.target.value,
                    })
                  }
                  className="box-border w-full min-w-0 rounded-2xl border border-black/5 bg-white/70 px-5 py-4 transition-all duration-300 outline-none hover:border-[#8b3a3a]/10 focus:border-[#8b3a3a]/20 focus:ring-4 focus:ring-[#8b3a3a]/10"
                />
              </div>
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      email: e.target.value,
                    })
                  }
                  className="box-border w-full min-w-0 rounded-2xl border border-black/5 bg-white/70 px-5 py-4 transition-all duration-300 outline-none focus:border-[#8b3a3a]/20 focus:ring-4 focus:ring-[#8b3a3a]/10"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project, collaboration, or idea..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      message: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-2xl border border-black/5 bg-white/70 px-5 py-4 transition-all duration-300 outline-none focus:border-[#8b3a3a]/20 focus:ring-4 focus:ring-[#8b3a3a]/10"
                />
              </div>

              {/* BUTTON */}
              <Button
                className="h-[58px] w-full rounded-2xl text-base"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Let's Connect
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {/* STATUS */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 rounded-2xl p-4 ${
                    submitStatus.type === "success"
                      ? "border border-green-500/20 bg-green-500/10 text-green-600"
                      : "border border-red-500/20 bg-red-500/10 text-red-500"
                  } `}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0" />
                  )}

                  <p className="text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">
            {/* CONTACT INFO */}
            <div className="rounded-[2.2rem] border border-[#8b3a3a]/8 bg-[#f7f2ed]/92 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) =>
                  item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-white/50"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b3a3a]/10 transition-all duration-300 group-hover:scale-105">
                        <item.icon className="h-5 w-5 text-[#8b3a3a]" />
                      </div>

                      <div>
                        <div className="text-sm text-slate-500">
                          {item.label}
                        </div>

                        <div className="font-medium wrap-break-word text-slate-800">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-2xl p-4"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b3a3a]/10">
                        <item.icon className="h-5 w-5 text-[#8b3a3a]" />
                      </div>

                      <div>
                        <div className="text-sm text-slate-500">
                          {item.label}
                        </div>

                        <div className="font-medium wrap-break-word text-slate-800">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="rounded-4xl bg-[#8b3a3a] p-3 text-white shadow-[0_10px_35px_rgba(139,58,58,0.25)] md:p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                <span className="font-medium">
                  Available for Opportunities
                </span>
              </div>

              <p className="leading-8 text-white/85">
                Open to AI/ML engineering, research,
                intelligent systems, full stack development,
                internships, and impactful collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
