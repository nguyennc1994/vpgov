<?php

namespace QQ\Module\Vpgov\Controller;

use Phalcon\Di\Service;
use QQ\Core\Model\Services\Service\Workflow;


class FrontendController extends ControllerBase
{
    public function initialize()
    {
        parent::initialize(); // TODO: Change the autogenerated stub

    }

    public function indexAction()
    {
    $this->view->setVar('title','Backend');
    }
    public function leftSlideAction()
    {
    $this->view->setVar('title','Backend');
//        $this->assets->addJs("/modules/vpgov/themes/backend/default/ng-app/slide/services/index.js");
    }
    public function centerSlideAction()
    {
        $this->view->setVar('title','Backend');
//        $this->assets->addJs("/modules/vpgov/themes/backend/default/ng-app/slide/services/index.js");
    }



    public function slideAction()
    {
        $this->assets->addJs("/modules/vpgov/themes/frontend/default/ng-app/app.js");
        $this->assets->addJs("/modules/vpgov/themes/frontend/default/ng-app/slide/services/index.js");
        $this->assets->addJs("/modules/vpgov/themes/frontend/default/ng-app/slide/controllers/index.js");
    }

}
