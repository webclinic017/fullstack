/*
 * 记录页面访问次数
 * 写入 record 目录中
 */

; (function () {
    'use strict';

    var fs = require('fs');

    function readAccessTimes (dirName, numName, fn) {
        var dir = __dirname+'/record'+dirName;
        var num = {};
        fs.exists(__dirname+'/record', function (exists) {
            // console.log('-----dirName----', exists, dir);
            if(exists){
                fs.exists(dir, function(exists2) {
                    // console.log('-----dirName2----', exists2);
                    if (exists2) {   
                        try {
                            var numTemp = fs.readFileSync(dir,"utf-8");
                            num = JSON.parse(numTemp);
                            num[numName] ? (num[numName]++) : (num[numName] = 1);
                            fs.writeFile(dir, JSON.stringify(num));
                        } catch (e) {
                            num[numName] = 1;
                            console.log(e);
                        }
                    } else {
                        num[numName] = 1;
                        fs.writeFile(dir, JSON.stringify(num));
                    }
                    fn(num[numName]);
                });
            }else{
                fs.mkdir(__dirname+'/record',function(err){
                    if(err){
                        console.log('创建文件夹出错！');
                        num[numName] = 1;
                    }else{
                        num[numName] = 1;
                        fs.writeFile(dir, JSON.stringify(num));
                    }
                    fn(num[numName]);
                });
            }
        })
        
    }

    // 记录 抽奖活动 扫描二维码次数
    function recordPrizeQrTimes (dirName, s, fn) {
        var dir = __dirname+'/record'+dirName;
        var num = {};
        fs.exists(__dirname+'/record', function (exists) {
            // console.log('-----dirName----', exists, dir);
            if(exists){
                fs.exists(dir, function(exists2) {
                    // console.log('-----dirName2----', exists2);
                    if (exists2) {   
                        try {
                            var numTemp = fs.readFileSync(dir,"utf-8");
                            num = JSON.parse(numTemp);
                            
                            if (s) {
                                num.number++;
                                fs.writeFile(dir, JSON.stringify(num));
                            }
                            
                        } catch (e) {
                            num.number = 1;
                            console.log(e);
                        }
                    } else {
                        if (s) {    // 记录一次
                            num.number = 1;
                        } else {
                            num.number = 0;
                        }
                        fs.writeFile(dir, JSON.stringify(num));
                    }
                    fn(num.number);
                });
            }else{
                fs.mkdir(__dirname+'/record',function(err){
                    if(err){
                        console.log('创建文件夹出错！');
                        num.number = 0;
                    }else{
                        if (s) {    // 记录一次
                            num.number = 1;
                        } else {
                            num.number = 0;
                        }
                        
                        fs.writeFile(dir, JSON.stringify(num));
                    }
                    fn(num.number);
                });
            }
        })
    }

    module.exports = {
        readAccessTimes: readAccessTimes,
        recordPrizeQrTimes: recordPrizeQrTimes
    };
})();