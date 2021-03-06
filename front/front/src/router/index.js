/**
 * @file
 * Created by liang into on 19/10/30.
 */

import BlockChain from "./blockchain";
const conferenceList = r =>
  require.ensure(
    [],
    () => r(require("@/views/conference/home")),
    "conferenceList"
  );
const activity = r => require(["../views/conference/activity"], r);
const MyActivityInfo = r =>
  require(["../views/conference/my_activity_info"], r);
const conferenceSign = r => require(["../views/conference/conferenceSign"], r);
const ActivityTaskList = r =>
  require(["../views/conference/activity_task_list"], r);

const userAgreement = r => require(["../views/member/user_agreement"], r);

const o2oHome = r => require(["../views/o2o/home"], r);
const o2oStore = r => require(["../views/o2o/store/store"], r);
const o2oStore_v2 = r => require(["../views/o2o/store/store_v2"], r);
const o2oLocation = r => require(["../views/o2o/location/home"], r);
const o2oLocation_loc = r => require(["../views/o2o/location/location"], r);
const o2oCity = r => require(["../views/o2o/location/city"], r);
const o2oSearch = r => require(["../views/o2o/search"], r);
const o2oCategory = r => require(["../views/o2o/category"], r);
const StoreApply = r => require(["../views/o2o/store/store_apply"], r);
const StoreWithdrawals = r => require(["../views/o2o/store/withdrawals"], r);
const StoreManage = r => require(["../views/o2o/store_manage"], r);
const StoreSearch = r => require(["../views/o2o/store/store_search"], r);
const qrCode = r => require(["../views/o2o/qr_code"], r);
// const privacy = r => require(["../views/o2o/privacy"], r);
const cloudHorn = r => require(["../views/o2o/cloud_horn"], r);
const zkzDevice = r => require(["../views/o2o/zkzDevice"], r);

const Home = r => require(["../views/home/home"], r);
const Category = r => require(["../views/category/category"], r);
const Catelist = r => require(["../views/category/catelist"], r);
const Brand = r => require(["../views/category/brand"], r);
const BrandGoods = r => require(["../views/category/brandgoods"], r);
const Temp = r => require(["../views/commission"], r);
const Cart = r => require(["../views/cart/cart"], r);
const Settlement = r => require(["../views/cart/settlement"], r);
const Hello = r => require(["../views/hello"], r);
const Diy = r => require(["../views/diy"], r);
const Share = r => require(["../views/home/share"], r);
const CloseSite = r => require(["../views/close_site"], r);
const DiyForm = r => require(["../views/diy_form"], r);
// ?????????
const cashier = r => require(["../views/cashier/cashier"], r);
const cashier_pay = r => require(["../views/cashier/pay"], r);
const cashier_qr = r => require(["../views/cashier/qrcode"], r);
const cashier_withdrawals = r => require(["../views/cashier/withdrawals"], r);
const cashier_stat = r => require(["../views/cashier/stat"], r);
const show_balances = r => require(["../views/cashier/showBalances"], r);
// article
const Notice = r => require(["../views/article/notice"], r);
const ArticleContent = r => require(["../views/article/articleContent"], r);
const NoticeByCategory = r =>
  require(["../views/article/notice_by_category"], r);
const NoticeReport = r => require(["../views/article/notice_report"], r);
const payList = r => require(["../views/article/pay_list"], r);
const payEssay = r => require(["../views/article/pay_essay"], r);
// Member
const MemberBank = r => require(["../views/member/bank/bank_info"], r);
const BankCard = r => require(["../views/member/bank/bankCard"], r);
const Member = r => require(["../views/member/member"], r);
// const Po = r => require(['../views/member/po'], r)
// const Tabs = r => require(['../views/member/tabs'], r)
const Info = r => require(["../views/member/info/info_v2"], r);
const Editmobile = r =>
  require(["../views/member/info/member_editmobile_v2"], r);
const WithdrawEditmobile = r =>
  require(["../views/member/info/member_withdraw_editmobile"], r);
const scanEditmobile = r =>
  require(["../views/member/info/scan_editmobile"], r);
const codePage = r => require(["../views/member/tool/code_page"], r);
// //visit
// const Visit = r => require(['../views/member/visit/Visit'], r)

// const AlterAddress = r => require(['../views/member/address/alterAddress'], r)
const AlterAddress = r =>
  require(["../views/member/address/alterAddress_v2"], r);
// const AppendAddress = r => require(['../views/member/address/appendAddress'], r)
const AppendAddress = r =>
  require(["../views/member/address/appendAddress_v2"], r);
const Balance = r => require(["../views/member/balance/member_balance"], r);
const Integral = r => require(["../views/member/integral/member_integral"], r);
const IntegralV2 = r =>
  require(["../views/member/integral_v2/member_integral_v2"], r);
const IntegralV2Transfer = r =>
  require(["../views/member/integral_v2/member_integral_v2_transfer"], r);
const InfoCostom = r => require(["../views/member/info/info_custom"], r);
const BalancePassword = r =>
  require(["../views/member/info/balance_password_v2"], r);
const SetBalancePassword = r =>
  require(["../views/member/info/set_balance_password_v2"], r);

// score
const IntegralActivity = r =>
  require(["../views/member/score/integral_activity"], r);
const IntegralGeneralization = r =>
  require(["../views/member/score/integral_generalization"], r);
const IntegralGetRecord = r =>
  require(["../views/member/score/integral_get_record"], r);
const IntegralPresent = r =>
  require(["../views/member/score/integral_present"], r);
const IntegralRecord = r =>
  require(["../views/member/score/integral_record"], r);

// sign
const Sign = r => require(["../views/member/sign/member_sign"], r);
const Signrules = r => require(["../views/member/sign/member_signrules"], r);
const Signrecord = r => require(["../views/member/sign/member_signrecord"], r);

// member_integraldetailed
const Integraldetail = r =>
  require(["../views/member/integral/member_integraldetailed"], r);
const IntegralList = r =>
  require(["../views/member/integral/member_integrallist"], r);
const Balance_recharge = r =>
  require(["../views/member/balance/member_balance_recharge"], r);
const Balance_transfer = r =>
  require(["../views/member/balance/member_balance_transfer"], r);
const Balance_withdrawals = r =>
  require(["../views/member/balance/member_balance_withdrawals"], r);
// ????????????
const Balance_manage = r =>
  require(["../views/member/balance/member_balance_manage"], r);
// ?????????????????????
const Balance_manageDetail = r =>
  require(["../views/member/balance/member_balance_manageDetail"], r);
// ????????????
const Add_Balance_manage = r =>
  require(["../views/member/balance/add_member_balance"], r);
// ????????????
const Edit_Balance_manage = r =>
  require(["../views/member/balance/edit_member_balance"], r);
const Detailed = r =>
  require(["../views/member/balance/member_balance_detailed"], r);
// ????????????
const policyPay = r =>
  require(["../views/member/balance/policy_pay"], r);
const Screen = r =>
  require(["../views/member/balance/member_balance_screen"], r);
const Details = r =>
  require(["../views/member/balance/member_balance_details"], r);
// const Income = r => require(['../views/member/income/member_income'], r)
const Withdrawal = r =>
  require(["../views/member/income/member_income_withdrawal"], r);
const Incomedetails = r =>
  require(["../views/member/income/member_income_incomedetails"], r);
const IncomedetailsInfo = r =>
  require(["../views/member/income/member_income_incomedetails_info"], r);
const PresentationRecord = r =>
  require(["../views/member/income/member_income_presentationRecord"], r);
const PresentationDetails = r =>
  require([
    "../views/member/income/member_income_presentationRecord_presentationDetails"
  ], r);
const Supplier = r => require(["../views/member/supplier/supplier"], r);
const CreditInfo = r => require(["../views/member/credit/credit_info"], r);
const CommodityManagement = r =>
  require(["../views/member/supplier/commodity_management/management"], r);
const CommodityEditor = r =>
  require(["../views/member/supplier/commodity_management/editor"], r);
const CommodityRelease = r =>
  require(["../views/member/supplier/commodity_management/release"], r);

const CommodityCoupon = r =>
  require(["../views/member/supplier/commodity_coupon/management"], r);
const CommodityCouponEdit = r =>
  require(["../views/member/supplier/commodity_coupon/edit"], r);
const CommodityCouponGive = r =>
  require(["../views/member/supplier/commodity_coupon/give_out"], r);

const GoodsClassify = r =>
  require(["../views/member/supplier/classify/goods_classify"], r);
const AddClassify = r =>
  require(["../views/member/supplier/classify/add_classify"], r);
const FirstEdit = r =>
  require(["../views/member/supplier/classify/first_edit"], r);

const Income = r => require(["../views/member/income/member_income_v2"], r);

const Message = r => require(["../views/member/message_list"], r);
const MessageInfo = r => require(["../views/member/message_info"], r);

// order
// order_after_express_info
const OrderExpress = r =>
  require(["../views/member/order/order_after_express_info"], r);
const OrderList = r => require(["../views/member/order/order_list"], r);
const Goodsinfo = r => require(["../views/member/order/order_detail"], r);
const Refund = r => require(["../views/member/order/order_list_refund"], r);
const Logistics = r =>
  require(["../views/member/order/order_list_logistics"], r);
const track = r => require(["../views/member/order/order_list_track"], r);
const Evaluate = r => require(["../views/comment/evaluate"], r);
const ReplyEvaluate = r =>
  require(["../views/member/order/order_list_replyEvaluate"], r);
const Addevaluate = r => require(["../views/comment/addevaluate"], r);
const Aftersales = r => require(["../views/member/order/order_aftersales"], r);
const Aftersaleslist = r =>
  require(["../views/member/order/order_aftersaleslist"], r);
const OrderPay = r => require(["../views/member/order/order_payment"], r);
const OrderVerification = r =>
  require(["../views/member/order/order_verification"], r);
const OrderCash = r => require(["../views/member/order/order_cash"], r);
const OrderRecord = r => require(["../views/member/order/order_record"], r);

const PayErr = r => require(["../views/member/order/order_payErr"], r);
const PayYes = r => require(["../views/member/order/order_payYes"], r);
const Blacklist = r => require(["../views/member/order/order_blacklist"], r);
const Mandate = r => require(["../views/member/order/order_mandate"], r);

// Extension
const Manage = r => require(["../views/extension/manage"], r);
const Extension = r =>
  require.ensure([], () => r(require("@/views/extension/index")), "Extension");
const Distribution = r => require(["../views/extension/distribution"], r);
const Commission = r => require(["../views/extension/commission"], r);
const CommissionDetails = r =>
  require(["../views/extension/commissionDetails"], r);
const Unsettled = r => require(["../views/extension/unsettled"], r);
const UnsettledDetails = r =>
  require(["../views/extension/unsettledDetails"], r);
const AlreadySettled = r => require(["../views/extension/alreadySettled"], r);
const AlreadySettledDetails = r =>
  require(["../views/extension/alreadySettledDetails"], r);
const NotPresent = r => require(["../views/extension/notPresent"], r);
const NotPresentDetails = r =>
  require(["../views/extension/notPresentDetails"], r);
const Present = r => require(["../views/extension/present"], r);
const PresentDetails = r => require(["../views/extension/presentDetails"], r);
const DistributionOrder = r =>
  require(["../views/extension/distributionOrder"], r);

const AwardRanking = r =>
  require(["../views/extension/spread/awardRanking"], r);
const ExtensionPage = r => require(["../views/extension/spread/extension"], r);
const RecordOfAwards = r =>
  require(["../views/extension/spread/recordOfAwards"], r);
const MyIncome = r => require(["../views/extension/spread/my_income"], r);
const myEarnings = r => require(["../views/extension/spread/my_earnings"], r);
const earningList = r => require(["../views/extension/spread/earning_list"], r);

const point_activity_award_center = r =>
  require(["../views/extension/pointActivityAwardCenter"], r);
//????????????
const Selectionarea = r =>
  require(["../views/regionalmanage/selectionarea"], r);
//????????????
const Regionaldividend = r =>
  require(["../views/regionalmanage/regionaldividend"], r);
//??????????????????
const Detailsdividends = r =>
  require(["../views/regionalmanage/detailsdividends"], r);
// plug
// const Marketing = r => require(['../views/member/plug/marketing'], r)
// const MessageSettings = r => require(['../views/member/plug/messageSettings'], r)
// income
const DistributionCommission = r =>
  require(["../views/member/income/distributionCommission"], r);
const ExtendIncome = r => require(["../views/member/income/extendIncome"], r); // new
const MerchantsDividendRatio = r =>
  require(["../views/member/income/merchants/merchants_dividend_ratio"], r);
const ShareholderCenter = r =>
  require(["../views/member/income/shareholderCenter/shareholderCenter"], r);
const TeamAgentCenter = r =>
  require(["../views/member/income/teamAgentCenter/teamAgentCenter"], r);
const TeamPerformance = r =>
  require(["../views/member/income/teamAgentCenter/teamPerformance"], r);
const TeamCode = r =>
  require(["../views/member/income/teamAgentCenter/teamCode"], r);
const TeamClient = r =>
  require(["../views/member/income/teamAgentCenter/teamClient"], r);
const CodeHistory = r =>
  require(["../views/member/income/teamAgentCenter/codeHistory"], r);
const InvestmentCenter = r =>
  require(["../views/member/income/investmentCenter/investmentCenter"], r);
const RegionalAgencyCenter = r =>
  require([
    "../views/member/income/regionalAgencyCenter/regionalAgencyCenter"
  ], r);
const ApplyRegionalAgency = r =>
  require([
    "../views/member/income/regionalAgencyCenter/applyRegionalAgency"
  ], r);
const FixedReward = r =>
  require(["../views/member/income/fixedReward/fixed_reward"], r);
const CourseIncome = r => require(["../views/member/income/course/index"], r);
const Helpcenter = r => require(["../views/member/helpcenter"], r);

// ?????????????????????
const FranchiserRed = r =>
  require(["../views/member/income/teamAgentCenter/franchiser_red"], r);

const RedReward = r => require(["../views/member/income/red_reward"], r);

//????????????
const DailyRed = r => require(["../views/others/daily_red/daily_red"], r);
const GetRedRecord = r =>
  require(["../views/others/daily_red/get_red_record"], r);
const RedAmount = r => require(["../views/others/daily_red/red_amount"], r);

// microshop
const MicroShop_apply = r =>
  require(["../views/member/microshop/microShop_apply.vue"], r);
const MicroShop_apply_reg_info = r =>
  require(["../views/member/microshop/microShop_apply_reg_info.vue"], r);
const MicroShop_baseInfo = r =>
  require(["../views/member/microshop/baseInfo.vue"], r);
const MicroShop_Category = r =>
  require(["../views/member/microshop/category/category.vue"], r);
const Catelist1 = r =>
  require(["../views/member/microshop/category/catelist.vue"], r);
const MicroShop_home = r => require(["../views/member/microshop/home/home"], r);
const MicroShop_ShopKeeperCenter = r =>
  require(["../views/member/microshop/shopKeeperCenter"], r);
const MicroShop_orderDetail = r =>
  require(["../views/member/microshop/orderDetail"], r);
const MicroShop_shareList = r =>
  require(["../views/member/microshop/shareList.vue"], r);
const MicroShop_shareDetail = r =>
  require(["../views/member/microshop/shareDetail"], r);
const MicroShop_selectedGoods = r =>
  require(["../views/member/microshop/selectedGoods"], r);
// microshop ?????????????????????
const MicroShop_Share_home = r =>
  require(["../views/member/microshop/microshophome/micros_shop_home"], r);
const MicroShop_ShareCategory = r =>
  require(["../views/member/microshop/categoryshare/category"], r);
// ?????????????????????
const ManageShop = r => require(["../views/member/microshop/manage_shop"], r);
const MicroShop_AddCategory = r =>
  require(["../views/member/microshop/category_add/category"], r);
const CatelistShare = r =>
  require(["../views/member/microshop/categoryshare/catelist.vue"], r);

// love ?????????
const Love_index = r => require(["../views/love/love_index"], r);
const Love_list = r => require(["../views/love/love_list"], r);
const Love_transfer = r => require(["../views/love/love_transfer"], r);
const Love_trading_sell = r => require(["../views/love/love_trading_sell"], r);
const Love_trading = r => require(["../views/love/love_trading"], r);
const Love_changein = r => require(["../views/love/love_changein"], r);
const Love_changeto = r => require(["../views/love/love_changeto"], r);
const Love_give = r => require(["../views/love/love_give"], r);
const Love_agent = r => require(["../views/love/love_agent"], r);
const Love_push = r => require(["../views/love/love_push"], r);
const Love_cash = r => require(["../views/love/love_cash"], r);
const Love_record = r => require(["../views/love/love_record"], r);
const Love_details = r => require(["../views/love/love_details"], r);
const Love_activation = r => require(["../views/love/love_activation"], r);
const Love_explain = r => require(["../views/love/love_explain"], r);
const LoveWithdrawals = r => require(["../views/love/love_withdrawals"], r);
const lovePeriod = r => require(["../views/love/love_period/love_period"], r);
const lovePerformance = r =>
  require(["../views/love/love_performance/love_performance"], r);

// ????????????-?????????
const Integral_love = r =>
  require(["../views/love/integral_love/integral_love"], r);
const Integral_invest = r =>
  require(["../views/love/integral_love/Integral_love_invest"], r);
const Integral_love_detail = r =>
  require(["../views/love/integral_love/Integral_love_detail"], r);
const Integral_love_transfer = r =>
  require(["../views/love/integral_love/Integral_love_transfer"], r);
const Integral_love_cash = r =>
  require(["../views/love/integral_love/Integral_love_cash"], r);

// ????????? overseas
const Overseas_index = r => require(["../views/overseas/overseas_index"], r);
const Overseas_explain = r =>
  require(["../views/overseas/overseas_explain"], r);
const Overseas_transfer = r =>
  require(["../views/overseas/overseas_transfer"], r);
const Overseas_record = r => require(["../views/overseas/overseas_record"], r);
const Overseas_list = r => require(["../views/overseas/overseas_list"], r);
const Overseas_balance_withdrawals = r =>
  require(["../views/overseas/overseas_balance_withdrawals"], r);

// tool
const Footprint = r => require(["../views/member/tool/footprint"], r);
const Collection = r => require(["../views/member/tool/collection"], r);
const MyRelationship = r =>
  require(["../views/member/tool/my_relationship_v2"], r);
const OfflineSearch = r => require(["../views/member/tool/search"], r);
const MyEvaluation = r => require(["../views/comment/myEvaluation"], r);
const Comment = r => require(["../views/member/tool/comment"], r);
const EvaluationDetails = r =>
  require(["../views/member/tool/evaluationDetails"], r);
// ????????????
const MyFriendApply = r => require(["../views/member/tool/my_friends"], r);

