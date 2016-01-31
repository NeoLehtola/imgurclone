var app = angular.module('imagez', []);

app.controller('MainCtrl', [
'$scope',
function($scope) {
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
  }

}]);
