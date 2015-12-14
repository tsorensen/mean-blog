var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema   = new Schema({
    title: String,
    author: String,
    category: String,
    date: { type: Date, default: Date.now },
    image: String,
    body: String
});

module.exports = mongoose.model('Article', ArticleSchema);