// ????????????
const CouponExchange = r =>
  require(["../views/member/coupon_exchange/index"], r);

// Other
const Address = r => require(["../views/member/address/addresslist_v2"], r);
const Search = r => require(["../views/search"], r);
const SearchAll = r => require(["../views/searchall"], r);
// const Goods = r => require(['../views/goods/goods'], r)
const Goods = r => require(["../views/goods/goods_v2"], r);
const GoodsComment = r =>
  require(["../components/goods/children/commentList"], r);
const PackageGoods = r => require(["../views/goods/package_goods"], r);

const GoodsO2O = r => require(["../views/goods/goods_v2"], r);
const GoodsOrder = r => require(["../views/goods/goods_order"], r);
const GoodsOrderDiyForm = r => require(["../views/goods/diyFormPage"], r);
const Goodstabs = r => require(["../views/goods/goodstabs"], r);
const Login = r =>
  require.ensure([], () => r(require("@/views/login/login.vue")), "Login");
const Register = r => require(["../views/register/register_v2"], r);
const haifenRegister = r => require(["../views/register/haifen_register"], r);
const RegisterAgreement = r =>
  require(["../views/register/register_agreement"], r);
const Findpwd = r => require(["../views/register/findpwd"], r);
const RegisterGuide = r => require(["../views/register/guide"], r);

const NotFound = r => require(["../views/notfound"], r);
// alipay_detail.vue
const Alipay = r => require(["../views/member/pay/alipay_detail"], r);
const AlipayClockin = r => require(["../views/member/pay/alipay_detail"], r);

// Coupon
const Coupon = r => require(["../views/coupon/coupon_index"], r);
const CouponStore = r => require(["../views/coupon/coupon_store"], r);
const CouponInfo = r => require(["../views/coupon/coupon_info"], r);

// Coupon-share
const CouponShare = r => require(["../views/coupon/coupon_share"], r);
const getCoupon = r => require(["../views/coupon/get_coupon"], r);

// comment
const CommentDetails = r => require(["../views/comment/CommentDetails"], r);
const ReCommentDetails = r => require(["../views/comment/ReCommentDetails"], r);
const OtherCommentDetails = r =>
  require(["../views/comment/OtherCommentDetails"], r);

// service
const Service = r => require(["../views/member/service/service"], r);
const ServiceOrderList = r =>
  require(["../views/member/service/order/order_list"], r);
// phone
const PhoneRecharge = r =>
  require(["../views/member/service/phone/phoneRecharge"], r);
const MobileBinding = r =>
  require(["../views/member/service/phone/mobileBinding"], r);
const RechargePay = r =>
  require(["../views/member/service/phone/rechargePay"], r);
const OrderDetailsPaied = r =>
  require(["../views/member/service/phone/orderDetailsPaied"], r);
const OrderDetailsNoPay = r =>
  require(["../views/member/service/phone/orderDetailsNoPay"], r);
const RechargeRecord = r =>
  require(["../views/member/service/phone/rechargeRecord"], r);
const FlowRechargeRecord = r =>
  require(["../views/member/service/phone/flowRechargeRecord"], r);
const RechargeDetail = r =>
  require(["../views/member/service/phone/rechargeDetail"], r);
const FlowRechargeDetail = r =>
  require(["../views/member/service/phone/flowRechargeDetail"], r);
// oilCard
const AddCard = r => require(["../views/member/service/oilCard/addCard"], r);
const CardServer = r =>
  require(["../views/member/service/oilCard/cardServer"], r);
const OilNoPay = r => require(["../views/member/service/oilCard/oilNoPay"], r);
const OilDetailsPaied = r =>
  require(["../views/member/service/oilCard/oilDetailsPaied"], r);
const OilRecharge = r =>
  require(["../views/member/service/oilCard/oilRecharge"], r);
const OilRechargePay = r =>
  require(["../views/member/service/oilCard/oilRecharge_pay"], r);
// ticket ??????
const Ticket = r => require(["../views/member/service/ticket/index"], r);
const City = r => require(["../views/member/service/ticket/city"], r);
const TicketOrder = r =>
  require(["../views/member/service/ticket/ticketOrder"], r);
const SearchResults = r =>
  require(["../views/member/service/ticket/searchResults"], r);
const FlightPrice = r =>
  require(["../views/member/service/ticket/flightPrice"], r);
const NewAddPassenger = r =>
  require(["../views/member/service/ticket/newAddPassenger"], r);
const ModifyContacts = r =>
  require(["../views/member/service/ticket/modifyContacts"], r);

const AddOrder = r => require(["../views/member/service/ticket/addOrder"], r);
const RefundApplication = r =>
  require(["../views/member/service/ticket/refundApplication"], r);
const TicketOrderDetail = r =>
  require(["../views/member/service/ticket/ticketOrderDetail"], r);
const ChangeAgreement = r =>
  require(["../views/member/service/ticket/changeAgreement"], r);
const Ticket_pay = r =>
  require(["../views/member/service/ticket/ticket_pay"], r);

// Game
const GameSearch = r => require(["../views/member/service/game/gameSearch"], r);
const GameIsPay = r => require(["../views/member/service/game/gameIsPay"], r);
const GameNoPay = r => require(["../views/member/service/game/gameNoPay"], r);
const GameFlingRecharge = r =>
  require(["../views/member/service/game/gameFlingRecharge"], r);
const GamePasswordRecharge = r =>
  require(["../views/member/service/game/gamePasswordRecharge"], r);

// newService
const LifeService = r => require(["../views/member/service/lifeService"], r);
const Telephone = r =>
  require(["../views/member/service/telephone/telephone"], r);
const Flow = r => require(["../views/member/service/flow/flow"], r);
// lifePayment
const Electricity = r =>
  require(["../views/member/service/lifePayment/electricity"], r);
const ElectricityPay = r =>
  require(["../views/member/service/lifePayment/electricity_pay"], r);
const WaterFee = r =>
  require(["../views/member/service/lifePayment/waterFee"], r);
const WaterFeePay = r =>
  require(["../views/member/service/lifePayment/waterFee_pay"], r);
const FixedTelephone = r =>
  require(["../views/member/service/lifePayment/fixedTelephone"], r);
const FixedTelephonePay = r =>
  require(["../views/member/service/lifePayment/fixedTelephone_pay"], r);

const Broadband = r =>
  require(["../views/member/service/lifePayment/broadband"], r);
const BroadbandPay = r =>
  require(["../views/member/service/lifePayment/broadband_pay"], r);
const GasCosts = r =>
  require(["../views/member/service/lifePayment/gasCosts"], r);

const LifePayNoPay = r =>
  require(["../views/member/service/lifePayment/lifePayNoPay"], r);
const LifePayIsPaied = r =>
  require(["../views/member/service/lifePayment/lifePayIsPaied"], r);
const LifePayIndex = r =>
  require(["../views/member/service/lifePayment/lifePayIndex"], r);
const PaymentRecord = r =>
  require(["../views/member/service/lifePayment/paymentRecord"], r);

// ????????????
const TrafficIndex = r =>
  require(["../views/member/service/trafficFine/trafficIndex"], r);
const TrafficConfirmOrder = r =>
  require(["../views/member/service/trafficFine/trafficConfirmOrder"], r);
const TrafficCity = r =>
  require(["../views/member/service/trafficFine/trafficCity"], r);
const TrafficRecord = r =>
  require(["../views/member/service/trafficFine/trafficRecord"], r);
const TrafficOrderNoPay = r =>
  require(["../views/member/service/trafficFine/trafficOrderNoPay"], r);
const TrafficOrderlsPaied = r =>
  require(["../views/member/service/trafficFine/trafficOrderlsPaied"], r);
// ?????????
const TrainTicket = r =>
  require(["../views/member/service/trainTicket/trainTicket"], r);
const TrainTicketOrder = r =>
  require(["../views/member/service/trainTicket/trainTicketOrder"], r);
const TrainCity = r =>
  require(["../views/member/service/trainTicket/trainCity"], r);
const TrainSearchResults = r =>
  require(["../views/member/service/trainTicket/trainSearchResults"], r);
const TrainFlightPrice = r =>
  require(["../views/member/service/trainTicket/trainFlightPrice"], r);
const TrainAddOrder = r =>
  require(["../views/member/service/trainTicket/trainAddOrder"], r);
const TrainOrderDetail = r =>
  require(["../views/member/service/trainTicket/trainOrderDetail"], r);
const TrainRefundApplication = r =>
  require(["../views/member/service/trainTicket/trainRefundApplication"], r);
const Policy = r => require(["../views/member/service/trainTicket/policy"], r);
const TrainPay = r =>
  require(["../views/member/service/trainTicket/train_pay"], r);

//???????????????
const AgentBonus = r =>
  require(["../views/extension/agency-bonus/agent_bonus"], r);
const GroupOrder = r =>
  require(["../views/extension/agency-bonus/group_orders"], r);
const AgentCustomer = r =>
  require(["../views/extension/agency-bonus/my_customer"], r);

// Enterpr

const EnterpriseIndex = r =>
  require(["../views/member/enterprise/enterprise_index"], r);
const EnterpriseApply = r =>
  require(["../views/member/enterprise/enterprose_apply"], r);
const EnterpriseSupplier = r =>
  require(["../views/member/enterprise/enterprise_supplier"], r);
const EnterpriseSupplierInfo = r =>
  require(["../views/member/enterprise/enterprise_supplier_info"], r);
const EnterpriseCenterApply = r =>
  require(["../views/member/enterprise/enterprose_center_apply"], r);
const EnterpriseCenterSupplier = r =>
  require(["../views/member/enterprise/enterprise_center_supplier"], r);
//??????-????????????
const EnterpriseStore = r =>
  require(["../views/member/enterprise/enterprise_store"], r);

//????????????
const CartGood = r => require(["../components/goods/cart_good"], r);
const ApplicationProgress = r =>
  require(["../views/others/buy_car/application_progress"], r);
const InstallmentRecord = r =>
  require(["../views/others/buy_car/Installment_record"], r);

// rentCenter
const RentIndex = r => require(["../views/rent/rentIndex"], r);
const GoodsDetail = r => require(["../views/rent/goodsDetail"], r);
const ConfirmOrder = r => require(["../views/rent/confirmOrder"], r);
const RentOrderPay = r => require(["../views/rent/orderPay"], r);
const RentCenter = r => require(["../views/rent/rentCenter"], r);
const RentMyOrder = r => require(["../views/rent/rentMyOrder"], r);
const RentCharge = r => require(["../views/rent/rentCharge"], r);
const RentDeposit = r => require(["../views/rent/rentDeposit"], r);
const RentDepositDetail = r => require(["../views/rent/rentDepositDetail"], r);
const RentReturnGoods = r => require(["../views/rent/rentReturnGoods"], r);

const ToBeReturned = r =>
  require(["../views/rent/allRentOrders/toBeReturned"], r);
const OverdueReturn = r =>
  require(["../views/rent/allRentOrders/overdueReturn"], r);
const HasTransferred = r =>
  require(["../views/rent/allRentOrders/hasTransferred"], r);
const HasBeenReturned = r =>
  require(["../views/rent/allRentOrders/hasBeenReturned"], r);
const TransferRecord = r =>
  require(["../views/rent/allRentOrders/transferRecord"], r);
const RentGuide = r => require(["../views/rent/allRentOrders/rentGuide"], r);
const RentAfterSalas = r =>
  require(["../views/rent/allRentOrders/rentAfterSalas"], r);
const ReturnRecord = r =>
  require(["../views/rent/allRentOrders/returnRecord"], r);
const ToBePay = r => require(["../views/rent/allRentOrders/toBePay"], r);
const ToBeSend = r => require(["../views/rent/allRentOrders/toBeSend"], r);
const ToBetakeGoods = r =>
  require(["../views/rent/allRentOrders/toBetakeGoods"], r);
const ToBeClose = r => require(["../views/rent/allRentOrders/toBeClose"], r);
const ToBeComplete = r =>
  require(["../views/rent/allRentOrders/toBeComplete"], r);
const ToBeReturneding = r =>
  require(["../views/rent/allRentOrders/toBeReturneding"], r);

// ????????????
const SingleReturnCenter = r =>
  require(["../views/member/income/singleReturn/single_return_center"], r);
const SingleReturnListInfo = r =>
  require(["../views/member/income/singleReturn/single_return_list_info"], r);

// ??????????????????
const TeamLevelReturnCenter = r =>
  require([
    "../views/member/income/teamLevelReturn/teamlevel_return_center"
  ], r);
const TeamLevelReturnListInfo = r =>
  require([
    "../views/member/income/teamLevelReturn/teamlevel_return_list_info"
  ], r);

// ????????????
const ConsumeReturnCenter = r =>
  require(["../views/member/income/consumeReturn/consume_return_center"], r);
const ConsumeReturnListInfo = r =>
  require(["../views/member/income/consumeReturn/consume_return_list_info"], r);

// ????????????
const FullReturnCenter = r =>
  require(["../views/member/income/fullReturn/full_return_center"], r);
const FullReturnListInfo = r =>
  require(["../views/member/income/fullReturn/full_return_list_info"], r);

// ????????????
const ShareholderDividend = r =>
  require([
    "../views/member/income/shareholderDividend/shareholder_dividend"
  ], r);
// ????????????
const ShareholderReward = r =>
  require(["../views/member/income/ShareholderReward/Shareholder_reward"], r);

// ??????????????????
const DistributionHome = r =>
  require(["../views/member/income/distributionIncentive/distributionHome"], r);
// ????????????????????????
const DistributionDetail = r =>
  require([
    "../views/member/income/distributionIncentive/distributionDetail"
  ], r);
// ???????????????
const LevelReturn = r =>
  require(["../views/member/income/levelReturn/level_return"], r);

// ?????????

const RankingIndex = r => require(["../views/ranking/index"], r);
const RankingListFirst = r =>
  require(["../views/ranking/list_first_ranking"], r);
const RankingListSecond = r =>
  require(["../views/ranking/list_second_ranking"], r);

// ????????????
const ClockPunch = r => require(["../views/clockin/clockin"], r);
// ????????????????????????
const ClockPunchRule = r => require(["../views/clockin/clockinrule"], r);
// ????????????????????????
const ClockPunchRecord = r => require(["../views/clockin/clockinrecord"], r);

// ??????????????????
const MyRelationshipSearch = r =>
  require(["../views/member/tool/my_relationship_v2_search"], r);

// o2o????????????
const HomeSeller = r => require(["../views/o2o/home_seller"], r);

// o2o??????????????????
// const HomeSellerDetail = r => require(['../views/o2o/home_seller_detail'], r)

// o2o??????????????????
const HomeSellerAddress = r => require(["../views/o2o/home_seller_address"], r);

// ??????
const PayAnother = r => require(["../views/member/pay/pay_another"], r);

// ????????????

const PayAnotherDetail = r =>
  require(["../views/member/pay/pay_another_detail"], r);

const MyInfo = r => require(["../views/member/address/myinfo"], r);

// ?????????
const RechargeCode = r => require(["../views/qr_recharge/index"], r);

// ????????????--??????

const CourseIndex = r => require(["../views/member/course/course_index"], r);

// ????????????--??????

const CourseSearch = r => require(["../views/member/course/course_search"], r);

// ????????????--??????

const CourseManage = r => require(["../views/member/course/course_manage"], r);

// ????????????

const CourseDetail = r => require(["../views/member/course/course_detail"], r);

// ??????-????????????

const CourseReward = r => require(["../views/member/course/course_reward"], r);

// ??????-????????????

const CourseMy = r => require(["../views/member/course/course_mycourse"], r);

// ??????-????????????

const CourseHistory = r =>
  require(["../views/member/course/course_history"], r);

// ??????-????????????

const CourseMemberUpdate = r =>
  require(["../views/member/course/course_member_level"], r);

// ????????????

const VoiceList = r => require(["../views/member/course/voice/voice_list"], r);

// ????????????

const VoiceDetail = r =>
  require(["../views/member/course/voice/voice_detail"], r);

// ????????????

const ExtensionApply = r => require(["../views/extension/extensionApple"], r);

// ????????????

const MemberGradeList = r =>
  require(["../views/member/member_grade/member_grade_list"], r);

// ????????????

const MemberGradeListDetail = r =>
  require(["../views/member/member_grade/member_grade_detail"], r);

// ?????????

const OrderReturn = r => require(["../views/member/order/order_refund"], r);

// ????????????

const OrderReturnCheck = r =>
  require(["../views/member/order/order_return_check"], r);

// ?????????

const OrderReturnSure = r =>
  require(["../views/member/order/order_return_sure"], r);

// ????????????????????????

const OrderReturnAftersalesDetail = r =>
  require(["../views/member/order/order_return_after_detail"], r);

// ????????????????????????

const MemberRefundsMigration = r =>
  require(["../views/member/member_grade/member_grade_refunds_migration"], r);

// ??????????????????

const GoodsBrand = r => require(["../views/goods/goods_brand"], r);

// ????????????????????????

const CupboardTransfer = r =>
  require(["../views/member/cupboard/cupboard_transfer"], r);

// ???????????????????????????

const CupboardOperator = r =>
  require(["../views/member/cupboard/cupboard_operator"], r);

// ???????????????????????????--????????????

const CupboardDelivery = r =>
  require(["../views/member/cupboard/cupboard_delivery"], r);

// ???????????????????????????--????????????

const CupboardEmpty = r =>
  require(["../views/member/cupboard/cupboard_empty"], r);

// ??????????????????

const CupGoods = r => require(["../views/goods/goods_v2"], r);

// ????????????

const ZoneChoose = r => require(["../views/home/home_zone"], r);

// ???????????????????????????

const SupplierShop = r =>
  require(["../views/member/supplier/goods_supplier"], r);
// ??????

const TransferAccount = r =>
  require(["../views/member/pay/pay_transfer_account"], r);

// ???????????????
const SupplierCenter = r =>
  require(["../views/member/supplier/supplier_center"], r);

// ?????????--??????????????????

const SupInfoManage = r => require(["../views/member/supplier/info_manage"], r);

// ??????????????????

const QueueRecord = r =>
  require(["../views/extension/spread/reward_record"], r);

// ?????????
const FrozenCoin = r => require(["../views/member/frozen/frozen_coin"], r);
const RechargeCoin = r => require(["../views/member/frozen/recharge_coin"], r);
const LookDetailsCoin = r =>
  require(["../views/member/frozen/look_details_coin"], r);
const PutForwardCoin = r =>
  require(["../views/member/frozen/put_forward_coin"], r);
// ????????????

const AccoutInfo = r => require(["../views/member/accout/accout_info"], r);

// ??????????????????

const LoginValidate = r => require(["../views/login/login_validation"], r);

// ??????--???????????????

const ReplenishmentApply = r =>
  require(["../views/grab/replenishmentApply"], r);

// ??????--???????????????

