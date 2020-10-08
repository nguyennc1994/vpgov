angular.module('vpgov').service(
    'SlideService',function($http, $q, $httpParamSerializer){
    return {
        save: function (slide) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/vpgov/backend-slide/save',
                data: $httpParamSerializer(slide),  // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                alert("Thêm thành công");
                deferred.resolve(response.data);

            }, function (error) {
                alert("Thêm không thành công");
            });

            return deferred.promise;
        },
        edit: function(uuid){
            var deferred = $q.defer();
            if(uuid){
                $http.get('/vpgov/backend-slide/edit/',{params: {uuid: uuid}}).then(function(response){
                    deferred.resolve(response.data);
                    console.log("Check edit API: "+response)
                }, function(error){});
                return deferred.promise;
            }
        },
        findByUuid: function (filter) {
            var deferred = $q.defer();
            $http.get('/vpgov/backend-slide/edit/',{params: {uuid: filter.uuid}}).then(function(response){
                deferred.resolve(response.data);
                console.log("Check edit API: "+ JSON.stringify(response))
            }, function(error){});
            return deferred.promise;
        },
        list: function (filter) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/vpgov/backend-slide/list',
                // data: $httpParamSerializer(timeline),  // pass in data as strings
                config : {
                    params: filter
                },
                // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {

            });
            return deferred.promise;
        },
        edit: function(uuid){
            var deferred = $q.defer();
            if(uuid){
                $http.get('/vpgov/slide/edit/',{params: {uuid: uuid}}).then(function(response){
                    deferred.resolve(response.data);
                }, function(error){});
                return deferred.promise;
            }
        },
        search: function (filter) {
            console.log("AAAA");
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/vpgov/backend-slide/search',
                config : {
                    params: filter
                }
                // data: $httpParamSerializer(timeline),  // pass in data as strings
                // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {

            });

            return deferred.promise;

        },
        remove: function (uuid) {

            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/vpgov/backend-slide/remove',
                data: $.param({uuid: uuid}),  // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                // set the headers so angular passing info as form data (not request payload)
            }).then(function (response) {
                deferred.resolve(response.data);
                console.log("Xóa thành công")
            }, function (error) {
                console.log("Xóa không thành công")
                console.log(error)
            });
            return deferred.promise;
        },
        getAll:function() {

        }
    }
});
