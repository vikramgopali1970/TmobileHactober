'use strict';

/**
 * @ngdoc function
 * @name tmobilefeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmobilefeApp
 */
angular.module('tmobilefeApp')
  .controller('MoreCtrl', function ($state, Events, $scope, $timeout,$window,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    let url = $window.location.href;
    console.log(url.substr(url.indexOf('#!')+3));


    Events.getTime($state.current.name);
    $rootScope.timer = setTimeout(()=>{Events.callToast($state.current.name)},10000);

  });
