'use strict';


/**
 * @ngdoc overview
 * @name tmobilefeApp
 * @description
 * # tmobilefeApp
 *
 * Main module of the application.
 */
angular
  .module('tmobilefeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.router.state.events'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name:'home',
        url:'/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state({
        name:'bills',
        url:'/bills',
        templateUrl: 'views/bill.html',
        controller: 'BillCtrl',
        controllerAs: 'about'
      })
      .state({
        name:'account',
        url:'/account',
        templateUrl: 'views/Account.html',
        controller: 'AccountCtrl',
        controllerAs: 'about'
      })
      .state({
        name:'shop',
        url:'/shop',
        templateUrl: 'views/Shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'about'
      })
      .state({
        name:'more',
        url:'/more',
        templateUrl: 'views/More.html',
        controller: 'MoreCtrl',
        controllerAs: 'about'
      })
      .state({
        name:'chat',
        url:'/chat',
        templateUrl: 'views/Chat.html',
        controller: 'ChatCtrl',
        controllerAs: 'about'
      })
  }).constant("moment",moment)
  .run(['$rootScope','$state','$window','$timeout',
    function($rootScope,$state, $window,$timeout){
      $rootScope.$on('$stateChangeStart',(event, toState, toParams, fromState, fromParams) =>{
          console.log("rpoute change started");
        clearTimeout($rootScope.timer);
      });
    }]);
