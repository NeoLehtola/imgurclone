var app = angular.module('imagez', []);

app.factory('images', [function() {
  var o = { images: [] };
  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'images',
function($scope, images) {
  $scope.images = images.images;
  $scope.image = {
    path: "",
    width: 0,
    height: 0
  }
  $scope.loadimage = function() {
    var img = new Image();
    img.onload = function() {
      $scope.$apply(function() {
        $scope.image.width = img.width;
        $scope.image.height = img.height;
        $scope.image.path = $scope.imageurl;
       
      });
    }
    
    img.src = $scope.imageurl;
    $scope.images.push(img);
  }

  $scope.enlargeimage = function(img) {
    
  }

}]);
