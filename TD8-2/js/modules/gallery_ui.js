import config from "./config.js";
import ui from "./ui.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  photosElt.innerHTML = "";
  console.log(photosElt);
  gallery.photos.forEach(photo => {
    console.log(photo);

    const vignetteDiv = document.createElement("div");
    vignetteDiv.classList.add("vignette");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("data-photoId", photo.photo.id);
    imgElement.src = config.URLbase + photo.photo.thumbnail.href;

    imgElement.addEventListener("click", () => {
      ui.displayPicture(photo);
    });

    vignetteDiv.appendChild(imgElement);
    photosElt.appendChild(vignetteDiv);
  });
}

export default {
  displayGallery: displayGallery
}