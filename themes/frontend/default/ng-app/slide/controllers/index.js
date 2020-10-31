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
        // $("#slider").html("<div class=\"ls-slide\" data-ng-repeat=\"u in vm.slides\" data-ls=\"duration:15000; transition2d:13; timeshift:-500; kenburnsscale:1.2;\">\n" +
        //     "        <img width=\"1080\" height=\"1920\" ng-src=\"{[{ u.data.shadowImage }]}\" class=\"ls-bg\" alt=\"\" />\n" +
        //     "        <div style=\"width:100%; height:100%; background: url('http://cms.local/content/uploads/vpgov/slide/Background Image/bgtrg1.png'); background-size: 100%;top:50%; left:50%;\" class=\"ls-l\" data-ls=\"offsetyin:500; easingin:easeOutExpo; scaleyin:10; transformoriginin:50% 0% 0; offsetyout:-500; easingout:easeInExpo; scaleyout:4; transformoriginout:50% 100% 0; parallaxlevel:0;\"></div>\n" +
        //     "        <p style=\"font-weight:400;width:966px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:45px; line-height:70px; color:#ffffff; top:150px; left:88px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\"><span ng-if=\" u.data.quote != ''\" style=\"font-size:inherit;font-family:none;font-weight:bold;position:absolute;margin-left:-4%;\">“</span>{[{ u.data.quote }]}<span ng-if=\" u.data.quote != ''\" style=\"font-size:inherit;font-family:none;font-weight:bold;\"> ”</span></p>\n" +
        //     "        <div style=\"width:330px; height:8px; background:#db9200; top:470px; left:81px;\" class=\"ls-l\" data-ls=\"delayin:1300; easingin:easeOutCubic; fadein:false; scalexin:0; transformoriginin:00% 50% 0; offsetyout:-1700; easingout:easeInExpo; parallaxlevel:0;\"></div>\n" +
        //     "        <!--        <img width=\"209\" height=\"40\" src=\"/modules/vpgov/themes/backend/default/assets/img/masked-rating.png\" class=\"ls-l\" alt=\"\" style=\"top:469px; left:79px;\" data-ls=\"offsetyin:500; delayin:200; easingin:easeOutExpo; offsetyout:-1700; easingout:easeInExpo; parallaxlevel:0;\">-->\n" +
        //     "        <p style=\"font-weight:600;font-family:Roboto,Helvetica,Arial,sans-serif; font-size:28px; line-height:30px; color:#cccccc; top:500px; left:88px;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:100; easingin:easeOutExpo; offsetyout:-1700; easingout:easeInExpo; parallaxlevel:0;\">{[{ u.data.position }]}</p>\n" +
        //     "        <p style=\"font-weight:900;letter-spacing:-0.015em;font-family:Roboto,Helvetica,Arial,sans-serif; font-size:45px; line-height:60px; color:#db9200; top:540px; left:86px;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:50; easingin:easeOutExpo; offsetyout:-2000; easingout:easeInExpo; parallaxlevel:0;\">AAAAAAAAAAAAA{</p>\n" +
        //     "        <img width=\"480\" height=\"320\" src=\"http://viettel.local/content/uploads/vpgov/slide/Main%20Image/ntn1.png\" class=\"ls-l\" alt=\"\" style=\"top:1364px; left:45px;border: 15px solid rgba(255,255,255,0.3); border-width: none !important;\" title=\"Ryan Reynolds - Wade / Deadpool\" data-ls=\"offsetyin:500; delayin:450; easingin:easeOutExpo; offsetyout:-900; easingout:easeInExpo; parallaxlevel:0;\">\n" +
        //     "        <p style=\"font-weight:400;width:480px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:27px; line-height:38px; color:#ffffff; top:1728px; left:45px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\">{[{ u.data.leftSubTitle }]}</p>\n" +
        //     "        <img width=\"480\" height=\"320\" ng-src=\"{[{ u.data.rightSubImage }]}\" class=\"ls-l\" alt=\"\" style=\"top:1364px; left:580px;border: 15px solid rgba(255,255,255,0.3); border-width: none !important;\" title=\"Morena Baccarin - Vanessa\" data-ls=\"offsetyin:500; delayin:500; easingin:easeOutExpo; offsetyout:-850; easingout:easeInExpo; parallaxlevel:0;\">\n" +
        //     "        <p style=\"font-weight:400;width:480px; font-family:Roboto,Helvetica,Arial,sans-serif; font-size:27px; line-height:38px; color:#ffffff; top:1728px; left:580px; white-space:normal; text-align: justify;\" class=\"ls-l\" data-ls=\"offsetyin:500; delayin:350; easingin:easeOutExpo; offsetyout:-1300; easingout:easeInExpo; parallaxlevel:0;\">{[{ u.data.rightSubTitle }]}</p>\n" +
        //     "        <img  width=\"816\" height=\"800\" ng-src=\"{[{ u.data.mainImage }]}\" class=\"ls-l\" alt=\"\" style=\"top:47.5%; left:100%;margin-left:-10%\" data-ls=\"offsetyin:500; delayin:800; easingin:easeOutExpo; offsetyout:-500; easingout:easeInExpo; parallaxlevel:0;\">\n" +
        //     "    </div>");
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

angular.module('vpgov').controller('SlideList2Controller', function($scope, SlideService){
    var vm = this;

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
            vm.slides = []
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
        vm.setTimeout(taiLai)
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


    vm.taiLaiTrang = function (){
        console.log("Tai lai trang")
        location.reload();

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
            console.log(vm.slides.length)

            if(vm.slides.length==0) {
                vm.taiLaiTrang()
                console.log("reload")
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
