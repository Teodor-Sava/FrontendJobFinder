(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .controller('seekJobsController', seekJobsController);

    seekJobsController.inject = ['$scope', '$state', "seekJobsService"];

    function seekJobsController($scope, $state, seekJobsService) {
        var vm = this;

        // ===== VARIABLES ===============================
        vm.allJobs = [];
        vm.selectedSeekJob = {};
        // ===============================================


        // ==== ON LOAD FUNCTIONS =====================
        // seekJobsService.getAllJobs().then(function(data){
        //     vm.allJobs = data;
        // });
        vm.allJobs = seekJobsService.getAllJobs();
        // ==============================================


        // ====== CLICK FUNCTIONS =============================
        vm.getJobDetails = function (id) {
            // CORRECT VERSION 
            // seekJobsService.getJobDetails(id).then(function(data){
            //     $scope.selectedSeekJob = data;
            // });

            // TEST VERSION
            vm.selectedSeekJob = seekJobsService.getJobDetails(id);
            seekJobsService.setSelectedSeekJob(vm.selectedSeekJob);
            if (vm.selectedSeekJob) {
                $state.go('dashboard.job-details');
            }
        }
        //=======================================================


    }
})();