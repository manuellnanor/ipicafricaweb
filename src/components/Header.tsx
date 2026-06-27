import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ipicAfricaLogo from "../assets/brand/ipic-africa-logo.png";

interface HeaderProps {
  onPartnerClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  forceSolid?: boolean;
}

export default function Header({ onPartnerClick, onNavigate, activeSection, forceSolid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled || forceSolid
            ? "bg-brand-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleLinkClick("/")}
              className="group flex cursor-pointer items-center"
              id="header-logo"
            >
              <img
                src={ipicAfricaLogo}
                alt="IPIC Africa — Translating Knowledge into Policy and Social Impact"
                className="h-12 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14 sm:max-w-[210px]"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              {/* Home */}
              <button
                onClick={() => handleLinkClick("/")}
                className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-2 cursor-pointer ${
                  activeSection === "home" ? "text-brand-gold" : "text-white/80 hover:text-white"
                }`}
                id="nav-home"
              >
                <span>Home</span>
                {activeSection === "home" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* About Us Submenu */}
              <div
                className="relative py-2"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => handleLinkClick("/about-us")}
                  className={`flex items-center space-x-1 font-display text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                    activeSection === "about-us"
                      ? "text-brand-gold"
                      : "text-white/80 hover:text-white"
                  }`}
                  id="nav-about-trigger"
                >
                  <span>About Us</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{ transform: isAboutDropdownOpen ? 'rotate(180deg)' : 'none' }} />
                </button>

                <AnimatePresence>
                  {isAboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-48 rounded-xl bg-brand-charcoal border border-white/10 shadow-xl overflow-hidden py-1 z-50"
                    >
                      <button
                        onClick={() => handleLinkClick("/about-us")}
                        className="w-full text-left px-4 py-2.5 font-display text-xs font-semibold text-white/80 hover:text-brand-gold hover:bg-white/5 transition-colors cursor-pointer"
                        id="submenu-who-we-are"
                      >
                        Who We Are
                      </button>
                      <button
                        onClick={() => handleLinkClick("/about-us")}
                        className="w-full text-left px-4 py-2.5 font-display text-xs font-semibold text-white/80 hover:text-brand-gold hover:bg-white/5 transition-colors cursor-pointer"
                        id="submenu-team"
                      >
                        Our Team
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <button
                onClick={() => handleLinkClick("/services")}
                className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-2 cursor-pointer ${
                  activeSection === "services" ? "text-brand-gold" : "text-white/80 hover:text-white"
                }`}
                id="nav-services"
              >
                <span>Services</span>
                {activeSection === "services" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Publications and Insights */}
              <button
                onClick={() => handleLinkClick("/publications-insights")}
                className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-2 cursor-pointer ${
                  activeSection === "publications-insights" ? "text-brand-gold" : "text-white/80 hover:text-white"
                }`}
                id="nav-publications-insights"
              >
                <span>Publications & Insights</span>
                {activeSection === "publications-insights" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Gallery */}
              <button
                onClick={() => handleLinkClick("/gallery")}
                className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-2 cursor-pointer ${
                  activeSection === "gallery" ? "text-brand-gold" : "text-white/80 hover:text-white"
                }`}
                id="nav-gallery"
              >
                <span>Gallery</span>
                {activeSection === "gallery" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Contact Us */}
              <button
                onClick={() => handleLinkClick("/contact-us")}
                className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-2 cursor-pointer ${
                  activeSection === "contact-us" ? "text-brand-gold" : "text-white/80 hover:text-white"
                }`}
                id="nav-contact-us"
              >
                <span>Contact Us</span>
                {activeSection === "contact-us" && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Contact & Partnership Buttons */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Partner CTA Button */}
              <button
                onClick={onPartnerClick}
                className="group flex items-center space-x-2 rounded-full bg-brand-gold px-6 py-3 font-display text-sm font-bold text-brand-charcoal hover:bg-white hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                id="header-cta-button"
              >
                <span>Partner with Us</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-charcoal text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            </div>

            {/* Hamburger (Mobile) */}
            <div className="flex lg:hidden items-center space-x-4">
              <button
                onClick={onPartnerClick}
                className="md:hidden rounded-full bg-brand-gold px-4 py-2 font-display text-xs font-bold text-brand-charcoal"
              >
                Partner
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 cursor-pointer"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slideout */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-brand-dark p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <img
                    src={ipicAfricaLogo}
                    alt="IPIC Africa"
                    className="h-12 w-auto max-w-[190px] object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg border border-white/15 p-2 text-white/70"
                    id="mobile-close-button"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-3">
                  {/* Home */}
                  <button
                    onClick={() => handleLinkClick("/")}
                    className={`text-left font-display text-base font-semibold py-2 transition-colors cursor-pointer ${
                      activeSection === "home" ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Home
                  </button>

                  {/* About Us (With Accordion style for Mobile) */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="flex items-center justify-between text-left font-display text-base font-semibold py-2 text-white/70 hover:text-white cursor-pointer"
                    >
                      <span>About Us</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileAboutOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 flex flex-col space-y-2 mt-1 border-l border-white/10 overflow-hidden"
                        >
                          <button
                            onClick={() => handleLinkClick("/about-us")}
                            className="text-left font-display text-sm py-1.5 text-white/60 hover:text-brand-gold transition-colors"
                          >
                            • Who We Are
                          </button>
                          <button
                            onClick={() => handleLinkClick("/about-us")}
                            className="text-left font-display text-sm py-1.5 text-white/60 hover:text-brand-gold transition-colors"
                          >
                            • Our Team
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Services */}
                  <button
                    onClick={() => handleLinkClick("/services")}
                    className={`text-left font-display text-base font-semibold py-2 transition-colors cursor-pointer ${
                      activeSection === "services" ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Services
                  </button>

                  {/* Publications and Insights */}
                  <button
                    onClick={() => handleLinkClick("/publications-insights")}
                    className={`text-left font-display text-base font-semibold py-2 transition-colors cursor-pointer ${
                      activeSection === "publications-insights" ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Publications & Insights
                  </button>

                  {/* Gallery */}
                  <button
                    onClick={() => handleLinkClick("/gallery")}
                    className={`text-left font-display text-base font-semibold py-2 transition-colors cursor-pointer ${
                      activeSection === "gallery" ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Gallery
                  </button>

                  {/* Contact Us */}
                  <button
                    onClick={() => handleLinkClick("/contact-us")}
                    className={`text-left font-display text-base font-semibold py-2 transition-colors cursor-pointer ${
                      activeSection === "contact-us" ? "text-brand-gold pl-2 border-l-2 border-brand-gold" : "text-white/70 hover:text-white"
                    }`}
                  >
                    Contact Us
                  </button>
                </nav>
              </div>

              <div className="border-t border-white/10 pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPartnerClick();
                  }}
                  className="w-full flex items-center justify-center space-x-2 rounded-full bg-brand-gold py-3 font-display font-bold text-brand-charcoal"
                >
                  <span>Partner with Us</span>
                  <ArrowRight className="h-4 w-4 text-brand-charcoal" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
