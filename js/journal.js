var moment = require('moment');

exports.Journal = function(title, entry) {
  this.title = title;
  this.entry = entry;
};

//word count multiplier
exports.Journal.prototype.wordCount = function() {
bodyCount = this.entry.split(' ').length;
return bodyCount;
};

//date
exports.Journal.prototype.date = function() {
  return moment().format("MMM do YY");
};
