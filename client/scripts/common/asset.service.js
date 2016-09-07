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
            getIsWithdraw: getIsWithdraw,
            getMasterBonusSummary: getMasterBonusSummary,
            getCopierBonusSummary: getCopierBonusSummary,
            getMasterBonusList: getMasterBonusList,
            getCopierBonusList: getCopierBonusList,
            getBonusDetailList: getBonusDetailList
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

            return $http.post('/action/public/v4/withdraw', {
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
            return $http.get('/action/public/v4/query_bankcard');
        }

        /**
         * Asset Service 绑定银行卡
         *
         * @method bindCard
         */
        function bindCard(number, name, address, id) {
            return $http.post('/action/public/v4/binding_bankcard', {
                card_no: number,
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
            return $http.get('/action/public/v4/pay_history', {
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
        function deposit(mt4_id, amount) {
            return $http.get('/action/public/v4/pay', {
                params: {
                    mt4_id: mt4_id,
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
            return $http.get('/action/public/v4/pay_limit');
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
         * Asset Service 获取是否可以出金
         *
         * @method getIsWithdraw
         *
         */

        function getIsWithdraw (amount) {
            console.info('getIsWithdraw is sending', amount);
            return $http.get("/action/public/v4/check_withdraw",{
              params : {
                         amount : amount
                       }
            });
        }

        /**
         * Asset Service 获取高手分成数据总览
         *
         * @method getMasterBonusSummary
         */
        function getMasterBonusSummary() {
            return $http.get('/action/public/v4/master/profile');
        }

        /**
         * Asset Service 获取复制者分成数据总览
         *
         * @method getCopierBonusSummary
         */
        function getCopierBonusSummary() {
            return $http.get('/action/public/v4/copier/profile');
        }

        /**
         * Asset Service 获取高手分成列表
         *
         * @method getMasterBonusList
         */
        function getMasterBonusList(pay_zone) {
            return $http.get('/action/public/v4/master/copy_pay_list', {
                params: {
                    pay_zone: pay_zone
                }
            });
        }

        /**
         * Asset Service 获取高手分成列表
         *
         * @method getCopierBonusList
         */
        function getCopierBonusList(pay_zone) {
            return $http.get('/action/public/v4/copier/copy_pay_list', {
                params: {
                    pay_zone: pay_zone
                }
            });
        }

        /**
         * Asset Service 获取分成结算订单详情列表
         *
         * @method getBonusDetailList
         *
         * @params ticket_noob 复制者分成结算订单id 
         * @params mt4_from 高手MT4 
         * @params mt4_to 复制者MT4 
         *
         */
        function getBonusDetailList(ticket_noob, mt4_from, mt4_to) {
            return $http.get('/action/public/v4/copy_pay_trade_list', {
                params: {
                    ticket_noob: ticket_noob,
                    mt4_from: mt4_from,
                    mt4_to: mt4_to
                }
            });
        }
    }
})();
