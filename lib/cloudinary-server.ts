// lib/cloudinary-server.ts
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadToCloudinary(base64: FormData) {

  if (base64.get('imge')) {

    const file = base64.get('imge') as File

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = `data:${file.type};base64,${buffer.toString('base64')}`;
    
    const result = await cloudinary.uploader.upload(base64String , {
      resource_type: 'image',
    })
    return result


  }else{
    console.log("moootheerr fkeerrr****")
  }

}



export async function deleteImageByUrl(url: string) {
  // Extract public ID from URL
  const afterUpload = url.split("/upload/")[1]; // v1762911406/555_sfld6v.png
  const parts = afterUpload.split("/");          // ["v1762911406", "555_sfld6v.png"]
  const fileWithExt = parts[parts.length - 1];   // "555_sfld6v.png"
  const publicId = fileWithExt.substring(0, fileWithExt.lastIndexOf(".")); // "555_sfld6v"

  console.log("Public ID:", publicId);

  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Delete result:", result);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}
