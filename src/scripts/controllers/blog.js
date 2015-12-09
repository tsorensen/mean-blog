angular
  .module('BlogController', [
    'blogApp.blog',
    'renderHtmlFilter',
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
            // self.articles.map(function(index) {
            //   index.content = $sce.trustAsHtml(index.body);
            // });
          });
      }

      getArticles();
    },
  ]);
