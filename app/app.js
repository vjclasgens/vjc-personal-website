'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.katie',
    'myApp.vanjenson',
    'myApp.version'
])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl : 'home/home.html',
                controller : 'HomeCtrl'
            })
            .when('/katie',{
            templateUrl: 'katie/katie.html',
            controller: 'KatieCtrl'
            })
            .when('/vanjenson',{
                templateUrl: 'vanjenson/vanjenson.html',
                controller: 'VanjensonCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);
