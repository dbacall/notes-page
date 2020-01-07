
(function(exports) {

  function testUpdateList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    var element = {innerHTML: "Not changed"}
    noteController.updateList(element);
  
    assert.isTrue(element.innerHTML === "<ul><li><a href='http://localhost:8080#notes/0'>Favourite drink: Sel...</a></li></ul>");
  }

  function testLinkToFullNote() {
    
  }

  testUpdateList();

})(this);
