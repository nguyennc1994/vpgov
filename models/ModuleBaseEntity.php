<?php
namespace QQ\Module\Vpgov\Model;

use Phalcon\Mvc\Model;
use QQ\Core\Model\Entity;
use QQ\Core\Tool\QFunction;
use Phalcon\DI\FactoryDefault;
use Phalcon\Mvc\Model\Resultset\Simple as Resultset;
use QQ\Core\Model\Behavior\Blameable as ModelBlameable;

/**
 * \QQ\Module\Cms\Model\ModuleBaseEntity
 *
 * It is common model basics for Mysql
 *
 * @package QQ\Module\Frontend\Model
 */
class ModuleBaseEntity extends Entity
{
    public function getPrefix(){
        return 'viettel_';
    }
    public function getPrefix1(){
        return 'viettel_';
    }
}
