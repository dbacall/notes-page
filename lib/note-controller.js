
(function(exports) {

  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
    noteList.add("Favourite drink: Seltzer")
    noteList.add("Favourite food: Gruel")
  };

  NoteController.prototype.updateList = function(element = document.getElementById('app')){
    element.innerHTML = this.noteListView.show();
  };

  NoteController.prototype.getNoteById = function(id) {
    return this.noteListView.noteList.getById(id)
  }

  exports.NoteController = NoteController;
})(this);



