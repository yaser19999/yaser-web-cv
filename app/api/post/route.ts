import { auth } from "@/auth";
import connectdb from "@/lib/connectdb"
import { Blog } from "@/models/blogs"
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server"





export async function GET(req: NextRequest) {

  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Blog ID is required" },
      { status: 400 }
    )
  }

  try {
    await connectdb()

    const data = await Blog.findOne({ _id: id })

    if (!data) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      )
    }



    return NextResponse.json(data, { status: 200 })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}



export async function POST(req: Request) {
  const user = await auth();

  if (!user) return NextResponse.json({ message: "no user found", status: 401 })



  try {
    await connectdb();
    const { title, content, tags, userId, titleImge, postId } = await req.json()

    if (userId.toString() !== user.user?.id) {
      return NextResponse.json({ message: "Not authorized", status: 403 });
    }

    const updatedPost = await Blog.findByIdAndUpdate(
      postId,
      {
        $set: { titleImge, title, content, tags, userId },
      },
      { new: true }
    )
    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found", status: 404 });
    }
    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}


export async function DELETE(req: Request) {
  const user = await auth();

  const { post } = await req.json()


  if (!user) return NextResponse.json({ message: "no user found", status: 401 })


  if (user.user?.id !== post.userId) return NextResponse.json({ message: "user not authorized", status: 403 })



  try {
    const deleteCount = await Blog.deleteOne({ _id: post._id });
    if (deleteCount.deletedCount === 1) {
      revalidatePath("/documentedCases");
      return NextResponse.json({ message: "Post deleted successfully", status: 200 });
    }
    


  } catch (error) {
    console.log(error)
    return NextResponse.json({ error, status: 500 })

  }

}