angular.module('vpgov').service('UploadService',function($http, $q, $httpParamSerializer){
    return {
        filters: {
            imageFilter: function(){
                return {
                    name: 'imageFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|jpg|jpeg|png|gif|'.indexOf(type) !== -1;
                    }
                }
            },
            audioFilter: function(){
                return {
                    name: 'audioFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|mp3|mpeg|'.indexOf(type) !== -1;
                    }
                }
            },
            videoFilter: function(){
                return {
                    name: 'videoFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|mp4|mpeg|avi|'.indexOf(type) !== -1;
                    }
                }
            },
            textFilter: function(){
                return {
                    name: 'textFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return 'html'.indexOf(type) !== -1;
                    }
                }
            },
            enforceMaxFileSize: function(size) {
                if (!size) size = 10485760;
                return {
                    'name': 'enforceMaxFileSize',
                    'fn': function (item) {
                        return item.size <= size; // 2 MiB to bytes
                    }
                }
            },
            enforceQueueSize: function(size){
                if (!size) size = 10;
                return {
                    name: 'enforceQueueSize',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        return this.queue.length < 10;
                    }
                }
            }
        },
        remove: function(uuid){
            var deferred = $q.defer();
            var params = {
                uuid: uuid,
                token_key: angular.element('#qq_token')[0].attributes['name'].value,
                token_value: angular.element('#qq_token')[0].attributes['value'].value
            };

            $http({
                method  : 'POST',
                url     : '/vpgov/upload/remove',
                data    : $httpParamSerializer(params),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function error(){

                });

            return deferred.promise;
        },
        search: function(criteria){
            var deferred = $q.defer();
            var promise = $http.get('/vpgov/upload/search',{params: criteria}).then(function(response){
                deferred.resolve(response.data);
            }, function(error){

            });
            return deferred.promise;
        },
        query: function(filter){
            console.log("Filter image query: "+  JSON.stringify(filter))
            var deferred = $q.defer();
            var promise = $http.get('/vpgov/upload/query',{params: filter}).then(function(response){
                deferred.resolve(response.data);
            }, function(error){

            });
            return deferred.promise;
        }

    }
})
