'use strict';

var express = require('express');
var router = express.Router();

var account = require('./account');
var master = require('./master');


router.get('/get_personal_info', function (req, res) {
    // 获取个人信息
    var personal = {
        username: 'wxl',
        usercode: '23703',
        verified: true
    };
    res.json(personal);
});


// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
