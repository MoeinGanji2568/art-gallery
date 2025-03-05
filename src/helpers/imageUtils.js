export const handleImageError = (
  event,
  fallbackImage = "/assets/images/not-found/notFound-images.png"
) => {
  event.target.src = fallbackImage;
  event.target.alt = "notFound image";
};
