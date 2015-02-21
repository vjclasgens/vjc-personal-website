/**
 * Created by vj on 2/16/15.
 */
'use strict';

angular.module('myApp.katie', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/katie', {
            templateUrl: 'katie/katie.html',
            controller: 'KatieCtrl'
        });
    }])

    .controller('KatieCtrl', ['$scope', function($scope) {
        console.log("IN KATIE CTRL");
    }]);