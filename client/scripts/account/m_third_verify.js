$(document).ready(function () {

    var $inp = $(".m_third_verify__test input");

     function preview1(file) {
        var img = new Image(), url = img.src = URL.createObjectURL(file)
        var $img = $(img)
        img.onload = function() {
            URL.revokeObjectURL(url)
            $('.m_third_verify__test-pic').empty().append($img)
        };
    }
    function preview2(file) {
        var reader = new FileReader()
        reader.onload = function(e) {
            var $img = $('<img>').attr("src", e.target.result)
            $('.m_third_verify__test-pic').empty().append($img)
        }
        reader.readAsDataURL(file)
    }

    $inp.change(function(e) {
        var file = e.target.files[0];
        preview1(file);
    });
    var origin = $.cookie("access_origin2") || '';
    var token = $.cookie("token") || '';

    $(".m_third_verify__btn").on("click", function () {
        var oMyForm = new FormData($(".m_third_verify__test .form" )[0]);
        // var file = $inp[0];

        oMyForm.append("face", "front");
        // oMyForm.append("file", file);
        // console.log(oMyForm.get("face"));
        // console.log(oMyForm.get("file"));

        $.ajax({
            url: origin+'/user/upload_id_card?token='+token,
            type: 'POST',
            xhrFields: {
                withCredentials: true
　　　　　　  },
            data: oMyForm,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                alert(1);
            },
            error: function (err) {
                console.log(err);
                alert(2);
            }
        });
    });

});