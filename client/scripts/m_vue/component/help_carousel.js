/**
 *  通过 Vue.componet 全局注册一 help-carousel组件
 *  接收一个数组用于渲染当前教程的步骤
 */
Vue.component('help-carousel', {
    props: {
        steps: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    template: 
        '<div class="help_carousel_layout">' + 
            '<div class="swiper-container">' +
                '<div class="swiper-wrapper">' +
                    '<div class="swiper-slide" v-for="step in steps" v-cloak>' +
                        '<div class="swiper-slide-content">' +
                            // 当图片数量大于1时 阻止冒泡，让滑动事件不会触发swiper的滑动，让当前图片可滚动
                            '<div class="swiper-slide-content__img_viewer" v-on:touchstart.stop v-if="step.imgSrc.length > 1">' +
                                '<p class="swiper-slide-content__img_viewer-img_box clearfix num{{ step.imgSrc.length }}">' +
                                    '<img v-for="src in step.imgSrc" src="/images/mobile/{{ src }}.png" alt="" class="swiper-slide-content__img_box-img">' +
                                '</p>' +
                            '</div>' +
                            // 当图片数量大于1时 开启冒泡
                            '<div class="swiper-slide-content__img_viewer" v-if="step.imgSrc.length == 1">' +
                                '<p class="swiper-slide-content__img_viewer-img_box clearfix num{{ step.imgSrc.length }}">' +
                                    '<img v-for="src in step.imgSrc" src="/images/mobile/{{ src }}.png" alt="" class="swiper-slide-content__img_box-img">' +
                                '</p>' +
                            '</div>' +
                            '<p class="swiper-slide-content__desp">' +
                                '{{ step.desp }}' +
                            '</p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="swiper-pagination"></div>' +
            '</div>' +
        '</div>'
    ,
    ready: function(){
        console.log('component help-carousel ready');
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // ios边缘拖动探测
            iOSEdgeSwipeDetection : true
        });
    },
    data: function () {
        console.log('component help-carousel data');
        return {
            countDown: this.steps,
        };
    },
    method: function(e){

    }
});