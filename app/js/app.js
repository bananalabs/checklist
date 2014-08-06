'use strict';

angular.module('checklist', [
    , 'ui.router'
    , 'ngAnimate'
    , 'ngMessages'
    , 'ngResource'
    , 'checklist.directives'
    , 'checklist.services.data'
    , 'checklist.services.user'
    , 'firebase'
]).
    config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: '/partials/main.html',
                controller: 'MainCtrl as main'
            })
            .state('main.landing', {
                url: '/landing',
                templateUrl: '/partials/landing.html',
            })
            .state('main.signup', {
                url: '/signup',
                templateUrl: '/partials/signup.html',
                controller: 'SignupCtrl as signup'
            })
            .state('main.signin', {
                url: '/signin',
                templateUrl: '/partials/signin.html',
                controller: 'SigninCtrl as signin'
            })
            /*.state('main.settings', {
                url: '/settings',
                templateUrl: '/partials/settings.html',
                controller: 'SettingsCtrl as settings'
            })*/
            .state('main.mychecklists', {
                url: '/mychecklists',
                templateUrl: '/partials/mychecklists.html',
                controller: 'MyChecklistsCtrl as mychecklists'
            })
            .state('main.checklistdetail', {
                url: '/checklistdetail/:operation/:id',
                templateUrl: '/partials/checklistdetail.html',
                controller: 'ChecklistDetailCtrl as checklistdetail'
            })
    });
