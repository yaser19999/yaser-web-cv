import { auth } from "@/auth"
import connectdb from "@/lib/connectdb"
import { Blog } from "@/models/blogs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request) {
  const user = await auth();

  if (!user) return NextResponse.json({ message: "no user found", status: 401 })




  try {
    await connectdb();
    const { title, content, tags, userId, titleImge, userEmail } = await req.json()
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


export async function GET(req: NextRequest) {
  // const url = req.nextUrl.searchParams.get("tag")
  const { searchParams } = new URL(req.url)
  const tag = searchParams.get("tag");
  const page = Number(searchParams.get("page")) || 1;
  const limit = 12;

  try {
    await connectdb()

    if (tag && tag !=="All") {
      const data = await Blog.find({
        "tags.value": tag
      }).limit(limit).skip((page - 1) * limit)

      const count = await Blog.find({
        "tags.value": tag
      }).countDocuments()

      return NextResponse.json({ message: "done", data , count , limit}, { status: 200 })

    } else {
      const data = await Blog.find().limit(limit).skip((page - 1) * limit)
      const count = await Blog.countDocuments()
      return NextResponse.json({ message: "done", data , count , limit}, { status: 200 })

    }

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}