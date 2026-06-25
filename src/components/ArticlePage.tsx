import {
  ArrowLeft,
  CalendarDays,
  Facebook,
  Linkedin,
  Mail,
  Search,
  Share2,
  Tag,
  User,
} from "lucide-react";
import { BlogPost } from "../types";
import { BLOG_POSTS } from "../data/blogPosts";

interface ArticlePageProps {
  post: BlogPost;
  onBack: () => void;
  onPostClick: (slug: string) => void;
}

export default function ArticlePage({ post, onBack, onPostClick }: ArticlePageProps) {
  const recentPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const leadParagraph = post.content[0];
  const remainingContent = post.content.slice(1);

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="pb-10">
        <div className="w-full overflow-hidden bg-brand-green shadow-xl">
          <div className="grid min-h-[320px] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex flex-col justify-center overflow-hidden px-4 py-12 text-white sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(227,110,34,0.25),transparent_28%),linear-gradient(135deg,rgba(13,92,70,1),rgba(15,29,25,1))]" />
              <div className="relative z-10">
                <button
                  type="button"
                  onClick={onBack}
                  className="mb-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/75 transition-colors hover:text-brand-gold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to News
                </button>

                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-gold">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <span>{post.dateLabel}</span>
                </div>
                <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden border-l-8 border-brand-gold bg-brand-charcoal lg:min-h-[420px]">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={post.image}
                alt="A cross-section of participants at the menstrual health research dissemination forum"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-brand-gold" />
                By {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-brand-gold" />
                {post.dateLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-brand-gold" />
                {post.category}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-lg font-semibold leading-8 text-brand-green sm:text-xl">
                {leadParagraph}
              </p>

              <div className="mt-8 space-y-5 text-[15px] leading-8 text-gray-600">
                {remainingContent.slice(0, 5).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="my-10 border-l-4 border-brand-gold bg-white px-6 py-7 shadow-sm">
                <p className="font-display text-xl font-extrabold leading-8 text-brand-green">
                  The evidence clearly shows that menstrual health is also a mental health issue.
                </p>
                <p className="mt-3 text-sm font-bold text-gray-500">Dr. Evelyn Acquah</p>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-gray-600">
                {remainingContent.slice(5).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {post.gallery && (
                <div className="mt-12">
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-green">
                    Event Gallery
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {post.gallery.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`Menstrual health dissemination forum gallery ${index + 1}`}
                        className="h-64 w-full rounded-2xl object-cover shadow-sm"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 border-t border-gray-100 pt-10">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-green">
                  Leave a Comment
                </h2>
                <form className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal shadow-sm outline-none transition focus:border-brand-gold"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal shadow-sm outline-none transition focus:border-brand-gold"
                    />
                  </div>
                  <textarea
                    placeholder="Say Something..."
                    rows={6}
                    className="w-full resize-none rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal shadow-sm outline-none transition focus:border-brand-gold"
                  />
                  <button
                    type="button"
                    className="inline-flex w-fit items-center rounded-full bg-brand-gold px-6 py-3 font-display text-xs font-extrabold uppercase tracking-wider text-brand-charcoal shadow-sm transition hover:bg-brand-green hover:text-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="mt-10 flex flex-col gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {(post.tags ?? [post.category]).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-500 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-brand-green">
                  {[Facebook, Mail, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label="Share article"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:bg-brand-gold hover:text-brand-charcoal"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-brand-green">Search Here</h3>
              <div className="mt-4 flex items-center rounded-xl bg-brand-cream px-4 py-3 text-sm text-gray-400">
                <span className="flex-1">Search Type...</span>
                <Search className="h-4 w-4 text-brand-gold" />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-brand-green">Recent News</h3>
              <div className="mt-5 space-y-5">
                {recentPosts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onPostClick(item.slug)}
                    className="group flex gap-3 text-left"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-wide text-gray-400">
                        {item.category} - {item.dateLabel}
                      </span>
                      <span className="mt-1 block text-sm font-extrabold leading-snug text-brand-charcoal transition-colors group-hover:text-brand-green">
                        {item.title}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-brand-green">Categories</h3>
              <div className="mt-4 space-y-2">
                {["Policy Action", "Research Translation", "Public Health", "Civic Policy"].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg bg-brand-cream px-4 py-3 text-sm font-bold text-gray-500"
                  >
                    <span>{category}</span>
                    <Tag className="h-4 w-4 text-brand-gold" />
                  </button>
                ))}
              </div>
            </div>

            {post.gallery && (
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-extrabold text-brand-green">Our Gallery</h3>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[post.image, ...post.gallery].map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt=""
                      className="aspect-square rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-brand-green">Share With Everyone</h3>
              <div className="mt-4 flex gap-2">
                {[Facebook, Mail, Linkedin, Share2].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label="Share article"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-cream text-gray-500 transition-colors hover:bg-brand-gold hover:text-brand-charcoal"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
