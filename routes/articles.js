var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:1234@ds053184.mongolab.com:53184/mean-blog');
var Article = require('./../models/article');

exports.findAll = function(req, res) {
  Article.find({}, null, {sort: {date: -1}}, function(err, articles) {
    if (err) {
        res.send(err);
    }
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

exports.saveComment = function(req, res, next) {
  var comment = {
    name: req.body.name,
    comment: req.body.content,
    approved: false,
    nestedId: ''
  };

  var id = req.body.id;

  Article.findOneAndUpdate(
    { "_id": id},
    {
        "$push": {
            "comments": comment
        }
    },
    function(err, comment) {
      if (err) {
          res.send(err);
      }
      res.json(comment);
    }
  );

};
