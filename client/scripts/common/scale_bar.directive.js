;
(function () {
	'use strict';

	angular
		.module('fullstackApp')
		.directive('twScaleBar', twScaleBar);

	twScaleBar.$inject = [];

	function twScaleBar() {
		return {
			restrict: 'A',
			replace: true,
			template: '<div class="scale_bar">'
					+ '<span class="scale_bar__item"></span>'
					+ '<span class="scale_bar__info_multi">多单,{{ bar.symbol_cmd_zore_time | duration }}'
					+ '<i></i>'
					+ '</span>'
					+ '<span class="scale_bar__info_empty">空单,{{ bar.symbol_cmd_one_time | duration }}'
					+ '<i></i>'
					+ '</span>'
					+ '<span class="scale_bar__info">'
					+ '</span>'
					+ '</div>',

			link: function (scope, element, attrs) {
				var el = {
					info: element.find(".scale_bar__info"),
					info_multi: element.find(".scale_bar__info_multi"),
					info_empty: element.find(".scale_bar__info_empty"),
					item: element.find(".scale_bar__item")
				};
				var type = attrs.type;
				// console.info(type);

				scope.$on("rendScaleBars",function(){
                    // console.info(scope.bar);

					if (type === 'masterDetail' || type === 'investDetail') {

						el.item.width(scope.bar.scale + '%');
						el.info_multi.css({
							'left':scope.bar.scale * 2 - 50 + 'px'
						});
						el.info_empty.css({
							'left':scope.bar.scale * 3 +  140 + 'px'
						});
						// el.info_multi.html(scope.bar.number + ' 笔 &nbsp;&nbsp;' + scope.bar.scale + '%' + '<i></i>');
						//el.info.html(scope.bar.number + ' 笔 &nbsp;&nbsp;' + scope.bar.scale + '%');
					}

					/*
					 旧版本scaleBar
					 if (type === 'masterDetail' || type === 'investDetail') {
					 el.item.width(scope.bar.scale + '%');
					 el.info.html(scope.bar.number +' 笔 &nbsp;&nbsp;' + scope.bar.scale + '%');
					 }
					 */
					else if (type === 'spaceSidebar') {
						scope.$watch('personal.infoDegree', function (newVal, oldVal, scope) {
							if (newVal === oldVal) return;
							// console.info(scope.personal);
							el.item.width(scope.personal.infoDegree + '%');
							el.info.html(scope.personal.infoDegree + '%');
						});
					}
				});
			}
		}
	}
})();