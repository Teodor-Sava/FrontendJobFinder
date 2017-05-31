(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('Login', login);

    login.inject = ['$scope', 'authenticationService', '$state'];

    function login($state, $scope, authenticationService) {
        var vm = this;

        $scope.credentials = {
            email: "",
            password: ""
        };

        vm.onSubmit = function () {
            authenticationService
                .login($scope.credentials)
                .error(function (err) {
                    vm.error = err.message;
                })
                .then(function () {
                    $state.go('dashboard', {}, { reload: true });
                });
        };
    }

})();