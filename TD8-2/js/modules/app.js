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

export async function getImageComments(imageData) {
  const uri = imageData.links.comments.href;
  const commentsData = await photoloader.loadResource(uri);
  return commentsData;
}