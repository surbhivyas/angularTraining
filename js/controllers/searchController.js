angular
.module('Search')
.controller('SearchController' , ['$scope' , fun]);

function fun($scope) {
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

  }


  $scope.keyPressed = function(e) {
    setTimeout(function(){
      $scope.key = e.keyCode;
      $scope.$apply();
    },2000);
  }
}
