wdwdn.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      controller: "HomeController",
      templateUrl: "templates/home.html"
    })
    .state('game', {
      url: "/game",
      controller: "GameController",
      temaplateUrl: "templates/game.html"
    });
});
