angular
  .module('blogApp.blog', [
    'blogApp'
  ])
  .factory('blog', [
    '$http',
    'blogAppHost',
    function($http, host) {
      return {

        read: function() {
          console.log('here is the host: ' + host);
          return $http
          .get(host + '/articles')
          .then(function(res) {
            console.log(res.data);
            res.data.map(function(index) {
              console.log('here is the index');
              console.log(index);
              index.date = moment(index.date).format('MMM DD YYYY HH:mm:ss');
              console.log(index);
            });
            return res.data;
          });
        }, //end read

      }; //end object return

    }, //end function
  ]); //end factory
