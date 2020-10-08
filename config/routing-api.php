<?php
use Phalcon\Mvc\Router\Group as RouterGroup;

$api = new RouterGroup([
    'module' => '$vpgov',
    'controller' => 'index',
    'action' => 'index',
    'namespace' => 'QQ\Module\vpgov\Controller\Api',
]);

$api->setPrefix('/$vpgov/api');

$api->add('/:controller/:action/:params',
[
    'controller' => 1,
    'action'    => 2,
    'params'    => 3,
]);

$api->add('/:controller/:action',
    [
        'controller' => 1,
        'action'    => 2,
    ]);

return $api;
