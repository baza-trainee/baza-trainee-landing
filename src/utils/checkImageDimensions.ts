interface ImageDimensions {
  maxWidth: number;
  maxHeight: number;
}

export const checkImageDimension = (
  file: File,
  { maxWidth, maxHeight }: ImageDimensions,
  checkIsAllowed: Function
) => {
  const img = new Image();

  img.src = URL.createObjectURL(file);
  img.onload = () => {
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    if (width > maxWidth || height > maxHeight) {
      checkIsAllowed(false);
      return;
    }
    checkIsAllowed(true);
    return;
  };

  return;
};
