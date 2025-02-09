import { useEffect, useState } from "react";

/**
 * Given an image file or a string url, returns an object with `imagePreview` and `setImagePreview`.
 * `imagePreview` is a string url of the image, or null if the image is not provided.
 * `setImagePreview` is a function that sets `imagePreview` to the given string url.
 *
 * If the image is a file, a blob url is generated and cleaned up when the component is unmounted.
 *
 * @param image The image file or url to generate a preview for.
 * @returns An object with `imagePreview` and `setImagePreview`.
 */
export function useImagePreview(image: File | string | undefined) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (image instanceof File) {
      const imageUrl = URL.createObjectURL(image);
      setImagePreview(imageUrl);
      return () => URL.revokeObjectURL(imageUrl);
    }
    if (typeof image === "string") {
      setImagePreview(image);
    }
  }, [image]);

  return {
    imagePreview,
    setImagePreview,
  };
}
