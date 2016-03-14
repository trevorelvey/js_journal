var Journal = require('./journal.js').Journal;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = ('#title').val();
    var output = journal(title, entry);
    output.forEach(function(element) {
      $('#userTitle').append(element);
      $('#userEntry').append(element);
    });
  });
});
