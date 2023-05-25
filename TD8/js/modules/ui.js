import config from "./config.js";


function displayPicture(img)
{
  console.log(img)
  console.log(config.URLbase + "/" + img.photo.url.href);
  document.querySelector("#photo > h1").innerHTML = "Photo: " + img.photo.id;
  document.querySelector("#la_photo > img").src = config.URLbase + "/" + img.photo.url.href;
  document.querySelector("#la_photo > h4").innerHTML = img.photo.titre;
  document.querySelector("#la_photo > h4").innerHTML = img.photo.titre;
  document.querySelector("#la_photo > p:nth-of-type(1)").innerHTML = img.photo.descr;
  document.querySelector("#la_photo > p:nth-of-type(2)").innerHTML = img.photo.type + ", " + img.photo.width + "x" + img.photo.height;
  // document.querySelector("#la_categorie").innerHTML = "Catégorie: " + img.links.categorie.href;
  // document.querySelector("#les_commentaires").innerHTML = "Catégorie: " + img.links.categorie.href;
}

function displayCateg(categ)
{
  console.log(categ)
  document.querySelector("#la_categorie").innerHTML = "Catégorie: " + categ.categorie.nom;
}

export default {
  displayPicture: displayPicture,
  displayCateg: displayCateg
}