(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.show = function() {
    var list = this.noteList.all().reduce((res, x) => { return res + "<li><a href='http://localhost:8080#notes/" + x.getId() + "'>" + x.get().slice(0, 20) + "...</a></li>"; }, "");
    return "<ul>" + list + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this)
