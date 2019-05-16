;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadFileBase64', twUploadFileBase64);

    twUploadFileBase64.$inject = ['$timeout'];

    //通过base64上传图片
    function twUploadFileBase64($timeout) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fileName: '='
            },
            template: 
                '<input type="file"'+
                        'accept="image/*"'+
                        'style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0;cursor:pointer;z-index:20">',
            link: function (scope, element, attrs) {
                
                $(element).on('change', function (e) {
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

                        var $img = $('<img>').attr({
                            src: e.target.result,
                            style: "width:100%;height:100%;position:absolute;top:0;left:0;z-index:10"
                        });
                        $(target).nextAll().remove();
                        $(target).parent().append($img);
                        
                    };
                    if(file){
                        reader.readAsDataURL(file);
                    }
                    
                }
                
            }
        };
    }
})();