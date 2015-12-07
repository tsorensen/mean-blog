angular
  .module('BlogController', [
    'blogApp.blog',
  ])
  .controller('BlogController', [
    'blog',
    '$location',
    function(blog, $location) {
      var self = this;
      self.articles = [];

      function getArticles() {
        blog.read()
          .then(function(articles) {
            self.articles = articles;
            console.log('here is getArticles data: ');
            console.log(self.articles);
          });
      }

      getArticles();
    },
  ]);
