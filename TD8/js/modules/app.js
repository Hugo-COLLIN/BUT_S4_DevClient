import photoloader from "./photoloader.js";

export function getPicture(id) {
  const picture = photoloader.loadPicture(id);
  return picture;
}

export async function getImageCategory(imageData) {
  const uri = imageData.links.categorie.href;
  const categoryData = await photoloader.loadResource(uri);
  return categoryData;
}

export default {
  getPicture: getPicture
}