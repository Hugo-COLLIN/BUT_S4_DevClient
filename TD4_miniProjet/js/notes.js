/*
--- Classe Note ---
 */

function Note (titre, contenu)
{
    this.titre = titre;
    this.contenu = contenu;
    this.date_creation = new Date();
}

Note.prototype.setTitle = function (titre) {
    this.titre = titre;
}

Note.prototype.setContent = function (contenu) {
    this.contenu = contenu;
}

/*
--- Classe NoteView ---
 */

function NoteView (note)
{
    this.noteMd = note;
    this.noteHtml = "";
}

NoteView.prototype.convMd2Html = function ()
{
    let conv = new showdown.Converter();
    this.noteHtml = conv.makeHtml(this.noteMd.contenu);
}

NoteView.prototype.HtmlIntoDom = function ()
{
    let elt = document.querySelector("#currentNoteView");
    elt.innerHTML(this.noteHtml);
}

/*
--- Objet NoteFormView ---
 */


let noteFormView = {
    form: document.querySelector(".create_edit_note"),

    display: function () {
        this.form.classList.remove("create_edit_note-hidden");
    },

    hide: function () {
        this.form.classList.add("create_edit_note-hidden");
    },

    validate: function () {
        //form.
    }
};