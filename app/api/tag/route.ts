import { auth } from "@/auth"
import connectdb from "@/lib/connectdb"
import { tag } from "@/models/tag";
import { NextResponse } from "next/server"

export async function GET() {
    

    try {
        await connectdb()

        const data = await tag.find()


        return NextResponse.json({ message: "sucsess", data }, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error, status: 500 })

    }

}