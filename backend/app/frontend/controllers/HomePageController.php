<?php

namespace app\frontend\controllers;

use app\backend\modules\member\models\MemberRelation;
use app\common\components\ApiController;
use app\common\events\finance\PetEvent;
use app\common\exceptions\MemberNotLoginException;
use app\common\facades\Setting;
use app\common\helpers\Cache;
use app\common\models\AccountWechats;
use app\common\models\member\MemberInvitationCodeLog;
use app\common\models\MemberShopInfo;
use app\common\modules\goods\GoodsRepository;
use app\common\services\popularize\PortType;
use app\frontend\models\Member;
use app\frontend\modules\coupon\controllers\MemberCouponController;
use app\frontend\modules\member\controllers\MemberController;
use app\frontend\modules\member\models\MemberModel;
use app\frontend\modules\shop\controllers\IndexController;
use EasyWeChat\Foundation\Application;
use Yunshop\Designer\Common\Services\IndexPageService;
use Yunshop\Designer\Common\Services\OtherPageService;
use Yunshop\Designer\Common\Services\PageTopMenuService;
use Yunshop\Designer\models\Designer;
use Yunshop\Designer\models\DesignerMenu;
use Yunshop\Designer\models\GoodsGroupGoods;
use Yunshop\Diyform\api\DiyFormController;
use Yunshop\Love\Common\Models\GoodsLove;
use Yunshop\Love\Common\Services\SetService;
use Yunshop\Designer\Backend\Modules\Page\Controllers\RecordsController;
use app\common\models\Goods;
use Yunshop\NearbyStoreGoods\common\services\DesignerService;
use Yunshop\NearbyStoreGoods\frontend\controllers\DesignerController;


class HomePageController extends ApiController
{
    protected $publicAction = [
        'index',
        'defaultDesign',
        'defaultMenu',
        'defaultMenuStyle',
        'bindMobile',
        'wxapp',
        'isCloseSite',
        'designerShare',
        'getParams',
        'getCaptcha'
    ];
    protected $ignoreAction = [
        'defaultDesign',
        'defaultMenu',
        'defaultMenuStyle',
        'bindMobile',
        'wxapp',
        'isCloseSite',
        'designerShare',
        'getCaptcha'
    ];
    private $pageSize = 16;

