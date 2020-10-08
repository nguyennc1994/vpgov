angular.lowercase = text => text.toLowerCase();
var ngSweetAlert2 = window.ngSweetAlert2;
var app = angular.module('vpgov',
    [
        //'ngRoute',
        'ngResource',
        'ui.bootstrap',
        //'ngUpload',
        //'ngProgress',
        'ui.router',
        'ui.mask',
        'ui.tinymce',
        'ckeditor',
        //'ngCkeditor',
        'angularMoment',
        'angularFileUpload',
        'angular-uuid',
        'angular-loading-bar',
        'ng.jsoneditor',
        'highcharts-ng',
        'dcbImgFallback',
        'slugifier',
        // 'jm.i18next',
        'ngDialog',
        ngSweetAlert2,
        'ngTagsInput',
        //'nvd3',
        //"openlayers-directive",
        "ui",
        "ui.tree",
        'multi-select-tree',
        //'ui.odometer'
        'ae-datetimepicker',
        'dndLists',
        'checklist-model',
        'pascalprecht.translate',
        // 'qq',
        // 'backend'
    ]);

app.config(["ngDialogProvider", function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: "ngdialog-theme-default",
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log("default pre-close callback");
        }
    });
}]);
app.config(function($provide) {
    $provide.decorator('$q', ['$delegate', '$rootScope', function($delegate, $rootScope) {
        var pendingPromisses = 0;
        $rootScope.$watch(
            function() { return pendingPromisses > 0; },
            function(loading) { $rootScope.loading = loading; }
        );
        var $q = $delegate;
        var origDefer = $q.defer;
        $q.defer = function() {
            var defer = origDefer();
            pendingPromisses++;
            defer.promise.finally(function() {
                pendingPromisses--;
            });
            return defer;
        };
        return $q;
    }]);
});
app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; //problem with cors
});
app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});
app.config(function ($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/cms/language/get/{part}/{lang}'
    });
});
app.config(function(tagsInputConfigProvider) {
    tagsInputConfigProvider.setDefaults('tagsInput', {
        placeholder: 'New tag',
        removeTagSymbol: '✖'
    })
});
app.constant('CFG', {
    CDN: '',
    AVAILABLE_LANGS: ['vi','en'],
    LANG_TITLE: {vi: 'Tiếng Việt', en: 'Tiếng Anh'},
    DEFAULT_LANG: 'vi',
    DATA_ARTICLE_URL: '/data/post',
    DATA_HOTSPOT_PHOTO_URL: '/data/hotspot/photo',
    DATA_HOTSPOT_VIDEO_URL: '/data/hotspot/video',
    DATA_MENU_URL: '/data/menu',
    DATA_EXHIBITION_URL: '/data/exhibition',
    DATA_CATEGORY_URL: '/data/category',
    DATA_TIMELINE_URL: '/data/timeline',
    CATEGORY_TYPES: {
        'POST': 0,
        'TIMELINE': 1,
        'EXHIBITION': 2
    },
    THEME_TYPES: {
        'PHOTO_SINGLE'      : {id: 1, name: 'Photo (Single)'},
        'PHOTO_COLLECTION'  : {id: 2, name: 'Photo (Collection)'},
        'VIDEO_SINGLE'      : {id: 3, name: 'Video (Single)'},
        'VIDEO_COLLECTION'  : {id: 4, name: 'Video (Collection)'},
        'OBJECT_SINGLE'     : {id: 5, name: 'Object (Single)'},
        'OBJECT_COLLECTION' : {id: 6, name: 'Object (Collection)'},
        'ARTICLE'           : {id: 7, name: 'Post (Single)'},
        'CATEGORY'          : {id: 8, name: 'Post (Collection) / Category'},
        'TIMELINE'          : {id: 9, name: 'Timeline'}
    },
    CSRF_TOKEN: $('meta[name=csrf-token]').attr('content')
});
app.constant('treeConfig', {
    treeClass: 'angular-ui-tree',
    emptyTreeClass: 'angular-ui-tree-empty',
    hiddenClass: 'angular-ui-tree-hidden',
    nodesClass: 'angular-ui-tree-nodes',
    nodeClass: 'angular-ui-tree-node',
    handleClass: 'angular-ui-tree-handle',
    placeholderClass: 'angular-ui-tree-placeholder',
    dragClass: 'angular-ui-tree-drag',
    dragThreshold: 3,
    defaultCollapsed: false,
    appendChildOnHover: true
});
app.run(function($rootScope, $translate, CFG){
    $rootScope.CFG = CFG;
    $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
        $translate.refresh();
    });
});

