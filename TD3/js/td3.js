//Ex1
/*
function logClick()
{
    console.log("click !!?!")
}

window.addEventListener("DOMContentLoaded", () => {
    let ex1 = document.querySelector("#ex1");
    ex1.addEventListener("click", (event) => {
        logClick();
    })
});
*/
// appliquer un événement sur un élément du DOM une fois qu'il est entièrement chargé


//Ex2
/*
function updateButtonClass(e) {
    e.currentTarget.classList.toggle("c2");
    e.currentTarget.classList.toggle("c1");
}
//<!> pour "overwrite" les props css d'un élément, d'abord enlever la classe css qui donne les props en plus d'ajouter la nouvelle

window.addEventListener("DOMContentLoaded", () => {
    let ex1 = document.querySelector("#ex1");
    ex1.addEventListener("click", (event) => {
        updateButtonClass(event);
    })
});
*/

//Ex3
function insertList(parentNode, count) {
    let tag = document.createElement("li");

    let idName = "elt" + count;
    tag.setAttribute("id", idName);

    let textNode = "click button : " + count;
    let node = document.createTextNode(textNode);

    tag.appendChild(node);
    parentNode.appendChild(tag);

}

window.addEventListener("DOMContentLoaded", () => {
    let ex1 = document.querySelector("#ex1");

    let count = 0;
    let ex3 = document.querySelector("#ex3");

    ex1.addEventListener("click", (event) => {
        insertList(ex3, ++ count);
    })
});

//Ex4
function clearList (parentNode)
{
    /*
    var child = parentNode.lastElementChild;
    while (child)
    {
        parentNode.removeChild(child);
        child = parentNode.lastElementChild;
    }
     */
    parentNode.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
    let ex4 = document.querySelector("#ex4");

    let ex3 = document.querySelector("#ex3");

    ex4.addEventListener("click", (event) => {
        clearList(ex3);
    })
});


//Ex5
function incrInputValue (node, count)
{
    node.setAttribute("value", count);
}

window.addEventListener("DOMContentLoaded", () => {
    let ex5b = document.querySelector("#ex5b");

    let count = 0;
    let ex5i = document.querySelector("#ex5i");

    ex5b.addEventListener("click", (event) => {
        incrInputValue(ex5i, ++ count);
    })
});