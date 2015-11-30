angular
  .module('BlogController', [
    'blogApp.blog'
  ])
  .controller('BlogController', [
    'blog',
    '$location',
    function(blog, $location) {
      var self = this;
      self.articles = [];

      self.getArticles = function() {
        self.articles = blog.read();
        console.log('here is getArticles data: ');
        console.log(self.articles);
      };

      self.getArticles();
    },
  ]);
