
import request from './request';
//签名用md5加密
import md5 from 'md5';

/*
  请求地址开环境去使用。
    如果是开发时，一般使用本地测试域名
    如果是联调接口/测试接口，用测试服务器地址
    如果项目打包上线，用上线服务器地址
 */
// 本地测试域名 [host]不知道什么情况
const baseUrl = 'www.mdhd.[host]';
// 测试服务器：联调接口
// const baseUrl = 'huadou.weiruanmeng.com';
// 上线服务器
// const baseUrl = 'app.huadou168.com';

// 全局配置
request.setConfig({
  baseUrl: 'http://'+baseUrl, // 此为测试地址，需加入到域名白名单，或者更改为您自己的线上地址即可
  // dataType: 'json', // 可删除，默认为json
  // responseType: 'text', // 可删除，默认为text
  // 设置请求头，支持所有请求头设置，也可不设置，去掉header就行
  header: {
  }
});


let device = '';
// 获取系统信息
uni.getSystemInfo({
  success(data) { // 成功回调
    // 客户端平台，值域为：ios、android
    // 文档 https://uniapp.dcloud.io/api/system/info
    // 只需要请求一次
    device = data.platform;
  },
  fail() {}
});

// 设置请求拦截器
// 发送请求之前，先触发拦截器，修改请求配置，在发送请求
request.interceptors.request(config => {

  // 随机数，长度16位
  const nonce = Math.random().toString().substr(2, 16);
  // 时间戳
  const timestamp = Date.now();
  // 值为登录请求后返回的token，文档在 接口文档.docx 的2.2.7的login_token
  const token = 'xxxx';
  // 计算得出签名
  // 签名需要测试
  const signature = md5(`${timestamp}+${nonce}+${token}`);

  // 发送请求必须携带的请求头参数
  config.header["XX-Token"] = token;
  config.header["XX-Timestamp"] = timestamp;
  config.header["XX-Device"] = device;
  config.header["XX-Nonce"] = nonce;
  config.header["XX-Signature"] = signature;
  config.header["XX-UpdateVersion"] = "1";	//接口版本，现在是1版本

  return config; // 返回修改后的配置，如未修改也需添加这行
});

// 设置响应拦截器
request.interceptors.response(res => {
  // 接收请求，执行响应操作
  // 您的逻辑......

  // return false;    // 阻止返回,页面不会接收返回值
  // return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
  // return Promise.reject('error from response interceptors') // 向外层抛出错误，用catch捕获
  return res; // 原样返回
});

// 记得暴露出去~


// 以上是封装的固定配置

// ---------------------------------------------

// 下面是组件中使用发送请求，比如登录请求
request.post('/api/hd/user/login', {
  data: {
    zone_num: '', // 国家区号  --> 这个可能通过 https://uniapp.dcloud.io/api/location/location 获取
    mobile: '13333333333', // 手机号
    verify_code: '123456', // 验证码
  }
})
  .then((res) => {
    // 成功回调函数
  })
  .catch((error) => {
    // 失败回调函数
  });