const DeliveryTerminalApply = r =>
  require(["../views/grab/deliveryTerminalApply"], r);

// ????????????

const MyDistribution = r =>
  require(["../views/grab/replenish/my_distribution"], r);

// ?????????

const DistributionOrderList = r =>
  require(["../views/grab/replenish/distribution_orderlist"], r);

// ????????????--??????

const DistributionOrderDetail = r =>
  require(["../views/grab/replenish/distribution_orderlist_detail"], r);

// ?????????

const ReplenishOrderlist = r =>
  require(["../views/grab/replenish/replenish_orderlist"], r);

// ?????????--??????

const ReplenishOrderDetail = r =>
  require(["../views/grab/replenish/replenish_orderlist_detail"], r);

// ???????????? rebate

const ReplenishRebate = r => require(["../views/grab/replenish/rebate"], r);

// ????????????

const RobbingCenter = r =>
  require(["../views/grab/delivery/robbing_center"], r);

// ????????????

const DeliveryOrderList = r =>
  require(["../views/grab/delivery/delivery_list"], r);

// ????????????

const MyReplenishment = r =>
  require(["../views/grab/delivery/my_replenish"], r);

//???????????? ????????????
const WantReplenishment = r =>
  require(["../views/serviceStation/want_Replenishment"], r);

// ?????????111

const ReplenishOrder = r =>
  require(["../views/grab/delivery/replenish_order"], r);

// ????????????-- ?????????

const DeliveryOrderDetail = r =>
  require(["../views/grab/delivery/order_detail"], r);

// ??????
const Send = r => require(["../views/grab/send"], r);

// ????????????
const DeliveryEvaluate = r => require(["../views/grab/evaluate"], r);

// ?????????

const Courier = r => require(["../views/member/courier/courier"], r);
const Courierrecord = r =>
  require(["../views/member/courier/courier_record"], r);
const Courierdetail = r =>
  require(["../views/member/courier/courier_detail"], r);

// ????????????

const ArticleList = r => require(["../views/article/articleList"], r);

// ???????????????

const SupplierSearch = r => require(["../views/member/supplier/search"], r);

// ?????????
const RewardQueue = r =>
  require(["../views/extension/share_link/reward_queue"], r);
const RewardDetail = r =>
  require(["../views/extension/share_link/reward_detail"], r);
const RewardProcess = r =>
  require(["../views/extension/share_link/reward_process"], r);

// mryt
const MRYT = r => require(["../views/extension/mryt/mryt"], r);
const SaleCommission = r =>
  require(["../views/extension/mryt/sale_commission"], r);
const AwardRecord = r => require(["../views/extension/mryt/award_record"], r);
const AwardDetail = r => require(["../views/extension/mryt/award_detail"], r);
//?????????--??????
const ChainShopIndex = r =>
  require(["../views/member/chain_shop/chain_shop_index"], r);
const ChainShopInfo = r =>
  require(["../views/member/chain_shop/chain_shop_info"], r);

//????????????
const Profit = r => require(["../views/extension/profit/Profit.vue"], r);

//????????????--????????????
const MeetingIndex = r =>
  require(["../views/conference/meeting/entry_record"], r); //????????????
const MeetingIndexDetail = r =>
  require(["../views/conference/meeting/entry_record_detail"], r); //??????????????????
const MeetingExtendList = r =>
  require(["../views/conference/meeting/extend_enroll_list"], r); //??????????????????
const MeetingExtendDetail = r =>
  require(["../views/conference/meeting/extend_enroll_detail"], r); //??????????????????

//????????????
const EnterShop = r => require(["../views/member/enter_shop/enter_shop"], r);
const EnterProtocol = r =>
  require(["../views/member/enter_shop/enter_protocol"], r);
const SubmitSucceed = r =>
  require(["../views/member/enter_shop/submit_succeed"], r);
const ApplyMerchant = r =>
  require(["../views/member/enter_shop/apply_merchant"], r);
const TruckList = r => require(["../views/member/enter_shop/truck_list"], r);
//???????????????
const LoveRecharge = r => require(["../views/love/love_recharge"], r);

//?????????
const WftAlipayDetail = r => require(["../views/member/pay/wft_alipay"], r);

//????????????--????????????
const ExtensionGoods = r => require(["../views/extension/extension_goods"], r);
//??????????????????
const salesManagement = r => require(["../views/extension/teamSales/sales_management"], r);
//398???????????????????????????
const TeamDataCount = r =>
  require(["../views/extension/mryt/team_data_count"], r);
//?????????????????????
const newTeamDataCount = r =>
  require(["../views/new_mryt/new_team_data_count"], r);
//398 ?????????
const CardIndex = r => require(["../views/o2o/card/card_index"], r);
const CardOpenMembership = r =>
  require(["../views/o2o/card/card_open_membership"], r);
const CardChooseMembership = r =>
  require(["../views/o2o/card/card_choose_membership_time"], r);
const CardRight = r => require(["../views/o2o/card/card_rights"], r);
const NewCard = r =>require(["../views/o2o/card/new_card"],r);
const NewCardList = r =>require(["../views/o2o/card/newcard_list"],r);
//???????????????
const StoreCoupon = r => require(["../views/o2o/store/store_coupon"], r);

//???????????????
const hotelCoupon = r => require(["../views/hotel/hotel_coupon"], r);

//????????????
const InputVisit = r => require(["../views/member/visit/inputVisit"], r);
const Inviter = r => require(["../views/member/visit/inviter"], r);

//????????????
const Invoice = r => require(["../views/invoice/invoice"], r);

//??????????????????
const HotelIndex = r => require(["../views/hotel/index"], r);
const HotelSearch = r => require(["../views/hotel/search"], r);
const HotelHome = r => require(["../views/hotel/homepage"], r);
const HotelChooseRoom = r => require(["../views/hotel/choose_room"], r);
// const HotelGood= r => require(['../views/hotel/goods'], r);
const HotelGoodsOrder = r => require(["../views/hotel/goods_order"], r);
const HotelOrderList = r => require(["../views/hotel/order_list"], r);
const HotelOrderDetail = r => require(["../views/hotel/order_detail"], r);
const HotelManage = r => require(["../views/hotel/manage"], r);

// ??????????????????????????????
const HotelSupplySearch = r => require(["../views/hotelSupply/search"], r);
// ???????????????????????????
const HotelSupplyIndex = r => require(["../views/hotelSupply/index"], r);
// ?????????????????????????????????
const HotelSupplyHome = r => require(["../views/hotelSupply/homepage"], r);
// ??????????????????????????????????????????
const hotelSupplyGoods = r => require(["../views/hotelSupply/hotelSupplyGoods"], r);
// ??????????????????????????????????????????
const HotelSupplyGoodsOrder = r => require(["../views/hotelSupply/goods_order"], r);
// ?????????????????????????????????
const hotelOrder = r => require(["../views/hotelSupply/hotelOrder"], r);
//?????????
const Performance = r =>
  require(["../views/extension/performance/Performance"], r);

//???????????????
const PartnershipTeam = r =>
  require(["../views/extension/team_recorded/partnership_team"], r);
const ManagementRecord = r =>
  require(["../views/extension/team_recorded/management_record"], r);
const TaskList = r =>
  require(["../views/extension/team_recorded/task_list"], r);

//????????????
const RewardsRecord = r =>
  require(["../views/extension/team_reward/rewards_record"], r);
const RewardsRecordDetail = r =>
  require(["../views/extension/team_reward/rewards_record_detail"], r);
const TaskCenter = r =>
  require(["../views/extension/team_reward/task_center"], r);

//??????/???????????? Bank card settlement
const AggregateIndReg = r =>
  require(["../views/member/aggregate_payment/aggregate_ind_reg"], r);
const AggregateIndRegEdit = r =>
  require(["../views/member/aggregate_payment/aggregate_ind_reg_edit"], r);
const AggregateMeReg = r =>
  require(["../views/member/aggregate_payment/aggregate_mer_reg"], r);
const AggregateMeRegEdit = r =>
  require(["../views/member/aggregate_payment/aggregate_mer_reg_edit"], r);
const AggregateEntReg = r =>
  require(["../views/member/aggregate_payment/aggregate_ent_reg"], r);
const AggregateEntRegEdit = r =>
  require(["../views/member/aggregate_payment/aggregate_ent_reg_edit"], r);
const AggregateBankCardSet = r =>
  require(["../views/member/aggregate_payment/aggregate_bank_card_set"], r);
const AggregateAuditPart = r =>
  require(["../views/member/aggregate_payment/aggregate_audit_part"], r);
const CompanyEdit = r =>
  require(["../views/member/aggregate_payment/company_edit"], r);
const IndividualEdit = r =>
  require(["../views/member/aggregate_payment/individual_edit"], r);
const ShowApply = r =>
  require(["../views/member/aggregate_payment/show_apply"], r);

//????????????
const redEnvelope = r =>
  require(["../views/member/redEnvelope/redEnvelope"], r);
//???????????? ????????????
const redEnvelopeRecord = r =>
  require(["../views/member/redEnvelope/record"], r);

//????????????
const MemberBonusIndex = r =>
  require(["../views/extension/member_bonus/index"], r);
const MemberBonusRecord = r =>
  require(["../views/extension/member_bonus/record"], r);

//??????
const EntryExchange = r =>
  require(["../views/extension/entry_orders/coupon_exchange"], r);
const EntryVolume = r =>
  require(["../views/extension/entry_orders/entry_volume"], r);
const MoneyDetail = r =>
  require(["../views/extension/entry_orders/money_detail"], r);
const MyVolume = r => require(["../views/extension/entry_orders/my_volume"], r);
const VolumeDetail = r =>
  require(["../views/extension/entry_orders/volume_detail"], r);
const WholesaleVolume = r =>
  require(["../views/extension/entry_orders/wholesale_volume"], r);
const paddingOrder_Home = r =>
  require(["../views/extension/entry_orders/paddingOrder_Home"], r);
const CouponExrecord = r =>
  require(["../views/extension/entry_orders/coupon_exrecord"], r);

//?????????
const CarIndex = r => require(["../views/online_car/index"], r);
const CarSign = r => require(["../views/online_car/car_sign"], r);
const cityManager = r => require(["../views/online_car/city_manager"], r);
const teamMember = r => require(["../views/online_car/team_member"], r);
const CarBonus = r => require(["../views/online_car/bonus_list"], r);
const DriverApply = r => require(["../views/online_car/driver_apply"], r);
const DriverData = r => require(["../views/online_car/driver_data"], r);
const onlineCarOrderlist = r => require(["../views/online_car/order_list"], r); //???????????????

const globalDividend = r => require(["../views/extension/global_dividend"], r);

// ???????????????
const businessActivity = r => require(["../views/Activity/Activity"], r);
// ???????????????
const ActivityDetail = r => require(["../views/Activity/activity_detail"], r);
// ????????????
const materialCenter = r => require(["../views/others/material_center"], r);
//?????????
const addressManage = r =>
  require(["../views/others/virtual/address_manage"], r);
const addressAdd = r => require(["../views/others/virtual/address_add"], r);
const reviseAddress = r =>
  require(["../views/others/virtual/revise_address"], r);
const handWithdraw = r => require(["../views/others/virtual/hand_withdraw"], r);
// ???????????????
const DealerAward = r =>
  require(["../views/extension/dealer_award/dealer_award"], r);
const DriverDetail = r =>
  require(["../views/extension/dealer_award/dealer_detail"], r);

//???????????????
const TeamManageReward = r =>
  require(["../views/extension/team_manage_reward/rewards_record"], r);

const Lottery = r => require(["../views/others/lottery"], r);
const LotteryRecord = r => require(["../views/others/lottery_record"], r);
// ??????????????????
const DistributionOrders = r =>
  require(["../views/member/distribution_orders/distribution_orders"], r);
const Declaration = r => require(["../views/declaration/index"], r); //????????????
const RecordDeclaration = r =>
  require(["../views/declaration/recordDeclaration"], r); //????????????

const ServiceStation = r => require(["../views/serviceStation/index"], r); //?????????

const CommissionList = r =>
  require(["../views/serviceStation/commissionList"], r); //????????????

// ???????????????
const CustomQueue = r =>
  require(["../views/extension/custom_queue/custom_queue"], r);

//????????????
const RightGood = r => require(["../views/member/member_grade/right_good"], r);
//??????
const policyManage = r => require(["../views/others/policy/policy_manage"], r);
const policyAdd = r => require(["../views/others/policy/policy_add"], r);

//?????????
const myVideo = r => require(["../views/video_goods/little_video/my_video"], r);
const VideoList = r =>
  require(["../views/video_goods/little_video/video_list"], r);
const VideoDetail = r =>
  require(["../views/video_goods/little_video/video_detail"], r);
const videoAgreement = r =>
  require(["../views/video_goods/video_agreement"], r); //??????????????????????????????????????????
const releaseVideo = r => require(["../views/video_goods/release_video"], r); //??????????????????????????????????????????
const addVideoGood = r => require(["../views/video_goods/video_good"], r); //???????????????????????????
const VideoReward = r => require(["../views/video_goods/video_reward"], r); //??????????????????

//??????????????????
const TeamPerformanceAward = r =>
  require(["../views/extension/team_performance_award/index"], r);
//???????????????
const EquityBonus = r =>
  require(["../views/extension/Equity_bonus/Equity_bonus"], r);

//????????????
const advertiser = r => require(["../views/advertising_market/advertiser"], r); //?????????
const addAdvertising = r =>
  require(["../views/advertising_market/add_advertising"], r); //????????????
const advertisingFee = r =>
  require(["../views/advertising_market/advertising_fee"], r); //???????????????
const placedAdvertising = r =>
  require(["../views/advertising_market/placed_advertising"], r); //???????????????

// ???mryt
const newMRYT = r => require(["../views/new_mryt/new_mryt"], r);
const newSaleCommission = r => require(["../views/new_mryt/new_sale_commission"], r);
const newAwardRecord = r => require(["../views/new_mryt/new_award_record"], r);
const newAwardDetail = r => require(["../views/new_mryt/new_award_detail"], r);

// ??????????????????
const signIndex = r => require(["../views/others/sign/index"], r);
const signGuide = r => require(["../views/others/sign/guide"], r);
const personBank = r => require(["../views/others/sign/person_bank"], r);
const identifyResult = r => require(["../views/others/sign/identify_result"], r);
const signCompany= r => require(["../views/others/sign/company"], r);
const contractBills = r => require(["../views/others/sign/contract_bills"], r);
const staffManagement = r => require(["../views/others/sign/staff_management"], r);
const addStaff = r => require(["../views/others/sign/add_staff"], r);
const contractList = r => require(["../views/others/sign/contract_list"], r);
const signMission= r => require(["../views/others/sign/mission"], r);
const signPage = r => require(["../views/others/sign/sign_page"], r);

// service
// const Service = r => require(['../views/member/service/service'],r)
// //phone
// const PhoneRecharge = r => require(['../views/member/service/phone/phoneRecharge'],r)
// const RechargePay = r => require(['../views/member/service/phone/rechargePay'],r)
// const OrderDetailsPaied = r =>require(['../views/member/service/phone/orderDetailsPaied'],r)
// const OrderDetailsNoPay = r =>require(['../views/member/service/phone/orderDetailsNoPay'],r)
// const RechargeRecord = r =>require(['../views/member/service/phone/rechargeRecord'],r)
// //oilCard
// const AddCard = r =>require(['../views/member/service/oilCard/addCard'],r)
// const CardServer = r =>require(['../views/member/service/oilCard/cardServer'],r)
// const OilNoPay = r =>require(['../views/member/service/oilCard/oilNoPay'],r)
// const OilDetailsPaied = r =>require(['../views/member/service/oilCard/oilDetailsPaied'],r)
// const OilRecharge = r =>require(['../views/member/service/oilCard/oilRecharge'],r)
// //ticket ??????
// const Ticket = r => require(['../views/member/service/ticket/index'], r)
// const City = r => require(['../views/member/service/ticket/city'], r)
// const TicketOrder = r =>require(['../views/member/service/ticket/ticketOrder'],r)
// const AddOrder = r =>require(['../views/member/service/ticket/addOrder'],r)
// const RefundApplication = r=>require(['../views/member/service/ticket/refundApplication'],r)
//
// //Game
// const GameSearch = r => require(['../views/member/service/game/gameSearch'],r)
// const GameIsPay = r => require(['../views/member/service/game/gameIsPay'],r)
// const GameNoPay = r => require(['../views/member/service/game/gameNoPay'],r)
// const GameFlingRecharge = r =>require(['../views/member/service/game/gameFlingRecharge'],r)
// const GamePasswordRecharge =r =>require(['../views/member/service/game/gamePasswordRecharge'],r)
//?????????
const MicroHome = r => require(["../views/micro_communities/home"], r);
const MicroIndex = r => require(["../views/micro_communities/microIndex"], r);
const MicroRelease = r =>
  require(["../views/micro_communities/microRelease"], r);
const Microsearchindex = r =>
  require(["../views/micro_communities/microsearchindex"], r);
const Microclassification = r =>
  require(["../views/micro_communities/microclassification"], r);
const Microcommentdetails = r =>
  require(["../views/micro_communities/microcommentdetails"], r);
const microhomepage = r =>
  require(["../views/micro_communities/microhomepage"], r);
const MicroEdit = r => require(["../views/micro_communities/microEdit"], r);
const microAttention = r =>
  require(["../views/micro_communities/micro_attention"], r);
const microFanlist = r =>
  require(["../views/micro_communities/microFanlist"], r);
//??????
const GroupDetail = r => require(["../views/goods/group/group_detail"], r);
const GroupList = r => require(["../views/goods/group/group_list"], r);
const GroupGoods = r => require(["../components/goods/group_good"], r);
const MyGroups = r => require(["../views/goods/group/mygroups"], r);

//????????????
const admarketHome = r => require(["../views/member/adMarket/home"], r);
const MyDevice = r => require(["../views/member/adMarket/myDevice"], r);
const DeviceManger = r => require(["../views/member/adMarket/deviceManger"], r);
const ADApply = r => require(["../views/member/adMarket/AD_Apply"], r);
const DeviceDetail = r => require(["../views/member/adMarket/deviceDetail"], r);
const managerCommission = r =>
  require(["../views/member/adMarket/managerCommission"], r);

//????????????
const VoiceGood = r => require(["../views/goods/voice_good/good_detail"], r);
const MyVoices = r => require(["../views/goods/voice_good/my_voices"], r);

const Payrecharge = r =>
  require(["../views/member/payrecharge/payrecharge"], r);
// ?????????????????????
const BankCardInformation = r =>
  require(["../views/sanpay/bankcardinformation"], r);
const BankCardinEdit = r => require(["../views/sanpay/bankcardinedit"], r);
const BankCardinAdd = r => require(["../views/sanpay/bankcardinadd"], r);
// ????????????
const OrderRuturnInfo = r =>
  require(["../views/member/order/orderInfo/order_ruturn_info"], r);
