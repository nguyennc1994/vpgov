<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

{#Slide#}
    <link rel="stylesheet" href="/modules/vpgov/themes/backend/default/assets/css/layerslider.css">
    <link rel="stylesheet" href="/modules/vpgov/themes/backend/default/assets/font/stylesheet.css">
{#Transparent#}
    <style>
        body {
            font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
            font-size: 20px;
            overflow:hidden;
			margin : 0 !important;
        }

    </style>
    <!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>-->
    <script src="/ui/material-pro/assets/plugins/jquery/jquery.min.js"></script>
    <script src="/modules/vpgov/themes/backend/default/assets/js/greensock.js"></script>
    <script src="/modules/vpgov/themes/backend/default/assets/js/jquery.js"></script>
    <script src="/modules/vpgov/themes/backend/default/assets/js/layerslider.kreaturamedia.jquery.js"></script>
    <script src="/modules/vpgov/themes/backend/default/assets/js/layerslider.transitions.js"></script>


    <script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui/build/angular-ui.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui-tree/dist/angular-ui-tree.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-filter/dist/angular-filter.js"></script>
    <!--<script type="text/javascript" src="/bower_components/angular-route/angular-route.min.js"></script>-->
    <script type="text/javascript" src="/bower_components/angular-resource/angular-resource.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-uuids/angular-uuid.js"></script>
    <script type="text/javascript" src="/bower_components/angular-file-upload/dist/angular-file-upload.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
    <script type="text/javascript" src="/bower_components/ng-dialog/js/ngDialog.min.js"></script>
    <script type="text/javascript" src="/bower_components/ng-i18next/dist/ng-i18next.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ckeditor/angular-ckeditor.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-ui-tinymce/dist/tinymce.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-slugify/angular-slugify.js"></script>
    <script type="text/javascript" src="/bower_components/angular-sweetalert/dist/ngSweetAlert2.min.js"></script>
    <script type='text/javascript' src='/bower_components/angular-loading-bar/build/loading-bar.min.js'></script>
    <script type='text/javascript' src='/bower_components/angular-img-fallback/angular.dcb-img-fallback.min.js'></script>

</head>

<body ng-app="vpgov">
{#<body>#}

                    {% block content %}{% endblock %}

                    <!-- Bootstrap tether Core JavaScript -->
                    <script src="/ui/material-pro/assets/plugins/popper/popper.min.js"></script>
                    <script src="/ui/material-pro/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
                    <!-- slimscrollbar scrollbar JavaScript -->
                    <script src="/ui/material-pro/material/js/jquery.slimscroll.js"></script>
                    <!--Wave Effects -->
                    <script src="/ui/material-pro/material/js/waves.js"></script>
                    <!--Menu sidebar -->
                    <script src="/ui/material-pro/material/js/sidebarmenu.js"></script>
                    <!--stickey kit -->
                    <script src="/ui/material-pro/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
                    <script src="/ui/material-pro/assets/plugins/sparkline/jquery.sparkline.min.js"></script>
                    <!--Custom JavaScript -->
                    <script src="/ui/material-pro/material/js/custom.js"></script>
                    <script src="/ui/material-pro/material/js/clock.js"></script>
                    <script src="/bower_components/gsap/src/minified/TweenMax.min.js"></script>
                    <script src="/ui/material-pro/assets/plugins/uppy/uppy.min.js"></script>
                    <!-- ============================================================== -->
                    <!-- This page plugins -->
                    <!-- ============================================================== -->
                    <!-- chartist chart -->
                    <script src="/ui/material-pro/assets/plugins/chartist-js/dist/chartist.min.js"></script>
                    <script src="/ui/material-pro/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
                    <!--c3 JavaScript -->
                    <script src="/ui/material-pro/assets/plugins/d3/d3.min.js"></script>
                    <script src="/ui/material-pro/assets/plugins/c3-master/c3.min.js"></script>
                    <!-- Chart JS -->
                    {#<script src="/ui/material-pro/material/js/dashboard1.js"></script>#}
                    <!-- ============================================================== -->
                    <!-- Style switcher -->
                    <!-- ============================================================== -->
                    <script src="/ui/material-pro/assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>


                    <script src="/bower_components/underscore/underscore-min.js"></script>
                    <script src="/bower_components/moment/min/moment.min.js"></script>

                    <!-- Sweetalert 2 -->
                    <script src="/bower_components/sweetalert2/dist/sweetalert2.min.js"></script>

                    <!-- -->
                    <!-- Angular -->
                    <script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-ui/build/angular-ui.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-ui-tree/dist/angular-ui-tree.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-filter/dist/angular-filter.js"></script>
                    <!--<script type="text/javascript" src="/bower_components/angular-route/angular-route.min.js"></script>-->
                    <script type="text/javascript" src="/bower_components/angular-resource/angular-resource.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-uuids/angular-uuid.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-file-upload/dist/angular-file-upload.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
                    <script type="text/javascript" src="/bower_components/ng-dialog/js/ngDialog.min.js"></script>
                    <script type="text/javascript" src="/bower_components/ng-i18next/dist/ng-i18next.min.js"></script>

                    <script type="text/javascript" src="/bower_components/angular-ui-tinymce/dist/tinymce.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-slugify/angular-slugify.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-sweetalert/dist/ngSweetAlert2.min.js"></script>
                    <script type='text/javascript' src='/bower_components/angular-loading-bar/build/loading-bar.min.js'></script>
                    <script type='text/javascript' src='/bower_components/angular-img-fallback/angular.dcb-img-fallback.min.js'></script>


                    <script src="/bower_components/tinymce/tinymce.js"></script>
                    <script type="text/javascript" src="/bower_components/angular-ui-tinymce/dist/tinymce.min.js"></script>

                    <!-- Tree -->
                    <script type="text/javascript" src="/bower_components/angular-ui-tree/dist/angular-ui-tree.min.js"></script>
                    <script type="text/javascript"
                            src="/bower_components/angular-multi-select-tree/dist/angular-multi-select-tree-0.1.0.js"></script>
                    {#<script type="text/javascript" src="/bower_components/angular-multi-select-tree/dist/angular-multi-select-tree-0.1.0.tpl.js"></script>#}

                    <!-- Tags -->
                    <script type="text/javascript" src="/bower_components/ng-tags-input/ng-tags-input.min.js"></script>

                    <!-- DnD -->
                    <script type="text/javascript"
                            src="/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js"></script>

                    <!--Checklist Model -->
                    <script type="text/javascript" src="/bower_components/checklist-model/checklist-model.js"></script>

                    <!-- I18n -->
                    <script type="text/javascript" src="/bower_components/angular-translate/angular-translate.js"></script>
                    <script type="text/javascript"
                            src="/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js"></script>

                    <!-- Input mask -->
                    <script type="text/javascript" src="/bower_components/angular-ui-mask/dist/mask.min.js"></script>
                    <!-- Moment JS -->
                    <script type="text/javascript" src="/bower_components/angular-moment/angular-moment.js"></script>

                    <script type="text/javascript"
                            src="/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
                    <script type="text/javascript"
                            src="/bower_components/angular-eonasdan-datetimepicker/dist/angular-eonasdan-datetimepicker.min.js"></script>

                    <!-- JSON EDITOR -->
                    <script type="text/javascript" src="/bower_components/jsoneditor/dist/jsoneditor.js"></script>
                    <script type="text/javascript" src="/bower_components/ng-jsoneditor/ng-jsoneditor.js"></script>
                    <!-- Highcharts -->
                    <script type="text/javascript" src="/bower_components/highcharts/highcharts.js"></script>
                    <script type="text/javascript" src="/bower_components/highcharts-ng/dist/highcharts-ng.js"></script>
                    <!-- DataTable.net -->
                    <script src="/bower_components/datatables.net/js/jquery.dataTables.js" type="text/javascript" charset="utf-8"></script>
                    <script src="/bower_components/angular-datatables/dist/angular-datatables.min.js" type="text/javascript" charset="utf-8"></script>
                    {{ assets.outputJs() }}

</body>

</html>
