;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadFileBase64Two', twUploadFileBase64Two);

    twUploadFileBase64Two.$inject = ['$timeout', '$layer', 'lang'];

    //通过base64上传图片
    function twUploadFileBase64Two($timeout, $layer, lang) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fileName: '=',
                ban: '='
            },
            template: "<input id='input' type='file' accept='image/*'>",
            link: function (scope, element, attrs) {
                $(element).on('change', function (e) {   
                    if(scope.ban){
                        var obj = {
                            title: lang.text('tigerWitID.systemPrompt'),
                            size: 'sm',
                            msgClass: 'font-danger',
                            msg: scope.ban.msg,
                            btns: {}
                        }
                        obj.btns[lang.text("tigerWitID.confirm")] = function(){}
                        $layer(obj)
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