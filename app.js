var app = angular.module('myStory', []);

app.controller('MainCtrl', ['$scope',function($scope){
  $scope.test = 'Hello world!';
}]);