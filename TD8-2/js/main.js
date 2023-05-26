import {getPicture, getImageCategory, getImageComments} from "./modules/app.js";
import gallery_ui from "./modules/gallery_ui.js";
import gallery from "./modules/gallery.js";

document.querySelector("#load_gallery").addEventListener("click", () => {
  gallery.load().then((gallery) => {
    console.log(gallery);
    gallery_ui.displayGallery(gallery);
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   // gallery.load().then( (gallery) => {
//   //   console.log(gallery);
//   //   gallery_ui.displayGallery(gallery);
//   // });
//
//   // getPicture(105).then( (picture) => {
//   //
//   //   ui.displayPicture(picture);
//   //   getImageCategory(picture).then( (category) => {
//   //     ui.displayCateg(category);
//   //   });
//   //   getImageComments(picture).then( (comments) => {
//   //     ui.displayComments(comments);
//   //   });
//   // });
// });