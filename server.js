var express = require('express');
var app = express();
var router = express.Router();
var blog = require('./routes/articles');

var multer = require('multer'); //for image uploads

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/static/images/uploads');
  },
  filename: function (req, file, cb) {
    var name = file.originalname.split('.')[0];
    var ext = file.mimetype.split('/')[1];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

var upload = multer({ storage: storage });

//var bodyParser = require('body-parser');

router.get('/articles', blog.findAll);
router.post('/articles', upload.single('file'), blog.insertArticle);
router.get('/articles/:id', blog.findById);

//app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/api', router);
app.use(express.static('build'));

var port = 8000;
app.listen(port);
