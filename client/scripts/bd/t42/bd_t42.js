;(function () {

  $('.bd_t42__details_btn').click(function(){
      layer.open({
          type: 1,
          skin: 'bd_t39_layer bd_t42_layer',
          title: '',
          closeBtn: 0,
          shadeClose: true,
          shade: 0.5,
          area: ['700px', ''],
          content: $('.bd_t39_detail_con.c-1').html()
      });
  });
  $('.bd_t42_rule-1').click(function(){
      layer.open({
          type: 1,
          skin: 'bd_t39_layer bd_t42_layer',
          title: '',
          closeBtn: 0,
          shadeClose: true,
          shade: 0.5,
          area: ['700px', ''],
          content: $('.bd_t39_detail_con.c-2').html()
      });
  });
  $('.bd_t42_rule-2').click(function(){
      layer.open({
          type: 1,
          skin: 'bd_t39_layer bd_t42_layer',
          title: '',
          closeBtn: 0,
          shadeClose: true,
          shade: 0.5,
          area: ['700px', ''],
          content: $('.bd_t39_detail_con.c-3').html()
      });
  });
})();