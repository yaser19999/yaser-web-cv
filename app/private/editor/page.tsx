import React from "react";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await auth();
  if(!user) redirect("/")
  return (

    <div>
      <SimpleEditor user={user}  />
    </div>
  );
}
