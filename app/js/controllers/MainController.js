'use strict';

function MainCtrl($state, UserService) {

    this.show_menu = false
    var user = ""

    if (user = UserService.getCurrentUser())   {
        UserService.setUserId(user)
        this.show_menu = true
        $state.go('main.mychecklists')
    } else {
        $state.go('main.landing')
    }

}