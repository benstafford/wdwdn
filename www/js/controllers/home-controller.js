wdwdn.controller("HomeController", function($scope){
  $scope.name = "Ben";
  $scope.showRules = false;

  $scope.rulesOn = function() {
    $scope.showRules = true;
  }

  $scope.rulesOff = function() {
    $scope.showRules = false;
  }
});
