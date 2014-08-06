'use strict';

function SignupCtrl($location, $scope, UserService) {

    this.submitted = false
    this.message = ""

    this.submit = function() {
        this.submitted = true
        if (!$scope.signup_form.$valid) {
            return;
        }
        UserService.createUser(this.user.email, this.user.password)
        .then(function() {
            console.log('User Created');
            UserService.login({email:$scope.signup.user.email, password:$scope.signup.user.password})
            .then(function(user) {
                console.log('User logged in');
                UserService.setUserId(user.id)
                $scope.main.show_menu = true
                $location.path('/main/mychecklists')
            }, function(error) {
                console.log(error);
            });
        }, function(error) {
            console.log(error);
        });
    }
}