var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:1234@ds053184.mongolab.com:53184/mean-blog');
var Article = require('./../models/article');

exports.findAll = function(req, res) {
    //res.json({ message: 'api test message' });
    Article.find(function(err, articles) {
        if (err) {
            res.send(err);
        }
        console.dir(articles);
        res.json(articles);
    });
};

exports.findById = function(req, res) {
   //
};

exports.insertArticle = function(req, res) {
  var article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  article.save(function(err) {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Article saved!' });
  });
};
