(function() {
'use strict';

    angular
        .module('jobFinderApp')
        .controller('createdJobsController', createdJobsController);

    createdJobsController.inject = ['$scope'];

    function createdJobsController($scope) {
        var vm = this;
        

        // VARIABLES =======================

        activate();

        // PUBLIC FUNCTIONS ================



        // PRIVATE FUNCTIONS ===============

        function activate() { }
    }
})();