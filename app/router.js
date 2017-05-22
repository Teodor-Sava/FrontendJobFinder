(function () {
    'use strict';

    angular.module('jobFinderApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            //REDIRECT TO MAIN PAGE IF NO ROUTE
            $urlRouterProvider.when('','/');


            // ==== HOMEPAGE STATES =============================
            $stateProvider.state('home',{
                url: '/',
                templateUrl: 'app/views/home/home.html',
                controller: 'homeController'
            });
            //====================================================



            // ==== DASHBOARD TEMPLATE ===========================
            $stateProvider.state('dashboard',{
                url: '/dashboard',
                templateUrl: 'app/views/dashboard/dashboard.html',
                controller: 'dashboardController'
            });
            // ====================================================


            // ====== CREATED JOBS ROUTES ==========================
            $stateProvider.state('dashboard.created-jobs',{
                url: '/created-jobs',
                templateUrl: 'app/views/dashboard/createJobs/created-jobs.html',
                controller: 'createdJobsController'
            });

             $stateProvider.state('dashboard.create-job',{
                url: '/create-job',
                templateUrl: 'app/views/dashboard/createJobs/create-job.html',
                controller: 'createNewJobController'
            });

             $stateProvider.state('dashboard.pending-job-details',{
                url: '/pending-job-details',
                templateUrl: 'app/views/dashboard/createJobs/pending-job-details.html',
               // controller: 'createdJobsController'
            });

             $stateProvider.state('dashboard.approved-job-details',{
                url: '/created-jobs',
                templateUrl: 'app/views/dashboard/createJobs/approved-job-details.html',
              //  controller: 'createdJobsController'
            });

            $stateProvider.state('dashboard.employee-details',{
                url: '/employee-details',
                templateUrl: 'app/views/dashboard/profile/employee-details.html',
                //controller: 'createdJobsController'
            });
            // ======================================================



            // ====== SEEK JOBS ROUTES ==============================
            $stateProvider.state('dashboard.seek-jobs',{
                url: '/seek-jobs',
                templateUrl: 'app/views/dashboard/seekJobs/seek-jobs.html',
                controller: 'seekJobsController'
            });

            $stateProvider.state('dashboard.job-details',{
                url: '/job-details',
                templateUrl: 'app/views/dashboard/seekJobs/seek-jobs.html',
            //    controller: 'seekJobsController'
            });

             $stateProvider.state('dashboard.employer-details',{
                url: '/employer-details',
                templateUrl: 'app/views/dashboard/seekJobs/seek-jobs.html',
             //   controller: 'seekJobsController'
            });
            // ======================================================



            //====== APPLY JOBS ROUTES ==============================
              $stateProvider.state('dashboard.applied-jobs',{
                url: '/applied-jobs',
                templateUrl: 'app/views/dashboard/appliedJobs/applied-jobs.html',
                controller: 'appliedJobsController'
            });
            // ======================================================



            // ===== SHARED STATES ===================================
             $stateProvider.state('no-access',{
                url: '/no-access',
                templateUrl: 'app/views/no-access.html'
               // controller: 'appliedJobsController'
            });

            //   $stateProvider.state('no-access',{
            //     url: '/error',
            //     templateUrl: 'app/views/no-access.html'
            //    // controller: 'appliedJobsController'
            // });
            //==========================================================

        }]);
}());