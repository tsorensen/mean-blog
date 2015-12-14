angular
  .module('BlogController', [
    'blogApp.blog',
    'renderHtmlFilter',
    'limitHtmlFilter',
    'uniqueFilter',
  ])
  .controller('BlogController', [
    'blog',
    '$location',
    '$filter',
    function(blog, $location, $filter) {
      var self = this;
      self.articles = [];
      self.categories = [];

      function getArticles() {
        blog.read()
          .then(function(articles) {
            self.articles = articles;
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

      getArticles();
    },
  ]);
