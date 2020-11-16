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

                    reader.onload = function(e) {
                        // console.log(e.target.result);

                        scope.$apply(function () {
                            scope.fileName = e.target.result.split(',')[1];
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
                          // 调用签名接口
                          // var ufile = new UCloudUFile('global-image-node2', 'https://global-image-node2.hk.ufileos.com', '/api/v3/ucloud_oss/sign'+ '?token=' + $cookies['token'] + '&file_name=u3ld_' + file.name);
                          // 调用本地公钥
                          var ufile = new UCloudUFile(
                            'global-image-node2',//存储空间名称
                            'https://global-image-node2.hk.ufileos.com',//存储空间域名
                            'TOKEN_6cd82940-b90f-48c7-ac96-9ac5da6e72b0',//令牌公钥
                            '3607e1f9-4bfa-4f3e-93fb-f54398c08190',//令牌私钥
                            false,//是否服务端签名(直接输入服务端域名为是服务端签名)
                            'u3ld_'//令牌配置的前缀
                          )
                          var ufileData = {
                              // prefix: 'global-image-node2',
                              // marker: '',
                              // limit: 20
                            file: e.target.result,
                            fileRename: 'u3ld_' + file.name
                          };
                          ufile.getFileList(ufileData, function(data) {
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
