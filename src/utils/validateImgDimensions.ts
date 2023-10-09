export const validateImgDimensions = (
    file: File,
    expectedWidth: number,
    expectedHeight: number
  ): Promise<true | string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
  
      img.onload = () => {
        if (img.width === expectedWidth && img.height === expectedHeight) {
          resolve(true);
        } else {
          resolve(
            `Розмір зображення повинен бути ${expectedWidth}x${expectedHeight}px`
          );
        }
      };
  
      img.onerror = () => {
        resolve('Не вдалося зчитати розміри зображення');
      };
    });
  };