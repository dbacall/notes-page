(function(exports) {
  function testNoHtmlNotes() {
    var noteListView = new NoteListView(new NoteList());

    assert.isTrue( noteListView.show() === "<ul></ul>" );
  }

  function testHasOneHtmlNote() {
    var noteList = new NoteList();
    noteList.add("hello world, how you doing?");

    var noteListView = new NoteListView(noteList);)

    assert.isTrue( noteListView.show() === "<ul><li><a href='http://localhost:8080#notes/0'>hello world, how you...</a></li></ul>" );
  }

  function testHasTwoHtmlNote() {
    var noteList = new NoteList();
    noteList.add("hello world, how you doing?");
    noteList.add("bye world I've had enough of you now");

    var noteListView = new NoteListView(noteList);

    assert.isTrue( noteListView.show() === "<ul><li><a href='http://localhost:8080#notes/0'>hello world, how you...</a></li><li><a href='http://localhost:8080#notes/1'>bye world I've had e...</a></li></ul>" );
  }

  testNoHtmlNotes();
  testHasOneHtmlNote();
  testHasTwoHtmlNote();
})(this);
