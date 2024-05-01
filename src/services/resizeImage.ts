import noImage from "../assets/Image_not_available.png"

const resizeImgeUrl = (imageUrl: string) => {
   if(!imageUrl) return noImage
   const target = "media/"
   const index = imageUrl.indexOf(target) + target.length
   return imageUrl.slice(0, index) + "crop/600/400/"+ imageUrl.slice(index);
};

export default resizeImgeUrl 