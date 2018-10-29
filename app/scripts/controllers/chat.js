'use strict';

/**
 * @ngdoc function
 * @name tmobilefeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmobilefeApp
 */
angular.module('tmobilefeApp')
  .controller('ChatCtrl', function ($state, Events, $scope,$timeout,$window,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    setTimeout(()=>{
      $('#myModal').modal('toggle');
    },1000);
    // $('#myModal').modal('show');
    setTimeout(()=>{
      $('#myModal').modal('toggle');
    },5000);


    $scope.selectIssue = (index)=>{
      $scope.openIssue = index;
      $scope.activeChat = index;
      $scope.chat = issuesChat[Object.keys(issuesChat)[index]];
      console.log("chats are ",$scope.chat);
    };

    let issues = {
      'Over Billing':true,
      'Exchange Phones':true,
      'Phone Freezing':true,
      'Call Droppings':true,
      'Bill Payment Extension - May':true,
      'Bill Payment Extension - Sep':true,
      'Bill Payment Extension - Jan':true,
    };

    let issuesChat = {
      'Over Billing':['How may I assist you today? Is the issue Regarding the Billing?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Exchange Phones':['How may I assist you today? Is the issue Regarding the Phone?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Phone Freezing':['How may I assist you today? Is the issue Regarding the Freezing of Phone?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Call Droppings':['How may I assist you today? Is the issue Regarding Network related issue?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Bill Payment Extension - May':['How may I assist you today? Is the issue Regarding the Billing?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Bill Payment Extension - Sep':['How may I assist you today? Is the issue Regarding the Billing?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
      'Bill Payment Extension - Jan':['How may I assist you today? Is the issue Regarding the Billing?','Yes, I wanted to know why was I over billed?','Going by the change in the expense, it seems that you have crossed the data limit for the month','But ...'],
    };

    let issues1=['Bill Payment Extension', 'Call Droppings', 'Phone Freezing', 'Exchange Phones', 'Over Billing'];
    $scope.issueNode = issues;


    $scope.selectIssue(0);

  });
