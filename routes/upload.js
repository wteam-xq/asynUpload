/**
 * post upload .
 */
var formidable = require('formidable'),
	util = require('util'),fs=require('fs');

exports.upload = function(req, res) {
	// parse a file upload
	var form = new formidable.IncomingForm(),files=[],fields=[],docs=[];
	console.log('start upload');
	
	//存放目录
	form.uploadDir = 'tmp/';

	// 接收到前端传过来的文件时事件
	form.on('field', function(field, value) {
		//console.log(field, value);
		fields.push([field, value]);
	// 前端文件读取时事件
	}).on('file', function(field, file) {
		console.log(field, file);
		files.push([field, file]);
		docs.push(file);

		var types = file.name.split('.');
		var date = new Date();
		var ms = Date.parse(date);
		fs.renameSync(file.path, "tmp/files" + ms + '_'+file.name);
	// 文件读取结束事件
	}).on('end', function() {
		console.log('-> upload done');
		res.writeHead(200, {
			'content-type': 'text/plain'
		});
		var out={Resopnse:{
			'result-code':0,
			timeStamp:new Date(),
		},
		files:docs
		};
		var sout=JSON.stringify(out);
		res.end(sout);
	});

	// 文件解析事件
	form.parse(req, function(err, fields, files) {
		err && console.log('formidabel error : ' + err);

		console.log('parsing done');
	});

};

