import photoloader from "./photoloader.js";

export async function getPicture(id) {
  let picture = await photoloader.loadPicture(id);
  return picture;
}

export default {
  getPicture: getPicture
}