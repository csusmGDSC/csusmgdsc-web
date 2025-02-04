import { useEffect, useState } from "react";

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
