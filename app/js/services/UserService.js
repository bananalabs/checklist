
'use strict';

var servicesModule = angular.module('checklist.services.user', []);

servicesModule.service('UserService', function($firebaseSimpleLogin) {

    this.userId = ""

    this.createUser = function(email, password) {
        if (!this.ref) {
            this.ref = new Firebase("https://reusable-checklists.firebaseio.com");
        }
        if (!this.loginObj) {
            this.loginObj = $firebaseSimpleLogin(this.ref);
        }
        return this.loginObj.$createUser(email, password)
    }

    this.login = function(user) {
        if (!this.ref) {
            this.ref = new Firebase("https://reusable-checklists.firebaseio.com");
        }
        if (!this.loginObj) {
            this.loginObj = $firebaseSimpleLogin(this.ref);
        }
        return this.loginObj.$login("password", user)
    }

    this.getUserId = function() {
        return this.userId
    }

    this.setUserId = function(userId) {
        this.userId = userId
        window.localStorage.setItem('checklist-user', userId);
    }

    this.getCurrentUser = function() {
        return window.localStorage.getItem('checklist-user');
    }

})