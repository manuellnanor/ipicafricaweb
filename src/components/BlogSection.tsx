import { Newspaper, User, Tag, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blogPosts";

interface BlogSectionProps {
  onPostClick: (slug: string) => void;
}

export default function BlogSection({ onPostClick }: BlogSectionProps) {
  const previewPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="mx-auto max-w-7xl border-b border-gray-150 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center space-x-2 text-brand-green">
            <Newspaper className="h-5 w-5 text-brand-gold" />
            <span className="font-display text-xs font-extrabold uppercase tracking-widest">
              Publications & Resources
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-4xl md:text-5xl">
            Latest Publications & Resources
          </h2>
        </div>
        <p className="mt-4 max-w-xs text-sm text-gray-500 md:mt-0">
          Stay on top of policy cycle updates, advocacy campaigns, and strategic M&E news from Accra.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {previewPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => onPostClick(post.slug)}
              className="relative aspect-video w-full overflow-hidden bg-brand-charcoal text-left"
              aria-label={`Read ${post.title}`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 flex h-14 w-12 flex-col items-center justify-center rounded-xl bg-brand-gold font-display text-white shadow-lg">
                <span className="text-xl font-black leading-none">{post.dateDay}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{post.dateMonth}</span>
                </div>
            </button>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-3 flex items-center space-x-4 text-xs font-semibold text-gray-400">
                  <span className="flex items-center space-x-1">
                    <User className="h-3.5 w-3.5 text-brand-gold" />
                    <span>by {post.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Tag className="h-3.5 w-3.5 text-brand-gold" />
                    <span>{post.category}</span>
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-brand-charcoal transition-colors group-hover:text-brand-green">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onPostClick(post.slug)}
                className="mt-6 inline-flex items-center space-x-1 self-start text-xs font-bold uppercase tracking-wider text-brand-green"
              >
                <span>Read Insight</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
