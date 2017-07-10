angular
.module('Search')
.controller('SearchController' , ['$scope' , fun]);

function fun($scope) {
  $scope.box = true;

  $scope.data = [{
    name : 'aastha Cghs',
    locality : 'Gurgaon'
  },{
    name : 'abhinandan apartments',
    locality : 'Gurgaon'
  },{
    name : 'akash apartments',
    locality : 'Gurgaon'
  },{
    name : 'aasma apartments',
    locality : 'Gurgaon'
  }]
  $scope.clickedNow = function(e) {

    $scope.setClicked = e.eve.target.innerText;
    $scope.set = "";
  }


  $scope.keyPressed = function(e) {
    $scope.loading = true;
    setTimeout(function(){
      $scope.loading = false;
      $scope.$apply();
    },1000);

    setTimeout(function(){
      $scope.key = e.keyCode;
      $scope.set = $scope.data[0].name;
      $scope.$apply();
    },1000);
  }
}
