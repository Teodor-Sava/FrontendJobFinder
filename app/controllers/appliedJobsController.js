(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('appliedJobsController', appliedJobsController);

    appliedJobsController.inject = ['$scope'];

    function appliedJobsController($scope) {
        var vm = this;
        

        // VARIABLES =======================

        activate();

        // PUBLIC FUNCTIONS ================



        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();