    /**
     * @return \Illuminate\Http\JsonResponse ??????????????????page_id?????????,????????????????????????; ???????????????page_id?????????,????????????????????????
     */
    public function index($request, $integrated = null)
    {
        $i = \YunShop::request()->i;
        $mid = \YunShop::request()->mid;
        $type = \YunShop::request()->type;
        $pageId = (int)\YunShop::request()->page_id ?: 0;
        $member_id = \YunShop::app()->getMemberId();
        $scope = \YunShop::request()->scope;

        try {
            //????????????, ??????????????? setting.get
            $key = \YunShop::request()->setting_key ? \YunShop::request()->setting_key : 'shop';

            if (!Cache::has('shop_setting')) {
                $setting = Setting::get('shop.' . $key);

                if (!is_null($setting)) {
                    Cache::put('shop_setting', $setting, 3600);
                }
            } else {
                $setting = Cache::get('shop_setting');
            }

            if ($setting) {
                $setting['logo'] = replace_yunshop(yz_tomedia($setting['logo']));
                if (!Cache::has('member_relation')) {
                    $relation = MemberRelation::getSetInfo()->first();

                    if (!is_null($relation)) {
                        Cache::put('member_relation', $relation, 3600);
                    }
                } else {
                    $relation = Cache::get('member_relation');
                }

                $setting['signimg'] = replace_yunshop(yz_tomedia($setting['signimg']));
                if ($relation) {
                    $setting['agent'] = $relation->status ? true : false;
                } else {
                    $setting['agent'] = false;
                }

                $setting['diycode'] = html_entity_decode($setting['diycode']);
                $result['mailInfo'] = $setting;
            }

            //?????????????????????
            if (!Cache::has('shop_member')) {
                $member_set = Setting::get('shop.member');

                if (!is_null($member_set)) {
                    Cache::put('shop_member', $member_set, 4200);
                }
            } else {
                $member_set = Cache::get('shop_member');
            }

            $is_bind_mobile = 0;

            if (!is_null($member_set)) {
                if ((0 < $member_set['is_bind_mobile']) && $member_id && $member_id > 0) {
                    if (!Cache::has($member_id . '_member_info')) {
                        $member_model = Member::getMemberById($member_id);
                        if (!is_null($member_model)) {
                            Cache::put($member_id . '_member_info', $member_model, 4200);
                        }
                    } else {
                        $member_model = Cache::get($member_id . '_member_info');
                    }
                    if ($member_model && empty($member_model->mobile)) {
                        $is_bind_mobile = intval($member_set['is_bind_mobile']);
                    }
                }
            }
            $result['mailInfo']['is_bind_mobile'] = $is_bind_mobile;
            //????????????, ??????????????? member.member.getUserInfo
            if (empty($pageId)) { //??????????????????????????????
                if (!empty($member_id)) {
                    // TODO

                    if (!empty(Member::current()->uid)) {
//                        $member_info = $member_info->toArray();
//                        $data        = MemberModel::userData($member_info, $member_info['yz_member']);
//                        $data        = MemberModel::addPlugins($data);

                        $result['memberinfo']['uid'] = Member::current()->uid;
                    }
                }
            }


            //??????????????????????????????????????????
            if (app('plugins')->isEnabled('designer')) {

                $is_love = app('plugins')->isEnabled('love');
                if ($is_love) {
                    $love_basics_set = SetService::getLoveSet();//???????????????????????????
                    $result['designer']['love_name'] = $love_basics_set['name'];
                }

                //????????????
                // TODO
                if (!Cache::has('designer_system')) {
                    $result['system'] = (new \Yunshop\Designer\services\DesignerService())->getSystemInfo();

                    Cache::put('designer_system', $result['system'], 4200);
                } else {
                    $result['system'] = Cache::get('designer_system');
                }

                $page_id = $pageId;
                if ($page_id) {
                    $page = (new OtherPageService())->getOtherPage($page_id);
                } else {
                    $page = (new IndexPageService())->getIndexPage();
                }

                if ($page) {
                    if (!Cache::has("{$member_id}_designer_default_{$page->id}")) {

                        $designer = (new \Yunshop\Designer\services\DesignerService())->getPageForHomePage($page->toArray());

                        Cache::put("{$member_id}_designer_default_{$page->id}", $designer, 180);
                    } else {
                        $designer = Cache::get("{$member_id}_designer_default_{$page->id}");
                    }

                    $designer = $this->addDynamicData($designer);


                    $result['item'] = $designer;

                    //???????????? todo ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Y181031
                    if ($designer['pageinfo']['params']['top_menu'] && $designer['pageinfo']['params']['top_menu_id']) {
                        $result['item']['topmenu'] = (new PageTopMenuService())->getTopMenu($designer['pageinfo']['params']['top_menu_id']);
                    } else {
                        $result['item']['topmenu'] = [
                            'menus' => [],
                            'params' => [],
                            'isshow' => false
                        ];
                    }

                    $footerMenuType = $designer['footertype']; //????????????: 0 - ?????????, 1 - ??????????????????, 2 - ??????????????????????????????
                    $footerMenuId = $designer['footermenu'];
                } elseif (empty($pageId)) { //??????????????????????????????, ???????????????
                    $result['default'] = self::defaultDesign();
                    $result['item']['data'] = ''; //?????????????????????
                    $footerMenuType = 1;
                    $result['item']['topmenu'] = [
                        'menus' => [],
                        'params' => [],
                        'isshow' => false
                    ];
                } else { //????????????????????????????????????
                    $result['item']['data'] = ''; //?????????????????????
                    $footerMenuType = 0;
                    $result['item']['topmenu'] = [
                        'menus' => [],
                        'params' => [],
                        'isshow' => false
                    ];
                }
                //???????????????, ???????????????  plugin.designer.home.index.menu
                switch ($footerMenuType) {
                    case 1:
                        $result['item']['menus'] = self::defaultMenu($i, $mid, $type);//??????
                        $result['item']['menustyle'] = self::defaultMenuStyle();//????????????
                        break;
                    case 2:
                        if (!empty($footerMenuId)) {
                            if (!Cache::has("designer_menu_{$footerMenuId}")) {
                                $menustyle = DesignerMenu::getMenuById($footerMenuId);
                                Cache::put("designer_menu_{$footerMenuId}", $menustyle, 4200);
                            } else {
                                $menustyle = Cache::get("designer_menu_{$footerMenuId}");
                            }

                            if (!empty($menustyle->menus) && !empty($menustyle->params)) {
                                $result['item']['menus'] = json_decode($menustyle->toArray()['menus'], true);
                                $result['item']['menustyle'] = json_decode($menustyle->toArray()['params'], true);
                                //?????????????????????????????????
                                foreach ($result['item']['menus'] as $key => $value) {
                                    if (!strexists($value['url'], 'addons/yun_shop/')) {
                                        $result['item']['menus'][$key]['is_shop'] = 1;
                                    } else {
                                        $result['item']['menus'][$key]['is_shop'] = 0;
                                    }
                                }
                            } else {
                                $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
                                $result['item']['menustyle'] = self::defaultMenuStyle();
                            }
                        } else {
                            $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
                            $result['item']['menustyle'] = self::defaultMenuStyle();
                        }
                        break;
                    default:
                        $result['item']['menus'] = false;
                        $result['item']['menustyle'] = false;
                }
            } elseif (empty($pageId)) { //??????????????????????????????, ??????????????????"????????????"??????"????????????"????????????, ??????????????????
                $result['default'] = self::defaultDesign();
                $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
                $result['item']['menustyle'] = self::defaultMenuStyle();
                $result['item']['data'] = ''; //?????????????????????
                $result['item']['topmenu'] = [
                    'menus' => [],
                    'params' => [],
                    'isshow' => false
                ];
            }

            //?????????????????????
            $status = Setting::get('shop.sms.status');
            if (extension_loaded('fileinfo')) {
                if ($status == 1) {
                    $captcha = self::captchaTest();
                    $result['captcha'] = $captcha;
                    $result['captcha']['status'] = $status;
                }
            }
            $result['system']['mobile_login_code'] = $member_set['mobile_login_code'] ? 1 : 0;
            //???????????????????????????????????????
            $result['system']['btn_romotion'] = PortType::popularizeShow($type);

            if($page_id)
            {
                $result['memberDesigner'] = (new MemberController())->designer($request,true,$page_id)['json'];
            }
            //????????????????????????????????????


            if (is_null($integrated)) {
                return $this->successJson('ok', $result);
            } else {
                return show_json(1, $result);
            }
        } catch (MemberNotLoginException $e) {
            if ($scope == 'pass') {
                return show_json(1, ['mailInfo' => ['credit1' => 0], 'item' => ['data' => []]]);
            }

            throw (new MemberNotLoginException($e->getMessage(), $e->getData()));

        }
    }

