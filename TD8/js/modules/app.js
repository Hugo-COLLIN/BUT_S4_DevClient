import photoloader from "./photoloader.js";

export function getPicture(id) {
  let picture = photoloader.loadPicture(id);
  return picture;
}

export default {
  getPicture: getPicture
}