<?php
return new \Phalcon\Config([
    'application' => [
        'controllersDir' => __DIR__ . '/../controllers/',
//        'viewsDir'       => __DIR__ . '/../views/',
        'viewsDirBackend'       => themes_path('vpgov','backend/default'),
        'viewsDirFrontend'       => themes_path('vpgov','frontend/default'),
        'partialsDir'    => 'partials/',
        'layoutsDir'     => 'layouts',
        'baseUri'        => '/vpgov/',
        'logger'         => [
            'enabled' => env('LOGGER_ENABLED'),
            'path'    => content_path('logs/'),
            'format'  => env('LOGGER_FORMAT'),
        ],
        'cache'          => [
            'lifetime' => env('CACHE_LIFETIME'),
            'prefix'   => env('CACHE_PREFIX'),
            'adapter'  => env('CACHE_DRIVER'),
            'cacheDir' => content_path('cache/html/'),
        ]
    ]
]);
