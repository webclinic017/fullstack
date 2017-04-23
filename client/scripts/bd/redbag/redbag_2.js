;
(function () {
    var $btn = $(".bd_redbag_2__detail .btn");
    var $barAmount = $(".bar_box.n1 .bar span");
    var $barVolume = $(".bar_box.n2 .bar span");
    var $barAmountSpeed = $(".bar_box.n1 .cont .speed");
    var $barVolumeSpeed = $(".bar_box.n2 .cont .speed");
    var amount = 0, volume = 0;

    $.get("/action/public/bonus/april", function (data) {
        data = JSON.parse(data);
        if (data.is_succ) {
            amount = data.amount || 0;
            volume = data.volume || 0;
            setBar();
        }
    });

    $btn.on('click', function () {
        var name = $(".bd_redbag_2__detail .username").val();
        var phone = $(".bd_redbag_2__detail .phone").val();
        var email = $(".bd_redbag_2__detail .email").val();

        window.location.href = "/space/#/account/register?name="+name+"&phone="+phone+"&email="+email;
    });

    function setBar() {
        var amountW = amount/5000*100 < 100 ? amount/5000*100+"%" : "100%";
        var volumeW = volume/20*100 < 100 ? volume/20*100+"%" : "100%";
        $barAmount.css("width", amountW);
        $barVolume.css("width", volumeW);
        $barAmountSpeed.html(amount);
        $barVolumeSpeed.html(volume);
    }
}());