var app = angular.module('imagez', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('image', {
       url: '/image/{id}',
       templateUrl: '/image.html',
       controller: 'ImageCtrl'
    });
  $urlRouterProvider.otherwise('home');

}]);

app.factory('images', [function() {
  var o = { images: [] };
  return o;
}]);


app.controller('MainCtrl', [
'$scope', 'images',
function($scope, images) {
  $scope.images = images.images;
  $scope.loadimage = function() {
    var img = new Image();
    
    img.src = $scope.imageurl;
    $scope.images.push({
      img: img,
      comments: []
    });
  }
}]);

app.controller('ImageCtrl', [
 '$scope', '$stateParams', 'images',
  function($scope, $stateParams, images) {
    $scope.images = images.images;
    $scope.image = images.images[$stateParams.id];
    $scope.enlargeimage = function(img) {
 
      img.onload = function() {
      $scope.$apply(function() {
        $scope.image.width = img.width;
        $scope.image.height = img.height;
        $scope.image.path = $scope.imageurl;
       
      });
      img.src = $scope.imageurl;
      }
    }
    $scope.addComment = function() {
      if ($scope.body === '') { return; }
      $scope.image.comments.push({
        body: $scope.body,
        author: $scope.author
      });
      $scope.body = '';  
    }
}]);
