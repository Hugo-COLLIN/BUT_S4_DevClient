import config from "./config.js";

function displayGallery(gallery) {
  const photosElt = document.querySelector("#gallery_container");
  photosElt.innerHTML = "";
  gallery.photos.forEach(photo => {
    photosElt.innerHTML += `
    <div class="vignette" >
      <img data-photoId = "${photo.photo.id}" src="${config.URLbase + photo.photo.thumbnail.href}">
    </div>
    `;
    photosElt.addEventListener("click", () => {
      document.querySelector("#image-view > img").src = photosElt.getAttribute("data-photoId");
    });
    // photo.onclick = () => {
    //   console.log(photo.photo.id);
    //   // document.querySelector("#photo > h1").innerHTML = "Photo: " + photo.photo.id;
    //   // document.querySelector("#la_photo > img").src = config.URLbase + "/" + photo.photo.url.href;
    //   // document.querySelector("#la_photo > h4").innerHTML = photo.photo.titre;
    //   // document.querySelector("#la_photo > p:nth-of-type(1)").innerHTML = photo.photo.descr;
    //   // document.querySelector("#la_photo > p:nth-of-type(2)").innerHTML = photo.photo.type + ", " + photo.photo.width + "x" + photo.photo.height;
    // }
  });
}

export default {
  displayGallery: displayGallery
}