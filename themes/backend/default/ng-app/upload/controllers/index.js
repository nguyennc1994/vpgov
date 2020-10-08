angular.module('vpgov').config(function ($stateProvider, $urlRouterProvider, CFG) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state('list', {
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/list1.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            url: "/list"
        })
});
angular.module('vpgov').controller('UploadController', function($scope, $log, uuid, FileUploader, ModuleDataService, UploadDataService, UploadService){

    var vm = this;
    vm.languages = ModuleDataService.languages;
    vm.language = ModuleDataService.language;

    //$scope.params = params;
    vm.cancel = function () {
        // $uibModalInstance.dismiss('cancel');
    };
    vm.remove = function (uuid, index, $event) {

        swal({
            title: 'Bạn có chắc chắn muốn xóa?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
        }).then(() => {
            UploadService.remove(uuid).then(function (response) {
                if (response.success) {
                    swal('Thành công', '', 'success');
                    vm.files.splice(index, 1);
                } else {
                    swal('Có lỗi xảy ra', '', 'error');
                }
            });
        });

        if ($event.preventDefault) $event.preventDefault();
        if ($event.stopPropagation) $event.stopPropagation();

        $event.cancelBubble = true;
        $event.returnValue = false;

        return false;
    };
    vm.removeFile = function(uuid, lang, index, event){

        UploadService.remove(uuid).then(function(response){
            if(response.success){
                vm.collection.file[lang].splice(index, 1);
                // $uibModalInstance.close({
                //     collection: vm.collection
                //     , action: params.action
                //     , index: params.index
                // });
            }else{
                alertify.success('Xóa dữ liệu bị lỗi');
            }
        });
    };
    vm.createUploader = function(){
        var uploader = vm.uploader = new FileUploader({
            url: '/vpgov/upload/upload',
            formData: [{
                token_key: angular.element('#qq_token')[0].attributes['name'].value,
                token_value: angular.element('#qq_token')[0].attributes['value'].value,
                model: UploadDataService.model,
                model_uuid: UploadDataService.model_uuid,
            }]
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

    };
    vm.toggleUpload = function(){
        vm.upload = !vm.upload;
    };
    vm.loadFiles = function(){
        UploadService.search().then(function(data){
            if(data.success){
                vm.files = data.items;
            }
        });
    };

    vm.selectPage = function (page) {
        console.info('Selecting page ', page, vm.filterCriteria);
        vm.currentPage = page;
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {
        // if(vm.repository == 'all') {
        //     vm.filterCriteria.ext = params.ext;
        // }else{
        //     vm.filterCriteria.model= params.model;
        //     vm.filterCriteria.module= params.module;
        //     vm.filterCriteria.ext= params.ext;
        // }
        UploadService.query(vm.filterCriteria).then(function (data) {
            vm.files = data.files;
            vm.totalPages = data.pages;
            vm.filesCount = data.count;
        }, function () {
            vm.files = [];
            vm.totalPages = 0;
            vm.filesCount = 0;
        });
    };
    vm.info = function($index){
        vm.file = vm.files[$index];
    };
    vm.getActiveTab = function(){
        if(angular.equals(vm.mode, ['upload'])) return 'upload';
        else return 'repository';
    };
    vm.createUppy = function(){
        console.info(vm.uppy);
        if(vm.uppy) return;
        const {Dashboard, Tus10, Multipart, GoogleDrive, Informer, ProgressBar, XHRUpload} = Uppy;
        vm.uppy = new Uppy.Core({debug: true, autoProceed: true});
        console.info(uppy);
        vm.uppy.use(Dashboard, {
            // trigger: '.UppyModalOpenerBtn',
            target: '#uppy',
            inline: true,
            height: 300,
            proudlyDisplayPoweredByUppy: false,
        });
        vm.uppy.use(XHRUpload, {
            endpoint: '/vpgov/upload/upload'
        });
//        uppy.use(MetaData, {
//            fields: [
//                { id: 'resizeTo', name: 'Resize to', value: 1200, placeholder: 'specify future image size' },
//                { id: 'description', name: 'Description', value: 'none', placeholder: 'describe what the file is for' }
//            ]
//        })
        vm.uppy.use(ProgressBar, {
            target: 'body',
            fixed: true
        });
        vm.uppy.setMeta({
            token_key: angular.element('#qq_token')[0].attributes['name'].value,
            token_value: angular.element('#qq_token')[0].attributes['value'].value,
            model: 'file',
            model_uuid: null,
            module: 'vpgov',
            lang: vm.language
        });
        vm.uppy.run();
        vm.uppy.on('upload-success', (file, body) => {
            console.log('Yo, uploaded: ', file, body);
            vm.selectPage(1);
            vm.view = 'detail';
        });
        vm.uppy.on('file-added', (file) => {

            vm.uppy.setFileMeta(file.id, { uuid: uuid.v4() });
        });
    };
    function init(){
        vm.upload = false;
        vm.filterCriteria = {
            pageNumber: 1
        };
        // vm.repository = 'all';      // all files
        vm.mode = ['repository','upload'];
        vm.view = 'detail';
        vm.selectPage(1);
        // vm.createUploader();
    }
    init();
});
