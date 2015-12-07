var express = require('express');
var app = express();
var router = express.Router();
var blog = require('./routes/articles');
var multer = require('multer'); //for image uploads
var upload = multer({ dest: './src/static/images/uploads'});
var bodyParser = require('body-parser');

router.get('/articles', blog.findAll);
router.post('/articles', upload.single('image'), blog.insertArticle);
router.get('/articles/:id', blog.findById);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/api', router);
app.use(express.static('build'));

var port = 8000;
app.listen(port);
