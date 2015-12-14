var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:1234@ds053184.mongolab.com:53184/mean-blog');
var Article = require('./../models/article');

exports.findAll = function(req, res) {
  //res.json({ message: 'api test message' });
  Article.find({}, null, {sort: {date: -1}}, function(err, articles) {
    if (err) {
        res.send(err);
    }
    //console.dir(articles);
    res.json(articles);
  });
};

exports.findById = function(req, res) {
  var id = req.params.id;

  Article.findById(id, function (err, article) {
    if (err) {
        res.send(err);
    }
    res.json(article);
  });
};

exports.insertArticle = function(req, res, next) {
  var article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.category = req.body.category;
  article.body = req.body.content;

  //image is optional
  if(typeof req.file != 'undefined') {
    article.image = req.file.filename;
  }

  article.save(function(err) {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Article saved!' });
  });
};
