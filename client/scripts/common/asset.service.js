;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('asset', asset);

    asset.$inject = ['$http'];

    function asset($http) {
        var service = {
            withdraw: withdraw,
            getCard: getCard,
            bindCard: bindCard,
            cancelWithdraw: cancelWithdraw,
            getHistory: getHistory,
            deposit: deposit,
            getDepositLimit: getDepositLimit,
            getFXRate: getFXRate,
            getBonus: getBonus,
            getBonusList: getBonusList,
            getBonusDetail: getBonusDetail,
            getCopyMyDetail: getCopyMyDetail
        };
        return service;

        /**
         * Asset Service 出金
         *
         * @method withdraw
         * @param {String} amount 出金金额
         * @param {Number} cardId 出金银行卡的 id
         */
        function withdraw(amount, cardId) {
            amount = Number(amount).toFixed(2);

            return $http.post('/api/v3/withdraw', {
                amount: amount,
                id: cardId
            });
        }


        /**
         * Asset Service 获取绑定的银行卡信息
         *
         * @method getCard
         */
        function getCard() {
            return $http.post('/api/v3/binding_bankcard', {
                act: 'query'
            });
        }

        /**
         * Asset Service 绑定银行卡
         *
         * @method bindCard
         */
        function bindCard(number, name, address, id) {
            return $http.post('/api/v3/binding_bankcard', {
                card_id: number,
                bank_name: name,
                bank_addr: address,
                id: id
            });
        }


        /**
         * Asset Service 撤消出金申请
         *
         * @method cancelWithdraw
         * @param {Number} code 出入金历史纪录的编号
         */
        function cancelWithdraw(code) {
            return $http.post('/api/v1/cancel_withdraw', {
                order_no: code
            });
        }

        /**
         * Asset Service 获取出入金历史
         *
         * @method getHistory
         * @return {Object} {
         *   status: 2          // 2 入金到三方支付后未完成
         *                      // 4 入金成功
         *                      // 5 开户赠金
         *                      // -1 出金申请已提交（服务人员开始处理，此时可以撤销申请）
         *                      // -2 出金申请已撤销
         *                      // -5 出金成功
         * }
         */
        function getHistory(page, pagesize) {
            return $http.get('/api/v3/pay_history', {
                params: {
                    page: page,
                    pagesize: pagesize
                }
            }).then(function (data) {
                // 要返回的历史记录
                var records = [];

                angular.forEach(data.data, function (item) {
                    var record = {};

                    record.amount = item.amount;
                    record.status = item.status;
                    record.timestamp = item.order_date;
                    record.code = item.order_no;

                    this.push(record);
                }, records);

                return {
                    records: records,
                    sum: data.sum
                };
            });
        }

        /**
         * Asset Service 入金
         *
         * @method deposit
         */
        function deposit(amount) {
            return $http.get('/api/v1/pay', {
                params: {
                    amount: amount
                }
            });
        }

        /**
         * Asset Service 获取入金金额最小限制
         *
         * @method getDepositLimit
         */
        function getDepositLimit() {
            return $http.get('/api/v1/pay_limit');
        }

        /**
         * Asset Service 获取美元对人民币汇率
         *
         * @method getFXRate
         */
        function getFXRate() {
            return $http.get('/api/v1/get_parity');
        }

        /**
         * Asset Service 获取分成信息概况
         *
         * @method getBonus
         */
        function getBonus() {
            return $http.get('/action/public/v4/get_copy_data');
        }

        /**
         * Asset Service 获取我的分成列表
         *
         * @method getBonusList
         */
        function getBonusList(date) {
            return $http.post('/action/public/v3/get_bonus_list', {
                month: date
            });
        }

        /**
         * Asset Service 获取分成详情
         *
         * @method getBonusDetail
         *
         */
        function getBonusDetail(date, usercode, page, pagesize) {
            return $http.get('/action/public/v4/get_bonus_list', {
                params: {
                    date: date,
                    usercode: usercode,
                    page: page,
                    pagesize: pagesize
                }
            });
        }

        /**
         * Asset Service 获取复制我的 详情
         *
         * @method getCopyMyDetail
         *
         */

        function getCopyMyDetail() {
            return $http.get('/action/public/v4/copy_my');
        }

    }
})();
