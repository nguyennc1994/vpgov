<?php
/**
 * Created by PhpStorm.
 * User: kun
 * Date: 27/06/2017
 * Time: 6:11 CH
 */

namespace QQ\Module\Vpgov\Model;


class SlideEntity extends ModuleBaseEntity
{
    public function getSource(){
        return $this->getPrefix1() . 'slide';
    }

//    public function afterFetch(){
//        parent::afterFetch();
//        $this->slug = json_decode($this->slug);
//    }
//    public function beforeSave(){
//        parent::beforeSave();
//        $this->slug = json_encode($this->slug);
//    }

//    public static function filter($filter = []){
//        $lang = @$filter['lang'] ?: null;
//        $catalog = @$filter['catalog'] ?: null;
//        $category = @$filter['category'] ?: null;
//        $state = @$filter['state'] ?: null;
//        $order = @$filter['order'] ?: created_on_DESC;
//        $page_size = @$filter['page_size'] ?: 20;
//        $page_number = @$filter['page_number'] ?: 1;
//
//        $m = new TimelineEntity();
//        $sql = "SELECT * FROM viettel1_timeline(?,?,?,?,?,?,?)";
//        $resultset = new Resultset(
//            null,
//            $m,
//            $m->getReadConnection()->query($sql)
//        );
//        return $resultset;
//    }
}


