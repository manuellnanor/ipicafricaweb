/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import StatsCounter from "./components/StatsCounter";
import InteractiveBanner from "./components/InteractiveBanner";
import CampingProjects from "./components/CampingProjects";
import Volunteers from "./components/Volunteers";
import Partners from "./components/Partners";
import FAQSection from "./components/FAQSection";
import EventsSection from "./components/EventsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import ArticlePage from "./components/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PublicationsInsightsPage from "./pages/PublicationsInsightsPage";
import ContactPage from "./pages/ContactPage";
import { getBlogPostBySlug } from "./data/blogPosts";

const getCurrentPath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname;
};

const getArticleSlugFromPath = (path = getCurrentPath()) => {
  const match = path.match(/^\/news\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const isNewsIndexPath = (path = getCurrentPath()) => /^\/news\/?$/.test(path);

const isHomePath = (path: string) => path === "/" || path === "";

const getActiveSectionFromPath = (path: string) => {
  if (path === "/about-us") {
    return "about-us";
  }

  if (path === "/services") {
    return "services";
  }

  if (path === "/publications-insights" || isNewsIndexPath(path) || getArticleSlugFromPath(path)) {
    return "publications-insights";
  }

  if (path === "/contact-us") {
    return "contact-us";
  }

  return "home";
};

const isRoutePath = (target: string) => target.startsWith("/");

export default function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const [activeSection, setActiveSection] = useState(getActiveSectionFromPath(getCurrentPath()));
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoModalTitle, setVideoModalTitle] = useState("");
  const selectedArticleSlug = getArticleSlugFromPath(currentPath);
  const selectedArticle = selectedArticleSlug ? getBlogPostBySlug(selectedArticleSlug) : undefined;

  const updateRoute = (path: string, options: { replace?: boolean; scroll?: "top" | "news" | "none" } = {}) => {
    const normalizedPath = path || "/";

    if (typeof window !== "undefined" && window.location.pathname !== normalizedPath) {
      if (options.replace) {
        window.history.replaceState({}, "", normalizedPath);
      } else {
        window.history.pushState({}, "", normalizedPath);
      }
    }

    setCurrentPath(normalizedPath);
    setActiveSection(getActiveSectionFromPath(normalizedPath));

    if (options.scroll === "news") {
      window.setTimeout(() => scrollToSection("blog"), 0);
      return;
    }

    if (options.scroll !== "none") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = getCurrentPath();
      setCurrentPath(path);
      setActiveSection(getActiveSectionFromPath(path));

      if (isNewsIndexPath(path)) {
        window.setTimeout(() => scrollToSection("blog"), 0);
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (isNewsIndexPath(currentPath)) {
      window.setTimeout(() => scrollToSection("blog"), 0);
    }
  }, [currentPath]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll slightly to account for the sticky header
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigate = (target: string) => {
    if (isRoutePath(target)) {
      updateRoute(target);
      return;
    }

    if (!isHomePath(currentPath)) {
      updateRoute("/", { scroll: "none" });
      window.setTimeout(() => scrollToSection(target), 0);
      return;
    }

    scrollToSection(target);
  };

  const triggerVideoModal = (title: string) => {
    setVideoModalTitle(title);
    setIsVideoModalOpen(true);
  };

  const handlePostClick = (slug: string) => {
    updateRoute(`/news/${slug}`);
  };

  const handleArticleBack = () => {
    updateRoute("/news", { scroll: "news" });
  };

  const renderContent = () => {
    if (selectedArticle) {
      return (
        <ArticlePage
          post={selectedArticle}
          onBack={handleArticleBack}
          onPostClick={handlePostClick}
        />
      );
    }

    if (currentPath === "/about-us") {
      return <AboutPage onPartnerClick={() => handleNavigate("/contact-us")} />;
    }

    if (currentPath === "/services") {
      return <ServicesPage />;
    }

    if (currentPath === "/publications-insights" || isNewsIndexPath(currentPath)) {
      return <PublicationsInsightsPage onPostClick={handlePostClick} />;
    }

    if (currentPath === "/contact-us") {
      return <ContactPage />;
    }

    return (
      <main>
        {/* Hero Slider */}
        <Hero onDiscoverClick={() => handleNavigate("/about-us")} />

        {/* Feature Cards Floating Overlap */}
        <Features />

        {/* Who We Are & Experience Block */}
        <AboutUs onPartnerClick={() => handleNavigate("/contact-us")} />

        {/* Stats Counter Row */}
        <StatsCounter />

        {/* Play Banner Media Section */}
        <InteractiveBanner
          onPlayClick={() => triggerVideoModal("IPIC Africa: Translating Research into Social Impact across Africa")}
        />

        {/* Successful Camping Projects */}
        <CampingProjects />

        {/* Volunteers Team Section */}
        <Volunteers />

        {/* Brand Sponsors Bar */}
        <Partners />

        {/* FAQ Section */}
        <FAQSection />

        {/* Econest Upcoming Events */}
        <EventsSection />

        {/* News and Sustainability Blogs */}
        <BlogSection onPostClick={handlePostClick} />

        {/* Address and Direct Contact Stripe */}
        <ContactSection />
      </main>
    );
  };

  if (selectedArticleSlug && !selectedArticle) {
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold selection:text-brand-charcoal font-sans antialiased overflow-x-hidden">
      
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onPartnerClick={() => handleNavigate("/contact-us")}
        forceSolid={!isHomePath(currentPath) || Boolean(selectedArticle)}
      />

      {renderContent()}

      {/* Comprehensive Footer and Copyright */}
      <Footer onNavigate={handleNavigate} />

      {/* Central Interactive Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoTitle={videoModalTitle}
      />
    </div>
  );
}