    private function designerGoodsData($designer)
    {
        foreach ($designer['data'] as $data) {
            if ($data['temp'] == 'goods') {
                foreach ($data['data'] as &$goode_award) {
                    $goodsIds[] = $goode_award['goodid'];
                }
            }
        }
        if (!$goodsIds) {
            return $designer;
        }

        $goodsCollection = Goods::select(['id','stock'])->whereIn('id',$goodsIds)->getQuery()->get();
        $goodsLoveCollection = GoodsLove::select(['goods_id','award'])->whereIn('goods_id',$goodsIds)->getQuery()->get();
        foreach ($designer['data'] as &$data){
            if ($data['temp'] == 'goods'){
                foreach ($data['data'] as &$goode_award){
                    $goode_award['stock'] = array_get($goodsCollection->where('id',$goode_award['goodid'])->first(),'stock',0);
                    $goode_award['award'] = array_get($goodsLoveCollection->where('goods_id',$goode_award['goodid'])->first(),'award',0);

                }
            }
        }

        return $designer;
    }

    private function addDynamicData($designer)
    {
        $shop = Setting::get('shop.shop')['credit1'] ?: '??????';
        if (app('plugins')->isEnabled('love')) {
            $designer = $this->designerGoodsData($designer);
        }
        foreach ($designer['data'] as $k=>&$data) {
            if(app('plugins')->isEnabled('love')){
                //??????????????????
                if ($data['temp'] == 'sign') {
                    $data['params']['award_content'] = str_replace('??????', $shop, $data['params']['award_content']);
                }
                if ($data['temp'] == 'goods') {
                    $goods_ids = [];
                    foreach ($data['data'] as $key => $goods) {
                        $goods_ids[] = $goods['goodid'];
                    }

                    if (count($goods_ids) > 1) {
                        $goodsInfo = $this->getGoodsModelByIds($goods_ids);
                        foreach ($data['data'] as $keyTwo => &$valueTwo) {
                            foreach ($goodsInfo as $key => $goodsModel) {
                                if ($valueTwo['goodid'] == $goodsModel['id']) {
                                    $valueTwo['vip_price']     = $goodsModel['vip_price'];
                                }
                            }
                        }

                    }
                }
            }else{
                //??????????????????
                if ($data['temp'] == 'sign') {
                    foreach ($data['params'] as &$award_content) {
                        $data['params']['award_content'] = str_replace('??????', $shop, $data['params']['award_content']);
                    }
                }
                if ($data['temp'] == 'goods') {
                    $goods_ids = [];
                    foreach ($data['data'] as $key => $goods) {
                        $goods_ids[] = $goods['goodid'];
                    }
                    if (count($goods_ids) > 1) {
                        $goodsInfo = $this->getGoodsModelByIds($goods_ids);
                        foreach ($data['data'] as $keyTwo => &$valueTwo) {
                            foreach ($goodsInfo as $key => $goodsModel) {
                                if ($valueTwo['goodid'] == $goodsModel['id']) {
                                    $valueTwo['unit']  = $goodsModel['sku'];
                                    $valueTwo['vip_price']     = $goodsModel['vip_price'];
                                    $valueTwo['award'] = 0;
                                }
                            }
                        }
                    }
                }
            }
            if ($data['temp'] == 'nearbygoods') {
                if(app('plugins')->isEnabled('nearby-store-goods'))
                {
                    $set = \Setting::get('nearby-store-goods.is_open');
                    if($set == 1)
                    {
                        $nearService = new DesignerController();
                        $data['get_info'] = $nearService->getGoods(request(),true,$data['params']['displaynum'])['json'];
                    }
                }
            }
            if($data['temp'] == 'diyform')
            {
                if (!app('plugins')->isEnabled('diyform')) {
                    unset($designer['data'][$k]);
                }else{
                    $getInfo = (new DiyFormController())->getDiyFormTypeMemberData('', true,$data['data']['form_id']);
                    $data['get_info'] = $getInfo['status'] == 1?$getInfo['json']:[];
                }
            }
            if($data['temp'] == 'coupon')
            {
                    $getInfo = (new MemberCouponController())->couponsForDesigner('', true);
                    $data['get_info'] = $getInfo['status'] == 1?$getInfo['json']:[];
            }
        }
        $designer['data'] = array_values($designer['data']);
        return $designer;
    }

