
(function(exports) {

  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.updateList = function(element = document.getElementById('app')){
    element.innerHTML = this.noteListView.show();
  };

  NoteController.prototype.getNoteById = function(id) {
    return this.noteListView.noteList.getById(id)
  }

  NoteController.prototype.makeUrlChangeShowNote = function () {
      window.addEventListener("hashchange", showNoteForCurrentPage);
  
      function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
      };
  
      function getNoteFromUrl(location) {
        var id = location.hash.slice(-1)
        return noteController.getNoteById(id);
      };
  
      function showNote(note) {
        document.getElementById("app").innerHTML = note;
      };
  }

  NoteController.prototype.submitNote = function() {
    var noteController = this; 
    document.getElementById('text').addEventListener('submit', function(event){
      event.preventDefault();
      noteController.noteListView.noteList.add(document.getElementById('note').value)
      noteController.updateList()
    })
  }

  exports.NoteController = NoteController;
})(this);


