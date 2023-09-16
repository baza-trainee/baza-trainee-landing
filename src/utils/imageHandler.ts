import { errorHandler } from './errorHandler';

export const createImgUrl = (imgName: string) =>
  process.env.NEXT_PUBLIC_PROXY_URL! +
  process.env.NEXT_PUBLIC_SERVER_URL! +
  '/files/' +
  imgName;

export const downloadImageAsFile = async (imgName: string) => {
  const imageUrl = createImgUrl(imgName);

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new File([blob], imgName, { type: blob.type });
  } catch (err) {
    errorHandler(err);
  }
};
