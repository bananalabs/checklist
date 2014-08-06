angular.module('checklist.directives', [])
    .directive( 'clickToEdit', function() {
        return {
            restrict: 'E',
            scope: { value: '=', callback: '&' },
            template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
            link: function ( $scope, element, attrs ) {
                // Let's get a reference to the input element, as we'll want to reference it.
                var inputElement = angular.element( element.children()[1] );

                // This directive should have a set class so we can style it.
                element.addClass( 'edit-in-place' );

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;
                    element.addClass( 'active' );
                    // And we must focus the element.
                    inputElement[0].focus();
                };

                // When we leave the input, we're done editing.
                inputElement.prop( 'onblur', function() {
                    $scope.editing = false;
                    element.removeClass( 'active' );
                    if ($scope.callback)    {
                        $scope.callback()
                    }
                });
            }
        };
    });

