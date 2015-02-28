/**
 * Created by vj on 2/16/15.
 */
'use strict';

angular.module('myApp.vanjenson', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vanjenson', {
            templateUrl: 'vanjenson/vanjenson.html',
            controller: 'VanjensonCtrl'
        });
    }])

    .controller('VanjensonCtrl', ['$scope', function($scope) {
        console.log("IN VANJENSON CTRL");
        $scope.image = [
            {src: '../assets/images/source/winner.png'}]
    }]);