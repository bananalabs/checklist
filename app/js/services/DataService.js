
'use strict';

var servicesModule = angular.module('checklist.services.data', []);

servicesModule.service('DataService', function($firebase, UserService) {

    this.getFirebaseRef = function() {
        if (!this.ref)  {
            this.ref = new Firebase("https://reusable-checklists.firebaseio.com/"+UserService.getUserId());
        }
        return this.ref
    }

})