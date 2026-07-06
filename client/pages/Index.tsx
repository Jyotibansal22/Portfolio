import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

// Typewriter hook
function useTypewriter(text: string, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return { displayed, done };
}

// Floating particles component — particle data is stable (useMemo) to avoid re-randomization on re-render
function Particles() {
  const shouldReduce = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
      })),
    []
  );

  if (shouldReduce) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -24, -10, 0],
            x: [0, 10, -8, 0],
            opacity: [0.4, 1, 0.7, 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Stagger container variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Index() {
  const { displayed, done } = useTypewriter("jyoti.exe");

  const projects = [
    {
      title: "IntervAI",
      subtitle: "AI-Powered Mock Interview Platform",
      description:
        "Full-stack web application with speech-to-text integration, NLP-based feedback generation, and performance analytics",
      highlights: [
        "React + Python backend",
        "Speech-to-text APIs",
        "Real-time interview interactions",
        "NLP-based feedback",
      ],
      link: "https://intervai-0q3y.onrender.com/features",
    },
    {
      title: "BandMate",
      subtitle: "AI-Powered IELTS Preparation",
      description:
        "Intelligent IELTS writing assessment tool with ML-powered scoring based on official grading criteria",
      highlights: [
        "ML model for essay scoring",
        "Grammar & vocabulary analysis",
        "Responsive React frontend",
        "Color-coded feedback",
      ],
      link: "https://bandmate-3obs.onrender.com/",
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "SQL", "JavaScript"],
    "Web Technologies": ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
    Databases: ["MySQL", "PostgreSQL"],
    Tools: ["Git", "GitHub", "VS Code"],
    Concepts: ["OOP", "DBMS", "Operating Systems", "Computer Networks"],
  };

  const certificates = [
    {
      title: "Samsung Innovation Campus – Artificial Intelligence",
      subtitle: "Course of Samsung Innovation Campus",
      date: "Jun 2026",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2Fd788588c98644f5da0b88cf943a49a85?format=webp&width=800&height=1200",
      link: "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2Fd788588c98644f5da0b88cf943a49a85?format=webp&width=800&height=1200",
      points: [
        "Learning Machine Learning, Neural Networks & AI fundamentals",
        "Working on real-world AI-based project",
        "Hands-on training in Python for AI & data preprocessing",
      ],
    },
    {
      title: "Certificate of Merit - Naukri Campus Young Turks 2025",
      subtitle: "99.39 Percentile | India's Largest Skill Contest",
      date: "Sep 2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2Fdb67e95bd1a75a8ee9b3b9f1e95b2ca2?format=webp&width=800&height=600",
      link: "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2Fdb67e95bd1a75a8ee9b3b9f1e95b2ca2?format=webp&width=800&height=600",
      points: [
        "Achieved 99.39 percentile score in a national skill contest",
        "Recognized by leading industry experts",
        "Over 5 lakh participants competed",
      ],
    },
    {
      title: "Web Development Training Certificate",
      subtitle: "Acmegrade & IIT Bombay (Mood Indigo)",
      date: "Aug 2024",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2F7e783f219b89443299288798956bac7a?format=webp&width=800&height=1200",
      link: "https://cdn.builder.io/api/v1/image/assets%2Fce69bf5194c64448b9ef4aaaf94dc416%2F7e783f219b89443299288798956bac7a?format=webp&width=800&height=1200",
      points: [
        "Completed comprehensive web development training",
        "Hands-on experience with modern frameworks",
        "Proven competency with dedicated learning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-grotesk">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b-2 border-primary/30 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1
              className="text-2xl font-bold text-primary font-syne uppercase tracking-wider animate-neon-glow"
              whileHover={{ scale: 1.05 }}
            >
              &gt; JYOTI
            </motion.h1>
            <div className="flex items-center gap-8">
              {["_PROJECTS", "_SKILLS", "_CONTACT"].map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.replace("_", "").toLowerCase()}`}
                  className="text-gray-600 hover:text-primary transition font-syne uppercase text-sm tracking-wide hover:shadow-lg hover:shadow-primary/40 px-4 py-2 rounded-lg hover:bg-primary/5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * (i + 1), duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-32 min-h-screen flex items-center">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        <Particles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, x: -40, skewX: "10deg" }}
              animate={{ opacity: 1, x: 0, skewX: "0deg" }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold font-syne border border-primary/50 uppercase tracking-widest">
                &gt; FULL_STACK_DEVELOPER &amp; AI_ENTHUSIAST
              </span>
            </motion.div>

            {/* Typewriter hero title */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white font-syne uppercase tracking-tight animate-neon-glow">
                {displayed}
                <motion.span
                  className="inline-block w-1 h-14 md:h-16 bg-primary ml-1 align-middle"
                  animate={{ opacity: done ? [1, 0, 1] : 1 }}
                  transition={{ duration: 1, repeat: done ? Infinity : 0, repeatType: "loop" }}
                />
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-grotesk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              &gt; Building intelligent web applications with React, Python, and
              modern AI technologies. Full-stack development &amp; machine learning.
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                {
                  label: "&gt; EXECUTE_PROJECTS",
                  href: "#projects",
                  primary: true,
                },
                {
                  label: "&gt; CONNECT_LINKEDIN",
                  href: "https://linkedin.com/in/jyoti-bansal01/",
                  primary: false,
                },
              ].map(({ label, href, primary }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`px-8 py-3 rounded-lg font-semibold font-syne uppercase tracking-wide transition-all duration-300 ${
                    primary
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl hover:shadow-primary/50"
                      : "border-2 border-primary text-primary bg-primary/10 hover:bg-primary/20 hover:shadow-2xl hover:shadow-primary/50"
                  }`}
                  whileHover={{ scale: 1.07, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-5xl font-bold font-syne text-gray-900 mb-4 uppercase tracking-wider">
              FEATURED_PROJECTS
            </h2>
            <p className="text-lg text-gray-600 font-grotesk">
              &gt; Innovative applications combining AI and modern web technologies
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 60px rgba(30,90,214,0.18)" }}
                className="group bg-gradient-to-br from-slate-50 via-white to-gray-50 border-2 border-primary/30 rounded-2xl p-8 relative overflow-hidden cursor-default"
                style={{ transition: "box-shadow 0.3s, border-color 0.3s" }}
              >
                {/* Animated hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="mb-6 relative z-10">
                  <h3 className="text-3xl font-bold font-syne text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold font-grotesk uppercase text-sm tracking-wide">
                    » {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed font-grotesk text-sm relative z-10">
                  {project.description}
                </p>

                <div className="mb-8 relative z-10">
                  <h4 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-widest font-syne">
                    ⚡ Key_Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-gray-700 text-sm font-grotesk"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        &gt; {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {project.link && project.link !== "#" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-lg font-syne uppercase text-sm tracking-wide relative z-10"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(30,90,214,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    execute_project{" "}
                    <motion.span whileHover={{ rotate: 12 }} style={{ display: "inline-flex" }}>
                      <ExternalLink size={18} />
                    </motion.span>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-5xl font-bold font-syne text-gray-900 mb-4 uppercase tracking-wider">
              TECHNICAL_SKILLS
            </h2>
            <p className="text-lg text-gray-600 font-grotesk">
              &gt; A comprehensive toolkit for modern web development
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: "rgba(30,90,214,0.5)" }}
                className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300"
              >
                <h3 className="text-lg font-bold font-syne text-gray-900 mb-4">
                  {category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
                >
                  {items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium font-grotesk"
                      variants={{
                        hidden: { opacity: 0, scale: 0.7 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } },
                      }}
                      whileHover={{ scale: 1.12, backgroundColor: "rgba(30,90,214,0.2)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            className="mt-12 bg-white rounded-xl p-8 border border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: "0 12px 35px rgba(30,90,214,0.1)" }}
          >
            <h3 className="text-2xl font-bold font-syne text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600 mb-2 font-grotesk">
              Bachelor of Technology in Information Technology
            </p>
            <p className="text-primary font-semibold mb-4 font-grotesk">
              DR Akhilesh Das Gupta Institute of Professional Studies | 2022-2026
            </p>
            <p className="text-gray-900 font-semibold font-grotesk">GPA: 8.89</p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold font-syne text-gray-900 mb-4">
              Certifications &amp; Achievements
            </h2>
            <p className="text-lg text-gray-600 font-grotesk">
              Professional recognition and continuous learning
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(30,90,214,0.15)" }}
                className="bg-white rounded-2xl border-2 border-primary/20 p-8 h-full flex flex-col transition-all duration-500"
              >
                <div className="mb-6 pb-6 border-b-2 border-primary/10">
                  <motion.span
                    className="inline-block px-4 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-3 font-syne"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {cert.date}
                  </motion.span>
                  <h3 className="text-xl font-bold font-syne text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold font-grotesk">
                    {cert.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {cert.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-sm text-gray-700 font-grotesk"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href={cert.link}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl font-syne"
                  whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(30,90,214,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>View Certificate</span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    style={{ display: "inline-flex" }}
                  >
                    <ExternalLink size={16} />
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold font-syne text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 font-grotesk">
              Let's build something amazing together
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-gray-200 p-12 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ boxShadow: "0 20px 50px rgba(30,90,214,0.1)" }}
          >
            <div className="space-y-8">
              <motion.a
                href="mailto:jyotibansal7982@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                whileHover={{ x: 6 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ backgroundColor: "rgba(30,90,214,0.2)", rotate: 5 }}
                >
                  <Mail className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-600 font-grotesk">Email</p>
                  <p className="text-lg font-semibold font-syne text-gray-900">
                    jyotibansal7982@gmail.com
                  </p>
                </div>
              </motion.a>

              <div className="flex gap-4 pt-4 border-t border-gray-200 justify-center">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://linkedin.com/in/jyoti-bansal01/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/Jyotibansal22/",
                    label: "GitHub",
                  },
                  {
                    icon: <Mail size={20} />,
                    href: "mailto:jyotibansal7982@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600"
                    whileHover={{
                      backgroundColor: "hsl(218 100% 35%)",
                      color: "#ffffff",
                      scale: 1.15,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-grotesk">Jyoti</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
