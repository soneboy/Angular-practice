var myApp = angular.module('MyApp', ['ngRoute','ngMaterial', 'ngMessages' ]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'posts.html',
        })
        .when('/posts', {

            templateUrl: 'fullPost.html'
        })
        .when('/user', {

            templateUrl: 'user.html'
        })
        .when('/test', {

            templateUrl: 'test.html'
        })
        .otherwise({

            redirectTo: '/'
        });

});
