import config from "./config.js";

async function loadPicture(idPicture) {
  try {
    const response = await fetch(config.URLAPI + "/photos/" + idPicture, { credentials: 'include' });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

export default {
  loadPicture: loadPicture
}