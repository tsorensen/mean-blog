angular
  .module('ArticleController', [
    'blogApp.articles',
    'renderHtmlFilter',
  ])
  .controller('ArticleController', [
    'articles',
    '$location',
    '$routeParams',
    function(articles, $location, $routeParams) {
      var self = this;
      self.test = "test";
      self.id = $routeParams.id;
      self.content = [];

      function getArticle() {
        articles.read(self.id)
          .then(function(article) {
            self.content = article;
            console.log('here is getArticle data: ');
            console.log(self.content);
          });
      }

      getArticle();
    },
  ]);
