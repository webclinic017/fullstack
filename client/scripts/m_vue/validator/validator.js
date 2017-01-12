Vue.validator('noempty', function (val) {
    var reg = /^\s*$/g, isFlag = true;
    if (val === "" || reg.test(val)) {
        isFlag = false;
    }
    return isFlag;
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

Vue.validator('phoneErr', function (val) {
    var isMobile = /^(13|14|15|17|18)\d{9}$/;
    var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;

    if (isMobile.test(val)) {
        return true;
    } else {
        return false;
    }
});

Vue.validator('email', function (val) {
    var reg = /^([a-z0-9+_-]+)(.[a-z0-9+_-]+)*@([a-z0-9-]+.)+[a-z]{2,6}$/i;

    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
});