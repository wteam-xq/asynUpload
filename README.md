### 异步上传demo

#### 使用技术： formidable(nodejs) 、 file-upload(jquery)

#### 实现效果图：
* ![demo截图](http://s1.postimg.org/pegzuko0r/image.jpg)


#### 本地部署（win8 64bit为例）：

* 确保本地已安装 git 以及 node 环境，在某文件夹 运行`git clone https://github.com/wteam-xq/myMiniDemo/tree/master/asynUpload` 下载该项目
* 运行cmd 进入“asynUpload”文件夹， 运行 `npm install`安装依赖模块
* 进入 “asynUpload”文件夹启动项目: cmd运行 `node app.js` 
* 在上述文件夹中创建“tmp”文件夹： 放置上传图片
* 打开浏览器（建议 chrome）输入： `localhost:3000`访问网站

#### 说明： 
* file-upload组件 是一款很方便使用的后台上传插件， 为什么说是后台？因为这货只适合后台网站上传，兼容性太差不足以作为前端插件；兼容不了IE9以下的浏览器;(前公司项目曾被坑)，看github官方最新版， 似乎修复了一些IE9以下浏览器的bug；

#### 参考资料：
* [formidable官网](https://www.npmjs.com/package/formidable)
* [file-upload API](https://github.com/blueimp/jQuery-File-Upload/wiki/API)
* [网友博客](http://blog.csdn.net/XGGIS/article/details/19970165)
