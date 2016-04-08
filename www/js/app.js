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
});

app.controller('mainController',function($scope,$ionicPopup,$timeout){
   var tasks = new getTasks();

   $scope.lista            = tasks.items;
   $scope.exibeFinalizadas = false;
   $scope.removeStatus     = false;

   // Marca True ou False
   $scope.onMarkTask = function(item){
     item.finalizada = !item.finalizada;
   };

   //Esconder finalizadas ou exibir
   $scope.esconderFinalizada = function(item){
      return item.finalizada && !$scope.exibeFinalizadas;
   }

   function getItem(item)
   {
     $scope.data = {};
     $scope.data.newTask = "";

     $ionicPopup.show({
       title: "Nova Tarefa",
       scope: $scope,
       template: "<input type='text' placeholder='Tarefa' autofocus='True' ng-model='data.newTask'>",
       buttons: [
         {text: 'Ok',
         onTap: function(e){
           item.nome = $scope.data.newTask;
           tasks.add(item);
         }},
         {text: 'Cancelar'}
       ]
     });
   }

   $scope.addItem = function()
   {
     var item = {nome:'',finalizada:false};
     getItem(item);
   }

   $scope.deleteItem = function(item){
     tasks.remove(item);
   }

   $scope.onClickRemove = function(){
     $scope.removeStatus = !$scope.removeStatus
   }
});