app.directive('refreshable', [function () {
    return {
        restrict: 'A',
        scope: {
            refresh: "=refreshable"
        },
        link: function (scope, element, attr) {
            var refreshMe = function () {
                element.attr('src', element.attr('src'));
            };

            scope.$watch('refresh', function (newVal, oldVal) {
                if (scope.refresh) {
                    scope.refresh = false;
                    refreshMe();
                }
            });
        }
    };
}]);

app.directive('ngThumb', ['$window', function($window) {
        var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'A',
            template: '<canvas/>',
            link: function(scope, element, attributes) {
                if (!helper.support) return;

                var params = scope.$eval(attributes.ngThumb);

                if (!helper.isFile(params.file)) return;
                if (!helper.isImage(params.file)) return;

                var canvas = element.find('canvas');
                var reader = new FileReader();

                reader.onload = onLoadFile;
                reader.readAsDataURL(params.file);

                function onLoadFile(event) {
                    var img = new Image();
                    img.onload = onLoadImage;
                    img.src = event.target.result;
                }

                function onLoadImage() {
                    var width = params.width || this.width / this.height * params.height;
                    var height = params.height || this.height / this.width * params.width;
                    canvas.attr({ width: width, height: height });
                    canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                }
            }
        };
    }]);

app.filter("trust", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}]);
app.filter("isImage" , function(){
    return function(val){
        // regex to check image extension.
        var find = new RegExp("(.png|.jpg|.jpeg|.gif)$");
        var data = val;
        // Return value if true
        if(find.test(val))
            return true;
        else
            return false;
    };
});
app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
app.filter( 'filesize', function () {
    var units = [
        'bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB'
    ];

    return function( bytes, precision ) {
        if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {
            return '?';
        }

        var unit = 0;

        while ( bytes >= 1024 ) {
            bytes /= 1024;
            unit ++;
        }

        return bytes.toFixed( + precision ) + ' ' + units[ unit ];
    };
});
app.directive('disallowSpaces', function() {
    return {
        restrict: 'A',

        link: function($scope, $element) {
            $element.bind('input', function() {
                $(this).val($(this).val().replace(/ /g, ''));
            });
        }
    };
});
app.filter('isEmpty', function () {
        var bar;
        return function (obj) {
            for (bar in obj) {
                if (obj.hasOwnProperty(bar)) {
                    return false;
                }
            }
            return true;
        };
    });
app.filter('range', function() {
    return function (n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
});
app.directive('uiSrefDisabled', ['$parse', '$rootScope',
    function($parse, $rootScope) {
        return {
            // this ensure eatClickIf be compiled before ngClick
            priority: 100,
            restrict: 'A',
            compile: function($element, attr) {
                var fn = $parse(attr.eatClickIf);
                return {
                    pre: function link(scope, element) {
                        var eventName = 'click';
                        element.on(eventName, function(event) {
                            var callback = function() {
                                if (fn(scope, {$event: event})) {
                                    // prevents ng-click to be executed
                                    event.stopImmediatePropagation();
                                    // prevents href
                                    event.preventDefault();
                                    return false;
                                }
                            };
                            if ($rootScope.$$phase) {
                                scope.$evalAsync(callback);
                            } else {
                                scope.$apply(callback);
                            }
                        });
                    },
                    post: function() {}
                }
            }
        }
    }
]);
app.directive('activeLink', ['$location', function (location) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1); //hack because path does not return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function (newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }
    };
}]);
app.config(function($controllerProvider) {
    app.cp = $controllerProvider;
});
app.config(function($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