    public function designerShare()
    {
        $i = \YunShop::request()->i;
        $mid = \YunShop::request()->mid;
        $type = \YunShop::request()->type;
        $pageId = (int)\YunShop::request()->page_id ?: 0;
        $member_id = \YunShop::app()->getMemberId();

        if (app('plugins')->isEnabled('designer')) {
            //????????????
            // TODO
            if (!Cache::has('designer_system')) {
                $result['system'] = (new \Yunshop\Designer\services\DesignerService())->getSystemInfo();

                Cache::put('designer_system', $result['system'], 4200);
            } else {
                $result['system'] = Cache::get('designer_system');
            }

            $page_id = $pageId;
            if ($page_id) {
                $page = (new OtherPageService())->getOtherPage($page_id);
            } else {
                $page = (new IndexPageService())->getIndexPage();
            }

            if ($page) {
                if (empty($pageId) && Cache::has($member_id . '_designer_default_0')) {
                    $designer = Cache::get($member_id . '_designer_default_0');
                } else {
                    $designer = (new \Yunshop\Designer\services\DesignerService())->getPageForHomePage($page->toArray());
                }

                if (empty($pageId) && !Cache::has($member_id . '_designer_default_0')) {
                    Cache::put($member_id . '_designer_default_0', $designer, 180);
                }

                $result['item'] = $designer;

                //???????????? todo ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Y181031
                if ($designer['pageinfo']['params']['top_menu'] && $designer['pageinfo']['params']['top_menu_id']) {
                    $result['item']['topmenu'] = (new PageTopMenuService())->getTopMenu($designer['pageinfo']['params']['top_menu_id']);
                } else {
                    $result['item']['topmenu'] = [
                        'menus' => [],
                        'params' => [],
                        'isshow' => false
                    ];
                }


                $footerMenuType = $designer['footertype']; //????????????: 0 - ?????????, 1 - ??????????????????, 2 - ??????????????????????????????
                $footerMenuId = $designer['footermenu'];
            } elseif (empty($pageId)) { //??????????????????????????????, ???????????????
                $result['default'] = self::defaultDesign();
                $result['item']['data'] = ''; //?????????????????????
                $footerMenuType = 1;
                $result['item']['topmenu'] = [
                    'menus' => [],
                    'params' => [],
                    'isshow' => false
                ];
            } else { //????????????????????????????????????
                $result['item']['data'] = ''; //?????????????????????
                $footerMenuType = 0;
                $result['item']['topmenu'] = [
                    'menus' => [],
                    'params' => [],
                    'isshow' => false
                ];
            }
            //???????????????, ???????????????  plugin.designer.home.index.menu
            switch ($footerMenuType) {
                case 1:
                    $result['item']['menus'] = self::defaultMenu($i, $mid, $type);//??????
                    $result['item']['menustyle'] = self::defaultMenuStyle();//????????????
                    break;
                case 2:
                    if (!empty($footerMenuId)) {
                        if (!Cache::has("designer_menu_{$footerMenuId}")) {
                            $menustyle = DesignerMenu::getMenuById($footerMenuId);
                            Cache::put("designer_menu_{$footerMenuId}", $menustyle, 4200);
                        } else {
                            $menustyle = Cache::get("designer_menu_{$footerMenuId}");
                        }

                        if (!empty($menustyle->menus) && !empty($menustyle->params)) {
                            $result['item']['menus'] = json_decode($menustyle->toArray()['menus'], true);
                            $result['item']['menustyle'] = json_decode($menustyle->toArray()['params'], true);
                            //?????????????????????????????????
                            foreach ($result['item']['menus'] as $key => $value) {
                                if (!strexists($value['url'], 'addons/yun_shop/')) {
                                    $result['item']['menus'][$key]['is_shop'] = 1;
                                } else {
                                    $result['item']['menus'][$key]['is_shop'] = 0;
                                }
                            }
                        } else {
                            $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
                            $result['item']['menustyle'] = self::defaultMenuStyle();
                        }
                    } else {
                        $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
                        $result['item']['menustyle'] = self::defaultMenuStyle();
                    }
                    break;
                default:
                    $result['item']['menus'] = false;
                    $result['item']['menustyle'] = false;
            }
        } elseif (empty($pageId)) { //??????????????????????????????, ??????????????????"????????????"??????"????????????"????????????, ??????????????????
            $result['default'] = self::defaultDesign();
            $result['item']['menus'] = self::defaultMenu($i, $mid, $type);
            $result['item']['menustyle'] = self::defaultMenuStyle();
            $result['item']['data'] = ''; //?????????????????????
            $result['item']['topmenu'] = [
                'menus' => [],
                'params' => [],
                'isshow' => false
            ];
        }
        return $this->successJson('ok', $result);
    }

    public function getLoveGoods($goods_id)
    {
        $goodsModel = GoodsLove::select('award')->where('uniacid', \Yunshop::app()->uniacid)->where('goods_id', $goods_id)->first();

        $goods = $goodsModel ? $goodsModel->toArray()['award'] : 0;
        return $goods;
    }

    public function getMemberGoodsStock($goods_id)
    {
        $goodsModel = Goods::select('stock')->where('uniacid', \Yunshop::app()->uniacid)->where('id', $goods_id)->first();
        $stock = $goodsModel ? $goodsModel->stock : 0;
        return $stock;
    }

    private function getGoodsStock($goods_id)
    {
        $goodsModel = Goods::select('stock')->where('uniacid', \Yunshop::app()->uniacid)->where('id', $goods_id)->first();
        $stock = $goodsModel ? $goodsModel->stock : 0;
        return $stock;
    }

