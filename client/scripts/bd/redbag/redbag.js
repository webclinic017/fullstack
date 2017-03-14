;
(function () {
    var isLogin = false;
    var $sectionBtn = $('.section_btn');
    var $remark = $(".section1 .remark");
    var $static = $('.section1 .static');
    var $tipBtn = $static.find(".tip");

    $('#dowebok').fullpage({
        navigation: true,
        navigationColor: "#fff",
        navigationPosition: "right",
        // sectionsColor: [],
        verticalCentered: false,
        easing: 'easeInQuart',
        effect: {
            transform: {
                translate: 'Y',
                scale: [1, 1],
                rotate: [0, 0]
            },
            opacity: [0, 1]
        },
        // afterLoad: function (link, index) {
        //     console.log(link, index);
        //     if (index === 1) {
        //         activePage();
        //     }
        // }
    });
    setTimeout(function () {
        activePage();
    }, 50);

    var userCode = $.cookie('user_code');
    // console.log(userCode);
    if (userCode) {
        isLogin = true;
        $sectionBtn.find("span").html("马上查看红包");
    }

    $remark.on('click', function (event) {
        event.stopPropagation();
    });
    $tipBtn.on('click', function (event) {
        event.stopPropagation();
        $static.addClass('animated fadeOut');
        $remark.css({display: 'block'});
    });

    $('.section1').on('click', function () {
        $remark.css({display: 'none'});
        $static.removeClass('animated fadeOut');
    });

    $('.section_btn').on('click', function (e) {
        if (!isLogin) {
            $.fn.fullpage.moveTo(5);
            return false;
        }
    });

    function activePage () {
        $static.find(".title").addClass("animated bounceIn");
    }
}());