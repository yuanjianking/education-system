//资产详情

//评估资产详情
const Assessment = r => require(['../views/blockchain/asset_details/assessment'], r);
//分红
// const AssetProfit = r => require(['../views/blockchain/asset_details/asset_profit'], r);
//全部类型
// const Categories = r => require(['../views/blockchain/asset_details/categories'], r);
//报告详情
const AssetNotices = r => require(['../views/blockchain/asset_details/asset_notices'], r);
//数字资产
// const DigitalAsset = r => require(['../views/blockchain/asset_details/digital_asset'], r);
//财务
// const Finance = r => require(['../views/blockchain/asset_details/finance'], r);
//简况
const AssetIntroduction = r => require(['../views/blockchain/asset_details/introduction'], r);
//报告和公告详情
const DetailReport = r => require(['../views/blockchain/asset_details/report'], r);
//我要销售
const AssetSale = r => require(['../views/blockchain/asset_details/sale'], r);

//我的资产

//认购记录、激活、奖励、买卖记录、转让记录、分红记录
const BuyingRecord = r => require(['../views/blockchain/my_asset/buying_record'], r);
//查看资产
const CheckAsset = r => require(['../views/blockchain/my_asset/check_asset'], r);
//进出记录
const IncomeRecord = r => require(['../views/blockchain/my_asset/income_record'], r);
//我的资产
const MyAsset = r => require(['../views/blockchain/my_asset/my_asset'], r);
//我的秘钥
const SecretKey = r => require(['../views/blockchain/my_asset/secret_key'], r);
//交易密码
const SetPassword = r => require(['../views/blockchain/my_asset/set_password'], r);
//转让
const AssetTrans = r => require(['../views/blockchain/my_asset/transfer'], r);
//交易详情（买入详情..）
const TransactionDetails = r => require(['../views/blockchain/my_asset/transaction_details'], r);


//交易大厅主页

//区块链-资产数字化
const TransHome = r => require(['../views/blockchain/transaction/home'], r);
//资产分类
const AssetClassify = r => require(['../views/blockchain/transaction/asset_classify'], r);
//认购买入
const Buying = r => require(['../views/blockchain/transaction/buying'], r);
//咨询公告
const TransNotice = r => require(['../views/blockchain/transaction/notice'], r);
//分类搜索列表
const ClassifiedSearch = r => require(['../views/blockchain/transaction/classified_search'], r);
//交易大厅
const TradingHall = r => require(['../views/blockchain/transaction/trading_hall'], r);

//名片

//名片中心
const CardCenter = r => require(['../views/business_card/card_center'], r);
//名片角色
const BusinessCard = r => require(['../views/business_card/business_card'], r);
//名片动作
const Card_Action = r => require(['../views/business_card/card_action'], r);
//名片码
const CardCode = r => require(['../views/business_card/card_code'], r);
//名片收藏
const CardCollect = r => require(['../views/business_card/card_collect'], r);
//名片足迹
const CardFootprint = r => require(['../views/business_card/card_footprint'], r);
//名片选择商品
const CardGoods = r => require(['../views/business_card/card_goods'], r);
//名片排行
const CardRanking = r => require(['../views/business_card/card_ranking'], r);
//名片图片
const CardVisit = r => require(['../views/business_card/card_visit'], r);
//编辑名片
const EditCard = r => require(['../views/business_card/edit_card'], r);

// 渠道商
const distributorIndex = r => require(['../views/distributor/index'], r);
// 累计收入
const accumulatedIncome = r => require(['../views/distributor/accumulated_income'], r);
// 推荐升级
const recommendUp = r => require(['../views/distributor/recommendUp'], r);
// 提交推荐升级
const submitRecommend = r => require(['../views/distributor/submitRecommend'], r);
// 我的库存
const myRepertory  = r => require(['../views/distributor/my_repertory'], r);
// 订货
const orderGoods  = r => require(['../views/distributor/order_goods'], r);
// 发货
const deliverGoods  = r => require(['../views/distributor/deliver_goods'], r);
// 发货下一步
const deliverGoodsNext  = r => require(['../views/distributor/deliver_goods_next'], r);
// 下单
const placeOrder  = r => require(['../views/distributor/place_order'], r);
// 换货
const exchangeGoods  = r => require(['../views/distributor/exchange_goods'], r);
// 换货详情
const exchangeDetail = r => require(['../views/distributor/exchange_detail'], r);
// 兑换券
const exchangeTicket  = r => require(['../views/distributor/exchange_ticket'], r);
// 我的下线客户
const myReferrals  = r => require(['../views/distributor/my_referrals'], r);
// 我的换货
const myExchange  = r => require(['../views/distributor/my_exchange'], r);
// 客户订单 我的发货  我的补货
const clientOrder  = r => require(['../views/distributor/client_order'], r);
// 订单详情
const DisOrderDetail  = r => require(['../views/distributor/order_detail'], r);
// 订货换货
const bookingChange = r => require(['../views/distributor/booking_change'], r);
//购物车
const exchangeCart = r => require(['../views/distributor/cart'], r);
//直播Live
//直播助手
const helperLiveList = r => require(['../views/live/helper_liveList'], r);
//直播助手直播间
const helperLiveRoom = r => require(['../views/live/helper_liveRoom'], r);
//主播申请
const anchorApply = r => require(['../views/live/anchorApply'], r);
//主播个人中心
const anchorDetail = r => require(['../views/live/anchorDetail'], r);
//直播列表
const liveList = r => require(['../views/live/liveList'], r);
//直播页
const livePage = r => require(['../views/live/livePage'], r);
//直播预告
const foreshow = r => require(['../views/live/foreshow'], r);
//直播主播分红
const liveDividend = r => require(['../views/live/liveDividend'], r);

