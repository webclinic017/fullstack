;
(function () {
	twH5Loader('img_detect_container', 3, allLoaded)
	function allLoaded() {
		$(function () {
			// 微信分享配置
			if (wx && isTigerCo()) {
				wxShareConfig({
					title: '老虎外汇-四位一体的交易体验',
					subTitle: '老虎外汇-四位一体的交易体验',
					shareLink: window.location.href,
					desc: '选择老虎外汇，资金安全，操作便捷，用户尊享“四位一体”的交易体验，速来注册吧！',
					img: window.location.origin + '/activity/logo.png',
					trackPage: window.location.pathname.replace(/\//gi, ''),
					debug: false
				});
			} else {
				console.log("微信配置错误")
			}

			// 兼容安卓键盘弹出BUG
			debugAndroidKey({
				focusSelector: '.section4 input',
				ctrlBox: '.reg_box',
				focusCss: {
					top: '10%'
				},
				focusFn: function () {
					$('.content').hide(200)
				},
				blurCss: {
					top: '44.5%'
				},
				blurFn: function () {
					$('.content').show(200)
				}
			})

			$('#dowebok').fullpage({
				navigation: true,
				navigationPosition: "right",
				verticalCentered: false,
				afterRender: function () {
					$('.matters_btn').delay(700).fadeIn(800);
					function openLay(which) {
						layer.open({
							shadeClose: true,
							content: $(which).html(),
							style: 'padding:0;width:75%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
						});
						$('.layui-m-layercont').css('padding', 0)
						$.fn.fullpage.setAllowScrolling(false)
					}
					/*页面按钮事件*/
					$(document.body).on("tap", function (e) {
						var action = $(e.target).attr("data-action");
						var targetClass = $(e.target).attr("class");
						if (targetClass == "layui-m-layershade") {
							layer.closeAll();
							$.fn.fullpage.setAllowScrolling(true)
						}
						if (action == 'open-layer') {
							setTimeout(function () {
								openLay("#layer_contentBox")
							}, 10)
						}
						if (action == 'registerNow') {
							$.fn.fullpage.moveTo(4);
						}
						if (action == 'checkNow') {
							$.fn.fullpage.moveTo(2);
						}
					});
				},
				afterLoad: function (anchorLink, index) {
					offsetAction(index)
					if (index == 3){
						$('.section3').find('.animation_box').addClass('animated pulse')
						.find('.animation_item').addClass('animated rollIn').end()
					}
					else if(index == 4) {
						$('.section4').find('.rule_btn').addClass('animated pulse').end()
										.find('.redbag').addClass('animated fadeInLeft')
					}
				},
				onLeave: function (index, direction) {
					if (index != 3) {

					}
				}
			});
		})
	}
}());
