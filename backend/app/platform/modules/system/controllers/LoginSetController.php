<?php
/**
 * Created by PhpStorm.
 * User: CGOD
 * Date: 2020/1/7
 * Time: 9:30
 */

namespace app\platform\modules\system\controllers;
use app\platform\controllers\BaseController;
use app\platform\modules\system\models\SystemSetting;

class LoginSetController extends BaseController
{
    public function index()
    {
        $set_data = request()->setdata;
        $loginset = SystemSetting::settingLoad('loginset', 'system_loginset');
        if ($set_data) {
            $site = SystemSetting::settingSave($set_data, 'loginset', 'system_loginset');
            if ($site) {
                return $this->successJson('成功', '');
            } else {
                return $this->errorJson('失败', '');
            }
        }

        if ($loginset) {
            return $this->successJson('成功', $loginset);
        } else {
            return $this->errorJson('没有检测到数据', '');
        }
    }
}