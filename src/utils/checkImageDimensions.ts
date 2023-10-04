interface ImageDimensions {
  width: number;
  height: number;
}

export const checkImageDimension = (
  file: File,
  { width, height }: ImageDimensions,
  checkIsAllowed: Function
) => {
  const img = new Image();

  img.src = URL.createObjectURL(file);
  img.onload = () => {
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    if (imgWidth !== width || imgHeight !== height) {
      checkIsAllowed(false);
      return;
    }
    checkIsAllowed(true);
    return;
  };

  return;
};