// ?????????
const survey = r => require(["../views/others/survey"], r);
// ?????????
const myWallet = r => require(["../views/member/dragon/my_wallet"], r);
const changePwd = r => require(["../views/member/dragon/change_pwd"], r);
const companyLogon = r => require(["../views/member/dragon/company_logon"], r);
const personLogon = r => require(["../views/member/dragon/person_logon"], r);
const personModify = r => require(["../views/member/dragon/person_modify"], r);
const companyModify = r =>
  require(["../views/member/dragon/company_modify"], r);
const dragonDeposit = r =>
  require(["../views/member/dragon/dragon_deposit"], r);
const walletDetail = r => require(["../views/member/dragon/wallet_detail"], r);
const chooseStatus = r => require(["../views/member/dragon/choose_status"], r);
const checking = r => require(["../views/member/dragon/checking"], r);
const dragonWithdraw = r =>
  require(["../views/member/dragon/dragon_withdraw"], r);
const myBank = r => require(["../views/member/dragon/my_bank"], r);
const failApply = r => require(["../views/member/dragon/fail_apply"], r);
const infoChange = r => require(["../views/member/dragon/info_change"], r);
//?????? ?????????
const ManageAward = r =>
  require(["../views/extension/manage_share/manage_award"], r);
//?????? ?????????
const ShareAward = r =>
  require(["../views/extension/manage_share/share_award"], r);
//?????????
const PeersAward = r =>
  require(["../views/extension/peers_award/peers_award"], r);
const SelfCarryApply = r =>
  require(["../views/member/self_carry/selfCarry_apply"], r);
//?????? ???????????????
const SelfCarry_info = r =>
  require(["../views/member/self_carry/selfCarry_info"], r);
//?????? ???????????????
const selfCarry_reward = r =>
  require(["../views/member/self_carry/selfCarry_reward"], r);
//????????????-????????????
const HireCarManage = r =>
  require(["../views/extension/service_staff/manage"], r);
//????????????-????????????
const ServiceStaff = r =>
  require(["../views/extension/service_staff/service_staff"], r);
const StaffOrderDetail = r =>
  require(["../views/extension/service_staff/order_detail"], r);
const Dividend = r => require(["../views/extension/service_staff/dividend"], r);
//????????????????????????
const dividendDetail = r =>
  require(["../views/extension/service_staff/dividend_detail"], r);
const Bonus = r => require(["../views/others/bonus"], r);
//?????????
const revenus_bonus = r => require(["../views/others/revenus_bonus"],r);

// ??????
const Appointment = r => require(["../views/appointment/appointment_index"],r);
const showAppointment = r => require(["../views/appointment/showAppointment"],r);
const AppointmentSearch = r => require(["../views/appointment/search"],r);
const ProjectDetails = r => require(["../views/appointment/project_details"],r);
const ProjectList = r => require(["../views/appointment/project_list"],r);
const TechnicianDetails = r => require(["../views/appointment/technician_details"],r);
const HotTechnician = r => require(["../views/appointment/hot_technician"],r);
const AppointmentMine = r => require(["../views/appointment/mine"],r);
const TechnicianTime = r => require(["../views/appointment/technician/add_work_time"],r);
const TechnicianWork = r => require(["../views/appointment/technician/work_day"],r);
const AppointmentProject = r => require(["../views/appointment/technician/appointment_project"],r);
const AddTechnician = r => require(["../views/appointment/manager/add_technician"],r);
const StoresTechnician = r => require(["../views/appointment/manager/stores_technician"],r);
const ClientAppointment = r => require(["../views/appointment/client/appointment"],r);
const ClientEvaluate = r => require(["../views/appointment/client/evaluate"],r);
const MakeAppointment = r => require(["../views/appointment/client/make_appointment"],r);
const ClientProject = r => require(["../views/appointment/client/project"],r);
const ClientVerification = r => require(["../views/appointment/client/verification"],r);

// ????????????
const DistributionIndex = r => require(["../views/others/distribution_alignment/index"],r);
const DistributionSearch = r => require(["../views/others/distribution_alignment/search"],r);
const DistributionStatistics = r => require(["../views/others/distribution_alignment/activity_statistics"],r);
const DistributionActivityDetail = r => require(["../views/others/distribution_alignment/activity_detail"],r);
const DistributionCommissionDetail = r => require(["../views/others/distribution_alignment/commission_detail"],r);
const DistributionParticipant = r => require(["../views/others/distribution_alignment/participant"],r);

// ?????????
const advertisingPage = r => require(["../views/others/advertisingPage"], r);
//??????????????????
const introduceNear = r => require(["../views/o2o/introduce_good/introduce_near"], r);
const nearSearch = r => require(["../views/o2o/introduce_good/near_search"], r);
const addNear = r => require(["../views/o2o/introduce_good/add_near"], r);
// ?????????
const rootPath = "";
//??????
const auctioneer  = r => require(["../views/auction/auctioneer-manage/auctioneer"], r);
const auctionCollect  = r => require(["../views/auction/auction-mine/auction_collect"], r);
const myIndex  = r => require(["../views/auction/auction-mine/my_index"], r);
const myAuction  = r => require(["../views/auction/auction-mine/my_auction"], r);
const myMoney  = r => require(["../views/auction/auctioneer-manage/my_money"], r);
const passwordChange  = r => require(["../views/auction/auctioneer-manage/password_change"], r);
const setPassword  = r => require(["../views/auction/auctioneer-manage/set_password"], r);
const shopShare  = r => require(["../views/auction/auctioneer-manage/shop_share"], r);
const goodManage  = r => require(["../views/auction/auctioneer-manage/good_manage"], r);
const publishFirst  = r => require(["../views/auction/auctioneer-publish/publish_first"], r);
const publishSecond  = r => require(["../views/auction/auctioneer-publish/publish_second"], r);
const auctionIndex  = r => require(["../views/auction/auction_index"], r);
const auctionMore  = r => require(["../views/auction/auction_more"], r);
const auctionSearch  = r => require(["../views/auction/auction_search"], r);
const auctionVip  = r => require(["../views/auction/auction_vip"], r);
const auctionApply  = r => require(["../views/auction/auction-apply/auction_apply"], r);
const auctionGood  = r => require(["../views/auction/auction_good"], r);
const auctionRecord  = r => require(["../views/auction/auction_record"], r);
const auctioneerShop  = r => require(["../views/auction/auctioneer-shop/auctioneer_shop"], r);
const auctioneerShopSearch  = r => require(["../views/auction/auctioneer-shop/auctioneer_shop_search"], r);
const auctionLove  = r => require(["../views/auction/auction-mine/auction_love"], r);
const auctionLoveDetail  = r => require(["../views/auction/auction-mine/auction_love_detail"], r);
const auctionLoveCash  = r => require(["../views/auction/auction-mine/auction_love_cash"], r);
const auctionRecharge  = r => require(["../views/auction/auction-mine/auction_recharge"], r);
const auctiongoodsorder = r => require(["../views/auction/auction-mine/auction_goods_order"], r);
//??????
const pictureAlbum = r => require(["../views/others/picture_album/picture_album"],r);
//??????????????????
const qrCoupon = r => require(["../views/qr_coupon/qr_coupon"],r);

// ??????-????????????
// ????????????
const supply_demand_index = r => require(["../views/supply_demand/index"], r);
// ??????????????????
const supply_detail = r => require(["../views/supply_demand/supply_detail"], r);
// ??????????????????
const demand_detail = r => require(["../views/supply_demand/demand_detail"], r);
// ???????????????
const publish_index = r => require(["../views/supply_demand/publish_index"], r);
// ????????????
const publish_manage = r => require(["../views/supply_demand/my_publish"], r);
// ??????????????????
const manage_supply = r => require(["../views/supply_demand/manage_supply"], r);
// ??????????????????
const manage_demand = r => require(["../views/supply_demand/manage_demand"], r);
// ?????????????????????
const financial_index = r => require(["../views/supply_demand/financial_index"], r);
// ??????????????????
const financial_apply = r => require(["../views/supply_demand/financial_apply"], r);
// ??????????????????
const publish_demand = r => require(["../views/supply_demand/publish_demand"], r);
// ??????????????????
const edit_demand = r => require(["../views/supply_demand/publish_demand"], r);
// ??????????????????
const publish_supply = r => require(["../views/supply_demand/publish_supply"], r);
// ??????????????????
const edit_supply = r => require(["../views/supply_demand/publish_supply"], r);
// ??????????????????
const financial_detail = r => require(["../views/supply_demand/financial_detail"], r);

