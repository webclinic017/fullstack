;
(function () {
	twH5Loader('img_detect_container', 3, allLoaded)
	function allLoaded() {
		$(function () {
			// 微信分享配置
			if (wx && isTigerCo()) {
				wxShareConfig({
					title: '外汇超级行情来袭，老虎外汇送你1000美金给你',
					subTitle: '外汇超级行情来袭，老虎外汇送你1000美金给你',
					shareLink: window.location.href,
					desc: '外汇投资选老虎，人人都是投资高手，一键跟单简单粗暴，老虎高手带你轻松赚钱！！',
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

			function activePage1() {
				$('.section1').find('.text').addClass('animated flip')
			}

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
					activePage1()
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
					if (index == 1) {
						$('.section1').find('.text').addClass('animated zoomInDown')
					}
					else if (index == 2) {
						$('.section2').find('.animation_item').each(function (index, item) {
							(function (index, item) {
								setTimeout(function () {
									$(item).addClass('animated flip')
								}, index * 200)
							}(index, item))
						})
					}
					else if (index == 3){
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
