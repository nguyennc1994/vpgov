angular.module('vpgov').config(function ($stateProvider, $urlRouterProvider, CFG) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state('list', {
            templateUrl: '/modules/vpgov/themes/default/ng-app/log/partials/list.html',
            controller: 'LogListController',
            controllerAs: 'vm',
            url: "/list"
        })
    });
angular.module('vpgov').controller('LogListController', function($scope, $http, $window, LogService){
    function init(){
        //default criteria that will be sent to the server
        //$scope.filterCriteria = {
        //    pageNumber: 1,
        //    sortDir: 'asc',
        //    sortedBy: 'id'
        //};
        //
        //
        //$scope.selectPage(1);

        var year = new Date().getFullYear();
        $scope.years = [];
        for(var i=0;i<3;i++){
            $scope.years.push(year-i);
        }
        $scope.months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        $scope.logs = [];
    }
    // called when navigate to another page in the pagination
    $scope.selectPage = function (page) {
        $scope.filterCriteria.pageNumber = page;
        $scope.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    $scope.fetchResult = function () {
        return LogService.search($scope.filterCriteria).then(function (data) {

            $scope.logs = data.logs;
            $scope.totalPages = data.pages;
            $scope.logsCount = data.count;
        }, function () {
            $scope.logs = [];
            $scope.totalPages = 0;
            $scope.logsCount = 0;
        });
    };
    $scope.remove = function(id, index, $event){
        if(confirm('Are you sure')){
            LogService.remove(id).then(function(response){
                if(response.success){
                    $scope.logs.splice(index, 1);
                    alertify.success('Xóa dữ liệu thành công');
                }else{
                    alertify.error('Xóa dữ liệu không thành công');
                }
            });
        }
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
        $event.cancelBubble = true;
        $event.returnValue = false;

        return false;
    };
    $scope.viewLog = function(){
        $scope.messages = false;
        $scope.logs = [];
        LogService.search({year: $scope.year, month: $scope.month}).then(function(data){
            if(data.success){
                $scope.logs = data.files.reverse();

            }
        });
    };
    $scope.view = function(file, $index, $event){
        $scope.messages = false;
        LogService.view({year: $scope.year, month: $scope.month, file: file}).then(function(data){

            var response = data.split("\n");
            $scope.messages = [];
            // console.info(response);
            var php = Log.Isys(response, new Log.Formatter({
                messageFormat: function (line)
                {
                    console.info('processing ' + line);
                    var r1 = /\[(INFO|DEBUG|ERROR)\]/;
                    var r2 = /^\[\w{3}\,\ \d{2}\ \w{3}\ \d{2}\ \d{1,2}\:\d{2}\:\d{2}\ [\+,\-]\d{4}\]/;
                    var m1 = r1.exec(line);
                    var m2 = r2.exec(line);
                    var dt = m2[0];
                    var type = m1[0];
                    switch(type){
                        case '[INFO]': cls = 'info';type_msg = 'Thông báo';break;
                        case '[DEBUG]': cls = 'warning';type_msg = 'Debug';break;
                        case '[ERROR]': cls = 'danger';type_msg = 'Lỗi';break;
                        default: cls = 'info';type_msg='Thông báo';break;
                    }
                    var message = line.replace(/^\[\w{3}\,\ \d{2}\ \w{3}\ \d{2}\ \d{1,2}\:\d{2}\:\d{2}\ [\+,\-]\d{4}\]\[(INFO|DEBUG|ERROR)\]/g,"");
                    $scope.messages.push({datetime: dt, type: type, message: message, cls: cls, type_msg: type_msg});
                    //return '<li>' + message + '</li>';
                }
            }));
            $scope.messages.reverse();
            //$scope.log_content = response;
            //$scope.log_content = php;
        });
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
        $event.cancelBubble = true;
        $event.returnValue = false;
    };
    init();

});
