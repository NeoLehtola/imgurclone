var app = angular.module('imagez', []);



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
    $scope.images.push(img);
  }
}]);

app.controller('ImageCtrl', [
 '$scope', 'images',
  function($scope, images, $http, $routeParams) {
    $scope.images = images.images;
    $scope.image = {
      path: "",
      width: 0,
      height: 0
    }
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

}]);
