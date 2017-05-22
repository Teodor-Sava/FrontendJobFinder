(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobsController', seekJobsController);

    seekJobsController.inject = ['$scope'];

    function seekJobsController($scope) {
        var vm = this;
        

        // VARIABLES =======================

        activate();

        // PUBLIC FUNCTIONS ================



        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();