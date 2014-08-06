'use strict';

function ChecklistDetailCtrl($stateParams, $firebase, $scope, $location, UserService) {

    var id = 0
    this.checklist = {}

    if ($stateParams.operation === 'add') {
        this.name = 'Untitled Checklist'
        id = Math.floor((Math.random() * 10000) + 1);
    } else {
        id = $stateParams.id
    }

    var ref = new Firebase("https://reusable-checklists.firebaseio.com/"+UserService.getUserId()+"/"+id);

    $scope.list = $firebase(ref).$asObject();
    $scope.list.$loaded().then(function() {
        $scope.checklistdetail.checklist = $scope.list
        if (!$scope.list.id) {
            $scope.checklistdetail.checklist.id = id
            $scope.checklistdetail.checklist.$save()
        } else {
            $scope.checklistdetail.name = $scope.checklistdetail.checklist.name
        }
    })

    this.addItem = function() {
        var items = angular.copy(this.checklist.items)
        if (!items)  {
            items = []
        }
        items.push({val: this.newitem, done:false})
        this.checklist.items = items
        this.checklist.$save()
    }

    this.done = function() {
        $location.path('/main/mychecklists')
    }

    this.reset = function() {
        for (var i=0; i<this.checklist.items.length; i++) {
            this.checklist.items[i].done = false
        }
    }

    this.copy = function() {
        var new_ref = new Firebase(
            "https://reusable-checklists.firebaseio.com/"+UserService.getUserId()+"/"
            +Math.floor((Math.random() * 10000) + 1));
        this.new_checklist = $firebase(new_ref).$asObject();
        this.new_checklist.items = []
        angular.copy(this.checklist.items, this.new_checklist.items)
        this.new_checklist.name = "Copy of "+this.checklist.name
        this.new_checklist.$save()
        $location.path('/main/mychecklists')
    }

    this.name_changed = function() {
        this.checklist.name = this.name
        this.checklist.$save()
    }

}

