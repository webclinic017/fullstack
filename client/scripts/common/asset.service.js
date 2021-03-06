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
            bindCardPhone: bindCardPhone,
            deleteCard: deleteCard,
            getCardList: getCardList,
            cancelWithdraw: cancelWithdraw,
            getHistory: getHistory,
            deposit: deposit,
            getDepositLimit: getDepositLimit,
            getDepositPlatform: getDepositPlatform,
            getWithdrawPlatform: getWithdrawPlatform,
            getFXRate: getFXRate,
            getIsWithdraw: getIsWithdraw,
            getMasterBonusSummary: getMasterBonusSummary,
            getCopierBonusSummary: getCopierBonusSummary,
            getMasterBonusList: getMasterBonusList,
            getCopierBonusList: getCopierBonusList,
            getBonusDetailList: getBonusDetailList,
            walletDeposit: walletDeposit,
            walletWithdraw: walletWithdraw,
            walletCanWithdraw: walletCanWithdraw,
            walletbalance: walletbalance,
            getBanks: getBanks,
            teleDeposit: teleDeposit,
            uploadPaymentEvidence: uploadPaymentEvidence,
            getPaymentEvidence: getPaymentEvidence,
            cancelPaymentEvidence: cancelPaymentEvidence,
            checkEvidenceStatus: checkEvidenceStatus,
            checkInvestBank: checkInvestBank,
            bindInvestBank: bindInvestBank,
            getDefaultThirdAccount: getDefaultThirdAccount,
            getThirdPlatforms: getThirdPlatforms,
            setThirdBindAccount: setThirdBindAccount,
            getThirdAccountList: getThirdAccountList,
            destroyThirdAccount: destroyThirdAccount
        };
        return service;

        /**
         * Asset Service 出金
         *
         * @method withdraw
         * @param {String} amount 出金金额
         * @param {Number} cardId 出金银行卡的 id
         * @param {String} cse_account CSE账号
         */
        function withdraw(params) {
            return publicHttp.dealPublicRequest(o.withdrawApi, 'POST', params);
        }


        /**
         * Asset Service 获取绑定卡信息
         *
         * @method getCard
         * 0：银行账户 2：电汇账户，传2
         */
        function getCard(params) {
            return publicHttp.dealPublicRequest(o.getCardApi, 'GET', params);
        }

        /**
         * Asset Service 绑定银行卡
         *
         * @method bindCard
         * 0：银行账户 2：电汇账户，传2
         */
        function bindCard(oParams) {
            return publicHttp.dealPublicRequest(o.bindCardApi, 'PUT', oParams);
        }

        /**
         * 绑定银行卡手机号
         */
        function bindCardPhone(id, phone) {
            return publicHttp.dealPublicRequest(o.bindCardPhoneApi, 'POST', {
                id: id,
                phone: phone
            });
        }

        /**
         * Asset Service 获取银行卡list
         * 0：银行账户 2：电汇账户，传2
         *
         * @method getCardList
         */
        function getCardList(params) {
            return publicHttp.dealPublicRequest(o.getCardListApi, 'GET', params);
        }

        /**
         * Asset Service 删除银行卡
         * 0：银行账户 2：电汇账户，传2
         *
         * @method deleteCard
         */
        function deleteCard(id, type) {
            return publicHttp.dealPublicRequest(o.deleteCardApi, 'POST', {
                id: id,
                type: type
            });
        }


        /**
         * Asset Service 撤消出金申请
         *
         * @method cancelWithdraw
         * @param {Number} id 出入金历史纪录的编号
         */
        function cancelWithdraw(id) {
            return publicHttp.dealPublicRequest(o.cancelWithdrawApi, 'PUT', {
                id: id
            });
        }

        /**
         * Asset Service 获取出入金历史
         *  @params direction 0全部，1入金，-1出金
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
        function getHistory(mt4_id, offset, limit) {
            return publicHttp.dealPublicRequest(o.getHistoryApi, 'GET', {
                mt4_id: mt4_id,
                direction: 0,
                offset: offset,
                limit: limit
            });
        }

        /**
         * Asset Service 入金
         *
         * @method deposit
         *      
         * @params platform   支付宝入金 -> 4
         */
        function deposit(amount, platform, currency, mt4_id, cardId, safetyCode) {
            return publicHttp.dealPublicRequest(o.depositApi, 'POST', {
                amount: amount,
                platform: platform,
                currency: currency,
                mt4_id: mt4_id,
                bank_card_id: cardId,
                card_security_code: safetyCode
            });
        }

        /**
         * Asset Service 获取入金金额最小限制
         *
         * @method getDepositLimit
         */
        function getDepositLimit() {
            return publicHttp.dealPublicRequest(o.getDepositLimitApi, 'GET');
        }

        /**
         * Asset Service 获取入金平台等信息
         *
         * @method getDepositPlatform
         */
        function getDepositPlatform () {
            return publicHttp.dealPublicRequest(o.getDepositPlatformApi, 'GET');
        }

        /**
         * Asset Service 获取出金方式列表
         *
         * @method getWithdrawPlatform
         */
        function getWithdrawPlatform () {
            return publicHttp.dealPublicRequest(o.getWithdrawPlatformApi, 'GET');
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

        function getIsWithdraw (amount, mt4_id, bank_card_id, third_account) {
            // console.info('getIsWithdraw is sending', amount);
            return publicHttp.dealPublicRequest(o.getIsWithdrawApi, 'GET', {
                amount: amount,
                mt4_id: mt4_id,
                bank_card_id: bank_card_id,
                third_account: third_account
            });
        }

        /**
         * Asset Service 获取高手分成数据总览
         *
         * @method getMasterBonusSummary
         */
        function getMasterBonusSummary(mt4_id) {
            return publicHttp.dealPublicRequest(o.getMasterBonusSummaryApi, 'GET', {
                mt4_id: mt4_id
            });
        }

        /**
         * Asset Service 获取复制者分成数据总览
         *
         * @method getCopierBonusSummary
         */
        function getCopierBonusSummary(mt4_id) {
            return publicHttp.dealPublicRequest(o.getCopierBonusSummaryApi, 'GET', {
                mt4_id: mt4_id
            });
        }

        /**
         * Asset Service 获取高手分成列表
         *
         * @method getMasterBonusList
         */
        function getMasterBonusList(mt4_id, pay_zone, offset, limit) {
            return publicHttp.dealPublicRequest(o.getMasterBonusListApi, 'GET', {
                mt4_id: mt4_id,
                pay_zone: pay_zone,
                offset: offset,
                limit: limit
            });
        }

        /**
         * Asset Service 获取高手分成列表
         *
         * @method getCopierBonusList
         */
        function getCopierBonusList(mt4_id,pay_zone, offset, limit) {
            return publicHttp.dealPublicRequest(o.getCopierBonusListApi, 'GET', {
                mt4_id: mt4_id,
                pay_zone: pay_zone,
                offset: offset,
                limit: limit
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
            return publicHttp.dealPublicRequest(o.getBonusDetailListApi, 'GET', {
                ticket_noob: ticket_noob,
                mt4_from: mt4_from,
                mt4_to: mt4_to
            });
        }

        /**
         * Asset Service 钱包入金
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
         * Asset Service 钱包出金
         *
         * @method walletWithdraw
         * @param {Number} amount
         */
        function walletWithdraw(params) {
            return publicHttp.dealPublicRequest(o.walletWithdrawApi, 'POST', params);
        }

        /**
         * Asset Service 获取钱包可出金金额
         *
         * @method walletCanWithdraw
         * 
         */
        function walletCanWithdraw() {
            return publicHttp.dealPublicRequest(o.walletCanWithdrawApi, 'GET');
        }

        /**
         * Asset Service 获取钱包余额
         *
         * @method walletbalance
         * 
         */
        function walletbalance() {
            return publicHttp.dealPublicRequest(o.walletbalanceApi, 'GET');
        }

        /**
         * Asset Service 获取银行列表
         *
         * @method getBanks
         * 
         */
        function getBanks(params) {
            return publicHttp.dealPublicRequest(o.getBanksApi, 'GET', params);
        }

        /**
         * Asset Service 电汇入金
         *
         * @method teleDeposit
         * @param {Number} amount
         * @param {Number} file  (base64编码)
         */
        function teleDeposit(amount, file, mt4_id) {
            return publicHttp.dealPublicRequest(o.teleDepositApi, 'POST', {
                amount: amount,
                file: file,
                mt4_id: mt4_id
            });
        } 

        /**
         * Asset Service 入金凭证
         *
         * @method uploadPaymentEvidence
         * @param {Number} file  (base64编码)
         * @param {Number} id  记录ID
         */
        function uploadPaymentEvidence(file, id) {
            return publicHttp.dealPublicRequest(o.uploadPaymentEvidenceApi, 'POST', {
                file: file,
                id: id
            });
        }
        /**
         * Asset Service 入金凭证列表
         *
         * @method getPaymentEvidence
         * @param {Number} status  状态0不需要上传,1需要上传(默认)，2待审核
         */
        function getPaymentEvidence(status) {
            return publicHttp.dealPublicRequest(o.getPaymentEvidenceApi, 'GET', {
                status: status,
                offset: 0,
                limit: 1000
            });
        }
        /**
         * Asset Service 取消
         *
         * @method cancelPaymentEvidence
         * @param {Number} id  记录ID
         */
        function cancelPaymentEvidence(id) {
            return publicHttp.dealPublicRequest(o.cancelPaymentEvidenceApi, 'POST', {
                id: id
            });
        }

        /**
         * Asset Service 检查入金凭证状态
         *
         * @method checkEvidenceStatus
         * 
         */
        function checkEvidenceStatus () {
            return publicHttp.dealPublicRequest(o.checkEvidenceStatusApi, 'GET');
        }

        /**
         * Asset Service 获取用户绑定网银入金银行卡号
         *
         * @method checkInvestBank
         * 
         */
        function checkInvestBank () {
            return publicHttp.dealPublicRequest(o.checkInvestBankApi, 'GET');
        }

        /**
         * Asset Service 绑定入金银行卡号
         *
         * @method bindInvestBank
         * 
         */
        function bindInvestBank (depositCard) {
            return publicHttp.dealPublicRequest(o.checkInvestBankApi, 'PUT', {
                card_no: depositCard
            });
        }
        /**
         * Asset Service 获取默认第三方账号
         *
         * @method getDefaultThirdAccount
         * 
         */
        function getDefaultThirdAccount () {
            return publicHttp.dealPublicRequest(o.getDefaultThirdAccountApi, 'GET', {});
        }
        /**
         * Asset Service 获取用户可添加的第三方平台类型
         *
         * @method getThirdPlatforms
         * 
         */
        function getThirdPlatforms () {
            return publicHttp.dealPublicRequest(o.getThirdPlatformsApi, 'GET');
        }
        /**
         * Asset Service 绑定第三方账户
         *
         * @method setThirdBindAccount
         * 
         */
        function setThirdBindAccount (param) {
            return publicHttp.dealPublicRequest(o.setThirdBindAccountApi, 'POST', param);
        }
        /**
         * Asset Service 获取用户绑定的第三方账户
         *
         * @method getThirdAccountList
         * 
         */
        function getThirdAccountList (param) {
            return publicHttp.dealPublicRequest(o.getThirdAccountListApi, 'GET', param);
        }
        /**
         * Asset Service 删除第三方账户
         *
         * @method destroyThirdAccount
         * 
         */
        function destroyThirdAccount (param) {
            return publicHttp.dealPublicRequest(o.destroyThirdAccountApi, 'POST', param);
        }
    }
})();
