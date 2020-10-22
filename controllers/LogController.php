<?php
namespace QQ\Module\Vpgov\Controller;


use QQ\Core\Library\Auth\Exception;
use QQ\Core\Model\Services\Service;
use QQ\Core\Model\Services\Exceptions;
class LogController extends ControllerBase{

    public function initialize()
    {
        parent::initialize();

    }
    public function indexAction()
    {
//        $this->view->header = 'Logs';
//        $this->assets->addJs("/modules/vpgov/themes/default/ng-app/log/services/index.js");
//        $this->assets->addJs("/modules/vpgov/themes/default/ng-app/log/controllers/index.js");
//        $this->view->setVar('main_title', ['vi'=>'Logs']);
//        $this->view->setVar('main_breadcrumb', [
//            ['title' => ['vi'=>'Trang chủ'], 'href' => '/backend/slide'],
//            ['title' => ['vi'=>'Logs'], 'href' => false],
//        ]);
    }
    public function viewAction(){
        $year = (int)$this->request->getQuery('year','int');
        $month = (int)$this->request->getQuery('month','int');
        $file = $this->request->getQuery('file','string');
        echo @file_get_contents (logs_path($year . '/' . $month) . DIRECTORY_SEPARATOR. $file);
        exit();
    }
    public function searchAction(){
        $this->view->disable();
        $year = (int)$this->request->getQuery('year','int');
        $month = (int)$this->request->getQuery('month','int');
        $files = $this->sdir(logs_path($year . DIRECTORY_SEPARATOR . $month), '*.log');
        if(!empty($files)){
            echo json_encode(array(
                'success'   => true,
                'files'     => $files,
                'year'      => $year,
                'month'     => $month
            ));
        }else{
            echo json_encode(array(
                'success'   => false
            ));
        }
        exit();
    }
    function sdir( $path='.', $mask='*', $nocache=0 ){
        static $dir = array(); // cache result in memory
        if ( !isset($dir[$path]) || $nocache) {
            $dir[$path] = scandir($path);
        }
        foreach ($dir[$path] as $i=>$entry) {
            if ($entry!='.' && $entry!='..' && fnmatch($mask, $entry) ) {
                $sdir[] = $entry;
            }
        }
        return ($sdir);
    }
}

class ScanDir {
    static private $directories, $files, $ext_filter, $recursive;

// ----------------------------------------------------------------------------------------------
    // scan(dirpath::string|array, extensions::string|array, recursive::true|false)
    static public function scan(){
        // Initialize defaults
        self::$recursive = false;
        self::$directories = array();
        self::$files = array();
        self::$ext_filter = false;

        // Check we have minimum parameters
        if(!$args = func_get_args()){
            die("Must provide a path string or array of path strings");
        }
        if(gettype($args[0]) != "string" && gettype($args[0]) != "array"){
            die("Must provide a path string or array of path strings");
        }

        // Check if recursive scan | default action: no sub-directories
        if(isset($args[2]) && $args[2] == true){self::$recursive = true;}

        // Was a filter on file extensions included? | default action: return all file types
        if(isset($args[1])){
            if(gettype($args[1]) == "array"){self::$ext_filter = array_map('strtolower', $args[1]);}
            else
                if(gettype($args[1]) == "string"){self::$ext_filter[] = strtolower($args[1]);}
        }

        // Grab path(s)
        self::verifyPaths($args[0]);
        return self::$files;
    }

    static private function verifyPaths($paths){
        $path_errors = array();
        if(gettype($paths) == "string"){$paths = array($paths);}

        foreach($paths as $path){
            if(is_dir($path)){
                self::$directories[] = $path;
                $dirContents = self::find_contents($path);
            } else {
                $path_errors[] = $path;
            }
        }

        if($path_errors){echo "The following directories do not exists<br />";die(var_dump($path_errors));}
    }

    // This is how we scan directories
    static private function find_contents($dir){
        $result = array();
        $root = scandir($dir);
        foreach($root as $value){
            if($value === '.' || $value === '..') {continue;}
            if(is_file($dir.DIRECTORY_SEPARATOR.$value)){
                if(!self::$ext_filter || in_array(strtolower(pathinfo($dir.DIRECTORY_SEPARATOR.$value, PATHINFO_EXTENSION)), self::$ext_filter)){
                    self::$files[] = $result[] = $dir.DIRECTORY_SEPARATOR.$value;
                }
                continue;
            }
            if(self::$recursive){
                foreach(self::find_contents($dir.DIRECTORY_SEPARATOR.$value) as $value) {
                    self::$files[] = $result[] = $value;
                }
            }
        }
        // Return required for recursive search
        return $result;
    }
}
