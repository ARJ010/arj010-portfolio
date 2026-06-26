import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Journey } from "@/sections/Journey";
import { Expertise } from "@/sections/Expertise";
import { Contact } from "@/sections/Contact";
import { Certificates } from "@/sections/Certificates";
import { Footer } from "./layout/Footer";
import ClickSpark from "@/components/ClickSpark";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ClickSpark
        sparkColor="rgba(139,58,58,0.7)"
        sparkSize={12}
        sparkRadius={24}
        sparkCount={10}
        duration={500}
        easing="ease-out"
        extraScale={1.15}
      >
        <main>
          <Hero />
          <About />
          <Projects />
          <Journey />
          <Expertise />
          <Certificates />
          <Contact />
        </main>
      </ClickSpark>
      <Footer />
    </div>
  );
}

export default App;
