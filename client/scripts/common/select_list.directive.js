;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twSelectList', twSelectList);

    function twSelectList($document) {
        return {
            restrict : 'EA',
            replace : true,
            transclude : true,
            scope : {
                defaultSelect: '=', // 默认选中值
                selectDataList: '=selectDataList',  // 数据集如['张三','李四','王五']
                clickChange: '&',   // 选项变化时事件
                disabled: '@'       // 是否显示，支持表达式
            },
            template:  `<div class="ddl" ng-show="disabled">
                            <div ng-repeat="data in selectDataList" ng-if="data[defaultSelect.value] === defaultSelect.id" class="ddlTitle" ng-click="toggle()"><span ng-bind="data[defaultSelect.text]"></span><i class="fa fa-angle-down ddli"></i></div>
                            <ul ng-show="showMe">
                                <li ng-repeat="data in selectDataList" ng-click="clickLi(\'{{data}}\')">{{data.account_name}}</li>
                            </ul>
                        </div>`,
            link: function ($scope, $element, $attrs) {
                console.log($scope.selectDataList)
                // for(data in $scope.selectDataList){
                //     console.log(data[defauitSelect.value])
                // }
                $scope.showMe = false;
                $scope.disabled = true;

                $scope.toggle = function toggle() {
                    $scope.showMe = !$scope.showMe;
                };

                $scope.clickLi=function clickLi(data_){
                    $scope.defaultSelect=data_;
                    $scope.showMe = !$scope.showMe;
                };

                $scope.$watch('defaultSelect', function(value) {
                    $scope.clickChange();
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