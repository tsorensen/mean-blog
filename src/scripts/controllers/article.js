angular
  .module('ArticleController', [
    'blogApp.articles',
    'renderHtmlFilter',
  ])
  .controller('ArticleController', [
    'articles',
    '$location',
    '$routeParams',
    '$filter',
    function(articles, $location, $routeParams, $filter) {
      var self = this;
      self.id = $routeParams.id;
      self.content = [];
      self.articles = [];
      self.categories = [];

      function getArticle() {
        articles.read(self.id)
          .then(function(article) {
            self.content = article;
            console.log('here is getArticle data: ');
            console.log(self.content);
          });
      }

      function getRecentArticles() {
        articles.readAll()
          .then(function(items) {
            self.articles = items;
            self.articles.map(function(article) {
              if(article.category) {
                for (var i=0; i < article.category.length; i++) {
                  self.categories.push(article.category[i]);
                }
              }
            });

            if(self.categories) {
              formatCategories();
            }
          });
      }

      function formatCategories() {
        self.categories = $filter('unique')(self.categories);

        self.categories = self.categories.map(function(index) {
          return toTitleCase(index);
        });
      }

      function toTitleCase(str)
      {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      getRecentArticles();
      getArticle();
    },
  ]);
