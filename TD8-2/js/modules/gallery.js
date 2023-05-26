import photoloader from "./photoloader.js";

async function load() {
  const uri = "/www/canals5/phox/api/photos";
  const gallery = await photoloader.loadResource(uri);
  return gallery;
}

export default {
  load: load,
}