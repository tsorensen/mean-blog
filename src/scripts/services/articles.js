angular
  .module('blogApp.articles', [
    'blogApp'
  ])
  .factory('articles', [
    '$http',
    'blogAppHost',
    function($http, host) {
      return {

        create: function(userId, data) {
          return $http
            .post(host + '/articles', data)
            .then(function(res) {
              return res.data;
            });
        }, //end create

        read: function(articleId) {
          return $http
          .get(host + '/articles/' + articleId)
          .then(function(res) {
            console.log(res.data);
            return res.data;
          });
        }, //end read

        update: function(articleId, data) {
          return $http
            .put(host + '/articles/' + articleId, data)
            .then(function(res) {
              return res.data;
            });
        }, //end update

        delete: function(data) {
          return $http
            .delete(host + '/articles/' + data.id)
            .then(function(res) {
              return res.data;
            });
        }, //end delete

      }; //end object return

    }, //end function
  ]); //end factory
