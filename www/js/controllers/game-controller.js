wdwdn.controller("GameController", function($scope){
  $scope.name = "Game";

  $scope.cards = [
      {'image': 'img/cards/WhoCan_Wolf.jpg'},
      {'image': 'img/cards/Impression_Thinker.jpg'},
      {'image': 'img/cards/FirstTo_Dollar.jpg'},
      {'image': 'img/cards/5Words_Romance.jpg'},
      {'image': 'img/cards/5Words_Fired.jpg'},
      {'image': 'img/cards/Impression_Hula.jpg'},
      {'image': 'img/cards/Impression_Pants.jpg'},
      {'image': 'img/cards/WhoCan_Death.jpg'},
    ];

  $scope.nextCard = function() {
    //TODO when gameCards.length == 0
    $scope.currentCard = $scope.gameCards[0]
    $scope.gameCards.splice(0,1);
  };

  $scope.skipCard = function() {

  }

  $scope.shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  $scope.gameCards = $scope.shuffle($scope.cards);
  $scope.nextCard();
});
