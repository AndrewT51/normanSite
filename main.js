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
  .state("mission-statement",{
    url:"/mission-statement",
    templateUrl: "./templates/mission.html",
    controller: "mainCtrl"
  })
  .state("about",{
    url:"/about",
    templateUrl: "./templates/about.html",
    controller: "mainCtrl"
  })
  .state("alarm-response",{
    url:"/alarm-response",
    templateUrl: "./templates/alarmResponse.html",
    controller: "mainCtrl"
  })
  .state("event-security",{
    url:"/event-security",
    templateUrl: "./templates/eventSecurity.html",
    controller: "mainCtrl"
  })
  .state("close-protection",{
    url:"/close-protection",
    templateUrl: "./templates/closeProtection.html",
    controller: "mainCtrl"
  })
  .state("oil-and-gas",{
    url:"/oil-and-gas",
    templateUrl: "./templates/oilAndGas.html",
    controller: "mainCtrl"
 })
  .state("estate-security",{
    url:"/estate-security",
    templateUrl: "./templates/estateSecurity.html",
    controller: "mainCtrl"
 })
  .state("mobile-patrols",{
    url:"/mobile-patrols",
    templateUrl: "./templates/mobilePatrols.html",
    controller: "mainCtrl"
 })
   .state("vetting",{
    url:"/vetting",
    templateUrl: "./templates/vetting.html",
    controller: "mainCtrl"
 })

}])

app.controller("mainCtrl", function($scope){


})