angular.module('vpgov').config(function ($stateProvider, $urlRouterProvider, CFG) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state('list1', {
            templateUrl: '/modules/vpgov/themes/frontend/default/ng-app/slide/partials/list1.html',
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
            templateUrl: '/modules/vpgov/themes/frontend/default/ng-app/slide/partials/list3.html',
            controller: 'SlideList3Controller',
            controllerAs: 'vm',
            url: "/list3"
        })
});


angular.module('vpgov').controller('SlideList1Controller', function($scope, SlideService){
    var vm = this;

    vm.setLang = function(lang){
        vm.current_lang = lang;
        vm.filterCriteria.lang = lang;
        vm.currentPage = 1;
        vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };
    function init(){
        //default criteria that will be sent to the server

        vm.filterCriteria = {
            pageNumber: 1,
            sortDir: 'asc',
            sortedBy: 'id',
            model: 'slide',
            module: 'vpgov',
            type: 'entity'
        };

        vm.selectPage(1);
    }

    //called when navigate to another page in the pagination
    vm.selectPage = function (page) {
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {
        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;
            console.log("data: "+data.items)
            vm.slides = []
                    for(let i =0; i< data.items.length; i++){
                        console.log("vm.slides[i].data.indexScreen"+data.items[i])
                        if(data.items[i].data.display[0] == 1){
                            console.log("Check screen: "+data.items[i].data);
                            vm.slides.push(data.items[i]);
                        }
                    }

            console.log("AAAAAAAAAAAAAA"+ JSON.stringify(vm.slides))
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
    };

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

    vm.onSlideSelect = function($item, $model, $label){
        // if(_.isDefined(vm.post.catalog)) vm.catalog = {};
        // if(!_.isDefined(vm.related_posts)) vm.related_posts = [];
        if(_.isEmpty(vm.slide.catalog.post)) vm.slide.catalog.slide = [];
        vm.slide.catalog.slide.push($item.uuid);
        vm.related_posts.push({
            title: $item.data.title,
            uuid: $item.uuid,
            slide_type: $item.slide_type
        })
    };

    init();

});

angular.module('vpgov').controller('SlideList2Controller', function($scope, SlideService){
    var vm = this;

    vm.setLang = function(lang){
        vm.current_lang = lang;
        vm.filterCriteria.lang = lang;
        vm.currentPage = 1;
        vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };
    function init(){
        //default criteria that will be sent to the server

        vm.filterCriteria = {
            pageNumber: 1,
            sortDir: 'asc',
            sortedBy: 'id',
            model: 'slide',
            module: 'vpgov',
            type: 'entity'
        };

        vm.selectPage(1);
    }



    //called when navigate to another page in the pagination
    vm.selectPage = function (page) {
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {
        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;
            console.log("data: "+JSON.stringify(data.items))
            vm.slides = []
            for(let i =0; i< data.items.length; i++){
                console.log("data: "+JSON.stringify(data.items[i].data))
                if(data.items[i].data.display[1] == 1){
                    vm.slides.push(data.items[i]);
                }
            }

            console.log("List 2: " + JSON.stringify(vm.slides))
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
    };

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

    vm.onSlideSelect = function($item, $model, $label){
        // if(_.isDefined(vm.post.catalog)) vm.catalog = {};
        // if(!_.isDefined(vm.related_posts)) vm.related_posts = [];
        if(_.isEmpty(vm.slide.catalog.post)) vm.slide.catalog.slide = [];
        vm.slide.catalog.slide.push($item.uuid);
        vm.related_posts.push({
            title: $item.data.title,
            uuid: $item.uuid,
            slide_type: $item.slide_type
        })
    };

    // $('#slider').layerSlider({
    //     sliderVersion: '6.0.0',
    //     type: 'fullwidth',
    //     responsiveUnder: 1140,
    //     maxRatio: 1,
    //     hideUnder: 0,
    //     hideOver: 100000,
    //     skin: 'v5',
    //     allowRestartOnResize: true,
    //     skinsPath: 'assets/skins/'
    // });


    init();
});

angular.module('vpgov').controller('SlideList3Controller', function($scope, SlideService){
    var vm = this;

    vm.setLang = function(lang){
        vm.current_lang = lang;
        vm.filterCriteria.lang = lang;
        vm.currentPage = 1;
        vm.filterCriteria.pageNumber = 1;
        vm.fetchResult();
    };
    function init(){
        //default criteria that will be sent to the server

        vm.filterCriteria = {
            pageNumber: 1,
            sortDir: 'asc',
            sortedBy: 'id',
            model: 'slide',
            module: 'vpgov',
            type: 'entity'
        };

        vm.selectPage(1);
    }



    //called when navigate to another page in the pagination
    vm.selectPage = function (page) {
        vm.filterCriteria.pageNumber = page;
        vm.fetchResult();
    };
    //The function that is responsible of fetching the result from the server and setting the grid to the new result
    vm.fetchResult = function () {
        return SlideService.list(vm.filterCriteria).then(function (data) {
            // vm.slides = data.items;
            console.log("data: "+data.items)
            vm.slides = []
            for(let i =0; i< data.items.length; i++){
                if(data.items[i].data.display[2] == 1){
                    console.log("Check screen: "+data.items[i].data);
                    vm.slides.push(data.items[i]);
                }
            }

            console.log("List 3"+ JSON.stringify(vm.slides))
            vm.totalPages = data.pages;
            vm.slidesCount = data.items.length;
        }, function () {
            vm.slides = [];
            vm.totalPages = 0;
            vm.slidesCount = 0;
        });
    };

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

    vm.onSlideSelect = function($item, $model, $label){
        // if(_.isDefined(vm.post.catalog)) vm.catalog = {};
        // if(!_.isDefined(vm.related_posts)) vm.related_posts = [];
        if(_.isEmpty(vm.slide.catalog.post)) vm.slide.catalog.slide = [];
        vm.slide.catalog.slide.push($item.uuid);
        vm.related_posts.push({
            title: $item.data.title,
            uuid: $item.uuid,
            slide_type: $item.slide_type
        })
    };

    // $('#slider').layerSlider({
    //     sliderVersion: '6.0.0',
    //     type: 'fullwidth',
    //     responsiveUnder: 1140,
    //     maxRatio: 1,
    //     hideUnder: 0,
    //     hideOver: 100000,
    //     skin: 'v5',
    //     allowRestartOnResize: true,
    //     skinsPath: 'assets/skins/'
    // });


    init();
});
