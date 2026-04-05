import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Code2, 
  ExternalLink, 
  Github, 
  Cpu 
} from "lucide-react";

type Tab = "home" | "skills-projects";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const skills = [
    "HTML", "CSS", "JavaScript", "Git", "C++", "Laravel", "PHP"
  ];

  const projects = [
    {
      title: "Hungry Girl",
      description: "A fun game built with Code.org Game Lab. My goal is to make games for people to have fun.",
      tech: ["Game Lab", "JavaScript"],
      link: "https://studio.code.org/projects/gamelab/_VzNdKg5zhKTe3APAQI9kCiCUMAdFHahIAuwH91VXuU"
    },
    {
      title: "Rcycle App",
      description: "An interactive game project hosted on CoCrea World. Built to provide a fun experience for players.",
      tech: ["CoCrea", "JavaScript"],
      link: "https://www.cocrea.world/gandi/project/2018169072953430017?inviteToken=oOxCeqY1"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Portfolio.</span>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "home" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("skills-projects")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "skills-projects" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
              }`}
            >
              Skills & Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Hero / About */}
              <section id="about" className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0 border border-gray-200 shadow-sm">
                    <img 
                      src="/1773924404936.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-gray-500">
                      <User size={18} />
                      <span className="text-xs uppercase tracking-widest font-semibold">About Me</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                      I build digital experiences that are <span className="text-gray-400">clean, functional, and fast.</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      I'm Melinda, an undergraduate student at SMA Catholic Frateran Surabaya. My goal is to make games for people to have fun.
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="skills-projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Skills */}
              <section id="skills" className="space-y-8">
                <div className="flex items-center gap-3 text-gray-500">
                  <Cpu size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section id="projects" className="space-y-8">
                <div className="flex items-center gap-3 text-gray-500">
                  <Code2 size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Projects</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="group p-6 bg-white border border-gray-200 rounded-2xl space-y-4 hover:shadow-xl hover:shadow-gray-200/50 transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-xl group-hover:text-gray-600 transition-colors">{project.title}</h3>
                        <a href={project.link} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold">Let's connect.</p>
            <p className="text-sm text-gray-500">Open for new opportunities and collaborations.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/melinda23-mr" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 hover:bg-black hover:text-white rounded-full transition-all">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-6 border-t border-gray-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
            © 2026 Personal Portfolio • Built with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}
