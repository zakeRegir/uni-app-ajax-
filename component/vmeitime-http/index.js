import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
	return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn',
		url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
		data,
	})
}
// 本地服务轮播
export const indexSlider = (data) => {
	return http.request({
		url: '/api/hd/shop/slider',
		method: 'post',
		data,
	})
}
// 本地服务首页分类
export const classList = () => {
	return http.request({
		url: '/api/hd/shop/classList',
		method: 'post',
	})
}
// 本地服务特卖商家
export const specialShop = (data) => {
	return http.request({
		url: '/api/hd/shop/specialShop',
		method: 'post',
		data,
	})
}
// 本地服务附近推荐商家
export const nearbyList = (data) => {
	return http.request({
		url: '/api/hd/shop/nearbyList',
		method: 'post',
		data,
	})
}
// 3.3.8: 系统参数
export const sysParam = (data) => {
	return http.request({
		url: '/api/hd/public/sysParam',
		method: 'post',
		data,
	})
}
// 获取全国省市区数据
export const getAreaList = (data) => {
	return http.request({
		url:'/api/hd/public/getAreaList',
		method:'post',
		data,
	})
}
// 本地服务商家详情
export const shopDetail = (data) => {
	return http.request({
		url: '/api/hd/shop/shopDetail',
		method: 'post',
		data,
	})
}
//本地服务商家商品 
export const shopProdList = (data) => {
	return http.request({
		url: '/api/hd/shop/prodList',
		method: 'post',
		data,
	})
}
//本地服务商家评价
export const appraiseList = (data) => {
	return http.request({
		url: '/api/hd/shop/appraiseList',
		method: 'post',
		data,
	})
}
//本地服务收藏/取消收藏商家
export const collect = (data) => {
	return http.request({
		url: '/api/hd/shop/collect',
		method: 'post',
		data,
	})
}
//商家赠品商城轮播
export const shopGiftSlider = (data) => {
	return http.request({
		url: '/api/hd/shop/giftSlider',
		method: 'post',
		data,
	})
}
//商家赠品商城分类
export const shopClassList = (data) => {
	return http.request({
		url: '/api/hd/shopgift/classList',
		method: 'post',
		data,
	})
}
//商家赠品商城列表
export const shopList = (data) => {
	return http.request({
		url: '/api/hd/shopgift/prodList',
		method: 'post',
		data,
	})
}
export const shopProdDetail = (data) => {
	return http.request({
		url: '/api/hd/shopgift/prodDetail',
		method: 'post',
		data,
	})
}

