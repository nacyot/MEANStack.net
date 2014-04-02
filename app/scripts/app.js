'use strict';

angular.module('meanstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function ($stateProvider, $urlRouterProvider, $httpProvider) {

    /**
     * @description
     * This is ui-router config
     * use $urlRouteProvider, $stateProvider
     */
    $urlRouterProvider.otherwise(function($injector, $location){
      if($location.host() != "server") { // for httpBackend
        return "/";
      }
    });

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('qna', {
        url: '/qna',
        templateUrl: 'views/qna.html',
        controller: 'QnaCtrl'
      })
      .state('tech', {
        url: '/tech',
        templateUrl: 'views/tech.html',
        controller: 'TechCtrl'
      })
      .state('member', {
        url: '/member',
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl'
      });

  }])
.run(['$rootScope', '$state', '$stateParams', 
  function ($rootScope, $state, $stateParams) {

    /**
     * @description
     * It's very handy to add references to $state and $stateParams to the $rootScope
     * so that you can access them from any scope within your applications.For example,
     * <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
     * to active whenever 'contacts.list' or one of its decendents is active.
     */
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /**
     * @description
     * Reset error when a new view is loaded
     */
    $rootScope.$on('$viewContentLoaded', function() {

    });

    /**
     * @description
     * when we use 'ui-router' for routing, we must use $statChangeStart or $stateChangeSuccess
     * instead of $routeChangeStart
     */
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {

    });
  

  }]);