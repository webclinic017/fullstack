;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadIdCard', twUploadIdCard);

    function twUploadIdCard() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var selector = {
                    fileInput: 'input[type="file"]',
                    img: 'upload_id_card__img'
                };
                var img,
                    imgSrc,
                    fileInput = element.find(selector.fileInput),
                    face = fileInput.attr('data-face');

                fileInput.fileupload({
                    url: '/action/public/v4/upload',
                    formData: {
                        face: face
                    },
                    add: function (e, data) {
                        var uploadErrors = [];

                        var acceptFileTypes = /[jpg|png]$/i;

                        console.log(data);
                        if (data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
                            uploadErrors.push('对不起,目前仅支持png和jpg格式图片!');
                        }

                        console.log('当前文件大小' + data.originalFiles[0]['size'] / 1024 + 'KB');

                        if (data.originalFiles[0]['size'] > 2 * 1024 * 1024) {
                            //console.log(1);
                            uploadErrors.push('对不起,暂时不支持大于2M的文件,请压缩后再试!');
                            scope.$emit('uploadIdCardFail', {
                                face: face
                            });
                        }

                        if (uploadErrors.length > 0) {
                            alert(uploadErrors.join("\n"));
                        } else {
                            data.submit();
                        }
                    },
                    done: function (e, data) {

                        //console.log(data);
                        img = element.find('.' + selector.img);
                        imgSrc = data.result.path;
                        //console.log(imgSrc);

                        if (img.length > 0) {
                            img.remove();
                        }
                        element.prepend('<img class="' + selector.img + '" src="' +
                            imgSrc + '?timestamp=' + e.timeStamp + '" alt="证件照片">');

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