/**
 * 包含如何实名认证、什么是零钱包、红包相关教程、如何邀请好友
 */
if ($(".m_vue").attr("data-type") === "carousel") {
    var helpSelfApp = new Vue({
        el: '#helpCarousel',
        data: function () {
            var cn = $.cookie('company_name');
            return {
                authen: [
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_authen-step1', 'help_authen-step2'] : ['help_authen-pandafx-step1', 'help_authen-pandafx-step2'],
                        desp: '1. 点击资金操作后未认证会进入认证页面，先填写“投资信息确认”。'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_authen-step3'] : ['help_authen-pandafx-step3'],
                        desp: '2. “投资信息确认”页面完成后，进入“个人资料”页面。'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_authen-step4'] : ['help_authen-pandafx-step4'],
                        desp: '3. “完善个人资料”填好之后，进入“认证信息”页面，按要求上传身份证。'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_authen-step5'] : ['help_authen-pandafx-step5'],
                        desp: '4. “认证信息”完成后，提交审核即可，等待认证审核。'
                    },
                ],
                invite: [
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_invite-step1'] : ['help_invite-pandafx-step1'],
                        desp: '1登陆后点击”我的”模块，选择进入” 邀请好友”'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_invite-step2.1'] : ['help_invite-pandafx-step2.1'],
                        desp: '2. 进入好友邀请页面，点击“发送邀请给链接”，分享给微信好友，或是QQ好友即可；通过链接新注册的用户，会自动计入“已邀请人数”'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_invite-step2.2'] : ['help_invite-pandafx-step2.2'],
                        desp: '3. 用户邀请3名好友，且有至少1人入金完成1手交易，即可兑现“人从众”红包10美元奖励”'
                    },
                ],
                redbag: [
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_redbag-step1'] : ['help_redbag-pandafx-step1'],
                        desp: '1. 用户注册后都要会获赠注册红包，登陆后点击”我的”模块，选择进入”我的红包”。'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_redbag-step2'] : ['help_redbag-pandafx-step2'],
                        desp: '2. 进入“我的红包”中“可用红包”标签下罗列赠送给您的所有红包，根据红包标注的要求完成，即可兑现入账支取。'
                    }
                ],
                wallet: [
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_wallet-step1'] : ['help_wallet-pandafx-step1'],
                        desp: '1.  交易高手所获分成将定期发放到“零钱包”中，高手可以点击“零钱包”查看。'
                    },
                    {
                        imgSrc: cn == 'tigerwit' ? ['help_wallet-step2'] : ['help_wallet-pandafx-step2'],
                        desp: '2. 进入“零钱包”查看分成收入，该金额可以充值到交易账户，也可进行提现，按照正常充值/提现流程操作即可。'
                    }
                ],
            }
        }
    });
}
