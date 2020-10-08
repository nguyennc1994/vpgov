<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    {{ get_title() }}
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/ui/material-pro/assets/images/favicon.png">
    <!-- Bootstrap Core CSS -->
    <link href="/ui/material-pro/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/bower_components/bootstrap-languages/languages.css" rel="stylesheet">
    <!-- chartist CSS -->
    <link href="/ui/material-pro/assets/plugins/chartist-js/dist/chartist.min.css" rel="stylesheet">
    <link href="/ui/material-pro/assets/plugins/chartist-js/dist/chartist-init.css" rel="stylesheet">
    <link href="/ui/material-pro/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css"
          rel="stylesheet">
    <!--This page css - Morris CSS -->
    <link href="/ui/material-pro/assets/plugins/c3-master/c3.min.css" rel="stylesheet">
    <link href="/ui/material-pro/assets/fonts/poppins/stylesheet.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="/ui/material-pro/material/css/style.css" rel="stylesheet">
    <link href="/ui/material-pro/material/css/dd-menu.css" rel="stylesheet">
    <link href="/ui/material-pro/material/css/clock.css" rel="stylesheet">
    <link href="/ui/material-pro/material/css/custom.css" rel="stylesheet">
    <link href="/ui/material-pro/assets/plugins/uppy/uppy.min.css" rel="stylesheet">
    <!-- You can change the theme colors from here -->
    <link href="/ui/material-pro/material/css/colors/blue.css" id="theme" rel="stylesheet">


    <!-- JSON EDITOR -->
    <link href="/bower_components/jsoneditor/dist/jsoneditor.css" rel="stylesheet">

    <!-- sweet alert -->
    <link href="/bower_components/sweetalert2/dist/sweetalert2.min.css" rel="stylesheet">
    <!-- Bootstrap Datetimepicker -->
    <link href="/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"
          rel="stylesheet">
    <!-- Angular -->
    <link href="/bower_components/angular-ui-tree/dist/angular-ui-tree.min.css" rel="stylesheet">
    <link href="/bower_components/ng-tags-input/ng-tags-input.css" rel="stylesheet">
    <link href="/bower_components/angular-multi-select-tree/dist/angular-multi-select-tree-0.1.0.min.css"
          rel="stylesheet">
    <link rel='stylesheet' href='/bower_components/angular-loading-bar/build/loading-bar.min.css' type='text/css'
          media='all'/>
    <link href="/bower_components/highcharts-ng/dist/highcharts-ng.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="/modules/vpgov/themes/backend/default/assets/chosen/chosen.css">
    <link rel="stylesheet" type="text/css" href="/modules/vpgov/themes/backend/default/assets/style.css">
    <!-- LayerSlider CSS -->
    <!-- External libraries: jQuery & GreenSock -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="//oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
{#    <script type="text/javascript">#}
{#        var CKEDITOR_BASEPATH = '/bower_components/ckeditor/';#}
{#        window.onerror = function (messageOrEvent, source, lineno, colno, error) {#}
{#            console.error(messageOrEvent);#}
{#//            return true;#}
{#        }#}
{#    </script>#}
    <style>
        /**
        Main css
         */
        .mce-widget span.mce-txt, .mce-menu-item span.mce-text {
            /*font-family: "Montserrat", sans-serif !important;*/
        }

        .file-browser-popup {
            z-index: 99999 !important;

        }

        .file-browser-popup .modal-body {
            height: 500px;
            overflow-y: scroll;
        }

        .form-group .tab-content {
            margin-top: 5px !important;
        }

        #modal-body-file-upload {
            height: 500px;
            overflow-y: scroll;
        }

        .modal-dialog .card:last {
            margin-bottom: 0 !important;;
        }

        .list-unstyled .media-body {
            border-left: 1px solid #ddd;
            padding-left: 5px;
        }

        /* --- Tree --- */
        .tree-node {
            border: 1px solid #dae2ea;
            /*background: #f8faff;*/
            /*color: #7c9eb2;*/
        }

        .nodrop {
            background-color: #f2dede;
        }

        .tree-node-content {
            margin: 10px;
        }

        .tree-handle {
            padding: 10px;
            /*background: #428bca;*/
            /*color: #FFF;*/
            margin-right: 10px;
        }

        .angular-ui-tree-handle:hover {
        }

        .angular-ui-tree-placeholder {
            /*background: #f0f9ff;*/
            /*border: 2px dashed #bed2db;*/
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        /* Fix BS4 uibModal */
        .fade.in {
            opacity: 1;
        }

        .modal.in .modal-dialog {
            -webkit-transform: translate(0, 0);
            -o-transform: translate(0, 0);
            transform: translate(0, 0);
        }

        .modal-backdrop.in {
            filter: alpha(opacity=50);
            opacity: .5;
        }

        /***************************** Dropzone Styling *****************************/

        /**
         * The dnd-list should always have a min-height,
         * otherwise you can't drop to it once it's empty
         */
        .thumb-image-gallery .dropzone ul[dnd-list] {
            min-height: 42px;
            margin: 0px;
            padding-left: 0px;
        }

        .thumb-image-gallery .dropzone li {
            display: block;
        }

        /**
         * Reduce opacity of elements during the drag operation. This allows the user
         * to see where he is dropping his element, even if the element is huge. The
         * .dndDragging class is automatically set during the drag operation.
         */
        .thumb-image-gallery .dropzone .dndDragging {
            opacity: 0.7;
        }

        /**
         * The dndDraggingSource class will be applied to the source element of a drag
         * operation.
         */
        .thumb-image-gallery .dropzone .dndDraggingSource {
            opacity: 0.5;
        }

        /**
         * An element with .dndPlaceholder class will be added as child of the dnd-list
         * while the user is dragging over it.
         */
        .thumb-image-gallery .dropzone .dndPlaceholder {
            background-color: #ddd !important;
            display: block;
            min-height: 42px;
        }

        /***************************** Element type specific styles *****************************/

        .thumb-image-gallery .dropzone .itemlist {
            min-height: 120px !important;
        }

        .thumb-image-gallery .dropzone .itemlist > li {
            background-color: #337ab7;
            border: none;
            border-radius: .25em;
            color: #fff;
            float: left;
            font-weight: 700;
            /*height: 50px;*/
            margin: 5px;
            padding: 3px;
            text-align: center;
            width: 80px;
        }

        .thumb-image-gallery .dropzone .itemlist > li:hover .btn {
            display: block;
        }

        .thumb-image-gallery .dropzone .itemlist > li .btn {
            display: none;
        }

        .thumb-image-gallery .dropzone .container-element {
            margin: 10px;
        }

        /* angular loading bar */
        #loading-bar {
            z-index: 99999 !important;
        }

        #loading-bar .bar {
            background: #F0F3BD;
        }

        #loading-bar .peg {
            -moz-box-shadow: #F0F3BD 1px 0 6px 1px;
            -ms-box-shadow: #F0F3BD 1px 0 6px 1px;
            -webkit-box-shadow: #F0F3BD 1px 0 6px 1px;
            box-shadow: #F0F3BD 1px 0 6px 1px;
        }

        #loading-bar-spinner .spinner-icon {
            border-top-color: #F0F3BD;
            border-left-color: #F0F3BD;
        }

        #slider {

        }

        /**
        Main css
         */

    </style>
    {% block inline_css %}
    {% endblock %}
</head>

<body class="fix-header fix-sidebar card-no-border" ng-app="vpgov">
<!-- ============================================================== -->
<!-- Preloader - style you can find in spinners.css -->
<!-- ============================================================== -->
<div class="preloader">
    <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
</div>
<!-- ============================================================== -->
<!-- Main wrapper - style you can find in pages.scss -->
<!-- ============================================================== -->
<div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <div class="navbar-header">
                <a class="navbar-brand" href="/cms">
                    <!-- Logo icon --><b>
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <img src="/ui/material-pro/assets/images/isys-icon.png" alt="homepage" class="dark-logo"/>
                        <!-- Light Logo icon -->
                        <img src="/ui/material-pro/assets/images/isys-light-icon.png" alt="homepage"
                             class="light-logo"/>
                    </b>
                    <!--End Logo icon -->
                    <!-- Logo text --><span>
                         <!-- dark Logo text -->
                         <img src="/ui/material-pro/assets/images/isys-text.png" alt="homepage" class="dark-logo"/>
                        <!-- Light Logo text -->
                         <img src="/ui/material-pro/assets/images/isys-light-text.png" class="light-logo"
                              alt="homepage"/></span> </a>
            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div class="navbar-collapse">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav mr-auto mt-md-0">
                    <!-- This is  -->
                    <li class="nav-item"><a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="mdi mdi-menu"></i></a></li>
                    <li class="nav-item"><a
                                class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i class="ti-menu"></i></a></li>

                </ul>
                <ul class="navbar-nav my-lg-0">
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                    src="/ui/material-pro/assets/images/users/user.svg" alt="user"
                                    class="profile-pic"/></a>
                        <div class="dropdown-menu dropdown-menu-right scale-up">
                            <ul class="dropdown-user">
                                <li>
                                    <div class="dw-user-box">
                                        <div class="u-img"><img src="/ui/material-pro/assets/images/users/user.svg "
                                                                alt="user"></div>
                                        <div class="u-text">
                                            <h4>{{ user['username'] }}</h4>
                                            {#<p class="text-muted">varun@gmail.com</p>#}
                                            <a href="/cms/profile" class="btn btn-rounded btn-danger btn-sm">View
                                                Profile</a>
                                        </div>
                                    </div>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
                                {#<li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>#}
                                <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                <li role="separator" class="divider"></li>
                                {#<li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>#}
                                <li role="separator" class="divider"></li>
                                <li><a href="/oauth/logout"><i class="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </div>
                    </li>
                    <!-- ============================================================== -->
                    <!-- Language -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i
                                    class="flag-icon flag-icon-vn"></i></a>
                        <div class="dropdown-menu dropdown-menu-right scale-up"><a class="dropdown-item" href="#"><span
                                        class="lang-sm lang-lbl" lang="en"></span></a></div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- ============================================================== -->
    <!-- End Topbar header -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- User profile -->
            <div class="user-profile"
                 style="background: url(/ui/material-pro/assets/images/background/user-info.jpg) no-repeat;">
                <!-- User profile image -->
                <div class="profile-img"><img src="/ui/material-pro/assets/images/users/user.svg" alt="user"/></div>
                <!-- User profile text-->
                <div class="profile-text"><a href="#" class="dropdown-toggle u-dropdown" data-toggle="dropdown"
                                             role="button" aria-haspopup="true"
                                             aria-expanded="true">{{ user['username'] }}</a>
                    <div class="dropdown-menu animated flipInY"><a href="#" class="dropdown-item"><i
                                    class="ti-user"></i> My Profile</a> <a href="#" class="dropdown-item"><i
                                    class="ti-wallet"></i> My Balance</a> <a href="#" class="dropdown-item"><i
                                    class="ti-email"></i> Inbox</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                        <div class="dropdown-divider"></div>
                        <a href="/oauth/logout" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a></div>
                </div>
            </div>
            <!-- End User profile text-->
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    {#<li class="nav-small-cap">PERSONAL</li>#}
                    <li><a class="has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false"><i
                                    class="mdi mdi-book-open-page-variant"></i><span class="hide-menu">Nội dung </span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/vpgov/backend/slide/"><i class="mdi mdi-minus"></i> Slide</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false"><i
                                    class="mdi mdi-book-open-page-variant"></i><span class="hide-menu">Transparents </span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/vpgov/backend/transparents/articles/"><i class="mdi mdi-minus"></i>Articles</a></li>

                        </ul>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/vpgov/backend/transparents/screens/"><i class="mdi mdi-minus"></i>Screens</a></li>

                        </ul>

                    </li>
                    <li><a class="has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false"><i
                                    class="mdi mdi-book-open-page-variant"></i><span class="hide-menu">Milestones </span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/vpgov/backend/milestones/screens/"><i class="mdi mdi-minus"></i>Screens</a></li>

                        </ul>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/vpgov/backend/milestones/articles/"><i class="mdi mdi-minus"></i>Articles</a></li>

                        </ul>
                    </li>
                    <li><a class="has-arrow waves-effect waves-dark" href="javascript:void(0);" aria-expanded="false"><i
                                    class="mdi mdi-monitor"></i><span class="hide-menu"> Hệ thống </span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><a href="/cms/workflow/"><i class="mdi mdi-minus"></i> Quy trình</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
        <!-- Bottom points-->
        <div class="sidebar-footer">
            <!-- item--><a href="" class="link" data-toggle="tooltip" title="Settings"><i class="ti-settings"></i></a>
            <!-- item--><a href="" class="link" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
            <!-- item--><a href="" class="link" data-toggle="tooltip" title="Logout"><i class="mdi mdi-power"></i></a>
        </div>
        <!-- End Bottom points-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Page wrapper  -->
    <!-- ============================================================== -->
    <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="row page-titles">
                <div class="col-md-5 col-8 align-self-center">
                    <h3 class="text-themecolor">{% if not (main_title is empty) %} {{ main_title['vi'] }} {% endif %}</h3>
                    <ol class="breadcrumb">
                        {% if not (main_breadcrumb is empty) %}
                            {% for link in main_breadcrumb %}
                                {% if loop.last %}
                                    <li class="breadcrumb-item active">{{ link['title']['vi'] }}
                                    </li>
                                {% else %}
                                    <li class="breadcrumb-item active"><a
                                                href="{{ link['href'] }}">{{ link['title']['vi'] }}</a>
                                    </li>
                                {% endif %}
                            {% endfor %}
                        {% endif %}
                    </ol>
                </div>
                <div class="col-md-7 col-4 align-self-center">
                    <div class="d-flex m-t-10 justify-content-end">
                        {#<div class="d-flex m-r-20 m-l-10 hidden-md-down">#}
                        {#<div class="chart-text m-r-10">#}
                        {#<h6 class="m-b-0">#}
                        {#<small>THIS MONTH</small>#}
                        {#</h6>#}
                        {#<h4 class="m-t-0 text-info">$58,356</h4></div>#}
                        {#<div class="spark-chart">#}
                        {#<div id="monthchart"></div>#}
                        {#</div>#}
                        {#</div>#}
                        <div class="d-flex m-r-20 m-l-10 hidden-md-down">
                            {#<div class="chart-text m-r-10">#}
                            {#<h6 class="m-b-0">#}
                            {#<small>LAST MONTH</small>#}
                            {#</h6>#}
                            {#<h4 class="m-t-0 text-primary">$48,356</h4></div>#}
                            {#<div class="spark-chart">#}
                            {#<div id="lastmonthchart"></div>#}
                            {#</div>#}
                            <svg id="clock">
                                <defs>

                                </defs>
                                <!-- Caption objects -->
                                <text id="time" class="caption-time timeText" x="140" y="35" stroke-width="0"
                                      text-anchor="left" alignment-baseline="middle"></text>

                                <text id="day" class="caption-day dayText" x="130" y="15" stroke-width="0"
                                      text-anchor="end" alignment-baseline="middle" filter=""></text>
                                <text id="date" class="caption-date dateText" x="130" y="35" stroke-width="0"
                                      text-anchor="end" alignment-baseline="middle" filter=""></text>

                            </svg>
                        </div>
                        <div class="">
                            <button class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10">
                                <i class="ti-settings text-white"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Start Page Content -->
            <!-- ============================================================== -->
            <div class="row">
                <div class="col-lg-12 col-md-12">

                    {% block content %}{% endblock %}

                </div>
            </div>

            <!-- ============================================================== -->
            <!-- End PAge Content -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Right sidebar -->
            <!-- ============================================================== -->
            <!-- .right-sidebar -->
            <div class="right-sidebar">
                <div class="slimscrollright">
                    <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span>
                    </div>
                    <div class="r-panel-body">
                        <ul id="themecolors" class="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" data-theme="default" class="default-theme">1</a></li>
                            <li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" data-theme="red" class="red-theme">3</a></li>
                            <li><a href="javascript:void(0)" data-theme="blue" class="blue-theme working">4</a></li>
                            <li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" data-theme="megna" class="megna-theme">6</a></li>
                            <li class="d-block m-t-30"><b>With Dark sidebar</b></li>
                            <li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme">7</a>
                            </li>
                            <li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" data-theme="red-dark" class="red-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" data-theme="blue-dark" class="blue-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a>
                            </li>
                            <li><a href="javascript:void(0)" data-theme="megna-dark" class="megna-dark-theme ">12</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Right sidebar -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer"> © 2018 by isys.vn</footer>
        <!-- ============================================================== -->
        <!--  End footer -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Page wrapper  -->
    <!-- ============================================================== -->
</div>



<script>


</script>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="/ui/material-pro/assets/plugins/jquery/jquery.min.js"></script>

<script src="/bower_components/tinymce/tinymce.js"></script>
<script type="text/javascript" src="/bower_components/angular-ui-tinymce/dist/tinymce.min.js"></script>
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

<script src="/bower_components/tinymce/tinymce.js"></script>
{#<script src="/ui/material-pro/assets/plugins/tinymce/tinymce.min.js"></script>#}

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
<script type="text/javascript" src="/bower_components/angular-ckeditor/angular-ckeditor.min.js"></script>
<script type="text/javascript" src="/bower_components/angular-ui-tinymce/dist/tinymce.min.js"></script>
<script type="text/javascript" src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script type="text/javascript" src="/bower_components/angular-slugify/angular-slugify.js"></script>
<script type="text/javascript" src="/bower_components/angular-sweetalert/dist/ngSweetAlert2.min.js"></script>
<script type='text/javascript' src='/bower_components/angular-loading-bar/build/loading-bar.min.js'></script>
<script type='text/javascript' src='/bower_components/angular-img-fallback/angular.dcb-img-fallback.min.js'></script>
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
<script src="https://cdn.ckeditor.com/4.8.0/full-all/ckeditor.js"></script>
{#<script src="https://cdn.ckeditor.com/ckeditor5/22.0.0/classic/ckeditor.js"></script>#}
{{ assets.outputJs() }}

<!-- LayerSlider script files -->
<script>

    angular.module('vpgov').factory('ModuleDataService', function ($q, $http) {
        return {
            language: '{{ language }}',
            languages: {{ languages | json_encode }},
            User: {
                uuid: "{{ user['uuid'] }}",
                roles: {{ user['roles'] | json_encode }}
            },
            translation: function () {
                var deferred = $q.defer();
                $http.get('/cms/language/translation/', {params: {model: model}}).then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                });
                return deferred.promise;
            },
            enable_workflow: {{ option['enable_workflow'] | json_encode }},
            modules: {{ modules | json_encode }}
        }
    });

    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });
</script>
{#<script type="text/ng-template" id="src/multi-select-tree.tpl.html">#}
{#    <div class="tree-control">#}

{#        <div class="tree-input" ng-click="onControlClicked($event)">#}
{#    <span ng-if="selectedItems.length == 0" class="selected-items">#}
{#      <span ng-bind="defaultLabel"></span>#}
{#    </span>#}
{#            <span ng-if="selectedItems.length > 0" class="selected-items">#}
{#      <span ng-repeat="selectedItem in selectedItems" class="selected-item">{[{selectedItem.title['{{ language }}']}]} <span class="selected-item-close"#}
{#                                                                                                                             ng-click="deselectItem(selectedItem, $event)"></span></span>#}
{#        <span class="caret"></span>#}
{#    </span>#}
{#            <!-- <input type="text" class="blend-in" /> -->#}
{#        </div>#}
{#        <div class="tree-view" ng-show="showTree">#}
{#            <div class="helper-container">#}
{#                <div class="line" data-ng-if="switchView">#}
{#                    <button type="button" ng-click="switchCurrentView($event);" class="helper-button">#}
{#                        {[{switchViewLabel}]}#}
{#                    </button>#}
{#                </div>#}
{#                <div class="line">#}
{#                    <input placeholder="Search..." type="text" ng-model="filterKeyword"#}
{#                           ng-click="onFilterClicked($event)"#}
{#                           class="input-filter">#}
{#                    <span class="clear-button" ng-click="clearFilter($event)"><span class="item-close"></span></span>#}
{#                </div>#}
{#            </div>#}
{#            <ul class="tree-container">#}
{#                <tree-item class="top-level" ng-repeat="item in inputModel" item="item" ng-show="!item.isFiltered"#}
{#                           use-callback="useCallback" can-select-item="canSelectItem"#}
{#                           multi-select="multiSelect" item-selected="itemSelected(item)"#}
{#                           on-active-item="onActiveItem(item)" select-only-leafs="selectOnlyLeafs"></tree-item>#}
{#            </ul>#}
{#        </div>#}
{#    </div>#}
{#</script>#}
{#<script type="text/ng-template" id="src/tree-item.tpl.html">#}
{#    <li>#}
{#        <div class="item-container" ng-class="{active: item.isActive, selected: item.selected}"#}
{#             ng-click="clickSelectItem(item, $event)" ng-mouseover="onMouseOver(item, $event)">#}
{#        <span ng-if="showExpand(item)" class="expand" ng-class="{'expand-opened': item.isExpanded}"#}
{#              ng-click="onExpandClicked(item, $event)"></span>#}

{#            <div class="item-details"><input class="tree-checkbox" type="checkbox" ng-if="showCheckbox()"#}
{#                                             ng-checked="item.selected"/>{[{item.title['{{ language }}']}]}#}
{#            </div>#}
{#        </div>#}
{#        <ul ng-repeat="child in item.children" ng-if="item.isExpanded">#}
{#            <tree-item item="child" item-selected="subItemSelected(item)" use-callback="useCallback"#}
{#                       can-select-item="canSelectItem" multi-select="multiSelect"#}
{#                       on-active-item="activeSubItem(item, $event)"></tree-item>#}
{#        </ul>#}
{#    </li>#}
{#</script>#}

{% block footer %}
{% endblock %}

<input type="hidden" id="qq_token" name="{{ token['tokenKey'] }}" value="{{ token['tokenValue'] }}">

</body>

</html>
