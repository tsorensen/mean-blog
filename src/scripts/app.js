angular
  .module('BlogApp', [
    'ngRoute',
    'BlogController',
    'ArticleController',
    'AddController',
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
        .when('/add', {
          templateUrl: '/partials/add-article-controller.html',
          controller: 'AddController',
          controllerAs: 'adder',
        })
        .otherwise('/');
    }
  ]);
