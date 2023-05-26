import config from "./config.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  gallery.photos.forEach(photo => {
    photosElt.innerHTML += `
    <div class="vignette" >
      <img data-photoId = "${photo.photo.id}"
        src="${config.URLbase + photo.photo.thumbnail.href}">
    </div>
    `
  });
}

export default {
  displayGallery: displayGallery
}