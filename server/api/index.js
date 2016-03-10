'use strict';

var express = require('express');
var router = express.Router();
var masterApi = require('./master');

// router.get('/get_personal_info', function (req, res) {
//     accountApi.getPersonalInfo(function (data) {
//         if (data.is_succ) {
//             res.json(data);
//         }
//     });
// });

// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
