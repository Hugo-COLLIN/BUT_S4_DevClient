'use strict'
//Exercice 1
//1
function range(a, b)
{
    if (typeof a != "number" || typeof b != "number") return NaN;

    let x, y;
    if (a < b)
    {
        x = a; y = b;
    }
    else
    {
        x = b; y = a;
    }

    let tab = [];
    for (let i = x ; i <= y ; i ++)
        tab.push(i);

    return tab;
}

//2
function minmax(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let min = Math.min(...t);
    let max = Math.max(...t);
    return {min: min, max: max};
}

//3
function sum(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let res = 0;
    for (let tElement of t)
    {
        if (typeof tElement === "number")
            res += tElement;
        else
            //throw new Error("Element \"" + tElement + "\" is not a number");
            return NaN;
    }
    return res;
}

function sumFE(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let res = 0;
    t.forEach((tElement) => {
        if (typeof tElement === "number")
            res += tElement;
        //else return NaN; //sort juste du forEach(), donc la f° retourne la somme des autres nbr du tableau
        else throw new Error("Element \"" + tElement + "\" is not a number");
    });
    return res;
}

//4
function moy(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let sum = 0;
    let count = 0;
    for (let tElement of t)
    {
        if (typeof tElement === "number") {
            sum += tElement;
            count ++;
        }
        else
            //throw new Error("Element \"" + tElement + "\" is not a number");
            return NaN;
    }
    return sum/count;
}

function moyFE(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let sum = 0;
    let count = 0;
    t.forEach((tElement) => {
        if (typeof tElement === "number")
        {
            sum += tElement;
            count ++;
        }
        else throw new Error("Element \"" + tElement + "\" is not a number");
    });
    return sum/count;
}


//5
function catalog(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let res = [];
    let url;
    t.forEach((tElement) => {
        url = "http://www.cata.log/products/" + tElement;
        res.push(url);
    });
    return res;
}

//6
function htmlCatalog(t)
{
    if (!Array.isArray(t)) throw new Error("Needs to be an array");
    let tabCatalog = catalog(t);
    let res = "<div class=\"cata\">\n<ul>\n";
    let line;
    for (let i = 0 ; i < t.length ; i ++)
        res += "<li><a href=\"" + tabCatalog[i] + "\">" + t[i] + "</a></li>\n";
    res += "</ul>\n</div>"
    return res;
}

//Exercice 2
//1
function createObj(t)
{
    if (!Array.isArray(t)) throw new Error("Parameter needs to be an array");
    let l = t.length;
    let s = sum(t);
    let m = moy(t);
    return {length:l, sum:s, avg:m};
}

//2
let serieTv = {
    titre:"Malcolm",
    descriptif:"Malcolm est un jeune garçon qui doit supporter ses parents",
    dateCreation: new Date(),
    nbSaisons: 5,
    createur:"Lloyd",
    acteurs: [],
    episodes: []
}

//3
function acteurAjout(serie, nomActeur)
{
    if (typeof serie != "object") throw new Error("Parameter needs to be an array");
    serie.acteurs.push(nomActeur);
}

function countActeurs(serie)
{
    return serie.acteurs.length;
}

//4
function showActeur(serie)
{
    let res = "Serie " + serie.titre + " créee par " + serie.createur + " en " + serie.dateCreation.getFullYear();
    console.log(res);
}

//5
function Serie(t,d,dC,nS,c)
{
    this.titre = t;
    this.desc = d;
    this.dateCreation = dC;
    this.nbSaisons = nS;
    this.createur = c;
    this.acteurs = [];
    this.episodes = [];

    // this.ajouterActeur = function(nomActeur) {
    //     this.acteurs.push(nomActeur);
    // }
}

Serie.prototype.ajouterActeur = function(nomActeur)
{
    this.acteurs.push(nomActeur);
}

Serie.prototype.getNbActeurs = function () {
    return this.acteurs.length;
}

/*
Serie.prototype.afficherSerie = function () {
    let res = "Serie " + this.titre + " créee par " + this.createur + " en " + this.dateCreation.getFullYear();
    console.log(res);
}
 */

let maFamilleDabord = new Serie("Ma famille d'abord", "Une famille déjantée.", new Date(), 8, "Warner");

//6
function Episode(t, nS, nE, desc, dur) {
    this.titre = t;
    this.noSaison = nS;
    this.noEpisode = nE;
    this.description = desc;
    this.duree = dur;
}

Episode.prototype.afficherEpisode = function () {
    let res = "\tEpisode S" + this.noSaison + "x" + this.noEpisode + " : " + this.titre + " (" + this.duree + "min)";
    console.log(res);
}

let episodeTest = new Episode("Les jumeaux", 1, 3, "2 jumeaux", 33);
let episode2 = new Episode("Les triplées", 1, 4, "des triplées", 20);


//7
Serie.prototype.ajouterEpisode = function(episode)
{
    this.episodes.push(episode);
}

Serie.prototype.afficherSerie = function () {
    let res = "Serie " + this.titre + " créee par " + this.createur + " en " + this.dateCreation.getFullYear();
    console.log(res);
    for (let episode of this.episodes) {
        episode.afficherEpisode();
    }
}

//8
Serie.prototype.dureeTotale = function ()
{
    let dureeTot = 0;
    for (let ep of this.episodes) {
        dureeTot += ep.duree;
    }
    console.log(dureeTot);
}

Serie.prototype.dureeMoyenne = function ()
{
    let dureeMoy = 0;
    let c = 0;
    for (let ep of this.episodes) {
        dureeMoy += ep.duree;
        c ++;
    }
    dureeMoy /= c;
    console.log(dureeMoy);
}