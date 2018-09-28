;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twDatePicker', twDatePicker);

        twDatePicker.$inject = ['$timeout', 'lang'];    

    function twDatePicker($timeout, lang) {
        return {
            restrict: 'A',
            scope: {
                bindModel: '='
            },
            link: function (scope, element, attrs) {
                // 保证定位准确
                jQuery(document.body).css('position', 'relative')

                $.fn.datepicker.dates['zh-CN'] = {
                    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                    daysMin:  ["日", "一", "二", "三", "四", "五", "六"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    monthsShort:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    today: "今日",
                    clear: "清除",
                    format: "yyyy年mm月dd日",
                    titleFormat: "yyyy年mm月",
                    weekStart: 1
                };

                var dateFormatter = {
                    day: "yyyy-mm-dd",
                    month: "yyyy-mm"
                }
                
                var options = {
                    language: lang.isEnglish() ? '' : "zh-CN",
                    autoclose: true,
                    clearBtn: attrs.clearBtn == 'false' ? false : true,
                    startView: 2,
                    format: dateFormatter[attrs.type],
                    orientation: attrs.orientation || undefined
                }

                // 判断 type
                if (attrs.type == 'day') {
                    
                }
                else if (attrs.type == 'month') {
                    options = {
                        language: lang.isEnglish() ? '' : "zh-CN",
                        startView: 2,
                        maxViewMode: 2,
                        minViewMode:1,
                        orientation: "auto",
                        autoclose: true,
                        clearBtn: true
                    }
                }

                // 生成日期选择器
                $(element).datepicker(options)
                .on('changeDate', function (e) {
                    // console.info(e);
                    var date = e.format(attrs.formatter || dateFormatter[attrs.type]);
                    console.log('Transfer date formate: ', date)
                    scope.$apply(function () {
                        scope["bindModel"] = date;
                    });
                    scope.$emit('twDatePicker.changeDate', date)
                });

                element.on('keydown', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                });
            }
        }
    }
})();