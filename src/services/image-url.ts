const getCroppedImageUrl = (url: string) => {
  console.log("Old URL: ");
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const newURL = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  console.log("New URL: ");
  return newURL;
};

export default getCroppedImageUrl;
