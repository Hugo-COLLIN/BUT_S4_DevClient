import config from "./config.js";

function loadPicture(idPicture)
{
  try {
    return fetch(config.URLAPI + "/photos/" + idPicture);
  }
  catch (error) {
    console.error(error);
  }
}

export default {
  loadPicture: loadPicture
}