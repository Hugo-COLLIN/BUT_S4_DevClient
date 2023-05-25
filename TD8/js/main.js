import {getPicture} from "./modules/app.js";
import ui from "./modules/ui.js";
import config from "./modules/config.js";


document.addEventListener('DOMContentLoaded', () => {
  getPicture(105).then( (picture) => {
    console.log(picture);
    console.log(picture.photo.titre);
    console.log(picture.photo.url.href);
    console.log(picture.type);
    ui.displayPicture(picture)
  });
});