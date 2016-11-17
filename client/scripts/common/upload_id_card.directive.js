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
                    done: function (e, data) {

                        img = element.find('.'+selector.img);
                        imgSrc = data.result.path;

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