'use strict';

var app = angular.module("arbSecurities",["ui.router"]);

app.config(["$urlRouterProvider", "$stateProvider" ,function($urlRouterProvider,$stateProvider){
  $urlRouterProvider.otherwise('/home')

  $stateProvider
    .state("home",{
      url:"/home",
      templateUrl: "./templates/home.html",
      controller: "mainCtrl"
    })
}])

app.controller("mainCtrl", function($scope){
  

})