// 积分商城列表
export const prodList = (data) => {
	return http.request({
		url: '/api/hd/business/prodList',
		method: 'post',
		data,
		// handle:true
	})
}
//微信小程序判断第三方是否已经注册
export const isReg = (data) => {
	return http.request({
		// baseUrl: 'http://192.168.168.28:8888',
		url: '/api/hd/user/isRegForWechatMini',
		method: 'post',
		data,
	})
}
// 退出登录
export const logout = () => {
	return http.request({
		url: '/api/hd/user/logout',
		method: 'POST'
	})
}
//积分商城订单购买提醒
export const businessOrderAlertv2 = () => {
	return http.request({
		url: '/api/hd/business/orderAlertV2',
		method: 'POST',
	})
}
//商品分类 - 根据父类筛选（搜索--筛选--更多分类）
export const businessProdClass = (data) => {
	return http.request({
		url: '/api/hd/business/prodClass',
		method: 'POST',
		data,
	})
}
//首页为你推荐----参数：页码
export const businessRecProd = (data) => {
	return http.request({
		url: '/api/hd/business/recProd',
		method: 'POST',
		data,
	})
}
//积分商城轮播
export const businessSlider = () => {
	return http.request({
		url: '/api/hd/business/slider',
		method: 'POST',
	})
}
//积分商城首页分类
export const businessIndexClass = () => {
	return http.request({
		url: '/api/hd/business/indexClass',
		method: 'POST',
	})
}
//积分商城首页版块列表
export const businessColum = () => {
	return http.request({
		url: '/api/hd/business/column',
		method: 'POST',
	})
}
//热搜词汇---参数：类型
export const businessHotkey = (data) => {
	return http.request({
		url: '/api/hd/public/hotkey',
		method: 'POST',
		data
	})
}
//全部类目
export const businessClassList = () => {
	return http.request({
		url: '/api/hd/business/classList',
		method: 'POST',
	})
}
//商品详情
export const businessProdDetail = (data) => {
	return http.request({
		url: '/api/hd/business/prodDetail',
		method: 'POST',
		data
	})
}
//为你推荐----参数：商品Id(页码)----未完成，2001请重新登录
export const businessRecList = (data) => {
	return http.request({
		url: '/api/hd/business/recList',
		method: 'POST',
		data,
	})
}
//为你推荐（通用）
export const recListV2 = (data) => {
	return http.request({
		url: '/api/hd/jd/recList',
		method: 'POST',
		data,
	})
}
//消息列表
export const noticeList = (data) => {
	return http.request({
		url: '/api/hd/public/personNoticeList',
		method: 'POST',
		data
	})
}
//个人消息详情
export const personNoticeDetail = (data) => {
	return http.request({
		url: '/api/hd/public/personNoticeDetail',
		method: 'POST',
		data
	})
}
//商品列表
export const businessProdList = (data) => {
	return http.request({
		url: '/api/hd/business/prodList',
		method: 'POST',
		data,
	})
}
//供应商店铺首页/店铺详情/供应商商品分类
export const businessIndex = (data) => {
	return http.request({
		url: '/api/hd/business/businessIndex',
		method: 'POST',
		data,
	})
}
//用户评价列表V2
export const businessPraiseListV2 = (data) => {
	return http.request({
		url: '/api/hd/business/praiseListV2',
		method: 'POST',
		data,
	})
}
//商品评价
export const businessProdPraise = (data) => {
	return http.request({
		url: '/api/hd/shopgift/prodPraise',
		method: 'POST',
		data,
	})
}
//供应商商品列表V2
export const businessProdListV2 = (data) => {
	return http.request({
		url: '/api/hd/business/businessProdListV2',
		method: 'POST',
		data,
	})
}
//个人中心首页（新需求）
export const userInfo = () => {
	return http.request({
		url: '/api/hd/user/userInfo',
		method: 'POST'
	})
}
//我的账户
export const myAccount = () => {
	return http.request({
		url: '/api/hd/wallet/myAccount',
		method: 'POST'
	})
}
//我的礼品券
export const myCouponList = (data) => {
	return http.request({
		url: '/api/hd/wallet/myCouponList',
		method: 'POST',
		data,
	})
}
//礼品券详情
export const couponDetail = (data) => {
	return http.request({
		url: '/api/hd/wallet/couponDetail',
		method: 'POST',
		data,
	})
}
//账户明细
export const accountFlow = (data) => {
	return http.request({
		url: '/api/hd/wallet/accountFlow',
		method: 'POST',
		data,
	})
}
//我的银行卡（新需求）
export const myBankcard = () => {
	return http.request({
		url: '/api/hd/bankcard/myBankcard',
		method: 'POST'
	})
}
//银行列表（充值提现绑卡使用）（新增）
export const bankList = () => {
	return http.request({
		url: '/api/hd/bankcard/bankList',
		method: 'POST'
	})
}
// 解绑银行卡
export const bankcardDel = (data) => {
	return http.request({
		url: '/api/hd/bankcard/del',
		method: 'POST',
		data,
	})
}
//购物车列表V2
export const cartV2Index = () => {
	return http.request({
		url: '/api/hd/cartV2/index',
		method: 'POST'
	})
}
//购物车为你推荐

