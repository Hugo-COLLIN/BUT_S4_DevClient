import photoloader from "./photoloader.js";

async function load() {
  const uri = "/www/canals5/phox/api/photos";
  const gallery = await photoloader.loadResource(uri);
  return gallery;
}

async function loadPrev(gallery) {
  const uri = gallery.links.prev.href;
  const galleryPrev = await photoloader.loadResource(uri);
  return galleryPrev;
}

async function loadNext(gallery) {
  const uri = gallery.links.next.href;
  const galleryNext = await photoloader.loadResource(uri);
  return galleryNext;
}

export default {
  load: load,
  loadPrev: loadPrev,
  loadNext: loadNext
}