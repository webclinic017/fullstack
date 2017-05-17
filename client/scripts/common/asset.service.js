;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('asset', asset);

    asset.$inject = ['$http', 'api', 'publicHttp'];

    function asset($http, api, publicHttp) {
        var o = api.asset;
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
            getBonusDetailList: getBonusDetailList,
            walletDeposit: walletDeposit,
            walletWithdraw: walletWithdraw,
            walletCanWithdraw: walletCanWithdraw
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

            return publicHttp.dealPublicRequest(o.withdrawApi, 'POST', {
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
            return publicHttp.dealPublicRequest(o.getCardApi, 'GET');
        }

        /**
         * Asset Service 绑定银行卡
         *
         * @method bindCard
         */
        function bindCard(number, name, address, province, city, id) {
            return publicHttp.dealPublicRequest(o.bindCardApi, 'PUT', {
                card_no: number,
                bank_name: name,
                bank_addr: address,
                province: province,
                city: city,
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
            return $http.post(o.cancelWithdrawApi, {
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
            return $http.get(o.getHistoryApi, {
                params: {
                    page: page,
                    pagesize: pagesize
                }
            }).then(function (data) {
                // 要返回的历史记录
                var records = [];
                //console.log(data);

                angular.forEach(data.data, function (item) {
                    var record = {};

                    record.amount = item.amount;
                    record.status = item.status;
                    record.timestamp = item.order_date;
                    record.code = item.order_no;
                    record.status_desc = item.status_desc;
                    record.status_explain = item.status_explain;
                    record.type = item.type;
                    record.pay_again = item.pay_again;
                    record.withdraw = item.withdraw;

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
            return $http.get(o.depositApi, {
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
            return $http.get(o.getDepositLimitApi);
        }

        /**
         * Asset Service 获取美元对人民币汇率
         *
         * @method getFXRate
         */
        function getFXRate() {
            return publicHttp.dealPublicRequest(o.getFXRateApi, 'GET');
        }

        /**
         * Asset Service 获取是否可以出金
         *
         * @method getIsWithdraw
         *
         */

        function getIsWithdraw (amount) {
            // console.info('getIsWithdraw is sending', amount);
            return publicHttp.dealPublicRequest(o.getIsWithdrawApi, 'GET', {
                amount: amount
            });
        }

        /**
         * Asset Service 获取高手分成数据总览
         *
         * @method getMasterBonusSummary
         */
        function getMasterBonusSummary() {
            return $http.get(o.getMasterBonusSummaryApi);
        }

        /**
         * Asset Service 获取复制者分成数据总览
         *
         * @method getCopierBonusSummary
         */
        function getCopierBonusSummary() {
            return $http.get(o.getCopierBonusSummaryApi);
        }

        /**
         * Asset Service 获取高手分成列表
         *
         * @method getMasterBonusList
         */
        function getMasterBonusList(pay_zone) {
            return $http.get(o.getMasterBonusListApi, {
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
            return $http.get(o.getCopierBonusListApi, {
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
            return $http.get(o.getBonusDetailListApi, {
                params: {
                    ticket_noob: ticket_noob,
                    mt4_from: mt4_from,
                    mt4_to: mt4_to
                }
            });
        }

        /**
         * Asset Service 零钱包入金
         *
         * @method walletDeposit
         * @param {Number} amount
         */
        function walletDeposit(amount) {
            return publicHttp.dealPublicRequest(o.walletDepositApi, 'POST', {
                amount: amount
            });
        }

        /**
         * Asset Service 零钱包出金
         *
         * @method walletWithdraw
         * @param {Number} amount
         */
        function walletWithdraw(amount) {
            return publicHttp.dealPublicRequest(o.walletWithdrawApi, 'POST', {
                amount: amount
            });
        }

        /**
         * Asset Service 获取零钱包可出金金额
         *
         * @method walletCanWithdraw
         * 
         */
        function walletCanWithdraw() {
            return publicHttp.dealPublicRequest(o.walletCanWithdrawApi, 'GET');
        }
    }
})();
