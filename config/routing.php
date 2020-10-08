<?php

use Phalcon\Mvc\Router\Group as RouterGroup;

$vpgov = new RouterGroup([
    'module'     => 'vpgov',
    'controller' => 'index',
    'action'     => 'index',
    'namespace'  => 'QQ\Module\Vpgov\Controller',
]);

$vpgov->add('/vpgov/:controller/:action/:params', [
        'controller' => 1,
        'action'     => 2,
        'params'     => 3,
    ]);

$vpgov->add('/vpgov/:controller', [
    'controller' => 1,
]);

$vpgov->add('/vpgov/backend', [
    'controller' => 'backend',
    'action'    => 'index'
]);

// Slide
$vpgov->add('/vpgov/backend/slide', [
    'controller' => 'backend',
    'action'    => 'slide'
]);

$vpgov->add('/vpgov/frontend/slide', [
    'controller' => 'frontend',
    'action'    => 'slide'
]);

$vpgov->add('/vpgov/frontend', [
    'controller' => 'frontend',
    'action'    => 'index'
]);

$vpgov->add('/vpgov[/]?', [
    'controller' => 'index',
    'action'    => 'index'
]);

return $vpgov;
