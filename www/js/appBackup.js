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

app.controller("mainController",function($scope){
   $scope.mensagem = '';
   $scope.lista = ['A','B','C','D'];

   //Funções
   $scope.novaMensagem = function(novaMensagem){
     $scope.mensagem = novaMensagem;
   }


});
