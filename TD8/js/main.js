import {getPicture} from "./modules/index.js";


document.addEventListener('DOMContentLoaded', () => {
  getPicture(105).then( (picture) => {
    console.log(picture);
    // console.log(picture.title);
    console.log(picture.url);
    console.log(picture.type);
  });
});