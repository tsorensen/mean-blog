var express = require('express');
var app = express();
var router = express.Router();
var blog = require('./routes/articles');

router.get('/articles', blog.findAll);
router.post('/articles', blog.insertArticle);
router.get('/articles/:id', blog.findById);

app.use('/api', router);
app.use(express.static('build'));
app.listen(8000);
