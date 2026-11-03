import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { portfolioConfig } from "./data/portfolioData";
import SkipLink from "./components/SkipLink";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Focus from "./components/Focus";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "" });

  // Copy email to clipboard handler with accessible toast feedback
  const handleCopyEmail = useCallback(async () => {
    const email = portfolioConfig.email;
    let copied = false;

    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        copied = false;
      }
    }

    // Fallback if clipboard API is unavailable or denied
    if (!copied) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        copied = document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch {
        copied = false;
      }
    }

    setToast({
      visible: true,
      message: copied
        ? `Copied ${email} to clipboard!`
        : `Email: ${email}`,
    });
  }, []);

  // Auto-dismiss toast after 3.5 seconds
  useEffect(() => {
    if (!toast.visible) return;
    const timer = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast.visible]);

  // Scroll Spy for active navigation link
  useEffect(() => {
    const sectionIds = ["about", "skills", "build", "experience", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Subtle Scroll Reveal Animations (respects prefers-reduced-motion)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealElements = document.querySelectorAll(".rv");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("in"));
      return;
    }

    document.documentElement.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SkipLink />
      <Header activeSection={activeSection} />

      <main id="main-content">
        <Hero onCopyEmail={handleCopyEmail} />
        <Stats />
        <About />
        <Skills />
        <Focus />
        <Experience />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      <Footer />

      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ visible: false, message: "" })}
      />
    </>
  );
}
