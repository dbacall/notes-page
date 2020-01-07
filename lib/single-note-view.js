
(function(exports){
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.makeDiv = function() {
    return "<div>" + this.note.get() + "</div>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this);