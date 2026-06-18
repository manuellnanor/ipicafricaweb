import { X, Play, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
}

export default function VideoModal({ isOpen, onClose, videoTitle = "Econest Wilderness Rescue & Preservation" }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-brand-charcoal shadow-2xl border border-brand-green/30"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-brand-green/20 bg-brand-charcoal/90 px-6 py-4">
              <div className="flex items-center space-x-2 text-white">
                <Sparkles className="h-5 w-5 text-brand-gold animate-pulse" />
                <h3 className="font-display font-semibold tracking-wide text-sm md:text-base">
                  {videoTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-brand-green/20 p-2 text-gray-300 hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Canvas Block */}
            <div className="relative aspect-video w-full bg-black">
              {isPlaying ? (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/S_DF6Dqh68A?autoplay=1&mute=1&controls=0&loop=1&playlist=S_DF6Dqh68A"
                  title="Econest Nature Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark/95 text-center p-6">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-brand-charcoal hover:scale-110 hover:bg-white transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <Play className="h-8 w-8 fill-brand-charcoal translate-x-0.5" />
                  </button>
                  <p className="mt-4 font-display font-medium text-white">Resume Ambient Scenery</p>
                </div>
              )}

              {/* In-Video Watermark Card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-charcoal/80 p-3 text-xs text-white/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span>Interactive Live Stream • Active Restoration Site</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <span className="hidden sm:inline font-mono">1080p HD</span>
                </div>
              </div>
            </div>

            {/* Quick Informational footer */}
            <div className="bg-brand-dark px-6 py-4 text-center text-xs text-gray-400">
              Econest environmental workflows are fully simulated using global green research metrics. Thank you for your support.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
