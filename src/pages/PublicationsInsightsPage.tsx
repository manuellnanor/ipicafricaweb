import { ArrowRight, CalendarDays, FileText, Newspaper, Search, Tag, User } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";

interface PublicationsInsightsPageProps {
  onPostClick: (slug: string) => void;
}

export default function PublicationsInsightsPage({ onPostClick }: PublicationsInsightsPageProps) {
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

  return (
    <main className="bg-brand-cream pt-[72px] text-brand-charcoal sm:pt-20">
      <section className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-4 flex items-center gap-2 text-brand-gold">
              <Newspaper className="h-5 w-5" />
              <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                Publications & Insights
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Research, policy notes, and field intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
              Read IPIC Africa updates on policy translation, advocacy campaigns, research dissemination,
              monitoring and evaluation, and evidence-informed development practice.
            </p>
          </div>

          {featuredPost && (
            <button
              type="button"
              onClick={() => onPostClick(featuredPost.slug)}
              className="group grid overflow-hidden bg-white text-left text-brand-charcoal shadow-2xl sm:grid-cols-[220px_1fr]"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="p-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-light-green px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-green">
                  Featured
                </span>
                <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight">{featuredPost.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-500">{featuredPost.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-green">
                  Read Insight
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <div>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-brand-green">
                <FileText className="h-5 w-5 text-brand-gold" />
                <span className="font-display text-xs font-extrabold uppercase tracking-widest">
                  Latest Releases
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                All Publications
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group overflow-hidden bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <button
                  type="button"
                  onClick={() => onPostClick(post.slug)}
                  className="block aspect-video w-full overflow-hidden bg-brand-charcoal"
                  aria-label={`Read ${post.title}`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </button>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-gold" />
                      {post.dateLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5 text-brand-gold" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-extrabold leading-snug transition group-hover:text-brand-green">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{post.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => onPostClick(post.slug)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-green"
                  >
                    Read Insight
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-extrabold text-brand-green">Search</h3>
            <div className="mt-4 flex items-center bg-brand-cream px-4 py-3 text-sm text-gray-400">
              <span className="flex-1">Search publications...</span>
              <Search className="h-4 w-4 text-brand-gold" />
            </div>
          </div>
          <div className="bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-extrabold text-brand-green">Categories</h3>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center justify-between bg-brand-cream px-4 py-3 text-sm font-bold text-gray-500">
                  <span>{category}</span>
                  <Tag className="h-4 w-4 text-brand-gold" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-gold p-6 text-brand-charcoal shadow-sm">
            <User className="mb-4 h-7 w-7" />
            <h3 className="font-display text-lg font-extrabold">Submit a partnership brief</h3>
            <p className="mt-2 text-sm leading-6 text-brand-charcoal/75">
              Work with IPIC Africa to convert evidence into briefs, explainers, and public engagement products.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
