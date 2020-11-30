;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadFileBase64Three', twUploadFileBase64Three);

    twUploadFileBase64Three.$inject = ['$timeout', 'account', '$http', '$cookies', '$layer', 'lang'];

    //通过base64上传图片
    function twUploadFileBase64Three($timeout, account, $http, $cookies, $layer, lang) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fileName: '=',
                progressIsSucc: '=',
                progressNumber: '='
            },
            template:
                '<input type="file"'+
                        'accept="image/*, application/pdf"'+
                        'style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor:pointer;z-index:20">',
            link: function (scope, element, attrs) {
                // var isPdf = false;
                $(element).on('change', function (e) {
                    var file = e.target.files[0];
                    // if (file.type == 'application/pdf') {
                    //   isPdf = true;
                    // }
                    scope.progressIsSucc = true;
                    renderImage(file, this);
                    e.target.value=''
                });

                function renderImage (file, target) {

                    var reader = new FileReader();
                    var spark = new SparkMD5.ArrayBuffer()
                    reader.onload = function(e) {
                        spark.append(e.target.result);
                        scope.$apply(function () {
                            // scope.fileName = e.target.result.split(',')[1];
                            scope.fileName = 'u3ld_' + file.name
                        });
                        var $img = $('<img>').attr({
                            src: file.type == 'application/pdf' ? '/white_label/pdf/pdf_icons.png' : e.target.result,
                            style: "width:100%;height:100%;position:absolute;top:0;left:0;z-index:10;"
                        });
                        $(target).nextAll().remove();
                        $(target).parent().append($img);

                        // 调用签名
                        var ufile = new UCloudUFile(
                          'global-image-node2',//存储空间名称
                          'https://global-image-node2.hk.ufileos.com',//存储空间域名
                          'TOKEN_43eb789c-30d3-4db9-806a-6d78f0100b73',//令牌公钥
                          '',//令牌私钥
                          '/api/v3/ufile/sign'+ '?token=' + $cookies['token'],//是否服务端签名(直接输入服务端域名为是服务端签名)
                          ''//令牌配置的前缀
                        )
                        var ufileData = {
                          method: 'PUT',
                          file: file,
                          fileRename: 'u3ld_' + file.name
                        };
                        ufile.uploadFile(ufileData, function(data) {
                          // console.log('succ', data)
                          scope.progressIsSucc = false;
                          scope.progressNumber = 0;
                          $scope.$apply();
                        }, function(data) {
                          console.log('err', data)
                          if (data) {
                            $layer({
                              title: lang.text('tigerWitID.depositWithdrawal.notice'),
                              msg: '上传失败',
                              msgClass: 'font-danger'
                            });
                            scope.progressNumber = 0;
                            scope.progressIsSucc = false;
                            // scope.fileName = '';
                            // $(target).parent().children('img').remove();
                            $scope.$apply();
                          }
                          $scope.$apply();
                        }, function(data) {
                          scope.progressNumber = parseInt(parseFloat(data) * 100);
                          $scope.$apply();
                        });
                    };
                    if(file){
                        reader.readAsDataURL(file);
                    }

                }

            }
        };
    }
})();