    /*
     * ??????????????????
     */
    public function GetPageGoods()
    {
        if (app('plugins')->isEnabled('designer')) {
            $group_id = \YunShop::request()->group_id;
            $group_goods = new GoodsGroupGoods();
            $data = $group_goods->GetPageGoods($group_id);
            $datas = $data->paginate(12)
                ->toArray();

            $goods_model = \app\common\modules\shop\ShopConfig::current()->get('goods.models.commodity_classification');
            $goods_model = new $goods_model;

            foreach ($datas['data'] as $key => $itme) {
                $datas['data'][$key] = unserialize($itme['goods']);//????????????
                $rGoods = $goods_model->select()
                    ->where('id', $datas['data'][$key]['goodid'])
                    ->first();
                $datas['data'][$key]['vip_price'] = $rGoods->vip_price;
                $datas['data'][$key]['vip_next_price'] = $rGoods->vip_next_price;
                $datas['data'][$key]['sales'] = $rGoods->virtual_sales + $rGoods->show_sales;
                $datas['data'][$key]['vip_level_status'] = $rGoods->vip_level_status;
                $datas['data'][$key]['price_level'] = $rGoods->price_level;
            }
            return $this->successJson('ok', $datas);
        }
    }

    //?????????????????????
    public function captchaTest()
    {
        $captcha = app('captcha');
        $captcha_base64 = $captcha->create('default', true);

        return $captcha_base64;
    }

    /**
     * ?????????????????????????????????
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function wxapp($request)
    {
        return $this->index($request);
    }

    /**
     * @return array ?????????????????????(????????? & ?????? & ?????? & ????????????)
     */
    public static function defaultDesign()
    {
        if (!Cache::has('shop_category')) {
            $set = Setting::get('shop.category');

            Cache::put('shop_category', $set, 4200);
        } else {
            $set = Cache::get('shop_category');
        }

        $set['cat_adv_img'] = replace_yunshop(yz_tomedia($set['cat_adv_img']));

        if(!Cache::has('shop_default_design')){
            $result = Array(
                'ads'        => (new IndexController())->getAds(),
                'advs'       => (new IndexController())->getAdv(),
                'brand'      => (new IndexController())->getRecommentBrandList(),
                'category'   => (new IndexController())->getRecommentCategoryList(),
                'time_goods' => (new IndexController())->getTimeLimitGoods(),
                'set'        => $set,
                'goods'      => (new IndexController())->getRecommentGoods(),
            );
            Cache::put('shop_default_design', $result, 1);

        }else {
            $result = Cache::get('shop_default_design');
        }
        return $result;
    }


    /**
     * @param $i ?????????ID
     * @param $mid ?????????uid
     * @param $type
     *
     * @return array ???????????????????????????
     */
    public static function defaultMenu($i, $mid, $type)
    {
        app('plugins')->isEnabled('designer') ? $CustomizeMenu = DesignerMenu::getDefaultMenu() : null;
        if (!empty($CustomizeMenu)) {
            $CustomizeMenu_list = $CustomizeMenu->toArray();
            if (is_array($CustomizeMenu_list) && !empty($CustomizeMenu_list['menus'])) {
                $Menu = json_decode(htmlspecialchars_decode($CustomizeMenu['menus']), true);
                foreach ($Menu as $key => $value) {
                    // $Menu[$key]['name']=$Menu[$key]['id'];
//                    $url = substr($Menu[$key]['url'],strripos($Menu[$key]['url'],"addons")-1);
                    if (strripos($Menu[$key]['url'], "addons") != false) {
                        $url = substr($Menu[$key]['url'], strripos($Menu[$key]['url'], "addons") - 1);
                    } else {
                        $url = $Menu[$key]['url'];
                    }
                    $Menu[$key]['url'] = $url ?: '';

                    //$Menu[$key]['url'] ="/addons/yun_shop/".'?#'.substr($Menu[$key]['url'],strripos($Menu[$key]['url'],"#/")+1)."&mid=" . $mid . "&type=" . $type;
                }
            }
        } else {
            //????????????
            $Menu = Array(
                Array(
                    "id" => 1,
                    "title" => "??????",
                    "icon" => "fa fa-home",
                    "url" => "/addons/yun_shop/?#/home?i=" . $i . "&mid=" . $mid . "&type=" . $type,
                    "name" => "home",
                    "subMenus" => [],
                    "textcolor" => "#70c10b",
                    "bgcolor" => "#24d7e6",
                    "bordercolor" => "#bfbfbf",
                    "iconcolor" => "#666666"
                ),
                Array(
                    "id" => "menu_1489731310493",
                    "title" => "??????",
                    "icon" => "fa fa-th-large",
                    "url" => "/addons/yun_shop/?#/category?i=" . $i . "&mid=" . $mid . "&type=" . $type,
                    "name" => "category",
                    "subMenus" => [],
                    "textcolor" => "#70c10b",
                    "bgcolor" => "#24d7e6",
                    "iconcolor" => "#666666",
                    "bordercolor" => "#bfbfbf"
                ),
                Array(
                    "id" => "menu_1489735163419",
                    "title" => "?????????",
                    "icon" => "fa fa-cart-plus",
                    "url" => "/addons/yun_shop/?#/cart?i=" . $i . "&mid=" . $mid . "&type=" . $type,
                    "name" => "cart",
                    "subMenus" => [],
                    "textcolor" => "#70c10b",
                    "bgcolor" => "#24d7e6",
                    "iconcolor" => "#666666",
                    "bordercolor" => "#bfbfbf"
                ),
                Array(
                    "id" => "menu_1491619644306",
                    "title" => "????????????",
                    "icon" => "fa fa-user",
                    "url" => "/addons/yun_shop/?#/member?i=" . $i . "&mid=" . $mid . "&type=" . $type,
                    "name" => "member",
                    "subMenus" => [],
                    "textcolor" => "#70c10b",
                    "bgcolor" => "#24d7e6",
                    "iconcolor" => "#666666",
                    "bordercolor" => "#bfbfbf"
                ),
            );
            $promoteMenu = Array(
                "id" => "menu_1489731319695",
                "classt" => "no",
                "title" => "??????",
                "icon" => "fa fa-send",
                "url" => "/addons/yun_shop/?#/member/extension?i=" . $i . "&mid=" . $mid . "&type=" . $type,
                "name" => "extension",
                "subMenus" => [],
                "textcolor" => "#666666",
                "bgcolor" => "#837aef",
                "iconcolor" => "#666666",
                "bordercolor" => "#bfbfbf"
            );
            $extension_status = Setting::get('shop_app.pay.extension_status');
            if (isset($extension_status) && $extension_status == 0) {
                $extension_status = 0;
            } else {
                $extension_status = 1;
            }
            if ($type == 7 && $extension_status == 0) {
                unset($promoteMenu);
            } else {
                //????????????????????????
                if (PortType::popularizeShow($type)) {
                    $Menu[4] = $Menu[3]; //??? 5 ???????????????"????????????"
                    $Menu[3] = $Menu[2]; //??? 4 ???????????????"?????????"
                    $Menu[2] = $promoteMenu; //?????? 3 ????????????????????????"??????"
                }
            }
        }

        //???????????????"???????????????", ???????????????????????????"??????"??????
        /*
        if(Cache::has('member_relation')){
            $relation = Cache::get('member_relation');
        } else {
            $relation = MemberRelation::getSetInfo()->first();
        }
        */
        //if($relation->status == 1){

        return $Menu;


    }

