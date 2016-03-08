'use strict';

var express = require('express');
var router = express.Router();

var accountApi = require('./account');
var masterApi = require('./master');


router.get('/get_personal_info', function (req, res) {
    // 获取个人信息
    var personal = {
        username: 'wxl',
        usercode: '23703',
        verified: true
    };
    res.json(personal);
});

router.get('/master/list', function (req, res) {
    masterApi.getMasters(function (data) {
        if (data.is_succ) {
            res.json(data);
        }
    });
});
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
