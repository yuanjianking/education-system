<?php


namespace app\frontend\modules\payment\orderPayments;


class AlipayScanPayHjment extends WebPayment
{
    public function canUse()
    {
        return false;
        //商家pos才支持扫码支付
//        if (\Yunshop::request()->type != 9) {
//            return false;
//        }
//        return parent::canUse() && \YunShop::plugin()->get('converge_pay');
    }
}