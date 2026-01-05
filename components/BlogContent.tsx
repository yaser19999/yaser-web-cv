"use client";
import Image from "next/image";
import Link from "next/link";
import { Blogstype, Tagtype } from "@/types/types";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogContent({
  blogs,
  tags,
}: {
  blogs: Blogstype[];
  tags: Tagtype[];
}) {
  const [selectValue, setSelectValue] = useState("All");

  const filteredBlogs = useMemo(() => {
    if (selectValue === "All") return blogs;
    if (!blogs) return [];
    return blogs.filter((blog) =>
      blog.tags.some((tag) => tag.value === selectValue)
    );
  }, [selectValue, blogs]);

  return (
    <div>
      <div className="flex justify-center mb-10">
      <Select onValueChange={(value) => setSelectValue(value)}>
        <SelectTrigger className="w-[180px] shadow-none focus-visible:ring-0 bg-gray-800/60 border border-white/30 text-white ">
          <SelectValue  placeholder="All" />
        </SelectTrigger>
        <SelectContent className="  bg-white/40 border border-white/30 backdrop-blur-md text-white">
          <SelectItem className="" value="All" key="All">
            All
          </SelectItem>
          {tags.map((tag) => (
            <SelectItem   value={tag.value} key={tag.value}>
              {tag.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {filteredBlogs.map((blog) => (
          <Link
            href={`/documentedCases/${blog._id}`}
            key={blog._id}
            className="backdrop-blur-md bg-white/20 border-3 border-white/30 shadow-lg rounded-lg overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-400  hover:shadow-lg "
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.titleImge ?? "/"}
                alt={""}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex gap-2 items-center text-gray-400 text-sm mb-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className=" bg-indigo-600 text-white px-2 py-1 rounded-full text-xs"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 hover:text-indigo-400 cursor-pointer">
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
