### 开发日志


* 150628 如果当前项目文件中没有tmp（存放图片的目录）会报错
* 解决方案：使用　fs.existsSyncn 判断文件夹是否存在， 不存在使用 fs.mkdirSync创建文件夹


