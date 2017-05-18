;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadIdCard', ['api', '$cookies', twUploadIdCard]);

    function twUploadIdCard(api, $cookies) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var selector = {
                    fileInput: 'input[type="file"]',
                    img: 'upload_id_card__img',
                };
                var img,
                    imgSrc,
                    fileInput = element.find(selector.fileInput),
                    face = fileInput.attr('data-face');

                var token = $cookies["token"] || '';
                var uploadUrl = api.account.uploadIdCardForm + "?token=" + token;
                // console.log('uploadUrl', uploadUrl);

                fileInput.fileupload({
                    url: uploadUrl,
                    type: 'POST',
                    formData: {
                        face: face
                    },
                    add: function (e, data) {
                        var uploadErrors = [];
                        var acceptFileTypes = /[jpg|png]$/i;

                        console.log(data.originalFiles[0]);
                        if (data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
                            uploadErrors.push('对不起,目前仅支持png和jpg格式图片!');
                        }

                        console.log('当前文件大小' + data.originalFiles[0]['size'] / 1024 + 'KB');

                        /*图片预览*/
                        function uploadPreview() {
                            var reader = new FileReader();
                            reader.readAsDataURL(data.originalFiles[0]);
                            reader.onloadend = function () {
                                var previewImg = $('<img src=' + this.result + '>');
                                previewImg.on('load', function () {
                                    previewImg.css({ width: '100%', marginBottom: '100%', display: 'none' });
                                    element.prepend(previewImg);
                                    previewImg.fadeIn()
                                });
                            };
                        }

                        /*判断大小*/
                        if (data.originalFiles[0]['size'] > 2 * 1024 * 1024) {
                            uploadErrors.push('对不起,暂时不支持大于2M的文件,请压缩后再试!');
                            scope.$emit('uploadIdCardFail', {
                                face: face
                            });
                        } else {
                            uploadPreview();
                        }

                        if (uploadErrors.length > 0) {
                            alert(uploadErrors.join("\n"));
                        } else {
                            data.face = face;
                            /*将利用插件生成的上传控件存入controller*/
                            scope.$emit('saveFile', {
                                target: data
                            });
                            //data.submit();
                        }
                    },
                    done: function (e, data) {
                        console.log(e, data);

                        scope.$emit('uploadIdCardSuccess', {
                            face: face
                        });

                    },
                    fail: function (e, data) {
                        scope.$emit('uploadIdCardFail', {
                            face: face
                        });
                    },
                    send: function () {
                        scope.$emit('uploadIdCardStart', {
                            face: face
                        });
                    }
                });
            }
        };
    }
})();