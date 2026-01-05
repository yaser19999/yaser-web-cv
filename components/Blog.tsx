import { Blogstype, Tagtype } from "@/types/types";
import BlogContent from "./BlogContent";

const getData = async (url:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${url}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
    cache: "no-store",
  });

  const blogs = await res.json();
  return blogs.data;
};


export default async function BlogSection() {
  const blogs: Blogstype[] = await getData("/api/blog");
  const tagPromise = await getData("/api/tag");
  const tags:Tagtype[] = tagPromise[0].options;

  return (
    <section className=" bg-radial from-cyan-800 to-[#1d3f58] min-h-screen text-white py-16">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Documented Cases
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            My humble work is not the best but always looking for improvment
          </p>
        </div>

        <BlogContent blogs={blogs} tags={tags} />
      </div>
    </section>
  );
}
