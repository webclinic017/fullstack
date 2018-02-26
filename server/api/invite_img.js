var imgUtil = {}
var fs = require('fs');
var qr = require('qr-image');
var images = require("images");
var path = require('path');
var querystring = require('querystring');

var imgCoor = {
    size: 218,
    x: 266,
    y: 968
}
/**
 * 创建二维码
 * @param {*} url 
 * @param {*} callback 
 */
imgUtil.createQr = function (url, ctx, callback) {
    var qr_png = qr.image(url, { type: 'png', size: 6 });
    var userCode = querystring.parse(url.split('?')[1]).user_code
    var imgName = +(new Date()) + '_' + userCode + '.png'
    var qr_pipe = qr_png.pipe(fs.createWriteStream(imgName));
    qr_pipe.on('error', function (err) {
        console.log(err);
        callback(err, null);
        return;
    })
    qr_pipe.on('finish', function () {
        ctx.curQR = imgName
        callback(null, imgName);
    })
};

/** 
 * 给图片添加水印 
 * 参数 sourceImg(string) 原图片路径 
 * 参数 waterImg(string) 水印图片路径 
 * 参数 callback(Function) 
 */
imgUtil.addWater = function (sourceImg, waterImg, callback) {
    var lastput = "2.jpg";
    images(sourceImg)
        // .size(400)
        .draw(images(waterImg), imgCoor.x, imgCoor.y)
        .save(lastput, { quality: 50 });
    callback(lastput);
}

// 二维码合成器
function QRSynthesizer(req, userCode) {
    this.req = req;
    this.userCode = userCode;
    this.sourceImg = path.resolve(path.dirname, './config/white_label/images/share_img_bg.png')
    // 当前二维码文件
    this.curQR = undefined
}

QRSynthesizer.prototype = {
    constructor: QRSynthesizer,
    createQr: function (callback) {
        var _this = this
        var url = _this.req.hostname + 
        imgUtil.createQr(url, _this, function (err, data) {
            if (err) {
                console.log(err);
                callback(err, null);
                return;
            }
            callback(null, data);
        })
    },
    synthesize: function (waterImg, callback) {
        imgUtil.addWater(sourceImg, waterImg, function (data) {
            callback(null, data);
        })
    },
    // 清除二维码
    clearQR: function(){
        fs.unlink(this.curQR, function(err){
            console.log(err)
        })
    },
    start: function(){
        var _this = this
        async.waterfall([_this.createQr, _this.synthesize, _this.clearQR], function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    }
}

module.exports.QRSynthesizer = QRSynthesizer
