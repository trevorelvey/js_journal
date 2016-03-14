var Journal = require('./../js/journal.js').Journal;


$(document).ready(function() {
  $('form#journal').submit(function(event) {
    var title = $('input#title').val();
    var entry = $('textarea#entry').val();
    var journal = new Journal(title, entry);
    var wordCount = journal.wordCount();
    var timeStamp = journal.date();
    $('#userTitle').empty();
    $('#userEntry').empty();
    $('#wordCount').empty();
    $('#userTitle').append(title);
    $('#userEntry').append(entry);
    $('#wordCount').append(wordCount);
    $('#timeStamp').append(timeStamp);
    event.preventDefault();
  });
});
