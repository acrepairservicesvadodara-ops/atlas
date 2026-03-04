import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "@/data/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group flex flex-col">
      {/* Color accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-700" />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {post.contentSummary}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          {post.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime} read</span>
            </div>
          )}
          {post.lastModified && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(post.lastModified).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        <Link
          href={`/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition mt-auto"
        >
          Read Article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
