import { NextRequest, NextResponse } from 'next/server'
import { deleteImageByUrl, uploadToCloudinary } from '@/lib/cloudinary-server'

export async function POST(request: NextRequest) {

  try {
    const  base64  = await request.formData()
    if (!base64) {
      return NextResponse.json({ error: "No base64 provided" }, { status: 400 })
    }

    // if (existingUrl) await deleteImageByUrl(existingUrl)
    const uploadResult = await uploadToCloudinary(base64)
    return NextResponse.json(uploadResult)
  } catch (error) {
    console.error(error)

  }
}



export async function DELETE(request: NextRequest) {
  try {
    const { url, titleImge } = await request.json()
    

    if (url) await deleteImageByUrl(url)
    if (titleImge) await deleteImageByUrl(titleImge)

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error(error)
  }
}


