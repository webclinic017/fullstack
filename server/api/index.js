'use strict';

var express = require('express');
var router = express.Router();
var accountApi = require('./account');
var masterApi = require('./master');


/**
 * account   
 */
router.get('/account/checkLogined', function (req, res) {
    accountApi.checkLogined(function (data) {
        if (data.is_succ) {
            res.json(data);
        }
    });
});

router.get('/account/get_personal_info', function (req, res) {
    accountApi.getPersonalInfo(function (data) {
        if (data.is_succ) {
            res.json(data);
        }
    });
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
