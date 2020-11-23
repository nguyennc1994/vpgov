angular.module('vpgov').config(function ($stateProvider, $urlRouterProvider, CFG) {
    $urlRouterProvider.otherwise("/list1");
    $stateProvider
        .state('list1', {
            templateUrl: '/modules/vpgov/themes/frontend/default/ng-app/slide/partials/list2.html',
            controller: 'SlideList1Controller',
            controllerAs: 'vm',
            url: "/list1"
        })
        .state('list2', {
            templateUrl: '/modules/vpgov/themes/frontend/default/ng-app/slide/partials/list2.html',
            controller: 'SlideList2Controller',
            controllerAs: 'vm',
            url: "/list2"
        })
        .state('list3', {
            templateUrl: '/modules/vpgov/themes/frontend/default/ng-app/slide/partials/list2.html',
            controller: 'SlideList3Controller',
            controllerAs: 'vm',
            url: "/list3"
        })
});


angular.module('vpgov').controller('SlideList1Controller', function($scope, $stateParams, SlideService){
    var vm = this;

    vm.languages = ['vi', 'en'];
    vm.current_lang = $stateParams.lang ;
    console.log("vm.current_lang: "+vm.current_lang)

    vm.setLang = function (lang) {
        vm.current_lang = lang;
        // vm.filterCriteria.lang = lang;
        // vm.currentPage = 1;
        // vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };

    function init(){
        vm.current_lang = 'vi';
        vm.fetchResult();

    }
    vm.slides = [];
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {

        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;

                    for(let i =0; i< data.items.length; i++){
                        if(data.items[i].data.display[0] == 1){
                            vm.slides.push(data.items[i]);
                        }
                    }
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
        console.log("console.log( vm.slidess)"+ vm.slidess)
    };
    console.log("SlidessssS: "+vm.slides)
    vm.getToHtMl = function (){
        console.log("Get to Html")
        $("#slider").delay(4000).fadeIn();
    }

    $('#slider').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1140,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        allowRestartOnResize: true,
        skinsPath: '/modules/vpgov/themes/backend/default/assets/skins/'
    })

    init();

});

angular.module('vpgov').controller('SlideList2Controller', function($scope, $stateParams, SlideService){
    var vm = this;

    vm.languages = ['vi', 'en'];
    vm.current_lang = $stateParams.lang ;
    console.log("vm.current_lang: "+vm.current_lang)

    vm.setLang = function (lang) {
        vm.current_lang = lang;
        // vm.filterCriteria.lang = lang;
        // vm.currentPage = 1;
        // vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };

    function init(){
        vm.current_lang = 'vi';
        vm.fetchResult();

    }
    vm.slides = [];
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {

        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;

                    for(let i =0; i< data.items.length; i++){
                        if(data.items[i].data.display[1] == 1){
                            vm.slides.push(data.items[i]);
                        }
                    }
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
        console.log("console.log( vm.slidess)"+ vm.slidess)
    };
    console.log("SlidessssS: "+vm.slides)
    vm.getToHtMl = function (){
        console.log("Get to Html")
        $("#slider").delay(4000).fadeIn();
    }

    $('#slider').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1140,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        allowRestartOnResize: true,
        skinsPath: '/modules/vpgov/themes/backend/default/assets/skins/'
    })

    init();

});

angular.module('vpgov').controller('SlideList3Controller', function($scope, $stateParams, SlideService){
    var vm = this;

    vm.languages = ['vi', 'en'];
    vm.current_lang = $stateParams.lang ;
    console.log("vm.current_lang: "+vm.current_lang)

    vm.setLang = function (lang) {
        vm.current_lang = lang;
        // vm.filterCriteria.lang = lang;
        // vm.currentPage = 1;
        // vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };

    function init(){
        vm.current_lang = 'vi';
        vm.fetchResult();

    }
    vm.slides = [];
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {

        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;

                    for(let i =0; i< data.items.length; i++){
                        if(data.items[i].data.display[2] == 1){
                            vm.slides.push(data.items[i]);
                        }
                    }
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
        console.log("console.log( vm.slidess)"+ vm.slidess)
    };
    console.log("SlidessssS: "+vm.slides)
    vm.getToHtMl = function (){
        console.log("Get to Html")
        $("#slider").delay(4000).fadeIn();
    }

    $('#slider').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullwidth',
        responsiveUnder: 1140,
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        skin: 'v5',
        allowRestartOnResize: true,
        skinsPath: '/modules/vpgov/themes/backend/default/assets/skins/'
    })

    init();

});
