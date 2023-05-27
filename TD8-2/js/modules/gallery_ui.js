import config from "./config.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  photosElt.innerHTML = "";
  console.log(photosElt);
  gallery.photos.forEach(photo => {
    console.log(photo)
    photosElt.innerHTML += `
    <div class="vignette" >
      <img data-photoId = "${photo.photo.id}" src="${config.URLbase + photo.photo.thumbnail.href}">
    </div>
    `;
    photosElt.addEventListener("click", () => {
      console.log(photo.links.self.href)
      document.querySelector("#image-view > img").src = config.URLbase + photo.photo.original.href;
    });
  });
}

export default {
  displayGallery: displayGallery
}