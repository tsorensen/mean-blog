var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:1234@ds053184.mongolab.com:53184/mean-blog');
var Article = require('./../models/article');

exports.findAll = function(req, res) {
  //res.json({ message: 'api test message' });
  Article.find(function(err, articles) {
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

exports.insertArticle = function(req, res) {
  console.dir(req.body);
  var article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.image = '';
  article.body = req.body.content;

	if(req.body.image) {
    console.log("INSIDE THE IMAGE IF");
		article.imageOriginalName  = req.body.image.originalname;
		article.image 			       = req.body.image.name;
		article.imageMime 			   = req.body.image.mimetype;
		article.imagePath 			   = req.body.image.path;
		article.imageExt 			     = req.body.image.extension;
		article.imageSize 			   = req.body.image.size;
	}

  article.save(function(err) {
    if (err) {
        res.send(err);
    }
    res.json({ message: 'Article saved!' });
  });


};