const Test = r => require(['../views/business_card/test'], r);


export default [
  //资产详情
  {path: '/assessment/:asset_id', component: Assessment, name: 'Assessment', meta: {title: '资产详情', foot: true}},
  // {path: '/asset_profit', component: AssetProfit, name: 'AssetProfit', meta: {title: '分红', foot: true}},
  // {path: '/categories', component: Categories, name: 'Categories', meta: {title: '全部类型', foot: true}},
  {path: '/asset_notices/:notice_id', component: AssetNotices, name: 'AssetNotices', meta: {title: '财务报告', foot: true}},
  // {path: '/digital_asset', component: DigitalAsset, name: 'DigitalAsset', meta: {title: '数字资产', foot: true}},
  // {path: '/finance', component: Finance, name: 'Finance', meta: {title: '财务', foot: true}},
  {path: '/asset_introduction/:asset_id', component: AssetIntroduction, name: 'AssetIntroduction', meta: {title: '简况', foot: true}},
  {path: '/detail_report/:finance_id', component: DetailReport, name: 'DetailReport', meta: {title: '财务报告', foot: true}},
  {path: '/asset_sale/:asset_id', component: AssetSale, name: 'AssetSale', meta: {title: '我要销售', foot: true}},

  //我的资产
  {path: '/buying_record/:asset_id', component: BuyingRecord, name: 'BuyingRecord', meta: {title: '', foot: true}},
  {path: '/check_asset/:asset_id', component: CheckAsset, name: 'CheckAsset', meta: {title: '', foot: true}},
  {path: '/income_record/:asset_id', component: IncomeRecord, name: 'IncomeRecord', meta: {title: '进出记录', foot: true}},
  {path: '/my_asset', component: MyAsset, name: 'MyAsset', meta: {title: '', foot: true}},
  {path: '/secret_key/:name', component: SecretKey, name: 'SecretKey', meta: {title: '', foot: true}},
  {path: '/set_password', component: SetPassword, name: 'SetPassword', meta: {title: '交易密码', foot: true}},
  {path: '/transfer/:asset_id', component: AssetTrans, name: 'AssetTrans', meta: {title: '转让', foot: true}},
  {path: '/transaction_details/:id', component: TransactionDetails, name: 'TransactionDetails', meta: {title: '详情', foot: true}},

  //交易大厅主页
  {path: '/trans_home', component: TransHome, name: 'TransHome', meta: {title: ' ', foot: true}},
  {path: '/asset_classify', component: AssetClassify, name: 'AssetClassify', meta: {title: '交易大厅', foot: true}},
  {path: '/buying/:asset_id', component: Buying, name: 'Buying', meta: {title: '认购', foot: true}},
  {path: '/trans_notice', component: TransNotice, name: 'TransNotice', meta: {title: '公告', foot: true}},
  {path: '/classified_search', component: ClassifiedSearch, name: 'ClassifiedSearch', meta: {title: '分类搜索列表', foot: true}},
  {path: '/trading_hall', component: TradingHall, name: 'TradingHall', meta: {title: '交易大厅', foot: true}},

	//名片
	{path: '/business_card/card_center', component: CardCenter, name: 'CardCenter', meta: {title: '名片中心', foot: true}},
	{path: '/business_card/business_card', component: BusinessCard, name: 'BusinessCard', meta: {title: '名片', foot: true}},
	{path: '/business_card/card_action/:card_id', component: Card_Action, name: 'Card_Action', meta: {title: '数据统计', foot: true}},
	{path: '/business_card/card_code/:card_id', component: CardCode, name: 'CardCode', meta: {title: '名片码', foot: true}},
	{path: '/business_card/card_collect/:card_id', component: CardCollect, name: 'CardCollect', meta: {title: '名片收藏', foot: true}},
	{path: '/business_card/card_footprint/:card_id', component: CardFootprint, name: 'CardFootprint', meta: {title: '名片足迹', foot: true}},
	{path: '/business_card/card_goods/:id', component: CardGoods, name: 'CardGoods', meta: {title: '名片选择商品', foot: true}},
	{path: '/business_card/card_ranking', component: CardRanking, name: 'CardRanking', meta: {title: '名片排行', foot: true}},
	{path: '/business_card/card_visit/:card_id', component: CardVisit, name: 'CardVisit', meta: {title: '名片图片', foot: true}},
	{path: '/business_card/edit_card/:card_id', component: EditCard, name: 'EditCard', meta: {title: '编辑名片', foot: true}},

  // 渠道商
  {path: '/distributor_index', component: distributorIndex, name: 'distributorIndex', meta: {title: '', foot: true}},
  {path: '/accumulated_income', component: accumulatedIncome, name: 'accumulatedIncome', meta: {title: '累计收入', foot: true}},
  {path: '/recommendUp', component: recommendUp, name: 'recommendUp', meta: {title: '推荐升级', foot: true}},
  {path: '/submitRecommend', component: submitRecommend, name: 'submitRecommend', meta: {title: '提交推荐', foot: true}},
  {path: '/my_repertory', component: myRepertory, name: 'myRepertory', meta: {title: '我的库存', foot: true}},
  {path: '/order_goods', component: orderGoods, name: 'orderGoods', meta: {title: '订货', foot: true}},
  {path: '/deliver_goods', component: deliverGoods, name: 'deliverGoods', meta: {title: '发货', foot: true}},
  {path: '/deliverGoodsNext', component: deliverGoodsNext, name: 'deliverGoodsNext', meta: {title: '发货', foot: true}},
  {path: '/place_order', component: placeOrder, name: 'placeOrder', meta: {title: '下单', foot: true}},
  {path: '/exchange_goods', component: exchangeGoods, name: 'exchangeGoods', meta: {title: '换货', foot: true}},
  {path: '/exchange_detail/:id', component: exchangeDetail, name: 'exchangeDetail', meta: {title: '换货', foot: true}},
  {path: '/exchange_ticket', component: exchangeTicket, name: 'exchangeTicket', meta: {title: '兑换券', foot: true}},
  {path: '/my_referrals', component: myReferrals, name: 'myReferrals', meta: {title: '我的下线客户', foot: true}},
  {path: '/my_exchange', component: myExchange, name: 'myExchange', meta: {title: '我的换货', foot: true}},
  {path: '/client_order/:status', component: clientOrder, name: 'clientOrder', meta: {title: '客户订单', foot: true}},
  {path: '/client_order/:status/:orderType', component: clientOrder, name: 'myDeliver', meta: {title: '我的发货', foot: true}},
  {path: '/client_order/:status/:orderType', component: clientOrder, name: 'dismyReplenishment', meta: {title: '我的补货', foot: true}},
  {path: '/dis_order_detail/:order_id/:orderType', component: DisOrderDetail, name: 'DisOrderDetail', meta: {title: '订单详情', foot: true}},
  {path: '/booking_change/:order_id', component: bookingChange, name: 'bookingChange', meta: {title: '补货', foot: true}},
  {path: '/exchangeCart/:type/:order_id?', component: exchangeCart, name: 'exchangeCart', meta: {title: '购物车', foot: true}},
  //直播
  {path: '/helperLiveList', component: helperLiveList, name: 'helperLiveList', meta: {title: '主播助手', foot: true}},
  {path: '/helperLiveRoom/:id', component: helperLiveRoom, name: 'helperLiveRoom', meta: {title: '直播间', foot: true}},
  {path: '/anchorApply', component: anchorApply, name: 'anchorApply', meta: {title: '主播申请', foot: true}},
  {path: '/anchorDetail/:id', component: anchorDetail, name: 'anchorDetail', meta: {title: '主播页面', foot: true}},
  {path: '/liveList', component: liveList, name: 'liveList', meta: {title: '直播列表', foot: true}},
  {path: '/livePage', component: livePage, name: 'livePage', meta: {title: '直播间', foot: true}},
  {path: '/foreshow/:id', component: foreshow, name: 'foreshow', meta: {title: '直播预告', foot: true}},
  {path: '/liveDividend', component: liveDividend, name: 'liveDividend', meta: {title: '主播分红', foot: true}},

	{path: '/business_card/Test', component: Test, name: 'Test', meta: {title: 'Test', foot: true}},
]
