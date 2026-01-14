"use client";
import Image from "next/image";
import Link from "next/link";
import { Blogstype, Tagtype } from "@/types/types";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Helper function to optimize Cloudinary images 
// i do need it right now cuz i added the func late but other user wont need it cuz i compress thumbnail now to much****
function optimizeCloudinaryUrl(url: string, width = 800) {
  if (!url.includes('cloudinary.com')) return url;
  
  // Insert transformations before the version number
  return url.replace(
    '/upload/',
    `/upload/w_${width},q_auto:good,f_auto,c_limit/`
  );
}

export default function BlogContent({
  blogs,
  tags,
  page,
  pagesNum,
  tag,
}: {
  blogs: Blogstype[];
  tags: Tagtype[];
  page: string;
  pagesNum: number;
  tag?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleTagChange(newTag: string) {
    startTransition(() => {
      router.push(`/documentedCases?tag=${newTag}&page=1`);
    });
  }

  function handlePageChange(newPage: number) {
    startTransition(() => {
      router.push(`/documentedCases?tag=${tag ?? 'All'}&page=${newPage}`);
    });
  }

  return (
    <div>
      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-3 mb-10 flex-wrap">
        {Array.from({ length: pagesNum }, (_, i) => {
          const num = i + 1;
          const active = num === Number(page);

          return (
            <button
              key={num}
              onClick={() => handlePageChange(num)}
              disabled={isPending}
              className={`
                relative px-4 py-2 rounded-xl cursor-pointer select-none
                backdrop-blur-xl transition-all duration-300
                border shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                ${
                  active
                    ? "bg-indigo-600/40 border-indigo-400 text-white shadow-indigo-500/50 scale-110"
                    : "bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:border-white/40 hover:scale-105"
                }
              `}
            >
              {active && (
                <span className="absolute inset-0 rounded-xl ring-2 ring-indigo-400/40 animate-pulse"></span>
              )}
              <span className="relative z-10 font-semibold tracking-wide">
                {num}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tag Filter */}
      <div className="flex justify-center mb-10">
        <Select 
          value={tag ?? "All"} 
          onValueChange={handleTagChange}
          disabled={isPending}
        >
          <SelectTrigger className="w-[180px] shadow-none focus-visible:ring-0 bg-gray-800/60 border border-white/30 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white/40 border border-white/30 backdrop-blur-md text-white">
            <SelectItem value="All">All</SelectItem>
            {tags.map((tag) => (
              <SelectItem value={tag.value} key={tag.value}>
                {tag.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {blogs.map((blog, index) => (
          <Link
            href={`/documentedCases/${blog._id}`}
            key={blog._id}
            className="backdrop-blur-md bg-white/20 border-3 border-white/30 shadow-lg rounded-lg overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-400 hover:shadow-lg"
          >
            <div className="relative w-full h-48 bg-gray-800">
              <Image
                src={optimizeCloudinaryUrl(blog.titleImge)}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                loading={index < 4 ? "eager" : "lazy"} // Load first 4 eagerly, rest lazy
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNceWRvPQAHfALXmFmS1gAAAABJRU5ErkJggg=="
              />
            </div>

            <div className="p-6">
              <div className="flex gap-2 items-center text-gray-400 text-sm mb-2 flex-wrap">
                {blog.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 line-clamp-2">
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Loading overlay */}
      {isPending && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      )}
    </div>
  );
}