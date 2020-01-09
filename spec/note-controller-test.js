
(function(exports) {

  function testUpdateList() {

    var note1 = new Note("Favourite drink: Seltzer", 0)
    var note2 = new Note("Favourite food: Gruel", 1)

    function NoteListViewMock() {}
     NoteListViewMock.prototype.all = function() { return [note1, note2] }

    var noteListView = new NoteListViewMock();
    var noteController = new NoteController(noteListView)

    var element = {innerHTML: "Not changed"}
    noteController.updateList(element);

    assert.isTrue(element.innerHTML === "<ul><li><a href='http://localhost:8080#notes/0'>Favourite drink: Sel...</a></li><li><a href='http://localhost:8080#notes/1'>Favourite food: Grue...</a></li></ul>");
  }

  testUpdateList();

})(this);
