'use strict';

angular.module('myApp.home', ['ngRoute'])
    .controller('HomeCtrl', ['$scope', function($scope) {
        console.log("IN HOME CTRL");
        $scope.image = [
            {src: '../assets/images/source/parkif2.png'},
            {src: '../assets/images/source/sendgridlogoblue.svg'},
            {src: '../assets/images/source/epicplaygroundlogo.png'},
            {src: '../assets/images/source/uplogonew.png'}
        ];
    }])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      });
    }]);