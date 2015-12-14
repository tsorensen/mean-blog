angular
  .module('BlogApp', [
    'ngRoute',
    'BlogController',
    'ArticleController',
    'AddController',
    'ezfb',
  ])
  .config([
    '$routeProvider',
    'ezfbProvider',
    function($routeProvider, ezfbProvider) {
      ezfbProvider.setInitParams({
        appId: '157210274636992',
        version: 'v2.5'
      });

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
