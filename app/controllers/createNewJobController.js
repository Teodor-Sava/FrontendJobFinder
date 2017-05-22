(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('createNewJobController', createNewJobController);

    createNewJobController.inject = ['$scope'];
    function createNewJobController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();