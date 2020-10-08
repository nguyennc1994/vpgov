angular.module('vpgov').config(function ($stateProvider, $urlRouterProvider, CFG) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state('list', {
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/slide/partials/list.html',
            controller: 'SlideListController',
            controllerAs: 'vm',
            url: "/list"
        })
        .state('create', {
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/slide/partials/form.html',
            controller: 'SlideFormController',
            controllerAs: 'vm',
            url: "/create",
            params: {
                action: 'create'
            }
        })
        .state('edit', {
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/slide/partials/edit.html',
            controller: 'SlideEditController',
            controllerAs: 'vm',
            url: "/edit/:slideUuid",
            params: {
                action: 'edit'
            }
        });
});


var uuid_editing = "";
angular.module('vpgov').controller('SlideListController', function ($scope, SlideService) {
    var vm = this;
    var indexScreen = "";
    vm.setLang = function (lang) {
        vm.current_lang = lang;
        vm.filterCriteria.lang = lang;
        vm.currentPage = 1;
        vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };

    function init() {
        //default criteria that will be sent to the server

        vm.filterCriteria = {
            pageNumber: 1,
            sortDir: 'asc',
            sortedBy: 'id',
            model: 'slide',
            module: 'viettel',
            type: 'entity'
        };

        vm.selectPage(1);
    }

    vm.getUuid = function (uuid) {
        uuid_editing = uuid;
        console.log(uuid_editing)
        console.log(uuid)
    }


    $('#selectScreen').on('change', function () {
        //ways to retrieve selected option and text outside handler
        console.log('Changed option value ' + this.value);
        indexScreen = this.value;
        console.log('Changed option text ' + $(this).find('option').filter(':selected').text());
        vm.fetchResult(indexScreen);
        console.log(indexScreen)
    });


    //called when navigate to another page in the pagination
    vm.selectPage = function (page) {
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function (indexScreen) {
        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;
            vm.slides = []

            switch (indexScreen) {
                case "1":
                    for (let i = 0; i < data.items.length; i++) {
                        if (data.items[i].data.display[0] == 1) {
                            vm.slides.push(data.items[i]);
                        }
                    }
                    break;
                case "2":
                    for (let i = 0; i < data.items.length; i++) {
                        if (data.items[i].data.display[1] == 1) {
                            vm.slides.push(data.items[i]);
                        }
                    }
                    ;

                    break;

                case "3":
                    for (let i = 0; i < data.items.length; i++) {
                        if (data.items[i].data.display[2] == 1) {
                            vm.slides.push(data.items[i]);
                        }
                    }
                    ;
                    break;

                default :
                    vm.slides = data.items

            }

            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
    };

    vm.onSlideSelect = function ($item, $model, $label) {
        // if(_.isDefined(vm.post.catalog)) vm.catalog = {};
        // if(!_.isDefined(vm.related_posts)) vm.related_posts = [];
        if (_.isEmpty(vm.slide.catalog.post)) vm.slide.catalog.slide = [];
        vm.slide.catalog.slide.push($item.uuid);
        vm.related_posts.push({
            title: $item.data.title,
            uuid: $item.uuid,
            slide_type: $item.slide_type
        })
    };

    vm.changeStatus1 = function (uuid, status) {
        console.log(uuid)
        for (let i = 0; i < vm.slides.length; i++) {
            if (vm.slides[i].uuid == uuid) {
                vm.slide = vm.slides[i];
            }
        }
        if (vm.slide.data.display[0] == 1) {
            vm.slide.data.display[0] = 0
        } else vm.slide.data.display[0] = 1;
        // SlideService.save(vm.slide)
        console.log("Check edit slide: " + JSON.stringify(vm.slide))
        SlideService.save(vm.slide)

    };
    vm.changeStatus2 = function (uuid, status) {
        console.log(uuid)
        for (let i = 0; i < vm.slides.length; i++) {
            if (vm.slides[i].uuid == uuid) {
                vm.slide = vm.slides[i];
            }
        }
        if (vm.slide.data.display[1] == 1) {
            vm.slide.data.display[1] = 0
        } else vm.slide.data.display[1] = 1;
        console.log("Check add slide in list: " + JSON.stringify(vm.slide))
        SlideService.save(vm.slide)
        // SlideService.edit(vm.slide.uuid)

    };
    vm.changeStatus3 = function (uuid, status) {
        console.log(uuid)
        for (let i = 0; i < vm.slides.length; i++) {
            if (vm.slides[i].uuid == uuid) {
                vm.slide = vm.slides[i];
            }
        }
        if (vm.slide.data.display[2] == 1) {
            vm.slide.data.display[2] = 0
        } else vm.slide.data.display[2] = 1;
        SlideService.save(vm.slide)
        // SlideService.edit(vm.slide.uuid)

    };

    vm.remove = function (id, index, $event) {
        console.log("UUID: " + id);
        if (confirm('Bạn có chắc chắn xóa dữ liệu không?')) {
            SlideService.remove(id).then(function (response) {
                if (response.success) {
                    vm.slides.splice(index, 1);
                    alertify.success('Xóa dữ liệu thành công');
                } else {
                    alertify.error('Lỗi khi xóa dữ liệu');
                }
            });
        }
        if ($event.preventDefault) $event.preventDefault();
        if ($event.stopPropagation) $event.stopPropagation();

        $event.cancelBubble = true;
        $event.returnValue = false;

        return false;
    };
    init();
});

angular.module('vpgov').controller('SlideFormController', function ($scope, $state, $stateParams, Slug, uuid, ModuleDataService, SlideService, $uibModal) {
    var vm = this;
    vm.init = function () {
        vm.slide = {
            uuid: uuid.v4(),
            data: {
                title: {
                    vi: "",
                    en: ""
                },
                quote: "",
                position: "",
                name: "",
                leftSubTitle: "",
                rightSubTitle: "",
                shadowImage: "",
                backgroundImage: "/content/uploads/vpgov/slide/Background Image/bgtrg1.png",
                mainImage: "",
                leftSubImage: "",
                rightSubImage: "",
                display: [
                    0,
                    0,
                    0,
                ],
            },
            workflow: {},
            catalog: {},

        };
    };

    vm.submit = function () {
        console.log(vm.slide)
        if (confirm('Bạn có chắc chắn thêm dữ liệu không?')) {
            SlideService.save(vm.slide).then(function (data) {
                if (response.success) {
                    alertify.success('Thêm dữ liệu thành công');
                    $state.go('list')
                } else {
                    alertify.error('Lỗi khi thêm dữ liệu');
                }
            });
        }

    }

    $('#screen1').click(function () {
        console.log("Checkbox state (method 1) = " + $('#screen1').prop('checked'));
        if ($('#screen1').prop('checked') == true)
            vm.slide.data.display[0] = 1;
        else vm.slide.data.display[0] = 0
    });

    $('#screen2').click(function () {
        console.log("Checkbox state (method 2) = " + $('#screen2').prop('checked'));
        if ($('#screen2').prop('checked') == true)
            vm.slide.data.display[1] = 1;
        else vm.slide.data.display[1] = 0
    });

    $('#screen3').click(function () {
        console.log("Checkbox state (method 3) = " + $('#screen3').prop('checked'));
        if ($('#screen3').prop('checked') == true)
            vm.slide.data.display[2] = 1;
        else vm.slide.data.display[2] = 0
    });

    // if(vm.editting){
    //     vm.uuid =
    // }
    vm.popupFileBackground = function (lang, parentSelector) {
        // var x = document.getElementById("").value;

        console.log("Select file")
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Background Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                file.url = vm.slide.data.backgroundImage;
                // vm.item.backgroundImage[vm.current_lang] = file.url;
            } else {
                vm.slide.data.backgroundImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileMainImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Main Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.mainImage = file.url;
                // vm.item.mainImage[vm.current_lang] = file.url;
            } else {
                // var slide = {mainImage: {}};
                // slide.mainImage = file.url;
                // // slide.mainImage[vm.current_lang] = file.url;
                // if(typeof vm.slide.data.items == "undefined"){
                //     vm.slide.data.items = [];
                // }
                // vm.slide.data.items.push(slide);
                vm.slide.data.mainImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileLeftSubImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Left Sub Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.leftSubImage = file.url;
                // vm.item.leftSubImage[vm.current_lang] = file.url;
            } else {
                // var slide = {leftSubImage: {}};
                // slide.leftSubImage = file.url;
                // // slide.leftSubImage[vm.current_lang] = file.url;
                // if(typeof vm.slide.data.items == "undefined"){
                //     vm.slide.data.items = [];
                // }
                // vm.slide.data.items.push(slide);
                vm.slide.data.leftSubImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileRightSubImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Right Sub Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.rightSubImage = file.url;
                // vm.item.rightSubImage[vm.current_lang] = file.url;
            } else {
                // var slide = {rightSubImage: {}};
                // slide.rightSubImage = file.url;
                // // slide.rightSubImage[vm.current_lang] = file.url;
                // if(typeof vm.slide.data.items == "undefined"){
                //     vm.slide.data.items = [];
                // }
                // vm.slide.data.items.push(slide);
                vm.slide.data.rightSubImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileShadowImage = function (lang, parentSelector) {
        // var folder_file = document.getElementsByClassName("popup-file")[1].getAttribute("value");
        // console.log("This is x: "+folder_file)
        // console.log(aa);
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Shadow Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.log("Test shadow: " + file);
            if (vm.editting) {
                vm.slide.data.shadowImage = file.url;
                // vm.item.rightSubImage[vm.current_lang] = file.url;
            } else {
                // switch (folder_file) {
                // case "Shadow Image":
                vm.slide.data.shadowImage = file.url;
                // break;
                // case "Background Image":  vm.slide.data.backgroundImage=file.url; break;
                // case "Main Image":  vm.slide.data.mainImage=file.url; break;
                // case "Left Sub Image":  vm.slide.data.leftSubImage=file.url; break;
                // case "Right Sub Image":  vm.slide.data.rightSubImage=file.url; break;
            }


            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };
    vm.init();
});

angular.module('vpgov').controller('SlideEditController', function ($scope, $state, $stateParams, Slug, uuid, ModuleDataService, SlideService, $uibModal) {
    var vm = this;
    vm.init = function () {
        vm.slide = {
            uuid: '',
            data: {
                title: {
                    vi: "",
                    en: ""
                },
                quote: "",
                position: "",
                name: "",
                leftSubTitle: "",
                rightSubTitle: "",
                shadowImage: "",
                backgroundImage: "/content/uploads/vpgov/slide/Background Image/bgtrg1.png",
                mainImage: "",
                leftSubImage: "",
                rightSubImage: "",
                display: [
                    0,
                    0,
                    0,
                ],
            },
            workflow: {},
            catalog: {},

        };

        vm.filterCriteria = {
            uuid: uuid_editing
        };

        vm.selectPage(1);

    };

    vm.submit = function () {
        console.log(vm.slide)
        if (confirm('Bạn có chắc chắn thêm dữ liệu không?')) {
            SlideService.save(vm.slide).then(function (data) {
                if (response.success) {
                    alertify.success('Thêm dữ liệu thành công');
                } else {
                    alertify.error('Lỗi khi thêm dữ liệu');
                }
            });
        }

    }

    //called when navigate to another page in the pagination
    vm.selectPage = function (page) {
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };

    vm.fetchResult = function () {
        console.log("Tesst1: ")
        return SlideService.findByUuid(vm.filterCriteria).then(function (data) {
            console.log("Check data API:" + JSON.stringify(data.model))
            vm.slide = data.model;
            console.log("This is vm.slide: " + JSON.stringify(vm.slide))
            vm.totalPages = data.pages;
        });
    };


    $('#screen1').click(function () {
        console.log("Checkbox state (method 1) = " + $('#screen1').prop('checked'));
        if ($('#screen1').prop('checked') == true)
            vm.slide.data.display[0] = 1;
        else vm.slide.data.display[0] = 0
    });

    $('#screen2').click(function () {
        console.log("Checkbox state (method 2) = " + $('#screen2').prop('checked'));
        if ($('#screen2').prop('checked') == true)
            vm.slide.data.display[1] = 1;
        else vm.slide.data.display[1] = 0
    });

    $('#screen3').click(function () {
        console.log("Checkbox state (method 3) = " + $('#screen3').prop('checked'));
        if ($('#screen3').prop('checked') == true)
            vm.slide.data.display[2] = 1;
        else vm.slide.data.display[2] = 0
    });

    vm.popupFileBackground = function (lang, parentSelector) {
        // var x = document.getElementById("").value;

        console.log("Select file")
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Background Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                file.url = vm.slide.data.backgroundImage;
                // vm.item.backgroundImage[vm.current_lang] = file.url;
            } else {
                vm.slide.data.backgroundImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileMainImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Main Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.mainImage = file.url;
                // vm.item.mainImage[vm.current_lang] = file.url;
            } else {
                // var slide = {mainImage: {}};
                // slide.mainImage = file.url;
                // // slide.mainImage[vm.current_lang] = file.url;
                // if(typeof vm.slide.data.items == "undefined"){
                //     vm.slide.data.items = [];
                // }
                // vm.slide.data.items.push(slide);
                vm.slide.data.mainImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileLeftSubImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Left Sub Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.leftSubImage = file.url;
                // vm.item.leftSubImage[vm.current_lang] = file.url;
            } else {
                vm.slide.data.leftSubImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileRightSubImage = function (lang, parentSelector) {
        console.log("Select file");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Right Sub Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.info(file);

            if (vm.editting) {
                vm.item.rightSubImage = file.url;
                // vm.item.rightSubImage[vm.current_lang] = file.url;
            } else {
                // var slide = {rightSubImage: {}};
                // slide.rightSubImage = file.url;
                // // slide.rightSubImage[vm.current_lang] = file.url;
                // if(typeof vm.slide.data.items == "undefined"){
                //     vm.slide.data.items = [];
                // }
                // vm.slide.data.items.push(slide);
                vm.slide.data.rightSubImage = file.url;
            }

            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };

    vm.popupFileShadowImage = function (lang, parentSelector) {
        // var folder_file = document.getElementsByClassName("popup-file")[1].getAttribute("value");
        // console.log("This is x: "+folder_file)
        // console.log(aa);
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            // animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            //templateUrl: 'widget_option.html',
            templateUrl: '/modules/vpgov/themes/backend/default/ng-app/upload/partials/popup.html',
            controller: 'UploadController',
            controllerAs: 'vm',
            size: 'lg',
            appendTo: parentElem,
            resolve: {
                params: function () {
                    // return vm.selected;
                    return {
                        upload_folder: "Shadow Image",
                        lang: lang,
                        model_uuid: vm.slide.uuid,
                        model: 'slide',
                        module: 'vpgov',
                        repository: 'all',
                        ext: 'jpg,png'
                    }
                }
            }
        });

        modalInstance.result.then(function (file) {
            console.log("Test shadow: " + file);
            if (vm.editting) {
                vm.slide.data.shadowImage = file.url;
                // vm.item.rightSubImage[vm.current_lang] = file.url;
            } else {
                // switch (folder_file) {
                // case "Shadow Image":
                vm.slide.data.shadowImage = file.url;
                // break;
                // case "Background Image":  vm.slide.data.backgroundImage=file.url; break;
                // case "Main Image":  vm.slide.data.mainImage=file.url; break;
                // case "Left Sub Image":  vm.slide.data.leftSubImage=file.url; break;
                // case "Right Sub Image":  vm.slide.data.rightSubImage=file.url; break;
            }


            // $scope.$apply();
        }, function () {
            // $log.info('Modal dismissed at: ' + new Date());
        });
    };
    vm.init();
});
