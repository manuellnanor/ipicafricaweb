import { ArrowLeft, ArrowRight, Camera, Images, MapPin, X } from "lucide-react";
import { useState } from "react";
import rgHiTeamWideImage from "../assets/gallery/rg-hi-dissemination-team-wide.jpeg";
import rgHiProjectSpeakersImage from "../assets/gallery/rg-hi-project-speakers.jpeg";
import rgHiTeamImage from "../assets/gallery/rg-hi-dissemination-team.jpeg";
import recognitionPresentationImage from "../assets/gallery/recognition-presentation.jpeg";
import participantsGroupPhotoImage from "../assets/gallery/participants-group-photo.jpeg";
import forumAudienceImage from "../assets/gallery/forum-audience.jpeg";
import studentParticipantsImage from "../assets/gallery/student-participants.jpeg";
import awardPresentationImage from "../assets/gallery/award-presentation.jpeg";
import keynotePresentationImage from "../assets/gallery/keynote-presentation.jpeg";
import researchPresentationImage from "../assets/gallery/research-presentation.jpeg";

const GALLERY_IMAGES = [
  {
    src: participantsGroupPhotoImage,
    title: "Forum Participants Group Photo",
    category: "Community",
    location: "UHAS Hohoe Campus",
    featured: true,
  },
  {
    src: rgHiTeamWideImage,
    title: "IPIC Africa and Project Team",
    category: "Team",
    location: "Dissemination Forum",
    featured: true,
  },
  {
    src: rgHiProjectSpeakersImage,
    title: "Research Translation Leads",
    category: "Team",
    location: "RGHI Project Forum",
  },
  {
    src: rgHiTeamImage,
    title: "Project Team Portrait",
    category: "Team",
    location: "Dissemination Forum",
  },
  {
    src: recognitionPresentationImage,
    title: "Recognition Presentation",
    category: "Engagement",
    location: "Forum Session",
  },
  {
    src: awardPresentationImage,
    title: "Award Presentation",
    category: "Engagement",
    location: "Forum Session",
  },
  {
    src: forumAudienceImage,
    title: "Stakeholder Audience",
    category: "Forum",
    location: "Main Hall",
  },
  {
    src: studentParticipantsImage,
    title: "Student Participants",
    category: "Forum",
    location: "Main Hall",
  },
  {
    src: keynotePresentationImage,
    title: "Keynote Presentation",
    category: "Presentation",
    location: "Main Hall",
  },
  {
    src: researchPresentationImage,
    title: "Research Findings Presentation",
    category: "Presentation",
    location: "Main Hall",
  },
];

const PHOTO_ALBUMS = [
  {
    id: "uhas-rghi-dissemination-forum",
    eventName: "UHAS-RGHI Project Dissemination Forum",
    dateLabel: "June 2026",
    location: "UHAS Hohoe Campus",
    coverImage: participantsGroupPhotoImage,
    images: GALLERY_IMAGES,
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<"photos" | "albums">("photos");
  const selectedImage = selectedIndex === null ? null : GALLERY_IMAGES[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % GALLERY_IMAGES.length,
    );
  };

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img
            src={participantsGroupPhotoImage}
            alt="UHAS RGHI dissemination forum participants"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-green/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-brand-gold">
              <Images className="h-5 w-5" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Image Gallery
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Image gallery and photo albums.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
              Browse all photos from IPIC Africa events, or open a photo album grouped by event name.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-brand-green">
              <Camera className="h-5 w-5 text-brand-gold" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                {activeView === "photos" ? "All Photos" : "Photo Albums"}
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {activeView === "photos" ? "All Photos" : "Photo Albums"}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveView("photos")}
              className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                activeView === "photos"
                  ? "bg-brand-green text-white shadow-sm"
                  : "bg-white text-brand-green shadow-sm hover:bg-brand-light-green"
              }`}
            >
              All Photos
            </button>
            <button
              type="button"
              onClick={() => setActiveView("albums")}
              className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                activeView === "albums"
                  ? "bg-brand-green text-white shadow-sm"
                  : "bg-white text-brand-green shadow-sm hover:bg-brand-light-green"
              }`}
            >
              Photo Albums
            </button>
          </div>
        </div>

        {activeView === "photos" ? (
          <div className="grid auto-rows-[220px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 bg-brand-charcoal text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  image.featured ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                aria-label={`Open ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                  <span className="rounded-full bg-brand-gold px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-charcoal">
                    {image.category}
                  </span>
                  <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/70">
                    <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                    {image.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PHOTO_ALBUMS.map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => setActiveView("photos")}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
                  <img
                    src={album.coverImage}
                    alt={album.eventName}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-charcoal">
                    {album.images.length} photos
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                    Photo Album
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-brand-charcoal">
                    {album.eventName}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-gray-500">
                    <span>{album.dateLabel}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-brand-gold" />
                      {album.location}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-charcoal"
            aria-label="Close gallery image"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-charcoal sm:flex"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="w-full max-w-6xl">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[76vh] w-full object-contain bg-brand-dark"
              />
              <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center">
                <span className="font-display text-xs font-extrabold uppercase tracking-widest text-brand-green">
                  {selectedImage.category}
                </span>
                <p className="flex items-center gap-1 text-sm font-semibold text-gray-500">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  {selectedImage.location}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-charcoal sm:flex"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  );
}
