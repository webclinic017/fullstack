Vue.validator('noempty', function(val){
    var reg = /^\s*$/g, isFlag = true;
    if (val === "" || reg.test(val)) {
        isFlag = false;
    }
    return  isFlag;
});

Vue.validator('pwdNew', function (val) {
    var invalidMsg = '',
        counter = 0;

    if (!/^[a-zA-Z0-9]{6,15}$/.test(val)) {
        invalidMsg = '位数不正确或者包含非法字符';
    }

    if (val.search(/\d/) !== -1) {
        counter++;
    }

    if (val.search(/[a-zA-Z]/) !== -1) {
        counter++;
    }

    if (counter < 2) {
        invalidMsg = '密码强度过弱';
    }

    if (invalidMsg) {
        console.log(invalidMsg);
        return false;
    } else {
        return true;
    }
});