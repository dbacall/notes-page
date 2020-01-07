
(function(exports){
  function NoteList() {
    this.notes = [];
    this.noteId = 0
  }

  NoteList.prototype.all = function() {
    return this.notes;
  }

  NoteList.prototype.add = function(text) {
    this.notes.push(new Note(text, this.noteId));
    this.noteId ++
  }

  NoteList.prototype.getById = function(id) {
    console.log(id)
    console.log(this.notes[id])
    return this.notes[id].get()
  }

  exports.NoteList = NoteList; 
})(this);
