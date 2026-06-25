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
import { getBlogPostBySlug } from "./data/blogPosts";

const getArticleSlugFromPath = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const match = window.location.pathname.match(/^\/news\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoModalTitle, setVideoModalTitle] = useState("");
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(getArticleSlugFromPath);
  const selectedArticle = selectedArticleSlug ? getBlogPostBySlug(selectedArticleSlug) : undefined;

  useEffect(() => {
    const handlePopState = () => {
      setSelectedArticleSlug(getArticleSlugFromPath());
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

  const handleNavigate = (sectionId: string) => {
    if (selectedArticleSlug) {
      window.history.pushState({}, "", "/");
      setSelectedArticleSlug(null);
      window.setTimeout(() => scrollToSection(sectionId), 0);
      return;
    }

    scrollToSection(sectionId);
  };

  const triggerVideoModal = (title: string) => {
    setVideoModalTitle(title);
    setIsVideoModalOpen(true);
  };

  const handlePostClick = (slug: string) => {
    window.history.pushState({}, "", `/news/${slug}`);
    setSelectedArticleSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleArticleBack = () => {
    window.history.pushState({}, "", "/");
    setSelectedArticleSlug(null);
    window.setTimeout(() => scrollToSection("blog"), 0);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold selection:text-brand-charcoal font-sans antialiased overflow-x-hidden">
      
      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onPartnerClick={() => handleNavigate("contact-us")}
        forceSolid={Boolean(selectedArticle)}
      />

      {selectedArticle ? (
        <ArticlePage
          post={selectedArticle}
          onBack={handleArticleBack}
          onPostClick={handlePostClick}
        />
      ) : (
        /* Main Sections Stack */
        <main>
          {/* Hero Slider */}
          <Hero onDiscoverClick={() => handleNavigate("who-we-are")} />

          {/* Feature Cards Floating Overlap */}
          <Features />

          {/* Who We Are & Experience Block */}
          <AboutUs onPartnerClick={() => handleNavigate("contact-us")} />

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
      )}

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

