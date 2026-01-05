"use client";
import { Blogstype } from "@/types/types";
import { redirect } from "next/navigation";
import { useState } from "react";
import Confirmbox from "@/components/Confirmbox";

export default function PostControls({
  post,
  editeFunc,
  setLoading,
}: {
  post: Blogstype;
  editeFunc: () => void;
  setLoading: (show: boolean) => void;
}) {
  const [confirmVisual, setConfirmVisual] = useState(false);

  const getUrls = (node: any, arr: string[] = []) => {
    if (!node) return arr;
    if (node.type === "image" && node.attrs?.src) {
      arr.push(node.attrs.src); // base64 image
    }
    if (node.content) {
      node.content.forEach((child: any) => getUrls(child, arr));
    }
    return arr;
  };

  const handleDeleteOneBy_id = async () => {
    setLoading(true);

    const urls = getUrls(post.content);

    await Promise.all(
      urls.map(async (src) => {
       await fetch("/api/upload", {
          method: "DELETE",
          body: JSON.stringify({ url: src, titleImge: post.titleImge }),
          headers: { "Content-Type": "application/json" },
        });
      })
    );



    const res = await fetch(`/api/post`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ post: post }),
    });

    if (res.ok) redirect("/documentedCases");

    setLoading(false);
  };
console.log(post.titleImge)
  return (
    <div className="   self-center-safe  left-1/2 flex gap-2 ">
      
      <Confirmbox
        onConfirm={handleDeleteOneBy_id}
        onCancel={() => setConfirmVisual(false)}
        open={confirmVisual}
      />

      <button
        onClick={() => setConfirmVisual(true)}
        className="px-5 py-2 w-max rounded-full backdrop-blur-md bg-red-600/40 border border-white/30  p-6 shadow-lg cursor-pointer"
      >
        Delete
      </button>

      <div
        onClick={editeFunc}
        className="px-5 py-2 w-max rounded-full backdrop-blur-md bg-green-800/50 border border-white/30  p-6 shadow-lg cursor-pointer"
      >
        Edite
      </div>
    </div>
  );
}
