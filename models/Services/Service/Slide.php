<?php
namespace QQ\Module\Vpgov\Model\Services\Service;
use QQ\Core\Model\Services\Service;
use QQ\Module\Vpgov\Model\SlideEntity;
use QQ\Core\Model\Services\Exceptions\EntityNotFoundException;
use \Phalcon\Paginator\Adapter\QueryBuilder;
use \Phalcon\Mvc\Model\Resultset\Simple as Resultset;
/**
 * \QQ\Core\Model\Services\Service\Vote
 *
 * @package QQ\Core\Model\Services\Service
 */
class Slide extends Service
{
    /**
     * Finds Vote by ID.
     *
     * @param  int $id The Posts ID.
     * @return TimelineEntity|null
     */
    public function findFirstById($id)
    {
        return SlideEntity::findFirstById($id) ?: null;
    }
    public function findFirstByUuid($uuid)
    {
        $e = SlideEntity::find(["uuid = :uuid:", "bind" => ["uuid" => $uuid]]);
        return $e->getFirst();
    }
    /**
     * Get PostEntity by ID.
     *
     * @param  int $uuid The PostEntity ID.
     * @return TimelineEntity
     *
     * @throws EntityNotFoundException
     */
    public function getFirstByUuid($uuid)
    {
        if (!$m = $this->findFirstByUuid($uuid)) {
            throw new EntityNotFoundException($uuid);
        }
        return $m;
    }
    public function getFirstByModel($model){
        // A raw SQL statement
        $sql = "SELECT * FROM viettel_slide WHERE data->>'model' = '{$model}' LIMIT 1 OFFSET 0";
        // Base model
        $m = new SlideEntity();
        // Execute the query
        $result = new Resultset(
            null,
            $m,
                    $m->getReadConnection()->query($sql)
        );
//        $this->getEventsManager()->fire('Timeline:findFirst', $this);
        if($result->count()){
            return $result->getFirst();
        }else{
            throw new EntityNotFoundException($model, 'model');
        }
//        return $result;
    }
    static function flatten($nested, $unset = true){
        $results = [];
        if (empty($nested)) return [];
        foreach($nested as $item){
            if(isset($item->children) && !empty($item->children)){
                $results = array_merge($results, self::flatten($item->children));
            }
            if($unset) unset($item->children);
            $results[] = $item;
        }
        return $results;
    }
//    public function getUrl($filter){
//        $timelines = self::filter($filter);
//        $Timeline = $timelines->getFirst();
//        $items = $Timeline->data->items;
//        $items = self::flatten($items);
//        foreach($items as $item){
//            if($item->id == $id) {
//                $slug = isset($item->slug-> $lang) ? $item->slug->$lang : '';
//                $url = '/' . $lang .'/' . $slug . '/' . $slug . '-c' . $item->id . '.html';
//                return $url;
//            }
//        }
//        return '';
//    }
    public function getByModel($model, $limit = 20, $offset = 0){
        // A raw SQL statement
        $sql = "SELECT * FROM viettel_slide";
        // Base model
        $m = new SlideEntity();
        // Execute the query
        $result = new Resultset(
            null,
            $m,
            $m->getReadConnection()->query($sql)
        );
//        if(!$result->count()){
//            throw new EntityNotFoundException();
//        }
        return $result;
    }
    public static function cache($filter){
        $module= @$filter['module'] ?: 'viettel';
        $type = @$filter['type'] ?: 'catalog';
        $model = @$filter['model'] ?: null;
        $name = @$filter['name'] ?: 'Slide';
        $tags = @$filter['tags'] ?: null;
        $order = @$filter['order'] ?: null;
        $page_size = @$filter['page_size'] ?: 200;
        $page_number = @$filter['page_number'] ?: 1;
        $m = new SlideEntity();
//        $sql = "SELECT *, count(*) OVER() as total_count  FROM hse_qr_query(?,?,?,?,?,?,?)";
        $sql = "SELECT * FROM core_Slide_filter_with_paging(?,?,?,?,?,?,?,?)";
        $resultset = new Resultset(
            null,
            $m,
            $m->getReadConnection()->query($sql, array($module, $type, $name, $model, $tags, $order, $page_size, $page_number))
        );
        if($resultset->count()){
            $cache_dir = content_path('cache/data/' . $module);
            if (!is_dir($cache_dir)) {
                mkdir($cache_dir, 0755, true);
            }
            $cache_file = $cache_dir . DIRECTORY_SEPARATOR . 'tree_' . $type . '_' . $name . '.php';
            $arr = [];
            foreach($resultset as $record){
                $arr[$record->uuid] = $record->getChildrenIdArray();
                file_put_contents($cache_file, '<?php return ' . var_export($arr, true) . ';');
            }
        }
    }
    public static function filter($filter = []){
    $order = @$filter['order'] ?: null;
    $page_size = @$filter['page_size'] ?: 20;
    $page_number = @$filter['page_number'] ?: 1;
    $lang = @$filter['lang'] ?:null;
    $m = new SlideEntity();
//        $sql = "SELECT *, count(*) OVER() as total_count  FROM hse_qr_query(?,?,?,?,?,?,?)";
//        $sql = "SELECT * FROM viettel1_timeline_filer_with_paging(?,?,?,?)";
    $sql = "SELECT * FROM viettel_slide";
    $resultset = new Resultset(
        null,
        $m,
//            $m->getReadConnection()->query($sql, array($lang, $order, $page_size, $page_number))
        $m->getReadConnection()->query($sql)
    );
    return $resultset;
}

    public function findBySlug($option){
        $lang = @$option['lang'] ?: null;
        $uuid = @$option['uuid'] ?: null;
        $module = @$option['module'] ?: null;
        $model = @$option['model'] ?: null;
        $type = @$option['type'] ?: null;
        $slug = @$option['slug'] ?: null;
        $state = @$option['state'] ?: null;
        $order = @$option['order'] ?: 'published_on,desc';
        $page_size = @$option['page_size'] ?: 5;
        $page_number = @$option['page_number'] ?: 1;
        $m = new SlideEntity();
//        $sql = "SELECT *, count(*) OVER() as total_count  FROM hse_qr_query(?,?,?,?,?,?,?)";
        $sql = "SELECT * FROM core_Slide_by_slug(?,?,?,?,?,?,?,?,?,?)";
        $resultset = new Resultset(
            null,
            $m,
            $m->getReadConnection()->query($sql, array($lang, $uuid, $module, $model, $type, $slug, $state, $order, $page_size, $page_number))
        );
        return $resultset;
    }
    /**
     * Get entity's score.
     *
     * @param int    $id     The Entity ID.
     * @param string $entity The Entity type.
     *
     * @return int
     */
    public function getScore($id, $entity)
    {
        $votes = $this->getVotes($id, $entity);
        return intval($votes['positive'] - $votes['negative']);
    }
}
