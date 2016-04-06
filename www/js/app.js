// Ionic Starter App

var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainController',function($scope){
   var tasks = new getTasks();
   $scope.lista = tasks.items;

   $scope.exibeFinalizadas = false;

   // Marca True ou False
   $scope.onMarkTask = function(item){
     console.log("onMarkTask" + item.nome);
     item.finalizada = !item.finalizada;
   }

   $scope.esconderFinalizada = function(item){
      return item.finalizada && !$scope.exibeFinalizadas;
   }
});
