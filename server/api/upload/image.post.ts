import { v2 as cloudinary } from "cloudinary";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
    secure: true,
  });

  const uploadImg = await cloudinary.uploader.upload(body?.logoURL);
  const uploadedImgURL = await uploadImg?.secure_url;

  return {
    logoUrl: uploadedImgURL,
  };
});
