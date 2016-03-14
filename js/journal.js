exports.Journal = function(title, entry) {
  this.title = title;
  this.entry = entry;
  this.date = date;
};

String.prototype.wordCount = function() {
  return this.entry //word count multiplier
};

String.prototype.date = function() {
  return moment().format("MMM do YY"); //date
};
