"use strict";

var notes = [];
var noteEdited = false;
window.onload = function (){
    var paragraph = document.createElement("h2");
    paragraph.innerText = "Not-A-Pad by DrMayx.";
    var panel = document.getElementById("panel");
    var usage = document.createElement("p");
    usage.innerHTML = "<b>DoubleClick on notes title or description to change it.<br>Rightclick on it to save.";
    panel.appendChild(paragraph);
    panel.appendChild(usage);
    addNoteButton();
    //window.addEventListener("keypress", this.handleKeyPress);
};

var draw = function(){
    //background(100,200,237);
    // for(var i = 0; i<notes.length; i++){
    //     notes[i].show();
    // }
};
var addNoteButton = function() {
    var button = document.createElement("input");
    button.onclick=createNewNote;
    button.type="button";
    button.id="createNewNoteButton";
    button.value="Create new note";
    document.getElementById("panel").appendChild(button);
};

var createNewNote = function(){
    console.log("creating new note...");
    var n = new Note();
    n.show();
    notes.push(n);
};

var getNote = function(noteId){
    for(var i = 0; i < notes.length; i++){
        if(notes[i].id===noteId){
            return notes[i];
        }
    }
    return undefined;
};

var getEditedNoteId = function(){
    return getEditedNote().id;
}

var getEditedNote = function (){
    return document.getElementById("titleEdit").parentElement.parentElement.parentElement.parentElement.parentElement;
}
