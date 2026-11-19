import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Marquee from "./components/Marquee/Marquee";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Background from "./components/ui/Background";
import ScrollProgress from "./components/ui/ScrollProgress";

const App = () => (
  <div className="relative isolate min-h-screen overflow-x-clip">
    <a
      href="#work"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-night"
    >
      Skip to projects
    </a>
    <Background />
    <ScrollProgress />
    <Navbar />
    <main>
      <About />
      <Marquee />
      <Experience />
      <Work />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
