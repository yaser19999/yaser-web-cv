"use client"

import imageCompression from "browser-image-compression";

export async function compressImage({file , type}:{file:File, type:string}) {
  // For featured images (larger, better quality)
  const options = {
    maxSizeMB: 0.8, // 400 KB target
    maxWidthOrHeight: 1600, // Resize large photos
    useWebWorker: true,
    fileType: 'image/webp',
    initialQuality: 0.92,
  };

  // For blog thumbnails (small, high compression)
const thumbnailOptions = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 500,
  useWebWorker: true,
  fileType: 'image/webp',
  initialQuality: 0.90 ,
};


  const compressedFile = await imageCompression(file, type === "mainPic" ? options : thumbnailOptions);

  return compressedFile;
}
