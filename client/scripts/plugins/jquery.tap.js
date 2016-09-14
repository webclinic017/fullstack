/**
 * Author: Sergey Bondarenko (BR0kEN)
 * E-mail: broken@propeople.com.ua
 * Github: https://github.com/BR0kEN-/jTap
 * Updated: June 2, 2014
 * Version: 0.2.9
 */
(function($, _) {
  'use strict';

  /**
   * @param (object) ev - extending object, which contain event properties.
   *  - (string) start - start event depending of @isTap.
   *  - (string) end - start event depending of @isTap.
   */
  var ev = {
    start: 'touchstart mousedown',
    end: 'touchend mouseup'
  };

  $.event.special[_] = {
    setup: function() {
      $(this).off('click').on(ev.start + ' ' + ev.end, function(e) {
        /**
         * Adding jQuery event to @ev object depending of @isTap.
         * 添加jQuery事件@isTap @ev对象不同。
         *
         * Attention: value of this property will change two time
         * per event: first time - on start, second - on end.
         * 注意:这个属性的价值将会改变两个时间/事件:第一次——开始,第二。
         */
        ev.E = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
      }).on(ev.start, function(e) {
        /**
         * Function stop if event is simulate by mouse.
         * 如果事件是由鼠标模拟功能停止。
         */
        if (e.which && e.which !== 1) {
          return;
        }

        /**
         * Extend @ev object from event properties of initial phase.
         * 从初始阶段的事件属性扩展@ev对象。
         */
        ev.target = e.target;
        ev.time = new Date().getTime();
        ev.X = ev.E.pageX;
        ev.Y = ev.E.pageY;
      }).on(ev.end, function(e) {
        /**
         * Compare property values of initial phase with properties
         * of this, final, phase. Execute event if values will be
         * within the acceptable and set new properties for event.
         * 比较属性值与属性的初始阶段,最后的阶段。执行事件如果值将在可接受的和设置新的事件属性
         */
        if (
          ev.target === e.target &&
          ((new Date().getTime() - ev.time) < 300) &&
          (ev.X === ev.E.pageX && ev.Y === ev.E.pageY)
        ) {
          //console.log(new Date().getTime() - ev.time);
          e.type = _;
          e.pageX = ev.E.pageX;
          e.pageY = ev.E.pageY;

          $.event.dispatch.call(this, e);
        }
      });
    },

    /**
     * Disassembling event.
     */
    remove: function() {
      $(this).off(ev.start + ' ' + ev.end);
    }
  };

  $.fn[_] = function(fn) {
    return this[fn ? 'on' : 'trigger'](_, fn);
  };
})(jQuery, 'tap');
