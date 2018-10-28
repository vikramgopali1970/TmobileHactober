// jscs:disable validateQuoteMarks
'use strict';

/**
 * @ngdoc function
 * @name tmobilefeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmobilefeApp
 */
angular.module('tmobilefeApp')
  .controller('MainCtrl', function ($scope,Events,$state,$timeout,$window,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    let url = $window.location.href;
    console.log(url.substr(url.indexOf('#!')+3));

    Events.getTime($state.current.name);
    $rootScope.timer = setTimeout(()=>{Events.callToast($state.current.name)},10000);


    let curHr = new Date().getHours();
    if (curHr < 12) {
      $scope.greet="Good Morning";
    } else if (curHr < 18) {
      $scope.greet="Good Afternoon";
    } else if(curHr < 21){
      $scope.greet="Good Evening";
    } else{
      $scope.greet="Good Night";
    }

    $scope.UserName = "Vikram";
    $scope.indexSelected = 0;

    $('.carousel').carousel({
      interval: 4000
    });

  });
