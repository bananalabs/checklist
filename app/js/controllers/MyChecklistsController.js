'use strict';

function MyChecklistsCtrl($location, $firebase, $scope, DataService) {

    var ref = DataService.getFirebaseRef()
    var sync = $firebase(ref);
    $scope.list = sync.$asArray();
    $scope.list.$loaded().then(function() {
        $scope.mychecklists.checklists = $scope.list
    })

    this.submit = function() {
        $location.path('/main/checklistdetail/add/Untitled')
    }
}