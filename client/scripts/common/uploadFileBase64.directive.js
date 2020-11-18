;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadFileBase64', twUploadFileBase64);

    twUploadFileBase64.$inject = ['$timeout', 'account', '$http', '$cookies'];

    //通过base64上传图片
    function twUploadFileBase64($timeout, account, $http, $cookies) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fileName: '='
            },
            template:
                '<input type="file"'+
                        'accept="image/*, application/pdf"'+
                        'style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor:pointer;z-index:20">',
            link: function (scope, element, attrs) {
                // var isPdf = false;
                $(element).on('change', function (e) {
                  console.log(222, e)
                    var file = e.target.files[0];
                    // if (file.type == 'application/pdf') {
                    //   isPdf = true;
                    // }
                    renderImage(file, this);
                });

                function renderImage (file, target) {

                    var reader = new FileReader();
                    var spark = new SparkMD5.ArrayBuffer()
                    reader.onload = function(e) {
                        // console.log(e.target.result);
                        spark.append(e.target.result);
                        console.log(777, spark)
                        scope.$apply(function () {
                            scope.fileName = e.target.result.split(',')[1];
                            console.log(877, scope.fileName)
                        });
                        var $img = $('<img>').attr({
                            src: file.type == 'application/pdf' ? '/white_label/pdf/pdf_icons.png' : e.target.result,
                            style: "width:100%;height:100%;position:absolute;top:0;left:0;z-index:10;"
                        });
                        $(target).nextAll().remove();
                        $(target).parent().append($img);
                        // 调用签名
                        console.log(123, e.target)
                        console.log(9003, UCloudUFile)
                        // account.getUcloudOss({
                        //   file_name: 'u3ld_' + file.name,
                        //   bucket: 'gloal-image-node2',
                        //   method: 'POST'
                        // }).then(function(data) {
                          // 调用签名接口 + '&file_name=u3ld_' + file.name
                          // var ufile = new UCloudUFile('global-image-node2', 'https://global-image-node2.hk.ufileos.com', '/api/v3/ucloud_oss/sign'+ '?token=' + $cookies['token'] + '&file_name=u3ld_' + file.name);
                          // 调用本地公钥
                          var ufile = new UCloudUFile(
                            'global-image-node2',//存储空间名称
                            'https://global-image-node2.hk.ufileos.com',//存储空间域名
                            'TOKEN_43eb789c-30d3-4db9-806a-6d78f0100b73',//令牌公钥
                            '',//令牌私钥
                            '/api/v3/ufile/sign'+ '?token=' + $cookies['token'],//是否服务端签名(直接输入服务端域名为是服务端签名)
                            ''//令牌配置的前缀
                          )
                          // var requestToken = {
                          //     method: method,
                          //     file: file,
                          //     fileName: fileName,
                          //     putPolicy: putPolicy
                          // };
                          var ufileData = {
                            method: 'PUT',
                            putPolicy: '',
                            // prefix: 'global-image-node2',
                            // marker: '',
                            // limit: 20,
                            // method: 'POST',
                            // putPolicy: '',
                            file: scope.fileName,
                            fileRename: 'u3ld_' + file.name
                          };
                          ufile.uploadFile(ufileData, function(data) {
                            console.log('succ', data)
                          }, function(data) {
                            console.log('err', data)
                          });

                        //   console.log(data)
                        //   var oParams = {
                        //     file: e.target.result,
                        //     fileRename: 'u3ld_' + file.name
                        //     // front: $scope.addressImgFront
                        //     // method: 'POST',
                        //     // bucket: 'global-image-node2',
                        //     // key: 'u3ld_' + file.name,
                        //     // content_md5: '',
                        //     // content_type: 'application/pdf',
                        //     // front_file_name: file.name,
                        //     // back_file_name: 'u3ld_' + file.name,
                        //   };
                        //   $http.post('https://global-image-node2.hk.ufileos.com', oParams ).success(function(response) {
                        //     console.log(data)
                        //   }).error(function() {
                        //     console.log(data)
                        //   });
                          // account.uploadOssFile(oParams).then(function(data) {
                          //   console.log(data)
                          // })

                        // })
                        return

                    };
                    if(file){
                        reader.readAsDataURL(file);
                    }

                }

            }
        };
    }
})();
