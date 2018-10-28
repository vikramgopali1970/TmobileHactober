'use strict';

/**
 * @ngdoc function
 * @name tmobilefeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmobilefeApp
 */
angular.module('tmobilefeApp')
  .controller('RouterCtrl', function ($scope,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    let url = $window.location.href;
    let stateUrl = url.substr(url.indexOf('#!')+3);

    $scope.routes = ["home","account","bills","shop","more"];

    $scope.navItems = ["Home","Account","Bill","Shop","More"];


    $scope.getSection = (index)=>{
      console.log(index);
      $scope.indexSelected = index;
      $scope.routeName = $scope.routes[index];
    };

    console.log($scope.routes.indexOf("bills"),stateUrl);

    $scope.getSection($scope.routes.indexOf(stateUrl));

  });
