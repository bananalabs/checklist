'use strict';

function SigninCtrl($location, $scope, UserService) {

    this.submitted = false
    this.message = ""

    this.submit = function() {
        this.submitted = true
        if (!$scope.signin_form.$valid) {
            return;
        }
        UserService.login({
            email: this.user.email,
            password: this.user.password
        })
        .then(function(user) {
            console.log('User logged in');
            UserService.setUserId(user.id)
            $scope.main.show_menu = true
            $location.path('/main/mychecklists')
        }, function(error) {
            console.log(error);
            $scope.signin.message = "Invalid Password"
        });
    }
}