import { cookies } from "next/headers";
import { auth } from "@/auth";
import { SimpleEditorEdit } from "@/components/tiptap-templates/simple/simple-editor-edit";
import Mobilemenu from "@/components/Mobilemenu";

const getData = async (id: string) => {

  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/post?id=${id}`, {
    method: "GET",
    headers: { "Content-type": "application/json", cookie: cookieHeader },
  });

  return await res.json();
};

export default async function page({ params }: { params: { id: string } }) {
  const user = await auth();

  const { id } = await params;
  const data = await getData(id);

  return (
    <div>
      <SimpleEditorEdit cont={data} user={user}>
        <Mobilemenu user={user}/>
      </SimpleEditorEdit>
    </div>
  );
}
