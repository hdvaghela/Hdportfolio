import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="status-dot" /> Open to professional opportunities
          </div>
          <p className="hero-kicker">
            FULL STACK DEVELOPER <span>·</span> MERN STACK DEVELOPER{" "}
            <span>—</span> AHMEDABAD, INDIA
          </p>
          <h1>
            {personalInfo.name.split(" ")[0]}
            <br />
            {personalInfo.name.split(" ").slice(1).join(" ")}
            <span className="gradient-text">.</span>
          </h1>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Building digital experiences with purpose.
          </motion.p>
          <p className="hero-intro">
            I’m a{" "}
            <motion.span
              className="role-text"
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.span>{" "}
            with 2 years of professional experience building modern, responsive,
            and scalable web applications using React.js, Node.js, Express.js,
            and MongoDB.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowRight size={16} />
            </a>
            <a className="button button-quiet" href="/resume.pdf" download>
              Download resume <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email Hardik">
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          aria-label="Decorative code editor illustration"
        >
          <div className="art-orbit orbit-a" />
          <div className="art-orbit orbit-b" />
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>developer.js</span>
              <span className="window-menu">•••</span>
            </div>
            <div className="code-lines" aria-hidden="true">
              <div>
                <small>01</small>
                <span className="code-purple">const</span> developer{" "}
                <span className="code-blue">=</span> {"{"}
              </div>
              <div>
                <small>02</small>&nbsp;&nbsp;name:{" "}
                <span className="code-green">'Hardik Vaghela'</span>,
              </div>
              <div>
                <small>03</small>&nbsp;&nbsp;role:{" "}
                <span className="code-green">'Full Stack Dev'</span>,
              </div>
              <div>
                <small>04</small>&nbsp;&nbsp;stack: [
                <span className="code-yellow">'React'</span>,
              </div>
              <div>
                <small>05</small>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-yellow">'Node.js'</span>,
              </div>
              <div>
                <small>06</small>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-yellow">'MongoDB'</span>],
              </div>
              <div>
                <small>07</small>&nbsp;&nbsp;build:{" "}
                <span className="code-blue">()</span>{" "}
                <span className="code-purple">=&gt;</span>{" "}
                <span className="code-green">'something great'</span>
              </div>
              <div>
                <small>08</small>
                {"}"}
                <span className="code-blue">;</span>
              </div>
              <div className="code-cursor-row">
                <small>09</small>
                <span className="code-cursor" />
              </div>
            </div>
            <div className="window-status">
              <span>● JavaScript</span>
              <span>UTF-8&nbsp;&nbsp; Spaces: 2</span>
            </div>
          </div>
          <div className="floating-chip chip-react">
            <span>⚛</span> React.js
          </div>
          <div className="floating-chip chip-node">
            <span>⌘</span> Node.js
          </div>
          <div className="art-caption">
            <span className="caption-line" /> Interfaces to APIs, built with
            care.
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
      <div className="hero-index">
        01 <span>/</span> 08
      </div>
    </section>
  );
}
