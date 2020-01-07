
(function (exports) {
  function testPutsNoteInsideDiv() {
    var note = new Note("Hello world");
    var singleNoteView = new SingleNoteView(note)
    assert.isTrue( singleNoteView.makeDiv() === "<div>Hello world</div>")
  }

  testPutsNoteInsideDiv();
})(this);