export const cartRecList = (data) => {
	return http.request({
		url: '/api/hd/cart/recList',
		method: 'POST',
		data,
	})
}
//礼品券订单列表V2
export const orderListV2 = (data) => {
	return http.request({
		url: '/api/hd/giftorder/orderListV2',
		method: 'POST',
		data,
	})
}
//热卖商品
export const hotProd = (data) => {
	return http.request({
		url: '/api/hd/Hdgift/hotProd',
		method: 'POST',
		data,
	})
}
//首页分类
export const hdgiftClassList = () => {
	return http.request({
		url: '/api/hd/Hdgift/classList',
		method: 'POST'
	})
}
//首页轮播
export const giftSlider = () => {
	return http.request({
		url: '/api/hd/Hdgift/giftSlider',
		method: 'POST'
	})
}
//商品详情
export const hdgiftProdDetail = (data) => {
	return http.request({
		url: '/api/hd/Hdgift/prodDetail',
		method: 'POST',
		data,
	})
}
//商品评价
export const shopgiftProdPraise = (data) => {
	return http.request({
		url: '/api/hd/shopgift/prodPraise',
		method: 'POST',
		data,
	})
}
//商品列表
export const hdgiftProdList = (data) => {
	return http.request({
		url: '/api/hd/Hdgift/prodList',
		method: 'POST',
		data,
	})
}
//积分商城京东专区商品列表
export const jdProdList = (data) => {
	return http.request({
		url: '/api/hd/jd/prodList',
		method: 'POST',
		data,
	})
}
//商城商品详情（通用）
export const jdProdDetail = (data) => {
	return http.request({
		url: '/api/hd/jd/prodDetail',
		method: 'POST',
		data,
	})
}
//积分商城订单列表V2
export const ordeRorderListV2 = (data) => {
	return http.request({
		url: '/api/hd/order/orderListV2',
		method: 'POST',
		data,
	})
}
//我的收藏V2
export const myCollectV2 = (data) => {
	return http.request({
		url: '/api/hd/user/myCollectV2',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 评价中心V2
export const praiseCenterV2 = (data) => {
	return http.request({
		url: '/api/hd/order/praiseCenterV2',
		method: 'POST',
		data,
	})
}
//收藏/取消收藏商品V2
export const collectProdV2 = (data) => {
	return http.request({
		url: '/api/hd/business/collectProdV2',
		method: 'POST',
		data,
	})
}
//加入购物车V2
export const addCartV2 = (data) => {
	return http.request({
		url: '/api/hd/cartV2/addCart',
		method: 'POST',
		data,
	})
}
//加入购物车
export const addCart = (data) => {
	return http.request({
		url: '/api/hd/business/addCart',
		method: 'POST',
		data,
	})
}
//修改个人信息 加积分
export const modifyUserInfo = (data) => {
	return http.request({
		url: '/api/hd/user/modifyUserInfo',
		method: 'POST',
		data,
	})
}
//修改手机号
export const modifyMobile = (data) => {
	return http.request({
		url: '/api/hd/user/modifyMobile',
		method: 'POST',
		data,
	})
}
//获取验证码
export const getVerifyCode = (data) => {
	return http.request({
		url: '/api/hd/public/getVerifyCode',
		method: 'POST',
		data,
	})
}
//校验验证码
export const checkVerifyCode = (data) => {
	return http.request({
		url: '/api/hd/public/checkVerifyCode',
		method: 'POST',
		data,
	})
}
//修改头像
export const modifyLogo = (data) => {
	return http.request({
		url: '/api/hd/user/modifyLogo',
		method: 'POST',
		data,
	})
}
//我的余额
export const myWalletV2 = () => {
	return http.request({
		url: '/api/hd/wallet/myWalletV2',
		method: 'POST'
	})
}
//提现预检查（一件代发）
export const withdrawPre = (data) => {
	return http.request({
		url: '/api/hd/wallet/withdrawPre',
		method: 'POST',
		data,
	})
}
//积分明细V2
export const integralListV2 = (data) => {
	return http.request({
		url: '/api/hd/wallet/integralListV2',
		method: 'POST',
		data,
	})
}
//我的店铺
export const myShopList = (data) => {
	return http.request({
		url: '/api/hd/wallet/myShopList',
		method: 'POST',
		data,
	})
}
//收益商家列表
export const myProfitShopList = (data) => {
	return http.request({
		url: '/api/hd/wallet/myProfitShopList',
		method: 'POST',
		data,
	})
}
//购买礼品券
export const buyCoupon = (data) => {
	return http.request({
		url: '/api/hd/wallet/buyCoupon',
		method: 'POST',
		data,
	})
}
//添加银行卡V2（新需求）
export const bankcardAddV2= (data) => {
	return http.request({
		url: '/api/hd/bankcard/addV2',
		method: 'POST',
		data,
	})
}
// 添加银行卡请求发送验证码（一件代发）
export const addBankCardSendverifyCode= (data) => {
	return http.request({
		url: '/api/hd/bankcard/addBankCardSendverifyCode',
		method: 'POST',
		data,
	})
}
// 添加银行卡页面信息（一件代发）
export const addBankCardInfo= (data) => {
	return http.request({
		url: '/api/hd/bankcard/addBankCardInfo',
		method: 'POST',
		data,
	})
}

//校验支付密码
export const checkPayPass= (data) => {
	return http.request({
		url: '/api/hd/bankcard/checkPayPass',
		method: 'POST',
		data,
	})
}
//礼品券订单详情V2
export const orderDetailV2= (data) => {
	return http.request({
		url: '/api/hd/giftorder/orderDetailV2',
		method: 'POST',
		data,
	})
}
//礼品券订单-取消订单V2（待测京东）
export const cancelV2= (data) => {
	return http.request({
		url: '/api/hd/giftorder/cancelV3',
		method: 'POST',
		data,
	})
}
//礼品券订单-确认收货V2（待测京东）
export const confirmV2= (data) => {
	return http.request({
		url: '/api/hd/giftorder/confirmV2',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 评价V2
export const praiseV2= (data) => {
	return http.request({
		url: '/api/hd/order/praiseV2',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 详情V2
export const orderDetail= (data) => {
	return http.request({
		url: '/api/hd/order/orderDetailV2',
		method: 'POST',
		data,
	})
}
//我的地址V2
export const myAddress= (data) => {
	return http.request({
		url: '/api/hd/addressV2/myAddress',
		method: 'POST',
		data,
	})
}
//编辑地址V2
export const edit= (data) => {
	return http.request({
		url: '/api/hd/addressV2/edit',
		method: 'POST',
		data,
	})
}
//删除地址V2
export const del= (data) => {
	return http.request({
		url: '/api/hd/addressV2/del',
		method: 'POST',
		data,
	})
}
//判断是否设置支付密码
export const isPaySet= (data) => {
	return http.request({
		url: '/api/hd/user/isPaySet',
		method: 'POST',
		data,
	})
}
//修改支付密码
export const modifyPayPass= (data) => {
	return http.request({
		url: '/api/hd/user/modifyPayPass',
		method: 'POST',
		data,
	})
}
//内容列表
export const content= (data) => {
	return http.request({
		url: '/api/hd/public/content',
		method: 'POST',
		data,
	})
}
// 礼品商城下单
export const submitGiftOrder= (data) => {
	return http.request({
		url: '/api/hd/jd/submitGiftOrder',
		method: 'POST',
		data,
	})
}
//添加地址
export const add= (data) => {
	return http.request({
		url: '/api/hd/addressV2/add',
		method: 'POST',
		data,
	})
}
//收藏/取消收藏供应商
export const businessCollect= (data) => {
	return http.request({
		url: '/api/hd/business/collect',
		method: 'POST',
		data,
	})
}
//提交订单---积分商城
export const submitOrder= (data) => {
	return http.request({
		url: '/api/hd/business/submitOrder',
		method: 'POST',
		data,
	})
}
//购物车降价商品
export const discountList= (data) => {
	return http.request({
		url: '/api/hd/cart/discountList',
		method: 'POST',
		data,
	})
}
//我的浏览
export const myViewListV2= (data) => {
	return http.request({
		url: '/api/hd/user/myViewListV2',
		method: 'POST',
		data,
	})
}
//累计佣金列表V2
export const fansCommissionListV2= (data) => {
	return http.request({
		url: '/api/hd/wallet/fansCommissionListV2',
		method: 'POST',
		data,
	})
}
//删除浏览记录
export const clearViewList= (data) => {
	return http.request({
		url: '/api/hd/user/clearViewList',
		method: 'POST',
		data,
	})
}
//充值到余额回调
export const recharge= (data) => {
	return http.request({
		url: '/api/hd/wallet/recharge',
		method: 'POST',
		data,
	})
}
//获取运费
export const getShipment= (data) => {
	return http.request({
		url: '/api/hd/business/getShipment',
		method: 'POST',
		data,
	})
}
//编辑购物车V2
export const editCart= (data) => {
	return http.request({
		url: '/api/hd/cartV2/editCart',
		method: 'POST',
		data,
	})
}
//删除购物车商品V2
export const cartDelete= (data) => {
	return http.request({
		url: '/api/hd/cartV2/delete',
		method: 'POST',
		data,
	})
}
//获取京东运费（京东）
export const getFreight= (data) => {
	return http.request({
		url: '/api/hd/jd/getFreight',
		method: 'POST',
		data,
	})
}
//提现
export const withdraw= (data) => {
	return http.request({
		url: '/api/hd/wallet/withdraw',
		method: 'POST',
		data,
	})
}
//提现记录
export const withdrawList= (data) => {
	return http.request({
		url: '/api/hd/wallet/withdrawList',
		method: 'POST',
		data,
	})
}
//平台赠品商城下单支付（一件代发）
export const HdgiftSubmit= (data) => {
	return http.request({
		url: '/api/hd/Hdgift/submit',
		method: 'POST',
		data,
	})
}
//本地服务平台赠品商城下单支付（一件代发）
export const shopgiftOrder= (data) => {
	return http.request({
		url: '/api/hd/shopgift/order',
		method: 'POST',
		data,
	})
}
// 通联订单状态查询（一件代发）
export const getAllinpayOrderStatus=(data) =>{
	return http.request({
		url: '/api/hd/order/getAllinpayOrderStatus',
		method: 'POST',
		data,
	})
}
//商品评价列表V2
export const prodPraiseV2= (data) => {
	return http.request({
		url: '/api/hd/Hdgift/prodPraiseV2',
		method: 'POST',
		data,
	})
}
//礼品券订单 - 删除评价
export const deletePraise= (data) => {
	return http.request({
		url: '/api/hd/giftorder/deletePraise',
		method: 'POST',
		data,
	})
}
//礼品券订单 - 查看评价
export const praiseList= (data) => {
	return http.request({
		url: '/api/hd/giftorder/praiseList',
		method: 'POST',
		data,
	})
}
//礼品券订单 - 追加评价
export const appendPraise= (data) => {
	return http.request({
		url: '/api/hd/giftorder/appendPraise',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 取消订单V2
export const orderCancelV2= (data) => {
	return http.request({
		url: '/api/hd/order/cancelV3',
		method: 'POST',
		data,
	})
}
//积分订单 - 支付待支付订单 - 京东
export const reSubmitOrder= (data) => {
	return http.request({
		url: '/api/hd/jd/reSubmitOrder',
		method: 'POST',
		data,
	})
}
//积分商城下单 - 京东
export const jDsubmitOrder= (data) => {
	return http.request({
		url: '/api/hd/jd/submitOrder',
		method: 'POST',
		data,
	})
}
//绑定手机号
export const bindMobile= (data) => {
	return http.request({
		url: '/api/hd/user/bindMobile',
		method: 'POST',
		data,
	})
}
//忘记密码
export const forgetPass= (data) => {
	return http.request({
		url: '/api/hd/user/forgetPass',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 确认收货V2
export const orderConfirmV2= (data) => {
	return http.request({
		url: '/api/hd/order/confirmV2',
		method: 'POST',
		data,
	})
}
//礼品券订单 - 评价
export const giftorderPraise= (data) => {
	return http.request({
		url: '/api/hd/giftorder/praise',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 查看评价V2
export const praiseListV2= (data) => {
	return http.request({
		url: '/api/hd/order/praiseListV2',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 删除评价
export const orderDeletePraise = (data) => {
	return http.request({
		url: '/api/hd/order/deletePraise',
		method: 'POST',
		data,
	})
}
//提醒发货-同意继续等待
export const remindDeliverye = (data) => {
	return http.request({
		url: '/api/hd/order/remindDelivery',
		method: 'POST',
		data,
	})
}
//积分商城支付待支付订单
export const payOrder = (data) => {
	return http.request({
		url: '/api/hd/order/payOrder',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 申请退货V2
export const applyRefundV3 = (data) => {
	return http.request({
		url: '/api/hd/order/applyRefundV3',
		method: 'POST',
		data,
	})
}
// 礼品商城订单-申请退货
export const applyRefund = (data) => {
	return http.request({
		url: '/api/hd/giftorder/applyRefundV2',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 申请退货列表V2
export const refundListV2 = (data) => {
	return http.request({
		url: '/api/hd/order/refundListV2',
		method: 'POST',
		data,
	})
}
//礼品商城订单-申请退货列表
export const refundList = (data) => {
	return http.request({
		url: '/api/hd/giftorder/refundList',
		method: 'POST',
		data,
	})
}
//积分订单申请平台介入
export const applyKefu = (data) => {
	return http.request({
		url: '/api/hd/order/applyKefu',
		method: 'POST',
		data,
	})
}
//礼品订单申请 退货/退款 介入
export const orderApplyKefu = (data) => {
	return http.request({
		url: '/api/hd/giftorder/applyKefu',
		method: 'POST',
		data,
	})
}
//意见反馈
export const feedback = (data) => {
	return http.request({
		url: '/api/hd/user/feedback',
		method: 'POST',
		data,
	})
}
// 反馈列表
export const myFeedback = (data) => {
	return http.request({
		url: '/api/hd/user/myFeedback',
		method: 'POST',
		data,
	})
}
//礼品商城 - 删除订单
export const delOrder = (data) => {
	return http.request({
		url: '/api/hd/giftorder/delOrder',
		method: 'POST',
		data
	})
}
//积分商城 - 删除订单
export const orderDelOrder = (data) => {
	return http.request({
		url: '/api/hd/order/delOrder',
		method: 'POST',
		data,
	})
}
//校验银行卡（变更）
export const checkBankCard = (data) => {
	return http.request({
		url: '/api/hd/bankcard/checkBankCard',
		method: 'POST',
		data,
	})
}
//积分商城订单 - 追加评价
export const orderAppendPraise = (data) => {
	return http.request({
		url: '/api/hd/order/appendPraise',
		method: 'POST',
		data,
	})
}
//粉丝列表
export const fansList = (data) => {
	return http.request({
		url: '/api/hd/wallet/fansList',
		method: 'POST',
		data,
	})
}
//赠品商城首页为你推荐（新增）
export const hdgiftRecProd = (data) => {
	return http.request({
		url: '/api/hd/Hdgift/recProd',
		method: 'POST',
		data,
	})
}
//赠品商城首页版块列表（新增）
export const hdgiftColumn = (data) => {
	return http.request({
		url: '/api/hd/Hdgift/column',
		method: 'POST',
		data,
	})
}
//扫描二维码支付（一件代发）
export const scanPay = (data) => {
	return http.request({
		url: '/api/hd/shop/scanPay',
		method: 'POST',
		data,
	})
}
// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	scanPay, //扫描二维码支付（一件代发）
	hdgiftColumn, //赠品商城首页版块列表
	hdgiftRecProd, //赠品商城首页为你推荐
	fansList, //粉丝列表
	orderAppendPraise, //积分商城订单 - 追加评价
	orderConfirmV2, //积分确认收货
	checkBankCard, //校验银行卡（变更）
	personNoticeDetail, //个人消息详情
	orderDelOrder, //积分商城 - 删除订单
	delOrder, //礼品商城 - 删除订单
	feedback, //意见反馈
	myFeedback,//反馈列表
	orderApplyKefu, //礼品订单申请 退货/退款 介入
	applyKefu, //积分订单申请平台介入
	refundList, //礼品商城订单-申请退货列表
	refundListV2, //积分商城订单 - 申请退货列表V2
	applyRefund, // 礼品商城订单-申请退货
	applyRefundV3, //积分商城订单 - 申请退货V2
	payOrder, //积分商城支付待支付订单
	remindDeliverye, //提醒发货-同意继续等待
	orderDeletePraise, //积分商城订单 - 删除评价
	praiseListV2, //积分商城订单 - 查看评价V2
	giftorderPraise, //礼品券订单 - 评价
	forgetPass, //忘记密码
	bindMobile, //绑定手机号
	jDsubmitOrder, //积分商城下单 - 京东
	reSubmitOrder, //积分订单 - 支付待支付订单 - 京东
	orderCancelV2, //积分商城订单 - 取消订单V2
	appendPraise, //礼品券订单 - 追加评价
	praiseList, //礼品券订单 - 查看评价
	deletePraise, //礼品券订单 - 删除评价
	prodPraiseV2, //商品评价列表V2
	HdgiftSubmit, //平台赠品商城下单支付（一件代发）
	withdrawList, //提现记录
	withdraw, //提现
	getFreight, //获取京东运费（京东）
	cartDelete, //删除购物车商品V2
	editCart, //编辑购物车V2
	getShipment, //获取运费
	recharge, //充值到余额回调
	clearViewList, //删除浏览记录
	fansCommissionListV2, //累计佣金列表V2
	myViewListV2, //我的浏览
	addCartV2, //加入购物车V2---花兜、京东
	discountList, //购物车降价商品
	submitOrder, //提交订单
	businessCollect, //收藏/取消收藏供应商
	add, //添加地址
	submitGiftOrder, // 礼品商城下单
	content, //内容列表
	modifyPayPass, //修改支付密码
	isPaySet, //判断是否设置支付密码
	del, //删除地址V2
	edit, //编辑地址V2
	myAddress, //我的地址V2
	orderDetail, //积分商城订单 - 详情V2
	praiseV2, //积分商城订单 - 评价V2
	confirmV2, //礼品券订单-确认收货V2（待测京东）
	cancelV2, //礼品券订单-取消订单V2（待测京东）
	orderDetailV2, //礼品券订单详情V2
	checkPayPass, //校验支付密码
	test,
	isReg, //小程序判断第三方是否已经注册
	logout,//退出登录
	indexSlider, //本地服务轮播
	classList, //本地服务分类
	specialShop, // 本地服务特卖商家
	nearbyList, //本地服务附近推荐商家
	shopDetail,// 本地服务商家详情
	shopProdDetail,// 本地服务商品详情
	shopProdList,//本地服务商家商品 
	appraiseList,//本地服务商家评价 
	shopgiftOrder,//本地服务平台赠品商城下单支付（一件代发）
	getAllinpayOrderStatus,// 通联订单状态查询（一件代发）
	collect,//本地服务收藏/取消收藏商家
	shopGiftSlider,//商家赠品商城轮播
	shopClassList,//商家赠品商城分类
	shopList,//商家赠品商城列表
	prodList, //积分商城列表
	businessOrderAlertv2, //积分商城订单购买提醒
	businessProdClass, //商品分类 - 根据父类筛选
	businessRecProd, //首页为你推荐
	businessSlider, //积分商城轮播
	businessIndexClass, //积分商城首页分类
	businessColum, //积分商城首页版块列表
	businessHotkey, //热门搜索
	businessClassList, //全部类目
	businessProdDetail, //商品详情
	businessRecList, //为你推荐
	noticeList, //消息中心
	businessProdList, //商品列表
	businessIndex, //供应商店铺首页/店铺详情/供应商商品分类
	businessPraiseListV2, //用户评价列表V2
	businessProdPraise, //商品评价
	businessProdListV2, //供应商商品列表V2
	recListV2, //为你推荐（通用）
	userInfo, //个人中心首页（新需求）
	myAccount, //我的账户
	myCouponList, //我的礼品券
	couponDetail, //礼品券详情
	accountFlow, //账户明细
	myBankcard, //我的银行卡（新需求）
	bankList, //银行列表（充值提现绑卡使用）（新增）
	bankcardDel,//解绑银行卡
	cartV2Index, //购物车列表V2
	cartRecList, //购物车为你推荐
	orderListV2, //礼品券订单列表V2
	hotProd, //热卖商品
	hdgiftClassList, //首页分类
	giftSlider, //首页轮播
	hdgiftProdDetail, //商品详情
	shopgiftProdPraise, //商品评价
	hdgiftProdList, //商品列表
	jdProdList, //积分商城京东专区商品列表
	jdProdDetail, //商城商品详情（通用）
	ordeRorderListV2,	//积分商城订单列表V2
	myCollectV2, //我的收藏V2
	praiseCenterV2, //积分商城订单 - 评价中心V2
	collectProdV2, //收藏/取消收藏商品V2
	addCart, //加入购物车V2
	modifyUserInfo, //修改个人信息 加积分
	modifyMobile, //修改手机号
	getVerifyCode, //获取验证码
	checkVerifyCode, //校验验证码
	modifyLogo, //
	myWalletV2, //我的余额
	withdrawPre,//提现预检查（一件代发）
	integralListV2, //积分明细V2
	myShopList, //我的店铺
	myProfitShopList, //收益商家列表
	buyCoupon, //购买礼品券
	bankcardAddV2, //添加银行卡V2（新需求）
	addBankCardSendverifyCode, // 添加银行卡请求发送验证码（一件代发）
	addBankCardInfo,//添加银行卡页面信息（一件代发）
	
	sysParam,//3.3.8: 系统参数
	getAreaList,// 获取全国省市区数据
}

