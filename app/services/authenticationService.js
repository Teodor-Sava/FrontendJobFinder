(function () {
    'use strict';

    angular
        .module('jobFinderApp')
        .factory('authenticationService', authenticationService);

    authenticationService.inject = ['$http','$window'];

    function authenticationService($http,$window) {

    var saveToken = function(token){
        $window.localStorage['jobFinder-token'] = token;
    };

    var getToken = function(){
        return $window.localStorage['jobFinder-token'];
    }
    
    var isLoggedIn = function(){
        var token = getToken();
        var payload;

        if(token){
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        }else {
            return false;
        }
    };

    var currentUser = function(){
        if(isLoggedIn()){
            var token = getToken();
            var payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
        
            return {
                email: payload.email,
                
            };
        }
    };

    var register = function (user){
        return $http.post("/api/register",user).success(function(data){
            saveToken(data.token);
        });            
    };

    var login = function(user){
        return $http.post("/api/login",user).success(function(data){
            saveToken(data.token);
        })
    };

    var logout = function(){
        $window.localStorage.removeItem("jobFinder-token");
    };

    return {
        saveToken : saveToken,
        getToken : getToken,
        isLoggedIn : isLoggedIn,
        currentUser : currentUser,
        register : register,
        login : login,
        logout : logout

    };
}

})();