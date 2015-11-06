angular
  .module('BlogApp', [
    'ngRoute'
  ])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/blog-controller.html',
          controller: 'BlogController',
          controllerAs: 'blog',
        })
        .when('/article/:id', {
          templateUrl: '/partials/article-controller.html',
          controller: 'ArticleController',
          controllerAs: 'article',
        })
        .otherwise('/');
    }
  ]);