    /**
     * @return array ???????????????????????????
     */
    public static function defaultMenuStyle()
    {
        return Array(
            "previewbg" => "#ef372e",
            "height" => "49px",
            "textcolor" => "#666666",
            "textcolorhigh" => "#ff4949",
            "iconcolor" => "#666666",
            "iconcolorhigh" => "#ff4949",
            "bgcolor" => "#FFF",
            "bgcolorhigh" => "#FFF",
            "bordercolor" => "#010101",
            "bordercolorhigh" => "#bfbfbf",
            "showtext" => 1,
            "showborder" => "0",
            "showicon" => 2,
            "textcolor2" => "#666666",
            "bgcolor2" => "#fafafa",
            "bordercolor2" => "#1856f8",
            "showborder2" => 1,
            "bgalpha" => ".5",
        );
    }

    public function bindMobile()
    {

        $member_id = \YunShop::app()->getMemberId();
        \Log::info('member_id', $member_id);
        //?????????????????????
        if (Cache::has('shop_member')) {
            $member_set = Cache::get('shop_member');
            \Log::info('member_set-1', $member_set);
        } else {
            $member_set = Setting::get('shop.member');
            \Log::info('member_set-2', $member_set);
        }
        //        $is_bind_mobile = 0;
        //
        //        if (!is_null($member_set)) {
        //            if ((1 == $member_set['is_bind_mobile']) && $member_id && $member_id > 0) {
        //                if (Cache::has($member_id . '_member_info')) {
        //                    $member_model = Cache::get($member_id . '_member_info');
        //                } else {
        //                    $member_model = Member::getMemberById($member_id);
        //                }
        //
        //                if ($member_model && empty($member_model->mobile)) {
        //                    $is_bind_mobile = 1;
        //                }
        //            }
        //        }

        $is_bind_mobile = 0;

        if (!is_null($member_set)) {
            \Log::info('not_null_member_set', [$member_set]);
            if ((0 < $member_set['is_bind_mobile']) && $member_id && $member_id > 0) {
                \Log::info('0 < $member_set[is_bind_mobile]) && $member_id && $member_id > 0', [$member_set['is_bind_mobile'], $member_id]);

                if (Cache::has($member_id . '_member_info')) {
                    $member_model = Cache::get($member_id . '_member_info');
                    \Log::info('$member_model-1', $member_model);
                } else {
                    $member_model = Member::getMemberById($member_id);
                    \Log::info('$member_model-2', $member_model);
                }

                if ($member_model && empty($member_model->mobile)) {
                    \Log::info('$member_model && empty($member_model->mobile)', [$member_model, $member_model->mobile]);
                    $is_bind_mobile = intval($member_set['is_bind_mobile']);
                }
            }
        }
        if (\YunShop::request()->invite_code) {
            \Log::info('??????????????????????????????');
            //???????????????
            \app\common\models\Member::createRealtion($member_id);
        }

        $result['is_bind_mobile'] = $is_bind_mobile;

        return $this->successJson('ok', $result);
    }

    public function isCloseSite()
    {
        $shop = Setting::get('shop.shop');
        $code = 0;

        if (isset($shop) && isset($shop['close']) && 1 == $shop['close']) {
            $code = -1;
        }

        return $this->successJson('ok', ['code' => $code]);
    }

