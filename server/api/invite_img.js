var imgUtil = {}
var fs = require('fs');
var qr = require('qr-image');
var images = require("images");
var path = require('path');
var querystring = require('querystring');
var async = require('async');

var imgCoor = {
    size: 218,
    x: 265,
    y: 968
}

// 二维码合成器
function QRSynthesizer(req) {
    this.req = req;
    this.userCode = req.query.user_code ? req.query.user_code.replace('.png', '') : '';
    this.sourceImg = path.resolve(__dirname, '../config/white_label/images/share_img_bg.png')
    // 当前二维码文件
    this.curQR = undefined
    this.output = undefined
}

QRSynthesizer.prototype = {
    constructor: QRSynthesizer,
    createQr: function (callback) {
        var _this = this
        var url = _this.req.protocol + '://' + _this.req.hostname + '/m/invite01?user_code=' + _this.userCode
        var dist = __dirname + '/tmp/'+ +(new Date()) + '_' + _this.userCode + '_qr.png'
        var qr_png = qr.image(url, { type: 'png', size: 8, margin: 0});
        var qr_pipe = qr_png.pipe(fs.createWriteStream(dist));
        qr_pipe.on('error', function (err) {
            console.log(err);
            callback && callback(err)
            return;
        })
        qr_pipe.on('finish', function () {
            _this.curQR = dist
            callback && callback(dist)
        })
    },
    synthesize: function (callback) {
        var _this = this
        var output = __dirname + '/tmp/' + +(new Date()) + '_' + _this.userCode + '_output.png'
        images(_this.sourceImg)
            .draw(images(_this.curQR).size(imgCoor.size), imgCoor.x, imgCoor.y)
            .save(output, { quality: 50 });
        _this.output = output
        callback && callback(output)
    },
    clearQR: function () {
        var _this = this
        fs.unlink(this.curQR, function (err) {
            err && console.log(err)
        })
    },
    clearOutput: function () {
        fs.unlink(this.output, function (err) {
            err && console.log(err)
        })
    },
    // 入口
    merge: function (callback) {
        var _this = this
        if (_this.userCode) {
            _this.createQr(function(curQR){
                _this.synthesize(function(output){
                    _this.clearQR()
                    callback && callback(_this.output)
                })
            })
        } else {
            callback(null)
        }
    }
}

module.exports.QRSynthesizer = QRSynthesizer
