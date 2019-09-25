;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twSelectList', twSelectList);

    twSelectList.$inject = ['lang'];
    function twSelectList(lang) {
        return {
            restrict : 'EA',
            replace : true,
            transclude : true,
            scope : {
                defaultSelect: '=', // 默认选中值
                defaultSelectKey: '=', // 默认key
                selectDataList: '=selectDataList',  // 数据集如['张三','李四','王五']
                clickChange: '&',   // 选项变化时事件
                disabled: '@'       // 是否显示，支持表达式
            },
            template:    "<div class=\"zero_Spinner\" ng-show=\"selectDataList && selectDataList.length > 0\">" +
                            "<div ng-repeat=\"data in selectDataList\" ng-if=\"data[defaultSelectKey.value] == defaultSelect.id\" class=\"zero_Spinner__title item-center-i\" ng-class=\"{'menu-hide': !showMe}\" ng-click=\"toggle()\">" +
                            "<div class=\"item-center-i\"><span class=\"name\">{{ data[defaultSelectKey.text] || lang.text('tigerWitID.default') }}</span>" +
                            "   <span class=\"z-symbol z-documentary\" ng-if=\"data[defaultSelectKey.type] == 2\">"+ lang.text('tigerWitID.tradingAccount.copyAccount') +"</span>" +
                            "   <span class=\"z-symbol z-superior\" ng-if=\"data[defaultSelectKey.type] == 3\">"+ lang.text('tigerWitID.tradingAccount.masterAccount') +"</span>" + 
                            "</div><i class=\"fa fa-angle-down arrow\"></i></div>" + 
                            "<ul ng-show=\"showMe\" class=\"zero_Spinner__list\">" + 
                            "    <li ng-repeat=\"data in selectDataList\" ng-click=\"clickLi(data[defaultSelectKey.value])\" class=\"zero_Spinner__list-item item-center-i\" ng-class=\"{'active': data[defaultSelect.value] == defaultSelect.id}\">" + 
                            "        <span class=\"name\">{{ data[defaultSelectKey.text] || lang.text('tigerWitID.default') }}</span>" + 
                            "        <span class=\"z-symbol z-documentary\" ng-if=\"data[defaultSelectKey.type] == 2\">"+ lang.text('tigerWitID.tradingAccount.copyAccount') +"</span>" + 
                            "        <span class=\"z-symbol z-superior\" ng-if=\"data[defaultSelectKey.type] == 3\">"+ lang.text('tigerWitID.tradingAccount.masterAccount') +"</span>" + 
                            "    </li>" + 
                            "</ul>" + 
                            "</div>",
            link: function ($scope, $element, $attrs) {

                $scope.showMe = false;
                $scope.disabled = true;

                $scope.toggle = function toggle() {
                    $scope.showMe = !$scope.showMe;
                };

                $scope.clickLi = function clickLi(data_){
                    $scope.defaultSelect.id = data_;
                    $scope.showMe = !$scope.showMe;
                };
                // $scope.$watch('selectDataList', function(value) {
                //     console.log($scope.selectDataList)
                // });
                $scope.$watch('defaultSelect.id', function(n) {
                    if(n){
                        $scope.clickChange();
                    }
                });
                // $scope.$watch( function() {
                //     return $scope.$eval($attrs.setNgAnimate, $scope);
                // }, function(valnew, valold){
                //     $animate.enabled(!!valnew, $element);
                // });
            }
        }
    }
})();