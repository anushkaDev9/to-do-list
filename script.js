let myApp = angular.module("myapp", []);
myApp.controller("mycontroller", function ($scope) {
  $scope.items = ["reactjs", "html", "css"];
  $scope.newItem = "";
  $scope.checkvar = false;
  $scope.id = [];
$scope.doneTasks=[];
$scope.allVar=true
$scope.doneVar=false
$scope.totalLength = $scope.items.length;
  $scope.addItem = function () {
    if ($scope.newItem !== "") {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
      console.log($scope.items);
      $scope.totalLength= $scope.items.length;
    }
  };
  $scope.close = function (index) {
    $scope.items.splice(index, 1);
    if ($scope.id.includes(index)) {
      $scope.id.splice(index, 1);
      console.log($scope.id);
      
    }
    $scope.totalLength = $scope.items.length - $scope.doneTasks.length;
  };
  $scope.donefunc = function (index) {
    $scope.id.push(index);
    $scope.doneTasks.push($scope.items[index]);
    $scope.totalLength = $scope.items.length - $scope.doneTasks.length;
  };
  $scope.completed=function (){
    $scope.allVar = false;
    $scope.doneVar = true;
  }
  $scope.all=function(){
    $scope.doneVar = false;    
     $scope.allVar = true;     
  }
  $scope.clear=function(){
    if ($scope.id.length>0) {$scope.id.splice(0, $scope.id.length);
     $scope.doneTasks.splice(0, $scope.doneTasks.length);
    }
  }
});
;
