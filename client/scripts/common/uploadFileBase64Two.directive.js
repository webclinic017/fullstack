;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadFileBase64Two', twUploadFileBase64Two);

    twUploadFileBase64Two.$inject = ['$timeout', '$layer'];

    //通过base64上传图片
    function twUploadFileBase64Two($timeout, $layer) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fileName: '=',
                ban: '='
            },
            template: `
                        <input id="input" type="file" accept="image/*">
                    `,
            link: function (scope, element, attrs) {
                $(element).on('change', function (e) {   
                    if(scope.ban){
                        $layer({
                            title: '系统提示',
                            size: 'sm',
                            msgClass: 'font-danger',
                            msg: scope.ban.msg,
                            btns: {
                                '确定': function () {

                                }
                            }
                        })
                        return
                    }
                    var file = e.target.files[0];
                    renderImage(file, this);
                });

                function renderImage (file, target) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        // console.log(e.target.result);
                        
                        scope.$apply(function () {
                            scope.fileName = e.target.result.split(',')[1];
                        });
                        $(target).parent().parent().find('.showImg').attr({
                            src: e.target.result
                        });
                        
                    };
                    reader.readAsDataURL(file);
                }
                
            }
        };
    }
})();