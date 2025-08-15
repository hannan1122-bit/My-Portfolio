import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import RotatingGlobe from "./components/RotatingGlobe";

export default function Home() {
  return (
    <div className="relative min-h-screen font-poppins">

      {/* Starry Background behind the globe */}
      <div
        className="fixed inset-0 -z-60 pointer-events-none"
        style={{
          backgroundImage: "url('/textures/stars.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Background 3D Globe */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <RotatingGlobe />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full px-4 md:px-6 pt-28 space-y-12">
        <div className="w-[96%] max-w-[88rem] mx-auto space-y-12">

          {/* Introduction Section */}
          <section
            id="introduction"
            aria-label="Introduction"
            className="py-20 rounded-lg shadow-lg bg-gradient-to-b from-red-900/60 to-black/40 border border-red-700"
          >
            <Introduction />
          </section>

          {/* Certifications Section */}
          <section
            id="certifications"
            aria-label="Certifications"
            className="py-20 rounded-lg shadow-lg bg-gradient-to-b from-red-900/60 to-black/40 border border-red-700"
          >
            <Certifications />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            aria-label="Projects"
            className="py-20 rounded-lg shadow-lg bg-gradient-to-b from-red-900/60 to-black/40 border border-red-700"
          >
            <Projects />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}
