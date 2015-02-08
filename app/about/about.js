'use strict';

angular.module('myApp.about', ['ngRoute'])
    .controller('AboutCtrl', ['$scope', function($scope) {
        console.log("IN ABOUT CTRL");
        $scope.image = [
            {src: '../../assets/images/source/parkif2.png'},
            {src: '../../assets/images/source/sendgridlogoblue.svg'},
            {src: '../../assets/images/source/epicplaygroundlogo.png'},
            {src: '../../assets/images/source/uplogonew.png'}
        ];
    }])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  });
}]);

