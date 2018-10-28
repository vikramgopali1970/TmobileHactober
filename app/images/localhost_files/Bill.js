'use strict';

/**
 * @ngdoc function
 * @name tmobilefeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmobilefeApp
 */
angular.module('tmobilefeApp')
  .controller('BillCtrl', function ($state,Events, $scope, $timeout,$window,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    iziToast.settings({
      timeout: 3000, // default timeout
      resetOnHover: true,
      // icon: '', // icon class
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      onOpen: function () {
        console.log('callback abriu!');
      },
      onClose: function () {
        console.log("callback fechou!");
      }
    });

    // warning

    let url = $window.location.href;
    console.log(url.substr(url.indexOf('#!')+3));

    Events.getTime($state.current.name);
    $rootScope.timer = setTimeout(()=>{Events.callToast($state.current.name)},4000);

  });
