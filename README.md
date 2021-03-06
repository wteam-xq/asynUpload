### 异步上传demo

#### 使用技术： formidable(nodejs) 、 file-upload(jquery)

#### 实现效果图：
* ![demo截图](https://github.com/wteam-xq/asynUpload/blob/master/screenShots.png)


#### 本地部署（win8 64bit为例）：

* 确保本地已安装 git 以及 node 环境，打开某文件夹 右键 “Git Bash” 运行
```Bash
git clone https://github.com/wteam-xq/myMiniDemo/tree/master/asynUpload
```

* 运行cmd 进入“asynUpload”文件夹， 运行 `npm install`安装依赖模块

* 进入 “asynUpload”文件夹启动项目: cmd运行 `node app.js` 

* 打开浏览器（建议 chrome）输入： `localhost:3000`访问网站

#### 说明： 
* file-upload组件 是一款很方便使用的后台上传插件，为什么说是后台？因为其只适合后台网站上传，兼容性太差不足以作为前端插件；兼容不了IE9以下的浏览器;150628更：官方最新demo在IE8下都无法上传成功~！

#### 参考资料：
* [formidable官网](https://www.npmjs.com/package/formidable)
* [file-upload API](https://github.com/blueimp/jQuery-File-Upload/wiki/API)
* [网友博客](http://blog.csdn.net/XGGIS/article/details/19970165)
