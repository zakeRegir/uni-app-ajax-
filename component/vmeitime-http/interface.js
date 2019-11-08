/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

//引入MD5加密
var util = require('../../../static/md5.js');
import app from "../../../App.vue"
//console.log(app.globalData.userInfo)	//用户信息

//获取用户信息，如果为空则传入空字符串
var userInfo = uni.getStorageSync('userInfo')
console.log(userInfo)

var Token = userInfo == null || undefined? "" : userInfo.unionid

var salt = 'S9gXqLL41gHj6Obg1AoZx826miavZQPL';
// var salt = '990388b5cab80aee2c6bb72c73b89eeb';
var Nonce = (Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10);
var timestamp=new Date().getTime();
timestamp = (""+timestamp);
timestamp = timestamp.substring(0 , timestamp.length-3);
if(Token==undefined){
	Token = ""
}

export default {
	config: {
		baseUrl: "https://app.huadou168.com",
		// baseUrl: "http://test.huadou168.com",
		// baseUrl: "http://192.168.168.40:8888",
		// baseUrl: "http://192.168.168.57:8888",
		// baseUrl: "http://192.168.168.33:8888",
		// baseUrl: "http://192.168.168.47:8888",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded',
			'X-Requested-With':'XMLHttpRequest',
			'XX-Token': Token,	//登录的token
			'XX-Timestamp': timestamp,	//当前时间戳
			'XX-Device': 'miniWechat',	//设备类型
			'XX-Nonce': Nonce,	//随机串(长度16位)
			'XX-Signature': util.hexMD5(timestamp+Nonce+Token+salt),	//md5加密
			'XX-UpdateVersion':1	//接口版本更新默认1
		},  
		data: {},
		method: "GET",
		dataType: "json",  /* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) {
			options = {}
		}
		timestamp=new Date().getTime();
		timestamp = (""+timestamp);
		timestamp = timestamp.substring(0 , timestamp.length-3);
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		Token=(uni.getStorageSync('userInfo').unionid==undefined?"":uni.getStorageSync('userInfo').unionid)
		options.header = {
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded',
			// 'Content-Type':'application/X-Requested-With=XMLHttpRequest',
			'X-Requested-With':'XMLHttpRequest',
			'XX-Token': Token,	//登录的token
			'XX-Timestamp': timestamp,	//当前时间戳
			'XX-Device': 'miniWechat',	//设备类型
			'XX-Nonce': Nonce,	//随机串(长度16位)
			'XX-Signature': util.hexMD5(timestamp+Nonce+Token+salt),	//md5加密
			'XX-UpdateVersion':1	//接口版本更新默认1
		}
		
		return new Promise((resolve, reject) => {
			let _config = null
			
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (process.env.NODE_ENV === 'development') {
					if (statusCode === 200) {
						// console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
					}
				}
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				_reslog(response)
				if (statusCode === 200) { //成功
					resolve(response);
				} else {
					reject(response)
				}
			}

			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()

			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			
			// 统一的请求日志记录
			_reqlog(_config)

			if (process.env.NODE_ENV === 'development') {
				// console.log("【" + _config.requestId + "】 地址：" + _config.url)
				if (_config.data) {
					// console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
				}
			}

			uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		// console.log("【" + req.requestId + "】 地址：" + req.url)
		if (req.data) {
			// console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
		}
	}
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	let _statusCode = res.statusCode;
	if (process.env.NODE_ENV === 'development') {
		// console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
		if (res.config.data) {
			// console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
		}
		// console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
	}
	//TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
	switch(_statusCode){
		case 200:
			break;
		case 401:
			break;
		case 404:
			break;
		default:
			break;
	}
}

