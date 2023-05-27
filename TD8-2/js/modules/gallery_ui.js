import config from "./config.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  photosElt.innerHTML = "";
  console.log(photosElt);
  gallery.photos.forEach(photo => {
    console.log(photo);

    const vignetteDiv = document.createElement("div");
    vignetteDiv.classList.add("vignette");

    const imgLink = document.createElement("a");
    imgLink.href = "#image-container";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("data-photoId", photo.photo.id);
    imgElement.src = config.URLbase + photo.photo.thumbnail.href;

    imgElement.addEventListener("click", () => {
      console.log(photo.links.self.href);
      document.querySelector("#image-view > img").src = config.URLbase + photo.photo.original.href;
      document.querySelector("#image-container > h2").innerHTML = photo.photo.titre;
    });

    vignetteDiv.appendChild(imgLink);
    imgLink.appendChild(imgElement);
    photosElt.appendChild(vignetteDiv);
  });
}

export default {
  displayGallery: displayGallery
}