'use strict'

class Note{
    constructor(titre,texte) {
        this.titre = titre;
        this.texte = texte;
        this.dateCrea = new Date();
    }
    setTitre(titre){
        this.titre = titre;
    }
    setContenu(texte){
        this.texte = texte;
    }
}

class NoteView{
    constructor(note) {
        this.note = note;
    }
    convertir(){
        let conv = new showdown.Converter();
        return  conv.makeHtml(this.note.texte);
    }
    afficher(){
        let htmlTexte = this.convertir();
        document.querySelector('#currentNoteView').innerHTML = `<h1>${htmlTexte}
        </h1> <p>${htmlTexte}</p>`;
    }
}

let noteListMenuView = {
    displayItem(note){
        let section_noteList = document.querySelector("#noteListMenu");
        let p = document.createElement("div");
        p.setAttribute("class","note_list_item");

        let titre = note.titre;
        if(note.titre === ""){
            titre = "Titre";
        }


        let titre_noteList = document.createTextNode(titre);
        p.appendChild(titre_noteList);
        section_noteList.appendChild(p);

    }
}


let noteFormView = {
    display(){
        console.log('display');
        document.querySelector('#noteForm').classList.remove('create_edit_note-hidden');
    },
    hide(){
        console.log('hide');
        document.querySelector('#noteForm').classList.add('create_edit_note-hidden');
    },
    validate() {
        console.log('validate');
        let titre = document.querySelector('#form_add_note_title').value;
        let texte = document.querySelector('#form_add_note_text').value;
        let note = new Note(titre, texte);


        //
        etatGlobal.indexNoteCourante = etatGlobal.listNote.addNote(note)
        noteListMenuView.displayItem(note);


        //

        let vueNote = new NoteView(note);
        vueNote.afficher()
    }
}

let mainMenuView = {
    addHandler() {
        console.log('click add');
        noteFormView.display();
    },
    init(){
        console.log('init menu');
        document.querySelector('#add').onclick = this.addHandler;
        document.querySelector('#form_add_note_valid').onclick = noteFormView.validate;
    }
}

let etatGlobal = {
    listNote : null,
    indexNoteCourante : null,

    init(){
        mainMenuView.init();
        etatGlobal.listNote = new NoteList();
        document.querySelector('#noteListMenu').onclick =
            function (e){
                let nodes = e.currentTarget.childNodes;
                for(let i = 0; i < nodes.length ; i++){
                    nodes[i].classList.remove('note_list_item-selected');
                    if(nodes[i] === e.target){
                        let note = etatGlobal.listNote.getNoteById(i);
                        let vueNote = new NoteView(note);
                        vueNote.afficher();
                    }
                }
                e.target.classList.add('note_list_item-selected');

            };
    }
}

class NoteList{
    constructor() {
        this.list = [];
    }
    addNote(note){
        this.list.push(note);
        return this.list.length - 1;
    }
    getNoteById(i){
        return this.list[i];
    }
    getList(){
        return this.list;
    }
}









window.onload = etatGlobal.init;

