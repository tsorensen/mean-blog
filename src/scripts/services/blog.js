angular
  .module('blogApp.blog', [
    'blogApp'
  ])
  .factory('blog', [
    '$http',
    'blogAppHost',
    '$filter',
    function($http, host, $filter) {
      return {

        read: function() {
          console.log('here is the host: ' + host);
          return $http
          .get(host + '/articles')
          .then(function(res) {
            console.log(res.data);
            res.data.map(function(index) {
              //render html
              index.body = $filter('renderHtml')(index.body);

              //format dates
              index.date = moment(index.date).format('MMM DD, YYYY hh:mm a');
            });
            return res.data;
          });
        }, //end read

      }; //end object return

    }, //end function
  ]); //end factory
