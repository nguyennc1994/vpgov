angular.module('vpgov').controller('UploadController', function ($scope, $log, $window, $uibModalInstance, uuid, FileUploader, CFG, UploadService, params) {

    var vm = this;
    var upload_folder = params.upload_folder;
    // console.log($scope);
    // $scope.params = params;
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
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
                console.log("Response return: "+response)
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

    vm.toggleUpload = function () {
        vm.upload = !vm.upload;
    };
    // vm.loadFiles = function () {
    //     if (params.repository == 'all') {
    //         UploadService.query({ext: 'jpg,png'}).then(function (data) {
    //             if (data.success) {
    //                 vm.files = data.files;
    //                 vm.totalPages = data.pages;
    //                 vm.filesCount = data.count;
    //             }
    //         });
    //     } else {
    //         UploadService.query({model: params.model, module: 'cms', ext: 'jpg,png'}).then(function (data) {
    //             if (data.success) {
    //                 vm.files = data.files;
    //                 vm.totalPages = data.pages;
    //                 vm.filesCount = data.count;
    //             }
    //         });
    //     }

    // };

    vm.info = function ($index) {
        vm.file = vm.files[$index];
    };
    vm.getActiveTab = function () {
        if (angular.equals(vm.mode, ['upload'])) return 'upload';
        else return 'repository';
    };
    vm.onBeforeFileAdded = function(){

    };
    vm.createUppy = function () {
        console.info(vm.uppy);
        if (vm.uppy) return;
        const {Dashboard, Tus10, Multipart, GoogleDrive, Informer, ProgressBar, XHRUpload} = Uppy;
        var ext = [];
        if(params.ext) {
            ext = params.ext.split(',');
            if(ext.length){
                _.each(ext, function(e, i, o){
                    o[i] = '.' + e;
                });
            }
            console.info(ext);
        }else{
            ext = ['.pdf','.docx','.doc','.zip','.xls','.xlsx','.jpg','.png','.html'];
        }
        vm.uppy = new Uppy.Core({
            debug: true, autoProceed: true,
            restrictions: {
              // maxFileSize: 3000000,
              // maxNumberOfFiles: 5,
              // minNumberOfFiles: 2,
              allowedFileTypes: ext
            }
        });

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
            model: params.model || 'vpgov_file',
            model_uuid: params.model_uuid,
            upload_folder: upload_folder,
            module: params.module || 'vpgov',
            lang: params.lang
        });
        vm.uppy.run();
        vm.uppy.on('upload-success', (file, body) => {
            vm.selectPage(1);
            vm.view = 'detail';
        });
        vm.uppy.on('file-added', (file) => {

            vm.uppy.setFileMeta(file.id, { uuid: uuid.v4() });
        });
    };

    vm.select = function () {
        vm.file.url = '/content/uploads/' + vm.file.data.path + vm.file.data.name;
        vm.file.url = vm.file.url.replace(/\\/g, '/');
        vm.file.lang = params.lang;
        $uibModalInstance.close(vm.file);
    };

    vm.onDblClick = function ($index) {
        vm.info($index);
        vm.select();
    };
    vm.selectPage = function (page) {
        // console.info('Selecting page ', page, vm.filterCriteria);console.info('Selecting page ', page, vm.mode[0]);
        vm.currentPage = page;
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
        // console.log("Filer Criteria: "+vm.filterCriteria.ext)
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result

    vm.fetchResult = function () {

        if (params.repository == 'all') {
            vm.filterCriteria.ext = params.ext;
        } else {
            vm.filterCriteria.model = params.model;
            vm.filterCriteria.module = params.module;
            vm.filterCriteria.ext = params.ext;
        }
        UploadService.query(vm.filterCriteria).then(function (data) {
            vm.files=[];
            for( let i=0; i<data.files.length; i++)
            {
                let folder_path = data.files[i].data.path;
                // let folder_name = folder_path.slice(15, (folder_path.length-1));
                let folder_name = folder_path.split("\\")[2];
                if(folder_name === upload_folder){
                    vm.files.push(data.files[i])
                }
            }
            // vm.files= data.files;
            vm.totalPages = data.pages;
            vm.filesCount = data.count;
            // console.log('vm.filterCriteria: '+ JSON.stringify(vm.filterCriteria))
            // console.log("File image: "+ vm.files)
            // console.log("File image: "+ JSON.stringify(data.files))
        }, function () {
            vm.files = [];
            vm.totalPages = 0;
            vm.filesCount = 0;
        });
    };
    function init() {
        vm.filterCriteria = {
            pageNumber: 1
        };
        vm.view = 'detail';
        vm.mode = params.mode ? params.mode : ['upload', 'repository'];
        vm.fileupload_url = '/vpgov/upload/popup';
        vm.upload = false;
        vm.selectPage(1);
    }

    init();
});
