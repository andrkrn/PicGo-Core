/* eslint-disable no-template-curly-in-string */
export const ZH_CN = {
  UPLOAD_FAILED: '上传失败',
  CHECK_SETTINGS: '请检查你的配置项是否正确',
  CHECK_SETTINGS_AND_NETWORK: '请检查你的配置项以及网络',
  UPLOAD_FAILED_REASON: '错误码：${code}，请打开浏览器粘贴地址查看相关原因',
  SERVER_ERROR: '服务端出错，请重试',
  AUTH_FAILED: '认证失败',

  // smms
  PICBED_SMMS: 'SM.MS',
  PICBED_SMMS_TOKEN: '设定Token',

  // Ali-cloud
  PICBED_ALICLOUD: '阿里云OSS',
  PICBED_ALICLOUD_ACCESSKEYID: '设定KeyId',
  PICBED_ALICLOUD_ACCESSKEYSECRET: '设定KeySecret',
  PICBED_ALICLOUD_BUCKET: '设定Bucket',
  PICBED_ALICLOUD_AREA: '设定存储区域',
  PICBED_ALICLOUD_PATH: '设定存储路径',
  PICBED_ALICLOUD_CUSTOMURL: '设定自定义域名',
  PICBED_ALICLOUD_OPTIONS: '设定网址后缀',

  // Tencent-cloud
  PICBED_TENCENTCLOUD: '腾讯云COS',
  PICBED_TENCENTCLOUD_VERSION: 'COS版本',
  PICBED_TENCENTCLOUD_SECRETID: '设定SecretId',
  PICBED_TENCENTCLOUD_SECRETKEY: '设定SecretKey',
  PICBED_TENCENTCLOUD_APPID: '设定AppId',
  PICBED_TENCENTCLOUD_BUCKET: '设定Bucket',
  PICBED_TENCENTCLOUD_AREA: '设定存储区域',
  PICBED_TENCENTCLOUD_PATH: '设定存储路径',
  PICBED_TENCENTCLOUD_CUSTOMURL: '设定自定义域名',

  // GitHub
  PICBED_GITHUB: 'GitHub',
  PICBED_GITHUB_TOKEN: '设定Token',
  PICBED_GITHUB_REPO: '设定仓库名',
  PICBED_GITHUB_PATH: '设定存储路径',
  PICBED_GITHUB_BRANCH: '设定分支名',
  PICBED_GITHUB_CUSTOMURL: '设定自定义域名',

  // qiniu
  PICBED_QINIU: '七牛云',
  PICBED_QINIU_ACCESSKEY: '设定AccessKey',
  PICBED_QINIU_SECRETKEY: '设定SecretKey',
  PICBED_QINIU_BUCKET: '设定Bucket',
  PICBED_QINIU_PATH: '设定存储路径',
  PICBED_QINIU_URL: '设定访问网址',
  PICBED_QINIU_OPTIONS: '设定网址后缀',
  PICBED_QINIU_AREA: '设定存储区域',

  // imgur
  PICBED_IMGUR: 'Imgur',
  PICBED_IMGUR_CLIENTID: '设定ClientId',
  PICBED_IMGUR_PROXY: '设定代理',

  // upyun
  PICBED_UPYUN: '又拍云',
  PICBED_UPYUN_BUCKET: '设定Bucket',
  PICBED_UPYUN_OPERATOR: '设定操作员',
  PICBED_UPYUN_PASSWORD: '设定操作员密码',
  PICBED_UPYUN_PATH: '设定存储路径',
  PICBED_UPYUN_URL: '设定加速域名',
  PICBED_UPYUN_OPTIONS: '设定网址后缀',

  // internal
  PICBED_INTERNAL: 'Internal',
  PICBED_INTERNAL_URL: 'Internal URL',
  PICBED_INTERNAL_VERSION: 'Internal Version',

  // Plugin Handler
  PLUGIN_HANDLER_PLUGIN_INSTALL_SUCCESS: '插件安装成功',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED: '插件安装失败',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_REASON: '插件安装失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_PATH: '插件安装失败，请输入合法插件名或合法安装路径',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_SUCCESS: '插件卸载成功',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED: '插件卸载失败',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_REASON: '插件卸载失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_VALID: '插件卸载失败，请输入合法插件名',
  PLUGIN_HANDLER_PLUGIN_UPDATE_SUCCESS: '插件更新成功',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED: '插件更新失败',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_REASON: '插件更新失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_VALID: '插件更新失败，请输入合法插件名'
}

export type ILocalesKey = keyof typeof ZH_CN
export type ILocales = typeof ZH_CN
