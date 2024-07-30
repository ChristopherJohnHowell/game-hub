const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  if (!url) return;
  const index = url.indexOf(target) + target.length;
  const newURL = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newURL;
};

export default getCroppedImageUrl;