    public function isBindMobile($member_set, $member_id)
    {
        $is_bind_mobile = 0;

        if ((0 < $member_set['is_bind_mobile']) && $member_id && $member_id > 0) {
            if (Cache::has($member_id . '_member_info')) {
                $member_model = Cache::get($member_id . '_member_info');
            } else {
                $member_model = Member::getMemberById($member_id);
            }

            if ($member_model && empty($member_model->mobile)) {
                $is_bind_mobile = intval($member_set['is_bind_mobile']);
            }
        }
        return $is_bind_mobile;
    }

    public function isValidatePage($request, $integrated = null)
    {
        $member_id = \YunShop::app()->getMemberId();

        //?????????????????????
        if (Cache::has('shop_member')) {
            $member_set = Cache::get('shop_member');
        } else {
            $member_set = \Setting::get('shop.member');
        }

        if (!is_null($member_set)) {
            $data = [
                'is_bind_mobile' => $this->isBindMobile($member_set, $member_id),
                'invite_page' => 0,
                'is_invite' => 0,
                'is_login' => 0
            ];

            if ($data['is_bind_mobile']) {
                if (is_null($integrated)) {
                    return $this->successJson('????????????????????????', $data);
                } else {
                    return show_json(1, $data);
                }
            }

            $type = \YunShop::request()->type;
            $invitation_log = [];
            if ($member_id) {
                if (Member::current()->mobile) {
                    $invitation_log = 1;
                } else {
                    $member = Member::current()->yzMember;
                    $invitation_log = MemberInvitationCodeLog::uniacid()->where('member_id', $member_id)->where('mid', $member->parent_id)->first();
                }
            }

            $invite_page = $member_set['invite_page'] ? 1 : 0;
            $data['invite_page'] = $type == 5 ? 0 : $invite_page;

            $data['is_invite'] = $invitation_log ? 1 : 0;
            $data['is_login'] = $member_id ? 1 : 0;

            if (is_null($integrated)) {
                return $this->successJson('??????????????????', $data);
            } else {
                return show_json(1, $data);
            }
        }

        return show_json(1, []);
    }

    public function getBalance()
    {
        $shop = \Setting::get('shop.shop');
        $credit = $shop['credit'] ?: '??????';

        return show_json(1, ['balance' => $credit]);
    }

    public function getLangSetting()
    {
        $lang = \Setting::get('shop.lang.lang');

        $data = [
            'test' => [],
            'commission' => [
                'title' => '',
                'commission' => '',
                'agent' => '',
                'level_name' => '',
                'commission_order' => '',
                'commission_amount' => '',
            ],
            'single_return' => [
                'title' => '',
                'single_return' => '',
                'return_name' => '',
                'return_queue' => '',
                'return_log' => '',
                'return_detail' => '',
                'return_amount' => '',
            ],
            'team_return' => [
                'title' => '',
                'team_return' => '',
                'return_name' => '',
                'team_level' => '',
                'return_log' => '',
                'return_detail' => '',
                'return_amount' => '',
                'return_rate' => '',
                'team_name' => '',
                'return_time' => '',
            ],
            'full_return' => [
                'title' => '',
                'full_return' => '',
                'return_name' => '',
                'full_return_log' => '',
                'return_detail' => '',
                'return_amount' => '',
            ],
            'team_dividend' => [
                'title' => '',
                'team_dividend' => '',
                'team_agent_centre' => '',
                'dividend' => '',
                'flat_prize' => '',
                'award_gratitude' => '',
                'dividend_amount' => '',
            ],
            'area_dividend' => [
                'area_dividend_center' => '',
                'area_dividend' => '',
                'dividend_amount' => '',
            ],
            'income' => [
                'income_name' => '??????',
                'special_service_tax' => '?????????',
            ]
        ];

        $langData = \Setting::get('shop.lang.' . $lang, $data);

        if (is_null($langData)) {
            $langData = $data;
        }

        if ($langData['income']['income_name'] == '') {
            $langData['income']['income_name'] = '??????';
        }
        if ($langData['income']['special_service_tax'] == '') {
            $langData['income']['special_service_tax'] = '?????????';
        }
        if ($langData['income']['name_of_withdrawal'] == '') {
            $langData['income']['name_of_withdrawal'] = '??????';
        }
        if (app('plugins')->isEnabled('micro')) {
            $title = Setting::get('plugin.micro');
            $langData['micro']['title'] = $title['micro_title'] ?: '??????';
        }
        return show_json(1, $langData);
    }

    protected function moRen()
    {
        return [
            'wechat' => [
                'vue_route' => [],
                'url' => '',
            ],
            'mini' => [
                'vue_route' => [],
                'url' => '',
            ],
            'wap' => [
                'vue_route' => [],
                'url' => '',
            ],
            'app' => [
                'vue_route' => [],
                'url' => '',
            ],
            'alipay' => [
                'vue_route' => [],
                'url' => '',
            ],
        ];
    }