//?????????
const easyRefuel = r => require(["../views/easy-refuel/easy_refuel"],r);
const easySearch = r => require(["../views/easy-refuel/search"],r);
// ????????????
const chooseBank = r => require(["../views/quick_pay/choose_bank"],r);
const addBankSecond = r => require(["../views/quick_pay/add_bank_second"],r);
const addBankFirst = r => require(["../views/quick_pay/add_bank_first"],r);
const bindBank = r => require(["../views/quick_pay/bind_bank"],r);
const memberchooseBank = r => require(["../views/quick_pay/member_choose_bank"],r);
const memberaddBankSecond = r => require(["../views/quick_pay/member_add_bank_second"],r);
const memberaddBankFirst = r => require(["../views/quick_pay/member_add_bank_first"],r);
const memberbindBank = r => require(["../views/quick_pay/member_bind_bank"],r);
const quickIndex = r => require(["../views/quick_pay/quick_index"],r);
// ????????????
const routes = [
  // ?????????????????????
  {
    path: "/member/payrecharge",
    component: Payrecharge,
    name: "payrecharge",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "",
    redirect: {
      name: "home"
    },
    meta: {
      title: "",
      foot: false
    }
  },
  {
    path: "/user_agreement",
    component: userAgreement,
    name: "userAgreement",
    meta: {
      title: "",
      foot: true
    }
  },
  // ?????? ????????????
  {
    path: "/member/bankCardInformation",
    component: BankCardInformation,
    name: "bankCardInformation",
    meta: {
      title: "",
      foot: false
    }
  },
  // ????????????
  {
    path: "/member/orderruturninfo:id",
    component: OrderRuturnInfo,
    name: "orderruturninfo",
    meta: {
      title: "????????????",
      foot: false
    }
  },
  // ?????????????????????
  {
    path: "/member/bankcardinedit",
    component: BankCardinEdit,
    name: "bankcardinedit",
    meta: {
      title: "",
      foot: false
    }
  },
  // ?????????????????????
  {
    path: "/member/bankcardinadd",
    component: BankCardinAdd,
    name: "bankcardinadd",
    meta: {
      title: "",
      foot: false
    }
  },
  {
    path: "/home",
    component: Home,
    name: "home",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/temp",
    component: Temp,
    name: "temp",
    meta: {
      title: "??????",
      foot: false
    }
  },
  {
    path: "/hello",
    component: Hello,
    name: "hello"
  },
  {
    path: "/CloseSite",
    component: CloseSite,
    name: "CloseSite",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  {
    path: "/diy",
    component: Diy,
    name: "diy",
    meta: {
      title: "",
      foot: false
    }
  },
  // {
  //   path: "/diy/:page_id",
  //   component: Diy,
  //   name: "Diy1"
  // },
  {
    path: "/diyform/:id",
    component: DiyForm,
    name: "DiyForm"
  },
  {
    path: "/diyform/:id/:goodsId/:optionsId/:total",
    component: DiyForm,
    name: "activityDiyForm"
  },
  {
    path: "/share",
    component: Share,
    name: "share",
    meta: {
      title: "??????",
      foot: false
    }
  },
  // ???????????????
  {
    path: "/business_activity/business_activity",
    component: businessActivity,
    name: "businessActivity ",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ???????????????
  {
    path: "/activity_detail",
    component: ActivityDetail,
    name: "ActivityDetail ",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  //Member
  {
    path: "/member/bank",
    component: MemberBank,
    name: "memberBank",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/bank_card",
    component: BankCard,
    name: "BankCard",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member",
    component: Member,
    name: "member",
    meta: {
      title: "????????????",
      foot: false
    }
  },

  // {
  //   path: '/member/tabs',
  //   component: Tabs,
  //   name: 'tabs',
  //   meta: {
  //     title: 'tabs',
  //     foot: false
  //   }
  // },
  // {
  //   path: '/member/po',
  //   component: Po,
  //   name: 'po',
  //   meta: {
  //     title: 'po',
  //     foot: false
  //   }
  // },
  {
    path: "/member/info",
    component: Info,
    name: "info",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/editmobile",
    component: Editmobile,
    name: "editmobile",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/withdrawEditmobile",
    component: WithdrawEditmobile,
    name: "withdrawEditmobile",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/scaneditmobile",
    component: scanEditmobile,
    name: "scanEditmobile",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/member/balance",
    component: Balance,
    name: "balance",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/detailed",
    component: Detailed,
    name: "detailed",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/code_page",
    component: codePage,
    name: "codePage",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/uid_code",
    component: codePage,
    name: "uidCode",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // {
  //   path: '/member/screen',
  //   component: Screen,
  //   name: 'screen',
  //   meta: {
  //     title: '????????????',
  //     foot: true
  //   }
  // },
  {
    path: "/member/details/:item",
    component: Details,
    name: "details",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/integral",
    component: Integral,
    name: "integral",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/integral_v2",
    component: IntegralV2,
    name: "integral_v2",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/integral_v2Transfer",
    component: IntegralV2Transfer,
    name: "integral_v2_transfer",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/income",
    component: Income,
    name: "income",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/balance_recharge",
    component: Balance_recharge,
    name: "balance_recharge",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/balance_transfer",
    component: Balance_transfer,
    name: "balance_transfer",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/balance_withdrawals",
    component: Balance_withdrawals,
    name: "balance_withdrawals",
    meta: {
      title: "??????",
      foot: true
    }
  },
  // ????????????
  // Balance_manage
  {
    path: "/member/Balance_manage",
    component: Balance_manage,
    name: "balance_manage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // Balance_manageDetail
  {
    path: "/member/Balance_manageDetail",
    component: Balance_manageDetail,
    name: "balance_manageDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????
  // Add_Balance_manage
  {
    path: "/member/add_balance_manage",
    component: Add_Balance_manage,
    name: "add_balance_manage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????
  // Edit_Balance_manage
  {
    path: "/member/edit_balance_manage/:type",
    component: Edit_Balance_manage,
    name: "edit_balance_manage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/policyPay/:id/:supplier_id",
    component: policyPay,
    name: "policyPay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/withdrawal",
    component: Withdrawal,
    name: "withdrawal",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/incomedetails",
    component: Incomedetails,
    name: "incomedetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/member_income_incomedetails_info",
    component: IncomedetailsInfo,
    name: "income_details_info",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  // ?????????????????????
  {
    path: "/member/info_costom",
    component: InfoCostom,
    name: "info_costom",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ??????????????????
  {
    path: "/member/balance_password",
    component: BalancePassword,
    name: "balance_password",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  // ????????????????????????
  {
    path: "/member/set_balance_password",
    component: SetBalancePassword,
    name: "set_balance_password",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/message",
    component: Message,
    name: "message",
    meta: {
      title: "????????????",
      foot: false
    }
  },
  {
    path: "/member/message_info/:id",
    component: MessageInfo,
    name: "messageInfo",
    meta: {
      title: "????????????",
      foot: false
    }
  },

  // {
  //   path: '/member/integraldetail/:item',
  //   component: Integraldetail,
  //   name: 'integraldetail',
  //   meta: {
  //     title: '????????????',
  //     foot: true
  //   }
  // },
  {
    path: "/member/integrallist",
    component: IntegralList,
    name: "integrallist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/presentationRecord",
    component: PresentationRecord,
    name: "presentationRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/presentationRecord/:supplier",
    component: PresentationRecord,
    name: "supplierRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/presentationDetails/:record_id",
    component: PresentationDetails,
    name: "presentationDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/address",
    component: Address,
    name: "address",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/alterAddress",
    component: AlterAddress,
    name: "alterAddress",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/member/appendAddress",
    component: AppendAddress,
    name: "appendAddress",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  // income
  {
    path: "/member/distributionCommission",
    component: DistributionCommission,
    name: "distributionCommission",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  // tool
  {
    path: "/member/footprint",
    component: Footprint,
    name: "footprint",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/collection",
    component: Collection,
    name: "collection",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/myrelationship",
    component: MyRelationship,
    name: "myRelationship",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/offlineSearch",
    component: OfflineSearch,
    name: "offlineSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/myEvaluation",
    component: MyEvaluation,
    name: "myEvaluation",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/comment",
    component: Comment,
    name: "comment",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/member/evaluationDetails",
    component: EvaluationDetails,
    name: "evaluationDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/myfriends",
    component: MyFriendApply,
    name: "MyFriendApply",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/coupon_exchange",
    component: CouponExchange,
    name: "CouponExchange",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/helpcenter",
    component: Helpcenter,
    name: "helpcenter",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // score
  {
    path: "/member/integral_activity",
    component: IntegralActivity,
    name: "IntegralActivity",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/member/Integral_generalization",
    component: IntegralGeneralization,
    name: "IntegralGeneralization",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/integral_get_record",
    component: IntegralGetRecord,
    name: "IntegralGetRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/integral_present",
    component: IntegralPresent,
    name: "IntegralPresent",
    meta: {
      title: "????????????",
      foot: false
    }
  },
  {
    path: "/member/integral_record",
    component: IntegralRecord,
    name: "IntegralRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // Love ?????????
  {
    path: "/love_index",
    component: Love_index,
    name: "love_index",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/love_list",
    component: Love_list,
    name: "love_list",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/love_transfer",
    component: Love_transfer,
    name: "love_transfer",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/love_changein",
    component: Love_changein,
    name: "love_changein",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/love_changeto",
    component: Love_changeto,
    name: "love_changeto",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/love_give",
    component: Love_give,
    name: "love_give",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/love_details",
    component: Love_details,
    name: "love_details",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/love_agent",
    component: Love_agent,
    name: "love_agent",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/love_push",
    component: Love_push,
    name: "love_push",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/love_cash",
    component: Love_cash,
    name: "love_cash",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/love_record",
    component: Love_record,
    name: "love_record",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/love_explain",
    component: Love_explain,
    name: "love_explain",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/love_activation/:id",
    component: Love_activation,
    name: "love_activation",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/loveWithdrawals",
    component: LoveWithdrawals,
    name: "loveWithdrawals",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/lovePeriod",
    component: lovePeriod,
    name: "lovePeriod",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/lovePerformance",
    component: lovePerformance,
    name: "lovePerformance",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },

  // article
  {
    path: "/notice",
    component: Notice,
    name: "notice",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/articleContent/:id",
    component: ArticleContent,
    name: "articleContent",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/noticeByCategory/:id",
    component: NoticeByCategory,
    name: "noticeByCategory",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/noticeReport/:id",
    component: NoticeReport,
    name: "noticeReport",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/payEssay",
    component: payEssay,
    name: "payEssay",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/payList/:id",
    component: payList,
    name: "payList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // overseas ?????????
  {
    path: "/overseas_index",
    component: Overseas_index,
    name: "overseas_index",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/overseas_explain",
    component: Overseas_explain,
    name: "overseas_explain",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/overseas_transfer",
    component: Overseas_transfer,
    name: "overseas_transfer",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/overseas_record",
    component: Overseas_record,
    name: "overseas_record",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/overseas_list",
    component: Overseas_list,
    name: "overseas_list",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/overseas_balance_withdrawals",
    component: Overseas_balance_withdrawals,
    name: "overseas_balance_withdrawals",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  // microshop
  {
    path: "/microShopShare/home/:shop_id",
    component: MicroShop_Share_home,
    name: "micro_shop_share_home",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShopShare/micro_shop_category",
    component: MicroShop_ShareCategory,
    name: "micro_shop_share_category",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShopShare/micro_share_catelist/:id/",
    component: CatelistShare,
    name: "micro_shop_share_carelist",
    meta: {
      title: "",
      foot: true
    }
  },

  {
    path: "/microShopAdd/micro_shop_category",
    component: MicroShop_AddCategory,
    name: "micro_shop_add_category",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/microShop_apply",
    component: MicroShop_apply,
    name: "microShop_apply",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShop_apply_reg_info",
    component: MicroShop_apply_reg_info,
    name: "microShop_apply_reg_info",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShop/baseinfo",
    component: MicroShop_baseInfo,
    name: "microShop_baseinfo",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShop/micro_shop_category",
    component: MicroShop_Category,
    name: "micro_shop_category",
    meta: {
      title: "",
      foot: true
    }
  },

  // ??????id????????????????????????????????????????????????????????????
  {
    path: "/catelist1/:id/",
    component: Catelist1,
    name: "catelist1",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // {path: '/catelist1/:id/:isSelect', component: Catelist1, name: 'catelist1',meta: {	title: '????????????', foot:true }},
  {
    path: "/microShop/home",
    component: MicroShop_home,
    name: "microShop_home",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/microShop/shopKeeperCenter",
    component: MicroShop_ShopKeeperCenter,
    name: "microShop_ShopKeeperCenter",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????????????????????????????????????????
  {
    path: "/microShop/orderDetail/:date",
    component: MicroShop_orderDetail,
    name: "microShop_orderDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ???????????????????????????????????????????????????????????? ??????
  {
    path: "/microShop/shareList/:date",
    component: MicroShop_shareList,
    name: "microShop_shareList",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ???????????????????????????????????????????????????????????????
  {
    path: "/microShop/shareDetail/:orderID",
    component: MicroShop_shareDetail,
    name: "microShop_shareDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/microShop/selectedGoods/:goods",
    component: MicroShop_selectedGoods,
    name: "microShop_selectedGoods",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/microShop/manageShop",
    component: ManageShop,
    name: "manage_shop",
    meta: {
      title: "",
      foot: true
    }
  },

  // extension
  {
    path: "/extension/manage",
    component: Manage,
    name: "manage",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/extension",
    component: Extension,
    name: "extension",
    meta: {
      title: "????????????",
      foot: false
    }
  },
  {
    path: "/extension/distribution",
    component: Distribution,
    name: "distribution",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/extension/commission",
    component: Commission,
    name: "commission",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/extension/commissionDetails",
    component: CommissionDetails,
    name: "commissionDetails",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/extension/unsettled",
    component: Unsettled,
    name: "unsettled",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/extension/unsettledDetails",
    component: UnsettledDetails,
    name: "unsettledDetails",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/extension/alreadySettled",
    component: AlreadySettled,
    name: "alreadySettled",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/extension/alreadySettledDetails",
    component: AlreadySettledDetails,
    name: "alreadySettledDetails",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/extension/notPresent",
    component: NotPresent,
    name: "notPresent",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/extension/notPresentDetails",
    component: NotPresentDetails,
    name: "notPresentDetails",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/extension/present",
    component: Present,
    name: "present",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/extension/invalid/:type",
    component: Present,
    name: "invalid",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/extension/presentDetails",
    component: PresentDetails,
    name: "presentDetails",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/extension/distributionOrder",
    component: DistributionOrder,
    name: "distributionOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/extension/extendIncome",
    component: ExtendIncome,
    name: "extendIncome",
    meta: {
      title: "????????????",
      foot: false
    }
  }, // new
  {
    path: "/extension/merchantsDividendRatio",
    component: MerchantsDividendRatio,
    name: "merchantsDividendRatio",
    meta: {
      title: "?????????",
      foot: true
    }
  }, // new
  {
    path: "/shareholderCenter",
    component: ShareholderCenter,
    name: "shareholderCenter",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/teamAgentCenter",
    component: TeamAgentCenter,
    name: "teamAgentCenter",
    meta: {
      title: " ",
      foot: true
    }
  },
  {
    path: "/teamPerformance",
    component: TeamPerformance,
    name: "teamPerformance",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/FranchiserRed",
    component: FranchiserRed,
    name: "FranchiserRed",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/teamCode",
    component: TeamCode,
    name: "teamCode",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/teamClient",
    component: TeamClient,
    name: "TeamClient",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/codeHistory",
    component: CodeHistory,
    name: "codeHistory",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/investmentCenter",
    component: InvestmentCenter,
    name: "investmentCenter",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/regionalAgencyCenter",
    component: RegionalAgencyCenter,
    name: "regionalAgencyCenter",
    meta: {
      title: " ",
      foot: true
    }
  },
  {
    path: "/applyRegionalAgency",
    component: ApplyRegionalAgency,
    name: "applyRegionalAgency",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/fixedReward",
    component: FixedReward,
    name: "fixedReward",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/courseIncome",
    component: CourseIncome,
    name: "courseIncome",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/DailyRed",
    component: DailyRed,
    name: "DailyRed",
    meta: {
      title: "",
      foot: false
    }
  },
  {
    path: "/GetRedRecord",
    component: GetRedRecord,
    name: "GetRedRecord",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/RedAmount",
    component: RedAmount,
    name: "RedAmount",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/RedReward",
    component: RedReward,
    name: "RedReward",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  // ?????????
  {
    path: "/extensionPage",
    component: ExtensionPage,
    name: "ExtensionPage",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/awardRanking",
    component: AwardRanking,
    name: "AwardRanking",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/recordOfAwards/:id",
    component: RecordOfAwards,
    name: "RecordOfAwards",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/myIncome",
    component: MyIncome,
    name: "MyIncome",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/myEarnings",
    component: myEarnings,
    name: "myEarnings",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/earningList",
    component: earningList,
    name: "earningList",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/point_activity_award_center",
    component: point_activity_award_center,
    name: "point_activity_award_center",
    meta: { title: "??????????????????", foot: true }
  },
  //????????????
  {
    path: "/selectionarea",
    component: Selectionarea,
    name: "selectionarea",
    meta: { title: "????????????", foot: true }
  },
  //????????????
  {
    path: "/regionaldividend",
    component: Regionaldividend,
    name: "regionaldividend",
    meta: { title: "????????????", foot: true }
  },
  //??????????????????
  {
    path: "/detailsdividends",
    component: Detailsdividends,
    name: "detailsdividends",
    meta: { title: "??????????????????", foot: true }
  },
  // ?????????
  {
    path: "/member/creditInfo",
    component: CreditInfo,
    name: "creditInfo",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  // supplier
  {
    path: "/member/supplier",
    component: Supplier,
    name: "supplier",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // comment
  {
    path: "/CommentDetails/:order_id/:goods_id/:uid",
    component: CommentDetails,
    name: "CommentDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/ReCommentDetails",
    component: ReCommentDetails,
    name: "ReCommentDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/OtherCommentDetails",
    component: OtherCommentDetails,
    name: "othercommentdetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // order
  {
    path: "/member/alipay/:status/:url",
    component: Alipay,
    name: "alipayCloud",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/alipay/:status/:recharge_money/:order_pay_id/:uid/:pid",
    component: Alipay,
    name: "alipay",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  // ?????????--??????
  {
    path: "/member/alipay/:status/:recharge_money/:order_pay_id/:uid/:pid/:tag",
    component: Alipay,
    name: "fre_alipay",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  // ?????????--??????
  {
    path: "/member/alipay/:status/:recharge_money/:order_pay_id/:uid/:pid/:tag",
    component: Alipay,
    name: "love_alipay",
    meta: {
      title: "?????????",
      foot: true
    }
  },

  {
    path: "/member/alipayClockin/:status/:url",
    component: AlipayClockin,
    name: "alipayClockin",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/alipayCourse/:status/:url",
    component: Alipay,
    name: "alipayCourse",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status",
    component: OrderList,
    name: "orderlist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status/:orderType",
    component: OrderList,
    name: "cashierOrderlist",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status/:orderType",
    component: OrderList,
    name: "storeOrderlist",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status/:orderType",
    component: OrderList,
    name: "supplierOrderlist",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status/:orderType",
    component: OrderList,
    name: "hotelOrderlist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderList/:status/:orderType",
    component: OrderList,
    name: "auctionOrderlist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/onlineCar/orderList/:status/:orderType",
    component: OrderList,
    name: "onlineCarOrderlist",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/groups/orderList/:status/:orderType",
    component: OrderList,
    name: "GroupOrderlist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/lease_toy/orderList/:status/:orderType",
    component: OrderList,
    name: "lease_toyOrderlist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/deliveryStation/DeliveryOrderList/:status/:orderType",
    component: OrderList,
    name: "DeliveryOrderList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/deliveryStation/DeliveryReplenish/:status/:orderType",
    component: OrderList,
    name: "DeliveryReplenish",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/serviceStation/hireCarOrderList/:status/:orderType",
    component: OrderList,
    name: "hireCarOrderList",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/hireCar/serviceReplenish/:status/:orderType",
    component: OrderList,
    name: "serviceReplenish",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/subsidiary/orderList",
    component: OrderList,
    name: "subsidiary",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/member/express/:refund_id",
    component: OrderExpress,
    name: "express",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id",
    component: Goodsinfo,
    name: "orderdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "cashierOrderdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "storeOrderdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "supplierOrderdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "commissionOrderdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/logistics",
    component: Logistics,
    name: "logistics",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/track",
    component: track,
    name: "track",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/evaluate/:order_id/:goods",
    component: Evaluate,
    name: "evaluate",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/replyEvaluate",
    component: ReplyEvaluate,
    name: "replyEvaluate",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/addevaluate",
    component: Addevaluate,
    name: "addevaluate",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/refund/:order_id/:type",
    component: Refund,
    name: "refund",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/aftersaleslist",
    component: Aftersaleslist,
    name: "aftersaleslist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/aftersales/:refund_id",
    component: Aftersales,
    name: "aftersales",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderpay/:order_ids",
    component: OrderPay,
    name: "orderpay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/order/verification/:order_id/:api",
    component: OrderVerification,
    name: "orderVerification",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/order/cash/:order_pay_id/:pid",
    component: OrderCash,
    name: "orderCash",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderrecord/:order_id",
    component: OrderRecord,
    name: "OrderRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // {path: '/member/orderpay/:status/:order_ids', component: OrderPay, name: 'orderpay',meta: { title: '????????????', foot:true }},
  // orderpay
  {
    path: "/member/payErr",
    component: PayErr,
    name: "payErr",
    meta: {
      title: "?????????????????????",
      foot: "true"
    }
  }, // ????????????
  {
    path: "/member/payYes",
    component: PayYes,
    name: "PayYes",
    meta: {
      title: "????????????",
      foot: "true"
    }
  }, // ????????????
  {
    path: "/member/blacklist",
    component: Blacklist,
    name: "blacklist",
    meta: {
      title: "?????????",
      foot: "true"
    }
  },
  {
    path: "/member/mandate",
    component: Mandate,
    name: "mandate",
    meta: {
      title: "??????????????????",
      foot: "true"
    }
  },
  // coupon
  {
    path: "/coupon/coupon_index",
    component: Coupon,
    name: "coupon",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/coupon/coupon_store",
    component: CouponStore,
    name: "couponStore",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/coupon/coupon_info",
    component: CouponInfo,
    name: "couponInfo",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/coupon/share/:order_id",
    component: CouponShare,
    name: "couponShare",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/coupon/get_coupon/:order_id",
    component: getCoupon,
    name: "getCoupon",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // plug
  // {
  //   path: '/member/marketing',
  //   component: Marketing,
  //   name: 'marketing',
  //   meta: {
  //     title: '????????????',
  //     foot: true
  //   }
  // },
  // {
  //   path: '/member/messageSettings',
  //   component: MessageSettings,
  //   name: 'messageSettings',
  //   meta: {
  //     title: '??????????????????',
  //     foot: true
  //   }
  // },
  // Other
  {
    path: "/search",
    component: Search,
    name: "search",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/searchall",
    component: SearchAll,
    name: "searchAll",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/haifen_register",
    component: haifenRegister,
    name: "haifenRegister",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/registerAgreement",
    component: RegisterAgreement,
    name: "registerAgreement",
    meta: {
      title: "??????",
      foot: true
    }
  },

  {
    path: "/findpwd",
    component: Findpwd,
    name: "findpwd",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/register_guide",
    component: RegisterGuide,
    name: "RegisterGuide",
    meta: {
      title: "??????APP",
      foot: true
    }
  },
  {
    path: "/category",
    component: Category,
    name: "category",
    meta: {
      title: "??????",
      foot: false
    }
  },
  {
    path: "/catelist/:id",
    component: Catelist,
    name: "catelist",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/brand",
    component: Brand,
    name: "brand",
    meta: {
      title: "??????",
      foot: false
    }
  },
  {
    path: "/brandgoods/:id",
    component: BrandGoods,
    name: "brandgoods",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
    meta: {
      title: "?????????",
      foot: false
    }
  },
  {
    path: "/cart/settlement",
    component: Settlement,
    name: "settlement",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/goods/:id",
    component: Goods,
    name: "goods",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/comment/:id",
    component: GoodsComment,
    name: "GoodsComment",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/packageGoods/:id",
    component: PackageGoods,
    name: "packageGoods",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/goods/:id/:tag/:store_id",
    component: GoodsO2O,
    name: "goodsO2O",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ??????????????????
  {
    path: "/goods/:id/:mark",
    component: CupGoods,
    name: "CupGoods",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // {path: '/goodsorder/:tag/:goodsId/:optionsId/:total/:cart_ids', component: GoodsOrder,name: 'goodsorder',meta: {  title: '????????????', foot:true }},
  {
    path: "/orderDiyForm/:id",
    component: GoodsOrderDiyForm,
    name: "GoodsOrderDiyForm",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/goodsorder",
    component: GoodsOrder,
    name: "goodsorder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/goods/goodstabs/:id/:goods",
    component: Goodstabs,
    name: "goodstab",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  // {path:'/addons/yun_shop',redirect:'/'}

  // sign
  {
    path: "/member/sign",
    component: Sign,
    name: "sign",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/signrules",
    component: Signrules,
    name: "signrules",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/signrecord",
    component: Signrecord,
    name: "signrecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ?????????
  {
    path: "/ranking/index",
    component: RankingIndex,
    name: "rankingIndex",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/ranking/list/first/:action/:key",
    component: RankingListFirst,
    name: "rankingListFirst",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/ranking/list/second/:action",
    component: RankingListSecond,
    name: "rankingListSecond",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  // service
  // ???????????? ServiceOrderList
  {
    path: "/service",
    component: Service,
    name: "service",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/serviceOrderList/:status",
    component: ServiceOrderList,
    name: "serviceOrderList",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },

  {
    path: "/phoneRecharge",
    component: PhoneRecharge,
    name: "phoneRecharge",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/mobileBinding",
    component: MobileBinding,
    name: "mobileBinding",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/rechargePay",
    component: RechargePay,
    name: "rechargePay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/orderDetailsPaied",
    component: OrderDetailsPaied,
    name: "orderDetailsPaied",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/orderDetailsNoPay",
    component: OrderDetailsNoPay,
    name: "orderDetailsNoPay",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/rechargeRecord",
    component: RechargeRecord,
    name: "rechargeRecord",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/flowRechargeRecord",
    component: FlowRechargeRecord,
    name: "flowRechargeRecord",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/rechargeDetail/:orderId",
    component: RechargeDetail,
    name: "rechargeDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/flowRechargeDetail/:orderId",
    component: FlowRechargeDetail,
    name: "flowRechargeDetail",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/addCard/:tag",
    component: AddCard,
    name: "addCard",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/cardServer",
    component: CardServer,
    name: "cardServer",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/oilNoPay",
    component: OilNoPay,
    name: "oilNoPay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/oilDetailsPaied",
    component: OilDetailsPaied,
    name: "oilDetailsPaied",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/oilRecharge/:tag",
    component: OilRecharge,
    name: "oilRecharge",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/oilRechargePay/:para",
    component: OilRechargePay,
    name: "oilRechargePay",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // Ticket??????
  {
    path: "/ticket",
    component: Ticket,
    name: "ticket",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/ticket/city",
    component: City,
    name: "city",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/ticketOrder",
    component: TicketOrder,
    name: "ticketOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/searchResults",
    component: SearchResults,
    name: "searchResults",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/flightPrice/:id",
    component: FlightPrice,
    name: "flightPrice",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/newAddPassenger",
    component: NewAddPassenger,
    name: "newAddPassenger",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/modifyContacts",
    component: ModifyContacts,
    name: "modifyContacts",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  {
    path: "/addOrder/:id/:parentId",
    component: AddOrder,
    name: "addOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/refundApplication",
    component: RefundApplication,
    name: "refundApplication",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/ticketOrderDetail",
    component: TicketOrderDetail,
    name: "ticketOrderDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/changeAgreement",
    component: ChangeAgreement,
    name: "changeAgreement",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/ticket_pay/:para",
    component: Ticket_pay,
    name: "ticket_pay",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // game
  {
    path: "/gameSearch",
    component: GameSearch,
    name: "gameSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/gameIsPay",
    component: GameIsPay,
    name: "gameIsPay",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/gameNoPay",
    component: GameNoPay,
    name: "gameNoPay",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/gameFlingRecharge",
    component: GameFlingRecharge,
    name: "gameFlingRecharge",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/gamePasswordRecharge",
    component: GamePasswordRecharge,
    name: "gamePasswordRecharge",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },

  // newService
  {
    path: "/lifeService",
    component: LifeService,
    name: "lifeService",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/lifeService/telephone",
    component: Telephone,
    name: "telephone",
    meta: {
      title: "????????????",
      foot: true,
      notKeepAlive: true
    }
  },
  {
    path: "/lifeService/flow",
    component: Flow,
    name: "flow",
    meta: {
      title: "??????",
      foot: true,
      notKeepAlive: true
    }
  },
  // lifePayment
  {
    path: "/electricity",
    component: Electricity,
    name: "electricity",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/electricityPay/:para",
    component: ElectricityPay,
    name: "electricityPay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/waterFee",
    component: WaterFee,
    name: "waterFee",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/waterFeePay/:para",
    component: WaterFeePay,
    name: "waterFeePay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/fixedTelephone",
    component: FixedTelephone,
    name: "fixedTelephone",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/fixedTelephonePay/:para",
    component: FixedTelephonePay,
    name: "fixedTelephonePay",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/broadband",
    component: Broadband,
    name: "broadband",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/broadbandPay/:para",
    component: BroadbandPay,
    name: "broadbandPay",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/gasCosts",
    component: GasCosts,
    name: "gasCosts",
    meta: {
      title: "?????????",
      foot: true
    }
  },

  {
    path: "/lifePayNoPay",
    component: LifePayNoPay,
    name: "lifePayNoPay",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/lifePayIsPaied",
    component: LifePayIsPaied,
    name: "lifePayIsPaied",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/lifePayIndex",
    component: LifePayIndex,
    name: "lifePayIndex",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/paymentRecord",
    component: PaymentRecord,
    name: "paymentRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/trafficIndex",
    component: TrafficIndex,
    name: "trafficIndex",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trafficConfirmOrder",
    component: TrafficConfirmOrder,
    name: "trafficConfirmOrder",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/trafficCity",
    component: TrafficCity,
    name: "trafficCity",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trafficRecord",
    component: TrafficRecord,
    name: "trafficRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trafficOrderNoPay",
    component: TrafficOrderNoPay,
    name: "trafficOrderNoPay",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/trafficOrderlsPaied",
    component: TrafficOrderlsPaied,
    name: "trafficOrderlsPaied",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // Train ticket ?????????
  {
    path: "/trainTicket",
    component: TrainTicket,
    name: "trainTicket",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/trainTicketOrder",
    component: TrainTicketOrder,
    name: "trainTicketOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trainCity",
    component: TrainCity,
    name: "trainCity",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/trainSearchResults",
    component: TrainSearchResults,
    name: "trainSearchResults",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trainFlightPrice/:id",
    component: TrainFlightPrice,
    name: "trainFlightPrice",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trainAddOrder/:id/:parentId",
    component: TrainAddOrder,
    name: "trainAddOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trainOrderDetail",
    component: TrainOrderDetail,
    name: "trainOrderDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/trainRefundApplication",
    component: TrainRefundApplication,
    name: "trainRefundApplication",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/policy",
    component: Policy,
    name: "policy",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/train_pay/:para",
    component: TrainPay,
    name: "train_pay",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  //???????????????
  {
    path: "/AgentBonus",
    component: AgentBonus,
    name: "AgentBonus",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/CartGood/:id",
    component: CartGood,
    name: "CartGood",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/GroupOrder",
    component: GroupOrder,
    name: "GroupOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/ApplicationProgress/:id",
    component: ApplicationProgress,
    name: "ApplicationProgress",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/AgentCustomer",
    component: AgentCustomer,
    name: "AgentCustomer",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/InstallmentRecord",
    component: InstallmentRecord,
    name: "InstallmentRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // rentCenter
  {
    path: "/rentIndex",
    component: RentIndex,
    name: "rentIndex",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/goodsDetail/:id",
    component: GoodsDetail,
    name: "goodsDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // { path: '/confirmOrder/:goodsId/:optionsId/:total/:rentDate/:rentDay', component: ConfirmOrder, name: 'confirmOrder', meta: { title: '????????????', foot: true } },
  {
    path: "/confirmOrder",
    component: ConfirmOrder,
    name: "confirmOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentOrderPay",
    component: RentOrderPay,
    name: "rentOrderPay",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/rentCenter",
    component: RentCenter,
    name: "rentCenter",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentMyOrder/:status",
    component: RentMyOrder,
    name: "rentMyOrder",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentCharge",
    component: RentCharge,
    name: "rentCharge",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentDeposit",
    component: RentDeposit,
    name: "rentDeposit",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentDepositDetail",
    component: RentDepositDetail,
    name: "rentDepositDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentReturnGoods/:id",
    component: RentReturnGoods,
    name: "rentReturnGoods",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/toBePay/:id",
    component: ToBePay,
    name: "toBePay",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/toBeSend/:id",
    component: ToBeSend,
    name: "toBeSend",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/toBetakeGoods/:id",
    component: ToBetakeGoods,
    name: "toBetakeGoods",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/toBeReturneding/:id",
    component: ToBeReturneding,
    name: "toBeReturneding",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/toBeClose/:id",
    component: ToBeClose,
    name: "toBeClose",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/toBeComplete/:id",
    component: ToBeComplete,
    name: "toBeComplete",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/toBeReturned/:id",
    component: ToBeReturned,
    name: "toBeReturned",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/overdueReturn",
    component: OverdueReturn,
    name: "overdueReturn",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/hasTransferred",
    component: HasTransferred,
    name: "hasTransferred",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/hasBeenReturned",
    component: HasBeenReturned,
    name: "hasBeenReturned",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/transferRecord",
    component: TransferRecord,
    name: "transferRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentGuide",
    component: RentGuide,
    name: "rentGuide",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rentAfterSalas",
    component: RentAfterSalas,
    name: "rentAfterSalas",
    meta: {
      title: "???????????????????????????",
      foot: true
    }
  },
  {
    path: "/returnRecord",
    component: ReturnRecord,
    name: "returnRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/enterprise/index",
    component: EnterpriseIndex,
    name: "enterprise_index",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/enterprise/apply",
    component: EnterpriseApply,
    name: "enterprise_apply",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/enterprise/supplier",
    component: EnterpriseSupplier,
    name: "enterprise_supplier",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/member/enterprise/supplierInfo/:id",
    component: EnterpriseSupplierInfo,
    name: "enterprise_supplier_info",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/member/enterprise/center/apply",
    component: EnterpriseCenterApply,
    name: "enterprose_center_apply",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/enterprise/center/supplier",
    component: EnterpriseCenterSupplier,
    name: "enterprise_center_supplier",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ??????-????????????
  {
    path: "/member/enterprise/store/:type",
    component: EnterpriseStore,
    name: "enterprise_store",
    meta: {
      title: "??????-????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/income/singleReturn",
    component: SingleReturnCenter,
    name: "single_return_center",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/income/singleReturnListInfo/:id",
    component: SingleReturnListInfo,
    name: "single_return_list_info",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????
  {
    path: "/member/income/teamLevelReturn",
    component: TeamLevelReturnCenter,
    name: "teamlevel_return_center",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/income/teamLevelReturnListInfo/:id",
    component: TeamLevelReturnListInfo,
    name: "teamlevel_return_list_info",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/income/consumeReturn",
    component: ConsumeReturnCenter,
    name: "consume_return_center",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/income/consumeReturnListInfo/:id",
    component: ConsumeReturnListInfo,
    name: "consume_return_list_info",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/income/fullReturn",
    component: FullReturnCenter,
    name: "full_return_center",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/income/fullReturnListInfo/:id",
    component: FullReturnListInfo,
    name: "full_return_list_info",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/income/shareholderDividend",
    component: ShareholderDividend,
    name: "shareholder_dividend",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????
  {
    path: "/member/income/ShareholderReward",
    component: ShareholderReward,
    name: "ShareholderReward",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ???????????????
  {
    path: "/member/income/level_return",
    component: LevelReturn,
    name: "level_return",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  {
    path: "/love_trading",
    component: Love_trading,
    name: "love_trading",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/love_trading_sell",
    component: Love_trading_sell,
    name: "love_trading_sell",
    meta: {
      title: "???????????????",
      foot: true
    }
    // },
    // //visit ?????????
    // {
    //   path: '/visit',
    //   component: Visit,
    //   name: 'visit',
    //   meta: {
    //     title: '?????????',
    //     foot: true
    //   }
  },
  {
    path: "/transformLoveV",
    component: Love_trading_sell,
    name: "transformLoveV",
    meta: {
      title: "???????????????",
      foot: true
    }
  },

  // ?????????
  {
    path: "/cashier",
    component: cashier,
    name: "cashier",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/cashier_pay/:store_id",
    component: cashier_pay,
    name: "cashier_pay",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/cashier_qr",
    component: cashier_qr,
    name: "cashier_qr",
    meta: {
      title: "?????????",
      foot: true,
      notKeepAlive: true
    }
  },
  {
    path: "/cashier_withdrawals",
    component: cashier_withdrawals,
    name: "cashier_withdrawals",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/cashier_stat",
    component: cashier_stat,
    name: "cashier_stat",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/show_balances/:pay_sn/:pay_type",
    component: show_balances,
    name: "showBalances",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/distribution_stat",
    component: cashier_stat,
    name: "distribution_stat",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/o2o/home",
    component: o2oHome,
    name: "o2oHome",
    meta: {
      title: "",
      foot: false
    }
  },
  {
    path: "/o2o/store/:store_id",
    component: o2oStore,
    name: "o2oStore",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/store_v2/:store_id",
    component: o2oStore_v2,
    name: "o2oStore_v2",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/location",
    component: o2oLocation,
    name: "o2oLocation",
    meta: {
      title: "",
      foot: false
    }
  },
  {
    path: "/o2o/location/location",
    component: o2oLocation_loc,
    name: "o2oLocation_loc",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/location/city",
    component: o2oCity,
    name: "o2oCity",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/search/:city/:point",
    component: o2oSearch,
    name: "o2oSearch",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/category/:id",
    component: o2oCategory,
    name: "o2oCategory",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/storeApply",
    component: StoreApply,
    name: "storeApply",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/storeWithdrawals",
    component: StoreWithdrawals,
    name: "storeWithdrawals",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/o2o/store_manage",
    component: StoreManage,
    name: "storeManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/o2o/cloud_horn",
    component: cloudHorn,
    name: "cloudHorn",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/o2o/zkz_device",
    component: zkzDevice,
    name: "zkzDevice",
    meta: {
      title: "zkc????????????",
      foot: true
    }
  },
  {
    path: "/o2o/qr_code/:store_id",
    component: qrCode,
    name: "qrCode",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // {
  //   path: "/o2o/privacy",
  //   component: privacy,
  //   name: "privacy",
  //   meta: {
  //     title: "??????",
  //     foot: true
  //   }
  // },
  {
    path: "/store/search/:store_id",
    component: StoreSearch,
    name: "StoreSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/conference/conferenceList",
    component: conferenceList,
    name: "conferenceList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/conference/activity/:id",
    component: activity,
    name: "activity",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/conference/my_activity_info/:id",
    component: MyActivityInfo,
    name: "myActivityInfo",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/conference/sign/:id",
    component: conferenceSign,
    name: "conferenceSign",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/activity/task/list/:id",
    component: ActivityTaskList,
    name: "activityTaskList",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/clockin",
    component: ClockPunch,
    name: "ClockPunch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/clockin/clockinrule",
    component: ClockPunchRule,
    name: "ClockPunchRule",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/clockin/clockinrecord",
    component: ClockPunchRecord,
    name: "ClockPunchRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/myrelationsearch",
    component: MyRelationshipSearch,
    name: "MyRelationshipSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/rechargeCode",
    component: RechargeCode,
    name: "rechargeCode",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/rechargeCodeByQrCode/:qrCode",
    component: RechargeCode,
    name: "rechargeCodeByQrCode",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/o2o/home/homeseller/:store_id",
    component: HomeSeller,
    name: "HomeSeller",
    meta: {
      title: "??????",
      foot: true
    }
  },
  // {
  //   path: '/o2o/home/homeseller/detail/:store_id',
  //   component: HomeSellerDetail,
  //   name: 'HomeSellerDetail',
  //   meta: {
  //     title: '????????????',
  //     foot: true
  //   }
  // },
  {
    path: "/o2o/home/homeseller/address/:store_id",
    component: HomeSellerAddress,
    name: "HomeSellerAddress",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????
  {
    path: "/member/payanother/:order_id",
    component: PayAnother,
    name: "PayAnother",
    meta: {
      title: "??????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/payanotherdetail",
    component: PayAnotherDetail,
    name: "PayAnotherDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????????????????
  {
    path: "/member/address/myinfo",
    component: MyInfo,
    name: "myinfo",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/courseindex",
    component: CourseIndex,
    name: "CourseIndex",
    meta: {
      title: "??????",
      foot: false
    }
  },

  // ????????????
  {
    path: "/member/coursesearch/:goods_type",
    component: CourseSearch,
    name: "CourseSearch",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },

  // ????????????

  {
    path: "/member/coursemanage",
    component: CourseManage,
    name: "CourseManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/coursedetail/:goods_id",
    component: CourseDetail,
    name: "CourseDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????-????????????

  {
    path: "/member/coursereward",
    component: CourseReward,
    name: "CourseReward",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????-????????????

  {
    path: "/member/mycourse",
    component: CourseMy,
    name: "CourseMy",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????-????????????

  {
    path: "/member/coursehistory",
    component: CourseHistory,
    name: "CourseHistory",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????-????????????

  {
    path: "/member/courselevel/:id/:goods",
    component: CourseMemberUpdate,
    name: "CourseMemberUpdate",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????

  {
    path: "/member/extension_apply",
    component: ExtensionApply,
    name: "ExtensionApply",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ??????????????????

  {
    path: "/member/membergradelist",
    component: MemberGradeList,
    name: "MemberGradeList",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/member/rightGood/:level_id",
    component: RightGood,
    name: "RightGood",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/policyManage",
    component: policyManage,
    name: "policyManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/policyAdd",
    component: policyAdd,
    name: "policyAdd",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????

  {
    path: "/member/membergradedetail/:id",
    component: MemberGradeListDetail,
    name: "MemberGradeListDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ?????????

  {
    path: "/member/return/:id",
    component: OrderReturn,
    name: "OrderReturn",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????

  {
    path: "/member/returncheck/:id",
    component: OrderReturnCheck,
    name: "OrderReturnCheck",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ?????????

  {
    path: "/member/returnsure/:id",
    component: OrderReturnSure,
    name: "OrderReturnSure",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????????????????

  {
    path: "/member/returnafterdetail/:id",
    component: OrderReturnAftersalesDetail,
    name: "OrderReturnAftersalesDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????

  {
    path: "/member/refundsmigration",
    component: MemberRefundsMigration,
    name: "MemberRefundsMigration",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????

  {
    path: "/member/goodsbrand/:id",
    component: GoodsBrand,
    name: "GoodsBrand",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ?????????????????????

  {
    path: "/member/cuptransfer/:mark",
    component: CupboardTransfer,
    name: "CupboardTransfer",
    meta: {
      title: "?????????",
      foot: true
    }
  },

  // ???????????????????????????

  {
    path: "/member/cupoperator/:id/:name/:mark",
    component: CupboardOperator,
    name: "CupboardOperator",
    meta: {
      title: "?????????",
      foot: true
    }
  },

  // ???????????????????????????--??????

  {
    path: "/member/cupdelivery/:id/:name/:mark",
    component: CupboardDelivery,
    name: "CupboardDelivery",
    meta: {
      title: "??????",
      foot: true
    }
  },

  // ???????????????????????????--??????

  {
    path: "/member/cupempty/:id/:name/:mark",
    component: CupboardEmpty,
    name: "CupboardEmpty",
    meta: {
      title: "??????",
      foot: true
    }
  },

  // ??????????????????

  {
    path: "/zone_search",
    component: ZoneChoose,
    name: "ZoneChoose",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????

  {
    path: "/article_list",
    component: ArticleList,
    name: "ArticleList",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ????????????
  {
    path: "/member/accoutinfo",
    component: AccoutInfo,
    name: "AccoutInfo",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // SupplierCenter ?????????????????????

  {
    path: "/supplier_center/:uid",
    component: SupplierCenter,
    name: "SupplierCenter",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/commodity_management/:store_id/:store",
    component: CommodityManagement,
    name: "CommodityManagement",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/commodity_editor/:store_id/:goods_id/:store",
    component: CommodityEditor,
    name: "CommodityEditor",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/commodity_release/:store_id/:goods_id?/:store",
    component: CommodityRelease,
    name: "CommodityRelease",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/commodity_coupon",
    component: CommodityCoupon,
    name: "CommodityCoupon",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/commodityCoupon_edit",
    component: CommodityCouponEdit,
    name: "CommodityCouponEdit",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/CommodityCoupon_give",
    component: CommodityCouponGive,
    name: "CommodityCouponGive",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ????????????
  {
    path: "/goods_classify/:store_id",
    component: GoodsClassify,
    name: "GoodsClassify",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/add_classify/:store_id/:classify_id/:level",
    component: AddClassify,
    name: "AddClassify",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/first_edit/:store_id/:classify_id/:level",
    component: FirstEdit,
    name: "FirstEdit",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ?????????--????????????

  {
    path: "/supplier_info_manage/:member_id",
    component: SupInfoManage,
    name: "SupInfoManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????
  {
    path: "/transfer_account/:id",
    component: TransferAccount,
    name: "TransferAccount",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ??????????????????
  {
    path: "/reward_record",
    component: QueueRecord,
    name: "QueueRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ?????????
  {
    path: "/frozen_coin",
    component: FrozenCoin,
    name: "FrozenCoin",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/recharge_coin",
    component: RechargeCoin,
    name: "RechargeCoin",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/look_details_coin",
    component: LookDetailsCoin,
    name: "LookDetailsCoin",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/put_forward_coin",
    component: PutForwardCoin,
    name: "PutForwardCoin",
    meta: {
      title: "??????",
      foot: true
    }
  },

  // ??????????????????

  {
    path: "/login_validate",
    component: LoginValidate,
    name: "LoginValidate",
    meta: {
      title: "??????",
      foot: true
    }
  },

  // ?????????
  {
    path: "/member/courier/courier",
    component: Courier,
    name: "courier",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/member/courier/courier_record",
    component: Courierrecord,
    name: "courierrecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/courier/courier_detail",
    component: Courierdetail,
    name: "courierdetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  // ?????????
  {
    path: "/voiceList",
    component: VoiceList,
    name: "VoiceList",
    meta: { title: " ", foot: true }
  },
  {
    path: "/voiceDetail/:article_id",
    component: VoiceDetail,
    name: "VoiceDetail",
    meta: { title: " ", foot: true }
  },

  // ???????????????

  {
    path: "/replenish_apply",
    component: ReplenishmentApply,
    name: "ReplenishmentApply",
    meta: { title: "?????????", foot: true }
  },
  // ???????????????
  //???????????????
  {
    path: "/delivery_apply",
    component: DeliveryTerminalApply,
    name: "DeliveryTerminalApply",
    meta: { title: "?????????", foot: true }
  },
  //?????????
  {
    path: "/delivery_station",
    component: DeliveryTerminalApply,
    name: "deliveryStation",
    meta: { title: "?????????", foot: true }
  },

  // ????????????
  {
    path: "/my_distribution",
    component: MyDistribution,
    name: "MyDistribution",
    meta: { title: "????????????", foot: true }
  },

  // ?????????
  {
    path: "/distribution_order",
    component: DistributionOrderList,
    name: "DistributionOrderList",
    meta: { title: "?????????", foot: true }
  },

  // ??????????????????
  {
    path: "/distribution_orderdetail",
    component: DistributionOrderDetail,
    name: "DistributionOrderDetail",
    meta: { title: "????????????", foot: true }
  },

  // ?????????
  {
    path: "/replenish_order",
    component: ReplenishOrderlist,
    name: "ReplenishOrderlist",
    meta: { title: "?????????", foot: true }
  },

  // ???????????????--??????
  {
    path: "/replenish_orderdetail",
    component: ReplenishOrderDetail,
    name: "ReplenishOrderDetail",
    meta: { title: "????????????", foot: true }
  },

  // ????????????
  {
    path: "/replenish_rebate",
    component: ReplenishRebate,
    name: "ReplenishRebate",
    meta: { title: "????????????", foot: true }
  },

  // ????????????

  {
    path: "/robbing_center",
    component: RobbingCenter,
    name: "RobbingCenter",
    meta: { title: "????????????", foot: true }
  },

  // ????????????

  {
    path: "/delivery_order",
    component: DeliveryOrderList,
    name: "distributorOrderList",
    meta: { title: "????????????", foot: true }
  },

  // ????????????

  {
    path: "/my_replenishment",
    component: MyReplenishment,
    name: "MyReplenishment",
    meta: { title: "????????????", foot: true }
  },

  // ?????????

  {
    path: "/replenish_delivery_order",
    component: ReplenishOrder,
    name: "ReplenishOrder",
    meta: { title: "?????????", foot: true }
  },

  // ???????????? --delivery

  {
    path: "/delivery_order_detail",
    component: DeliveryOrderDetail,
    name: "DeliveryOrderDetail",
    meta: { title: "????????????", foot: true }
  },

  // ??????

  {
    path: "/send",
    component: Send,
    name: "Send",
    meta: { title: "??????", foot: true }
  },

  // ????????????

  {
    path: "/delivery_evaluate",
    component: DeliveryEvaluate,
    name: "DeliveryEvaluate",
    meta: { title: "??????", foot: true }
  },

  // ?????????????????????

  {
    path: "/supplier_shop/:id",
    component: SupplierShop,
    name: "SupplierShop",
    meta: { title: "???????????????", foot: true }
  },

  // ???????????????

  {
    path: "/supplier_goods/:sid",
    component: SupplierSearch,
    name: "SupplierSearch",
    meta: { title: "??????", foot: true }
  },

  // ?????????
  {
    path: "/extension/reward_queue",
    component: RewardQueue,
    name: "RewardQueue",
    meta: { title: "", foot: true }
  },
  {
    path: "/extension/reward_detail",
    component: RewardDetail,
    name: "RewardDetail",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/extension/reward_process",
    component: RewardProcess,
    name: "RewardProcess",
    meta: { title: "", foot: true }
  },

  // mryt
  {
    path: "/extension/mryt",
    component: MRYT,
    name: "MRYT",
    meta: { title: "", foot: true }
  },
  {
    path: "/extension/sale_commission",
    component: SaleCommission,
    name: "SaleCommission",
    meta: { title: "", foot: true }
  },
  {
    path: "/extension/award_record",
    component: AwardRecord,
    name: "AwardRecord",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/extension/award_detail",
    component: AwardDetail,
    name: "AwardDetail",
    meta: { title: "????????????", foot: true }
  },
  // ????????????
  {
    path: "/profit",
    component: Profit,
    name: "profit",
    meta: { title: "", foot: true }
  },

  // ?????????
  {
    path: "/chain_shop_index",
    component: ChainShopIndex,
    name: "ChainShopIndex",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/chain_shop_info/:id",
    component: ChainShopInfo,
    name: "ChainShopInfo",
    meta: { title: "????????????", foot: true }
  },

  // ????????????--????????????
  {
    path: "/meeting_index",
    component: MeetingIndex,
    name: "MeetingIndex",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/meeting_index_detail/:id/:member_id",
    component: MeetingIndexDetail,
    name: "MeetingIndexDetail",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/meeting_extend_list/:id/:member_id",
    component: MeetingExtendList,
    name: "MeetingExtendList",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/meeting_extend_detail/:id",
    component: MeetingExtendDetail,
    name: "MeetingExtendDetail",
    meta: { title: "??????????????????", foot: true }
  },

  // ????????????
  {
    path: "/enter_shop",
    component: EnterShop,
    name: "EnterShop",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/enter_protocol",
    component: EnterProtocol,
    name: "EnterProtocol",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/ApplyMerchant",
    component: ApplyMerchant,
    name: "ApplyMerchant",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/submit_succeed",
    component: SubmitSucceed,
    name: "SubmitSucceed",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/truck_list/:order_id",
    component: TruckList,
    name: "TruckList",
    meta: { title: "????????????", foot: true }
  },

  // ?????????--??????????????? Alipay
  {
    path: "/wft_balance_recharge/:url/:code_url",
    component: WftAlipayDetail,
    name: "wft_balance_recharge_copy",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/wft_balance_recharge/:status/:url",
    component: Alipay,
    name: "wft_balance_recharge",
    meta: { title: "?????????", foot: true }
  },
  // ???????????????
  {
    path: "/love_recharge",
    component: LoveRecharge,
    name: "LoveRecharge",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/love_alipay/:status/:pay_id",
    component: Alipay,
    name: "love_alipay",
    meta: { title: "?????????", foot: true }
  }, // ????????????????????????
  // ????????????
  {
    path: "/extension_goods",
    component: ExtensionGoods,
    name: "ExtensionGoods",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/salesManagement",
    component: salesManagement,
    name: "salesManagement",
    meta: { title: "??????????????????", foot: true }
  },
  // 398??????????????????
  {
    path: "/team_data_count/:type/:level",
    component: TeamDataCount,
    name: "TeamDataCount",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/new_team_data_count/:team/:direct",
    component: newTeamDataCount,
    name: "newTeamDataCount",
    meta: { title: "??????????????????", foot: true }
  },
  // ???????????? AggregateEntRegEdit
  {
    path: "/aggregate_ind_reg",
    component: AggregateIndReg,
    name: "AggregateIndReg",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/aggregate_ind_reg_edit",
    component: AggregateIndRegEdit,
    name: "AggregateIndRegEdit",
    meta: { title: "????????????????????????", foot: true }
  },
  {
    path: "/aggregate_me_reg",
    component: AggregateMeReg,
    name: "AggregateMeReg",
    meta: { title: "?????????????????????", foot: true }
  },
  {
    path: "/aggregate_me_reg_edit",
    component: AggregateMeRegEdit,
    name: "AggregateMeRegEdit",
    meta: { title: "?????????????????????????????????", foot: true }
  },
  {
    path: "/aggregate_ent_reg",
    component: AggregateEntReg,
    name: "AggregateEntReg",
    meta: { title: "???????????? ", foot: true }
  },
  {
    path: "/aggregate_ent_reg_edit",
    component: AggregateEntRegEdit,
    name: "AggregateEntRegEdit",
    meta: { title: "???????????????????????? ", foot: true }
  },
  {
    path: "/aggregate_bank_card",
    component: AggregateBankCardSet,
    name: "AggregateBankCardSet",
    meta: { title: "????????????????????? ", foot: true }
  },
  {
    path: "/aggregate_audit_part",
    component: AggregateAuditPart,
    name: "AggregateAuditPart",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/company_edit",
    component: CompanyEdit,
    name: "CompanyEdit",
    meta: { title: "???????????? ", foot: true }
  },
  {
    path: "/individual_edit",
    component: IndividualEdit,
    name: "IndividualEdit",
    meta: { title: "?????????????????????", foot: true }
  },
  {
    path: "/show_apply",
    component: ShowApply,
    name: "ShowApply",
    meta: { title: "????????????", foot: true }
  },
  // ????????????
  {
    path: "/input_visit",
    component: InputVisit,
    name: "InputVisit",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/inviter",
    component: Inviter,
    name: "Inviter",
    meta: { title: "?????????", foot: true }
  },

  // ????????????-?????????
  {
    path: "/member/Integral_love",
    component: Integral_love,
    name: "Integral_love",
    meta: { title: "????????????-?????????", foot: true }
  },
  {
    path: "/member/Integral_invest",
    component: Integral_invest,
    name: "Integral_invest",
    meta: { title: "", foot: true }
  },
  {
    path: "/member/Integral_love_detail",
    component: Integral_love_detail,
    name: "Integral_love_detail",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/member/Integral_love_transfer",
    component: Integral_love_transfer,
    name: "Integral_love_transfer",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/member/Integral_love_cash",
    component: Integral_love_cash,
    name: "Integral_love_cash",
    meta: { title: "??????", foot: true }
  },

  // 398?????????
  {
    path: "/o2o/card_index",
    component: CardIndex,
    name: "CardIndex",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/o2o/card_open_member",
    component: CardOpenMembership,
    name: "CardOpenMembership",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/o2o/choose_member_time/:goods_id/:level_id",
    component: CardChooseMembership,
    name: "CardChooseMembership",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/o2o/card_right",
    component: CardRight,
    name: "CardRight",
    meta: { title: "?????????", foot: true }
  },
  {
    path:"/o2o/new_card",
    component:NewCard,
    name:"NewCard",
    meta:{title:"????????????",foot:true}
  },
  {
    path:"/o2o/newcard_list",
    component:NewCardList,
    name:"NewCardList",
    meta:{title:"????????????",foot:true}
  },

  // ???????????????
  {
    path: "/o2o/cupcon/:id",
    component: StoreCoupon,
    name: "StoreCoupon",
    meta: { title: "???????????????", foot: true }
  },

  // ???????????????
  {
    path: "/hotel/cupcon/:id",
    component: hotelCoupon,
    name: "hotelCoupon",
    meta: { title: "???????????????", foot: true }
  },

  // ????????????
  {
    path: "/invoice/:order_id",
    component: Invoice,
    name: "Invoice",
    meta: { title: "????????????", foot: true }
  },
  // ???????????????
  {
    path: "/member/supplier_withdrawals/:supplier/:member_id",
    component: Balance_withdrawals,
    name: "supplier_withdrawals",
    meta: { title: "??????", foot: true }
  },
  //?????????????????????
  {
    path: "/hotel_supply/search",
    component: HotelSupplySearch,
    name: "HotelSupplySearch",
    meta: { title: "????????????", foot: true }
  },
  //??????????????????
  {
    path: "/hotel_supply/HotelSupplyIndex",
    component: HotelSupplyIndex,
    name: "HotelSupplyIndex",
    meta: { title: "??????", foot: true }
  },
  //????????????????????????
  {
    path: "/hotel_supply/home_page/:id",
    component: HotelSupplyHome,
    name: "HotelSupplyHome",
    meta: { title: "????????????", foot: true }
  },
  //????????????????????????
  {
    path: "/hotel_supply/hotelSupplyGoods/:hotel_id/:id",
    component: hotelSupplyGoods,
    name: "hotelSupplyGoods",
    meta: { title: "??????????????????", foot: true }
  },
  //???????????????????????????
  {
    path: "/hotel_supply/HotelSupplyGoodsOrder/:hotel_id/:sid/:date_price/:start/:end",
    component: HotelSupplyGoodsOrder,
    name: "HotelSupplyGoodsOrder",
    meta: { title: "??????", foot: true }
  },
  //???????????????????????????
  {
    path: "/hotel_supply/hotel_order/:id",
    component: hotelOrder,
    name: "hotelOrder",
    meta: { title: "????????????", foot: true }
  },
  // ????????????
  {
    path: "/hotel/index",
    component: HotelIndex,
    name: "HotelIndex",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/hotel/search",
    component: HotelSearch,
    name: "HotelSearch",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/hotel/home_page/:id",
    component: HotelHome,
    name: "HotelHome",
    meta: { title: "", foot: true }
  },
  {
    path: "/hotel/choose_room/:id",
    component: HotelChooseRoom,
    name: "HotelChooseRoom",
    meta: { title: "????????????", foot: true }
  },
  // { path: '/hotel/goods',component: HotelGood,name: 'HotelGood',meta: {title: '????????????',foot: true}},
  {
    path: "/hotel/goods_order",
    component: HotelGoodsOrder,
    name: "HotelGoodsOrder",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/hotel/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "HotelOrderDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/hotel/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "netCarDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/deliveryStation/deliveryDetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "deliveryStationOrderDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/deliveryStation/DeliveryReplenishDetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "DeliveryReplenishDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/serviceStation/serviceReplenishDetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "serviceReplenishDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/groups/groupDetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "groupDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/hotel/manage",
    component: HotelManage,
    name: "HotelManage",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/hotel/apply",
    component: StoreApply,
    name: "hotelApply",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/hotel/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "HotelCenterOrderDetail",
    meta: { title: "??????", foot: true }
  },
  // ??????????????????
  {
    path: "/lease_toy/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "LeaseToyOrderDetail",
    meta: { title: "??????", foot: true }
  },
  //??????
  {
    path: "/auctioneer/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "auctioneerOrderDetail",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/auction/orderdetail/:order_id/:orderType",
    component: Goodsinfo,
    name: "auctionOrderDetail",
    meta: { title: "??????", foot: true }
  },
  // { path: '/hotel/location/:tag',component: o2oLocation_loc,name: 'hotel_location',meta: {title: '',foot: true}},
  // { path: '/hotel/city/:tag',component: o2oCity,name: 'hotelCity',meta: {title: '',foot: true}},
  // { path: '/hotel/location/:tag',component: o2oLocation,name: 'hotelLocation',meta: {title: '',foot: false}},

  // ???????????????
  {
    path: "/hotel/cashier_pay/:hotel_id",
    component: cashier_pay,
    name: "HotelCashierPay",
    meta: { title: "?????????", foot: true }
  },

  {
    path: "/hotel/cashier",
    component: HotelManage,
    name: "HotelCashier",
    meta: { title: "?????????", foot: true }
  },

  // ?????????
  {
    path: "/extension/performance",
    component: Performance,
    name: "Performance",
    meta: { title: "?????????", foot: true }
  },

  // ???????????????
  {
    path: "/extension/partnership_team",
    component: PartnershipTeam,
    name: "PartnershipTeam",
    meta: { title: " ", foot: true }
  },
  {
    path: "/extension/management_record",
    component: ManagementRecord,
    name: "ManagementRecord",
    meta: { title: " ", foot: true }
  },
  {
    path: "/extension/task_list",
    component: TaskList,
    name: "TaskList",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/extension/rewards_record",
    component: RewardsRecord,
    name: "RewardsRecord",
    meta: { title: " ", foot: true }
  },
  {
    path: "/extension/rewards_record_detail",
    component: RewardsRecordDetail,
    name: "RewardsRecordDetail",
    meta: { title: " ", foot: true }
  },
  {
    path: "/extension/task_center",
    component: TaskCenter,
    name: "TaskCenter",
    meta: { title: "????????????", foot: true }
  },
  // ???????????????
  {
    path: "/extension/team_manage_reward",
    component: TeamManageReward,
    name: "team_manage_reward",
    meta: { title: "???????????????", foot: true }
  },
  // ????????????
  {
    path: "/member_bonus",
    component: MemberBonusIndex,
    name: "MemberBonusIndex",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/member_bonus/record",
    component: MemberBonusRecord,
    name: "MemberBonusRecord",
    meta: { title: "????????????", foot: true }
  },

  // ??????
  {
    path: "/entry_orders/coupon_exchange",
    component: EntryExchange,
    name: "EntryExchange",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/entry_orders/entry_record",
    component: CouponExrecord,
    name: "CouponExrecord",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/entry_orders/entry_volume",
    component: EntryVolume,
    name: "EntryVolume",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/entry_orders/money_detail",
    component: MoneyDetail,
    name: "MoneyDetail",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/entry_orders/my_volume",
    component: MyVolume,
    name: "MyVolume",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/entry_orders/volume_detail",
    component: VolumeDetail,
    name: "VolumeDetail",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/entry_orders/wholesale_volume",
    component: WholesaleVolume,
    name: "WholesaleVolume",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/entry_orders/home",
    component: paddingOrder_Home,
    name: "paddingOrder_Home",
    meta: { title: "???????????????", foot: true }
  },

  // ?????????
  {
    path: "/online_car/:id?",
    component: CarIndex,
    name: "online_car",
    meta: { title: "?????????", foot: true }
  },
  {
    path: "/car_sign/:id",
    component: CarSign,
    name: "CarSign",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/city_manager",
    component: cityManager,
    name: "cityManager",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/team_member",
    component: teamMember,
    name: "teamMember",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/car_bonus/:id",
    component: CarBonus,
    name: "CarBonus",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/driver_apply",
    component: DriverApply,
    name: "DriverApply",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/driver_data",
    component: DriverData,
    name: "DriverData",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/extension/dividend",
    component: globalDividend,
    name: "globalDividend",
    meta: { title: " ", foot: true }
  },

  {
    path: "/others/material_center",
    component: materialCenter,
    name: "materialCenter",
    meta: { title: "????????????", foot: false }
  },
  {
    path: "/member/redEnvelope/:aid",
    component: redEnvelope,
    name: "redEnvelope",
    meta: { title: "????????????", foot: false }
  },
  {
    path: "/member/redEnvelopeRecord/:tag/:aid",
    component: redEnvelopeRecord,
    name: "redEnvelopeRecord",
    meta: { title: "????????????", foot: true }
  },
  //?????????
  {
    path: "/others/address_manage",
    component: addressManage,
    name: "addressManage",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/others/address_add",
    component: addressAdd,
    name: "addressAdd",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/others/revise_address/:id",
    component: reviseAddress,
    name: "reviseAddress",
    meta: { title: "??????????????????", foot: true }
  },
  {
    path: "/others/hand_withdraw",
    component: handWithdraw,
    name: "handWithdraw",
    meta: { title: "????????????", foot: true }
  },

  // ??????????????? cashier_qr
  {
    path: "/extension/dealer_award",
    component: DealerAward,
    name: "DealerAward",
    meta: { title: "???????????????", foot: true }
  },

  {
    path: "/extension/dealer_detail",
    component: DriverDetail,
    name: "DriverDetail",
    meta: { title: "????????????", foot: true }
  },

  //??????????????? cashier_qr
  {
    path: "/cashier_qr/:hotel_id/:tag",
    component: cashier_qr,
    name: "hotel_cashier_qr",
    meta: {
      title: "?????????",
      foot: true,
      notKeepAlive: true
    }
  },
  // ???????????? cashier_stat
  {
    path: "/cashier_stat/:hotel_id/:tag",
    component: cashier_stat,
    name: "hotel_cashier_stat",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/orderdetail/:order_id",
    component: Goodsinfo,
    name: "HotelCashierOrderDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  //????????????
  {
    path: "/DeclarationApply",
    component: Declaration,
    name: "DeclarationApply",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/declaration/recordDeclaration/:id",
    component: RecordDeclaration,
    name: "RecordDeclaration",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  //?????????
  {
    path: "/member/serviceStation",
    component: ServiceStation,
    name: "serviceStation",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  //????????????
  {
    path: "/commissionList/:orderType",
    component: CommissionList,
    name: "CommissionList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/member/distribution_orders",
    component: DistributionOrders,
    name: "DistributionOrders",
    meta: {
      title: "",
      foot: true
    }
  },
  //?????????
  {
    path: "/microHome",
    component: MicroHome,
    name: "MicroHome",
    redirect: "/microHome/microIndex",
    meta: {
      title: "?????????????????????",
      foot: false
    },
    children: [
      // {
      //   path: "/",
      //   redirect: { name: "MicroIndex" }
      // },
      {
        path: "microIndex",
        component: MicroIndex,
        name: "MicroIndex",
        meta: {
          title: "??????",
          foot: true
        }
      },
      {
        path: "microhomepage",
        component: microhomepage,
        name: "microhomepage",
        meta: {
          title: "????????????",
          foot: true
        }
      },
      {
        path: "microAttention",
        component: microAttention,
        name: "microAttention",
        meta: {
          title: "??????",
          foot: true
        }
      }
    ]
  },
  {
    path: "/microFanlist",
    component: microFanlist,
    name: "microFanlist",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // {
  //   path: "/microIndex",
  //   component: MicroIndex,
  //   name: "microIndex",
  //   meta: {
  //     title: "???????????????",
  //     foot: true
  //   }
  // },
  {
    path: "/microRelease",
    component: MicroRelease,
    name: "microRelease",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/microsearchindex",
    component: Microsearchindex,
    name: "microSearchIndex",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/microclassification",
    component: Microclassification,
    name: "microClassification",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/microcommentdetails/:stickId",
    component: Microcommentdetails,
    name: "microCommentDetails",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/microhomepage",
    component: microhomepage,
    name: "microhomepage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/microEdit",
    component: MicroEdit,
    name: "microEdit",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  //??????
  {
    path: "/group_detail/:id",
    component: GroupDetail,
    name: "GroupDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/group_list",
    component: GroupList,
    name: "GroupList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/groups/:id",
    component: GroupGoods,
    name: "GroupGoods",
    meta: {
      title: "??????????????????", //?????????????????????
      foot: true
    }
  },
  {
    path: "/mygroups",
    component: MyGroups,
    name: "MyGroups",
    meta: {
      title: "????????????", //????????????
      foot: true
    }
  },

  //????????????????????????goods/???id
  {
    path: "/voice_good/:id",
    component: VoiceGood,
    name: "VoiceGood",
    meta: { title: "??????", foot: true }
  },
  {
    path: "/my_voices",
    component: MyVoices,
    name: "MyVoices",
    meta: { title: "????????????", foot: true }
  },

  {
    path: "/lottery",
    component: Lottery,
    name: "Lottery",
    meta: { title: "???????????????", foot: true }
  },
  {
    path: "/Lottery_record",
    component: LotteryRecord,
    name: "LotteryRecord",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/extension/custom_queue",
    component: CustomQueue,
    name: "CustomQueue",
    meta: {
      title: "",
      foot: true
    }
  },

  //????????? ??? ????????????
  {
    path: "/WantReplenishment",
    component: WantReplenishment,
    name: "WantReplenishment",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/videoAgreement",
    component: videoAgreement,
    name: "videoAgreement",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/myVideo",
    component: myVideo,
    name: "myVideo",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/videoList",
    component: VideoList,
    name: "VideoList",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/videoDetail",
    component: VideoDetail,
    name: "VideoDetail",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/releaseVideo",
    component: releaseVideo,
    name: "releaseVideo",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/addVideoGood",
    component: addVideoGood,
    name: "addVideoGood",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/VideoReward",
    component: VideoReward,
    name: "VideoReward",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/TeamPerformanceAward",
    component: TeamPerformanceAward,
    name: "TeamPerformanceAward",
    meta: {
      title: "",
      foot: true
    }
  },
  //???????????????
  {
    path: "/EquityBonus",
    component: EquityBonus,
    name: "EquityBonus",
    meta: { title: "", foot: true }
  },
  // ?????????????????????
  {
    path: "/others/survey",
    component: survey,
    name: "survey",
    meta: { title: "?????????", foot: true }
  },
  // ??????????????????
  {
    path: "/member/income/distributionHome",
    component: DistributionHome,
    name: "DistributionHome",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  // ????????????
  {
    path: "/member/income/distributionDetail",
    component: DistributionDetail,
    name: "DistributionDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  //?????????
  {
    path: "/myWallet",
    component: myWallet,
    name: "myWallet",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/changePwd",
    component: changePwd,
    name: "changePwd",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/companyLogon",
    component: companyLogon,
    name: "companyLogon",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/personLogon",
    component: personLogon,
    name: "personLogon",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/walletDetail",
    component: walletDetail,
    name: "walletDetail",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/dragonWithdraw",
    component: dragonWithdraw,
    name: "dragonWithdraw",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/chooseStatus",
    component: chooseStatus,
    name: "chooseStatus",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/personModify",
    component: personModify,
    name: "personModify",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/companyModify",
    component: companyModify,
    name: "companyModify",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/checking",
    component: checking,
    name: "checking",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/dragonDeposit",
    component: dragonDeposit,
    name: "dragonDeposit",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/myBank",
    component: myBank,
    name: "myBank",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/failApply",
    component: failApply,
    name: "failApply",
    meta: {
      title: "????????????-????????????",
      foot: true
    }
  },
  {
    path: "/infoChange",
    component: infoChange,
    name: "infoChange",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  // ?????? ?????????
  {
    path: "/member/manageAward",
    component: ManageAward,
    name: "ManageAward",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  // ?????? ???????????????
  {
    path: "/member/shareAward_sort",
    component: ShareAward,
    name: "shareAward_sort",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ?????? ???????????????
  {
    path: "/member/shareAward_directly",
    component: ShareAward,
    name: "shareAward_directly",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ???????????????
  {
    path: "/member/selfCarryApply",
    component: SelfCarryApply,
    name: "SelfCarryApply",
    meta: {
      title: "??????",
      foot: true
    }
  },
  // ???????????????
  {
    path: "/selfCarry_info",
    component: SelfCarry_info,
    name: "SelfCarry_info",
    meta: {
      title: "",
      foot: true
    }
  },
  // ???????????????
  {
    path: "/member/selfCarry_reward",
    component: selfCarry_reward,
    name: "selfCarry_reward",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/member/hireCarManage",
    component: HireCarManage,
    name: "hireCarManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/serviceStaff",
    component: ServiceStaff,
    name: "serviceStaff",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/staffOrderDetail/:order_id",
    component: StaffOrderDetail,
    name: "staffOrderDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/dividend",
    component: Dividend,
    name: "Dividend",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/dividendDetail/:id",
    component: dividendDetail,
    name: "dividendDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ?????????
  {
    path: "/member/peersAward",
    component: PeersAward,
    name: "peersAward",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path:'/picture_album',
    component: pictureAlbum,
    name: "pictureAlbum",
    meta:{
      title:"??????",
      foot:true
    }
  },
  // ????????????
  {
    path: "/member/admarketHome",
    component: admarketHome,
    name: "admarketHome",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/myDevice",
    component: MyDevice,
    name: "MyDevice",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????
  {
    path: "/member/DeviceManger",
    component: DeviceManger,
    name: "DeviceManger",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-???????????????
  {
    path: "/member/adApply",
    component: ADApply,
    name: "ADApply",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ????????????-????????????=>????????????
  {
    path: "/member/deviceDetail/:sn",
    component: DeviceDetail,
    name: "DeviceDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  // ????????????-????????????=>????????????=>????????????
  {
    path: "/member/managerCommission",
    component: managerCommission,
    name: "managerCommission",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/advertiser",
    component: advertiser,
    name: "advertiser",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/addAdvertising",
    component: addAdvertising,
    name: "addAdvertising",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/editAdvertising/:id",
    component: addAdvertising,
    name: "editAdvertising",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/advertisingFee",
    component: advertisingFee,
    name: "advertisingFee",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/placedAdvertising",
    component: placedAdvertising,
    name: "placedAdvertising",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  // ?????????
  {
    path: "/others/revenus_bonus",
    component: revenus_bonus,
    name: "revenus_bonus",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  // ???mryt
  {
    path: "/new_mryt",
    component: newMRYT,
    name: "newMRYT",
    meta: { title: "", foot: true }
  },
  {
    path: "/new_sale_commission",
    component: newSaleCommission,
    name: "newSaleCommission",
    meta: { title: "", foot: true }
  },
  {
    path: "/new_award_record",
    component: newAwardRecord,
    name: "newAwardRecord",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/new_award_detail",
    component: newAwardDetail,
    name: "newAwardDetail",
    meta: { title: "????????????", foot: true }
  },
  // ??????????????????
  {
    path: "/signIndex",
    component: signIndex,
    name: "signIndex",
    meta: { title: "????????????", foot: false }
  },
  {
    path: "/signGuide/:show",
    component: signGuide,
    name: "signGuide",
    meta: { title: "", foot: true }
  },
  {
    path: "/personBank",
    component: personBank,
    name: "personBank",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/identifyResult/:show",
    component: identifyResult,
    name: "identifyResult",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/signCompany",
    component: signCompany,
    name: "signCompany",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/contractBills",
    component: contractBills,
    name: "contractBills",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/staffManagement",
    component: staffManagement,
    name: "staffManagement",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/addStaff",
    component: addStaff,
    name: "addStaff",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/contractList",
    component: contractList,
    name: "contractList",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/signMission/:id",
    component: signMission,
    name: "signMission",
    meta: { title: "????????????", foot: true }
  },
  {
    path: "/signPage/:id",
    component: signPage,
    name: "signPage",
    meta: { title: "?????????", foot: true }
  },
  // ?????????
  {
    path: "/others/bonus",
    component: Bonus,
    name: "Bonus",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/appointment/index",
    component: Appointment,
    name: "Appointment",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/show_appointment/:worker_id",
    component: showAppointment,
    name: "showAppointment",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/appointment_search",
    component: AppointmentSearch,
    name: "AppointmentSearch",
    meta: {
      title: "????????????/??????",
      foot: true
    }
  },
  {
    path: "/project_details/:project_id",
    component: ProjectDetails,
    name: "ProjectDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/project_list",
    component: ProjectList,
    name: "ProjectList",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/technician_details/:worker_id",
    component: TechnicianDetails,
    name: "TechnicianDetails",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/technician_time/:worker_id",
    component: TechnicianTime,
    name: "TechnicianTime",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/hot_technician",
    component: HotTechnician,
    name: "HotTechnician",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/appointment_mine",
    component: AppointmentMine,
    name: "AppointmentMine",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/technician_work",
    component: TechnicianWork,
    name: "TechnicianWork",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/appointment_project",
    component: AppointmentProject,
    name: "AppointmentProject",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/add_technician/:store_id",
    component: AddTechnician,
    name: "AddTechnician",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/stores_technician",
    component: StoresTechnician,
    name: "StoresTechnician",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/client_appointment",
    component: ClientAppointment,
    name: "ClientAppointment",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/client_evaluate/:service_id",
    component: ClientEvaluate,
    name: "ClientEvaluate",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/client_verification/:service_id",
    component: ClientVerification,
    name: "ClientVerification",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/make_appointment/:id",
    component: MakeAppointment,
    name: "MakeAppointment",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/client_project",
    component: ClientProject,
    name: "ClientProject",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    // path: "/others/advertisingPage",
    path: "/share_page_detail",
    component: advertisingPage,
    name: "advertisingPage"
    // meta: {
    //   title: "?????????",
    //   foot: true
    // }
  },
  

  // ????????????
  {
    path: "/distribution/index",
    component: DistributionIndex,
    name: "DistributionIndex",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/distribution/search",
    component: DistributionSearch,
    name: "DistributionSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/distribution/statistics",
    component: DistributionStatistics,
    name: "DistributionStatistics",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/distribution/detail/:id",
    component: DistributionActivityDetail,
    name: "DistributionActivityDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/distribution/commission_detail/:tag",
    component: DistributionCommissionDetail,
    name: "DistributionCommissionDetail",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/distribution/participant/:id",
    component: DistributionParticipant,
    name: "DistributionParticipant",
    meta: {
      title: "?????????",
      foot: true
    }
  },

  {
    path: "/auctioneer",
    component: auctioneer,
    name: "auctioneer",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/introduceNear/:store_id",
    component: introduceNear,
    name: "introduceNear",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/auctionCollect",
    component: auctionCollect,
    name: "auctionCollect",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/nearSearch/:store_id",
    component: nearSearch,
    name: "nearSearch",
    meta: {
      title: "????????????????????????",
      foot: true
    }
  },
  {
    path: "/myAuction/:id",
    component: myAuction,
    name: "myAuction",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/myIndex",
    component: myIndex,
    name: "myIndex",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/myMoney",
    component: myMoney,
    name: "myMoney",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/passwordChange",
    component: passwordChange,
    name: "passwordChange",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/setPassword",
    component: setPassword,
    name: "setPassword",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/shopShare",
    component: shopShare,
    name: "shopShare",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/goodManage",
    component: goodManage,
    name: "goodManage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/addNear/:id",
    component: addNear,
    name: "addNear",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/publishFirst",
    component: publishFirst,
    name: "publishFirst",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/publishSecond",
    component: publishSecond,
    name: "publishSecond",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctionIndex",
    component: auctionIndex,
    name: "auctionIndex",
    meta: {
      title: "??????",
      foot: true
    }
  },
  {
    path: "/auctionMore",
    component: auctionMore,
    name: "auctionMore",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctionVip",
    component: auctionVip,
    name: "auctionVip",
    meta: {
      title: "?????????",
      foot: true
    }
  },
  {
    path: "/auctionSearch",
    component: auctionSearch,
    name: "auctionSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctionApply",
    component: auctionApply,
    name: "auctionApply",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctionRecord/:goods_id",
    component: auctionRecord,
    name: "auctionRecord",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctionGood/:id/:goods_id",
    component: auctionGood,
    name: "auctionGood",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/auctioneerShop/:id",
    component: auctioneerShop,
    name: "auctioneerShop",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/auctioneerShopSearch/:id",
    component: auctioneerShopSearch,
    name: "auctioneerShopSearch",
    meta: {
      title: "????????????",
      foot: true
    }
  }, 
  {
    path: "/auctionLove",
    component: auctionLove,
    name: "auctionLove",
    meta: {
      title: "?????????",
      foot: true
    }
  }, 
  {
    path: "/auctionLoveDetail",
    component: auctionLoveDetail,
    name: "auctionLoveDetail",
    meta: {
      title: "???????????????",
      foot: true
    }
  }, 
  {
    path: "/auctionLoveCash",
    component: auctionLoveCash,
    name: "auctionLoveCash",
    meta: {
      title: "???????????????",
      foot: true
    }
  }, 
  {
    path: "/auctionRecharge",
    component: auctionRecharge,
    name: "auctionRecharge",
    meta: {
      title: "???????????????",
      foot: true
    }
  }, 
  {
    path: "/auctiongoodsorder",
    component: auctiongoodsorder,
    name: "auctiongoodsorder",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/qrCoupon",
    component: qrCoupon,
    name: "qrCoupon",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  
  // ??????-????????????
  // 
  {
    path: "/supply_demand/index",
    component: supply_demand_index,
    name: "supply_demand_index",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/supply/detail/:id",
    component: supply_detail,
    name: "supply_detail",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/demand/detail/:id",
    component: demand_detail,
    name: "demand_detail",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/publish/index",
    component: publish_index,
    name: "publish_index",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/publish/manage",
    component: publish_manage,
    name: "publish_manage",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/publish/manage/supply",
    component: manage_supply,
    name: "manage_supply",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/publish/manage/demand",
    component: manage_demand,
    name: "manage_demand",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/financial/index",
    component: financial_index,
    name: "financial_index",
    meta: {
      title: "????????????",
      foot: true
    }
  },
  {
    path: "/financial/apply",
    component: financial_apply,
    name: "financial_apply",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/publish/demand",
    component: publish_demand,
    name: "publish_demand",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/edit/demand/:id",
    component: edit_demand,
    name: "edit_demand",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/publish/supply",
    component: publish_supply,
    name: "publish_supply",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/edit/supply/:id",
    component: edit_supply,
    name: "edit_supply",
    meta: {
      title: "??????????????????",
      foot: true
    }
  },
  {
    path: "/financial/detail/:type",
    component: financial_detail,
    name: "financial_detail",
    meta: {
      title: "????????????",
      foot: true
    }
  },

  {
    path: "/easyRefuel",
    component: easyRefuel,
    name: "easyRefuel",
    meta: {
      title: "??????",
      foot: false
    }
  },
  {
    path: "/easyRefuel/search/:city/:point",
    component: easySearch,
    name: "easySearch",
    meta: {
      title: "",
      foot: true
    }
  },
  {
    path: "/chooseBank/:order_pay_id",
    component: chooseBank,
    name: "chooseBank",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/addBankFirst/:order_pay_id",
    component: addBankFirst,
    name: "addBankFirst",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/addBankSecond/:order_pay_id",
    component: addBankSecond,
    name: "addBankSecond",
    meta: {
      title: "?????????????????????",
      foot: true
    }
  },
  {
    path: "/bindBank/:card_id/:order_pay_id",
    component: bindBank,
    name: "bindBank",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/memberchooseBank",
    component: memberchooseBank,
    name: "memberchooseBank",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/memberaddBankFirst",
    component: memberaddBankFirst,
    name: "memberaddBankFirst",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/memberaddBankSecond",
    component: memberaddBankSecond,
    name: "memberaddBankSecond",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/memberbindBank/:card_id",
    component: memberbindBank,
    name: "memberbindBank",
    meta: {
      title: "???????????????",
      foot: true
    }
  },
  {
    path: "/quickIndex",
    component: quickIndex,
    name: "quickIndex",
    meta: {
      title: "????????????",
      foot: true
    }
  }
]
  .concat(BlockChain)
  .map(route => {
    route.path = rootPath + route.path;
    return route;
  });
// 404 ???
routes.push({
  path: "*",
  component: NotFound,
  name: "notfound",
  meta: {
    title: "404",
    foot: true
  }
});

export default routes;
