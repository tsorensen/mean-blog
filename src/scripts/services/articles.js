angular
  .module('blogApp.articles', [
    'blogApp'
  ])
  .factory('articles', [
    '$http',
    'blogAppHost',
    '$filter',
    function($http, host, $filter) {
      return {

        create: function(data, file) {
          var fd = new FormData();

          for(var attr in data) {
            fd.append(attr, data[attr]);
          }

          if(file) {
            fd.append('file', file);
          }

          return $http
            .post(host + '/articles', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
            })
            .then(function(res) {
              return res.data;
            });
        }, //end create

        read: function(articleId) {
          return $http
          .get(host + '/articles/' + articleId)
          .then(function(res) {
            console.log(res.data);
              //render html
              res.data.body = $filter('renderHtml')(res.data.body);

              //format dates
              res.data.date = moment(res.data.date).format('MMM DD, YYYY hh:mm a');
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