    public function wxJsSdkConfig()
    {
        $member = \Setting::get('shop.member');

        if (isset($member['wechat_login_mode']) && 1 == $member['wechat_login_mode']) {
            return show_json(1, []);
        }

        $url = \YunShop::request()->url;
        $account = AccountWechats::getAccountByUniacid(\YunShop::app()->uniacid);
        if(!$account->key){
            return show_json(1, []);
        }
        $options = [
            'app_id' => $account->key,
            'secret' => $account->secret
        ];

        $app = new Application($options);

        $js = $app->js;
        $js->setUrl($url);

        $config = $js->config(array(
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'showOptionMenu',
            'scanQRCode',
            'updateAppMessageShareData',
            'updateTimelineShareData'
        ));
        $config = json_decode($config, 1);

        $info['uid'] = \YunShop::app()->getMemberId();

//        if (\YunShop::app()->getMemberId()) {
//            $info = Member::getUserInfos(\YunShop::app()->getMemberId())->first();
//
//            if (!empty($info)) {
//                $info = $info->toArray();
//            }
//        }

        $share = \Setting::get('shop.share');

        if ($share) {
            if ($share['icon']) {
                $share['icon'] = replace_yunshop(yz_tomedia($share['icon']));
            }
        }

        $shop['shop'] = \Setting::get('shop.shop');
        if (is_null($shop['shop'])) {
            $shop['shop']['name'] = '????????????';
        }
        $shop['icon'] = replace_yunshop(yz_tomedia($shop['logo']));

        if (!is_null(\app\common\modules\shop\ShopConfig::current()->get('customer_service'))) {
            $class = array_get(\app\common\modules\shop\ShopConfig::current()->get('customer_service'), 'class');
            $function = array_get(\app\common\modules\shop\ShopConfig::current()->get('customer_service'), 'function');
            $ret = $class::$function(request()->id);
            if ($ret) {
                $shop['cservice'] = $ret;
            }
        }
        if (is_null($share) && is_null($shop)) {
            $share = [
                'title' => '????????????',
                'icon' => '#',
                'desc' => '????????????'
            ];
        }
        if (app('plugins')->isEnabled('designer')) {
            $index = (new RecordsController())->shareIndex();
            foreach ($index['data'] as $value) {
                foreach ($value['page_type_cast'] as $item) {
                    if ($item == 1) {
                        $designer = json_decode(htmlspecialchars_decode($value['page_info']))[0]->params;
                        if (!empty($share['icon']) && !empty($share['desc'])) {
                            $share['title'] = $designer->title;
                            $share['icon'] = $designer->img;
                            $share['desc'] = $designer->desc;
                        }
                        break;
                    }
                }
            }
        }
        $data = [
            'config' => $config,
            'info' => $info,   //????????????
            'shop' => $shop,
            'share' => $share   //????????????
        ];

        return show_json(1, $data);
    }

    public function getFirstGoodsPage()
    {
        $list = (new IndexController())->getRecommentGoods();
        return $this->successJson('', $list);
    }

    public function getCaptcha()
    {
        //?????????????????????
        $status = Setting::get('shop.sms.status');
        if (extension_loaded('fileinfo')) {
            if ($status == 1) {
                $captcha = self::captchaTest();
                $result['captcha'] = $captcha;
                $result['captcha']['status'] = $status;
            } else {
                $result['captcha']['status'] = $status;
            }
            return $this->successJson('ok', $result);
        }
        return $this->successJson();
    }

    //???????????????????????????????????????????????????
    public function globalParameter($bool = false)
    {
        $data = [];
        //?????????
        if (app('plugins')->isEnabled('delivery-station')) {
            $data['is_open_delivery_station'] = \Setting::get('plugin.delivery_station.is_open') ? 1 : 0;
        } else {
            $data['is_open_delivery_station'] = 0;
        }

        if(app('plugins')->isEnabled('photo-order')){
            $set = \Setting::get('plugin.photo-order');
            if($set['is_open'] == 1){
                $data['is_open_photo_order'] = 1;
                $data['photo_order_min_pohot'] = $set['min_pohot'];
                $data['photo_order_max_pohot'] = $set['max_pohot'];
            }else{
                $data['is_open_photo_order'] =0;
            }
        }else{
            $data['is_open_photo_order'] =0;
        }

        //???????????????????????????????????????(7), ???????????????????????????????????????????????????????????????????????????????????????
        $data['delivery_driver_open'] = \app\common\services\plugin\DeliveryDriverSet::whetherEnabled();

        // ?????????
        if (app('plugins')->isEnabled('package-deliver')) {
            $set = \Setting::get('plugin.package_deliver');
            $data['is_open_package_deliver'] = $set['is_package'];
        }

        // ????????????
        if (app('plugins')->isEnabled('advert-market') && app('plugins')->isEnabled('store-cashier')) {
            $set = \Setting::get('plugin.advert-market');
            $data['is_open_advert_market'] = $set['is_open'];
        }

        if ($bool) {
            return show_json(1, $data);
        } else {
            return $this->successJson('ok', $data);
        }
    }


    public function getParams($request)
    {
        $this->dataIntegrated((new MemberController())->getAdvertisement($request,true), 'advertisement');
        $this->dataIntegrated((new MemberController())->guideFollow($request,true), 'guide');

        return $this->successJson('', $this->apiData);
    }

    private function getGoodsModelByIds($goods_ids)
    {
        $goodsModels = \app\frontend\models\Goods::select()
            ->whereIn('id', $goods_ids)
            ->get();

        return $goodsModels->isEmpty() ? [] : $goodsModels->toArray();
    }
}
