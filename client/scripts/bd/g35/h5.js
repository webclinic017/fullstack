;(function () {
  var id;
  var offset = 0;
  var maxOffset = $('#register_box').offset().top;
  $('#goToRegister').on('click', function () {
    offset = $(document).scrollTop();
    move();
    return false;
  });
  function move() {
    window.scrollTo(0, offset+=40);
    id = requestAnimationFrame(move);
    if (offset >= maxOffset - 40) cancelAnimationFrame(id);
  }
})();