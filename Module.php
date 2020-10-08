<?php
namespace QQ\Module\Vpgov;

use Phalcon\Loader;
use Phalcon\DiInterface;
use QQ\Core\Module as BaseModule;
use QQ\Core\Library\Events\ViewListener;

/**
 * \QQ\Module\Backend\Module
 *
 */
class Module extends BaseModule
{
    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function getHandlersNamespace()
    {
        return 'QQ\Module\Vpgov\Controller';
    }

    /**
     * Registers an autoloader related to the module.
     *
     * @param DiInterface $di
     */
    public function registerAutoloaders(DiInterface $di = null)
    {
        $loader = new Loader();

        $namespaces = [
            $this->getHandlersNamespace() => __DIR__ . '/controllers/',
            'QQ\Module\Vpgov\Model' => __DIR__ . '/models/',
//            'QQ\Module\Vpgov\Services\Service'      => __DIR__ . '/models/Services/Service',
            'QQ\Module\Vpgov\Forms' => __DIR__ . '/forms/',
        ];

        $loader->registerNamespaces($namespaces);

        $loader->register();
    }

    /**
     * Registers services related to the module.
     *
     * @param DiInterface $di
     */
    public function registerServices(DiInterface $di)
    {
        // Read configuration
        $moduleConfig = require __DIR__ . '/config/config.php';

        // Tune Up the URL Component
        $url = $di->getShared('url');
        $url->setBaseUri($moduleConfig->application->baseUri);

        $eventsManager = $di->getShared('eventsManager');
        $eventsManager->attach('view:notFoundView', new ViewListener($di));

        $di->getShared('option')->load('vpgov');

        // Setting up the View Component
        $theme = $di->getShared('theme');
        $view = $di->getShared('view');

        $theme = $di->getShared('theme');
        $view = $di->getShared('view');
        $di->getShared('translation')->load($lang = null, $module = 'vpgov', $theme->getThemeName(), $prefix = '');

        $theme->setModuleName('vpgov');
        $theme->setThemeName('default');
        $controller = $di->getShared('router')->getControllerName();
        if ($controller == 'backend') $view->setViewsDir($moduleConfig->application->viewsDirBackend);
        else {
            // Load translation
            $di->getShared('translation')->load($lang = null, $module = 'vpgov', $theme->getThemeName(), $prefix = 'frontend/');
            $view->setViewsDir($moduleConfig->application->viewsDirFrontend);
        }
    }
}
