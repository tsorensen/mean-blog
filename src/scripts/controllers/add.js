angular
  .module('AddController', [
    'blogApp.articles',
    'textAngular',
    'imgPreviewDirective',
  ])
  .controller('AddController', [
    'articles',
    '$location',
    function(articles, $location) {
      var self = this;
      self.image = '';

      function resetAddForm() {
        self.create = {
          name: '',
          title: '',
          image: '',
          content: '',
        };
      }

      resetAddForm();

      self.submit = function (data) {
        var article = {
          title: data.title,
          author: data.author,
          image: (self.image || ''),
          content: data.content
        };

        articles.create(article)
          .then(function() {
            $location.url('/#/');
            console.log('success');
          })
          .catch(function(res) {
            console.log('There was an error: ');
            console.log(res.data);
          });
      };


    },
  ]);
