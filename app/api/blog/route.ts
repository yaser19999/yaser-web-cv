import { auth } from "@/auth"
import connectdb from "@/lib/connectdb"
import { Blog } from "@/models/blogs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const user = await auth();

  if (!user) return NextResponse.json({ message: "no user found", status: 401 })




  try {
    await connectdb();
    const { title, content, tags, userId, titleImge , userEmail } = await req.json()
    if (!user.user?.id === userId) return NextResponse.json({ message: "current user not the owner of the post", status: 403 })
    await Blog.create({
      titleImge: titleImge,
      title: title,
      content: content,
      tags: tags,
      userId: userId,
      userEmail: userEmail
    })

    return NextResponse.json({ status: 200 })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}


export async function GET() {

  try {
    await connectdb()

    const data = await Blog.find()

    return NextResponse.json({ message: "done", data }, { status: 200 })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}