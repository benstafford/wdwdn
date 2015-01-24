wdwdn.config(function ($stateProvider, $urlRouterProvider){
  $stateProvider.state({
    name: "home",
    url: "/home",
    templateUrl: "mobilehome.html"
    controller: "HomeController"
  })
});
