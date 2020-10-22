angular.module('vpgov').service('LogService',function($http, $q){
    return {
        search: function(criteria){

            var deferred = $q.defer();
            var promise = $http.get('/vpgov/log/search',{params: criteria}).then(function(response){
                deferred.resolve(response.data);
            }, function(error){

            });
            return deferred.promise;
        },
        view: function(criteria){

            var deferred = $q.defer();
            var promise = $http.get('/vpgov/log/view',{params: criteria}).then(function(response){
                deferred.resolve(response.data);
            }, function(error){

            });
            return deferred.promise;
        }

    }
});
