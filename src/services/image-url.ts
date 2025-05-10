import no_image from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageURL = (url: string) => {
  if (!url) return no_image;
  return url.replace("/media/games/", "/media/crop/600/400/games/");
};

export default getCroppedImageURL;
