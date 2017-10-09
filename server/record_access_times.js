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

    module.exports = {
        readAccessTimes: readAccessTimes
    };
})();