"use client"

import imageCompression from "browser-image-compression";

export async function compressImage(file: File) {
  const options = {
    maxSizeMB: 0.8, // 400 KB target
    maxWidthOrHeight: 1600, // Resize large photos
    useWebWorker: true,
    initialQuality: 0.92,
  };


  const compressedFile = await imageCompression(file, options);

  return compressedFile;
}
