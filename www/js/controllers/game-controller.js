wdwdn.controller("GameController", function($scope){
  $scope.name = "Game";

  $scope.cards = [
      {'image': 'img/cards/5Words_Action_2.jpg'},
      {'image': 'img/cards/5Words_Arrested_2.jpg'},
      {'image': 'img/cards/5Words_Fired_2.jpg'},
      {'image': 'img/cards/5Words_Horror_2.jpg'},
      {'image': 'img/cards/5Words_Motto_2.jpg'},
      {'image': 'img/cards/5Words_Romance_2.jpg'},
      {'image': 'img/cards/5Words_Song_2.jpg'},
      {'image': 'img/cards/FirstTo_Alpha_2.jpg'},
      {'image': 'img/cards/FirstTo_Blue_2.jpg'},
      {'image': 'img/cards/FirstTo_Dollar_2.jpg'},
      {'image': 'img/cards/FirstTo_Hair_2.jpg'},
      {'image': 'img/cards/FirstTo_HighFive_2.jpg'},
      {'image': 'img/cards/FirstTo_Smelly_2.jpg'},
      {'image': 'img/cards/FirstTo_Time_2.jpg'},
      {'image': 'img/cards/Impression_Athlete_2.jpg'},
      {'image': 'img/cards/Impression_Baby_2.jpg'},
      {'image': 'img/cards/Impression_Hula_2.jpg'},
      {'image': 'img/cards/Impression_Mime_2.jpg'},
      {'image': 'img/cards/Impression_Pants_2.jpg'},
      {'image': 'img/cards/Impression_Thinker_2.jpg'},
      {'image': 'img/cards/Impression_Trex_2.jpg'},
      {'image': 'img/cards/WhoCan_ABCs_2.jpg'},
      {'image': 'img/cards/WhoCan_Death_2.jpg'},
      {'image': 'img/cards/WhoCan_Fox_2.jpg'},
      {'image': 'img/cards/WhoCan_Pocket_2.jpg'},
      {'image': 'img/cards/WhoCan_Rub_2.jpg'},
      {'image': 'img/cards/WhoCan_Wolf_2.jpg'},
      {'image': 'img/cards/WhoCan_Yell_2.jpg'},
    ];

  $scope.nextCard = function() {
    if ($scope.gameCards.length == 0) {
      $scope.cardsEmpty = true
    } else {
      $scope.currentCard = $scope.gameCards[0]
      $scope.gameCards.splice(0,1);
    }
  };

  $scope.shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  $scope.resetCards = function() {
    $scope.gameCards = angular.copy($scope.shuffle($scope.cards));
    $scope.cardsEmpty = false
    $scope.nextCard();
  }

  $scope.gameCards = angular.copy($scope.shuffle($scope.cards));
  $scope.cardsEmpty = false
  $scope.nextCard();
});
