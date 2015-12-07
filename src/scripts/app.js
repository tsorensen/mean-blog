angular
  .module('BlogApp', [
    'ngRoute',
    'BlogController',
    'ArticleController',
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
        .when('/articles/:id', {
          templateUrl: '/partials/article-controller.html',
          controller: 'ArticleController',
          controllerAs: 'article',
        })
        .otherwise('/');
    }
  ]);
