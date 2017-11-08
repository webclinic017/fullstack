;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAgreementController', WebAgreementController);

    WebAgreementController.$inject = ['$scope', 'lang'];

    function WebAgreementController ($scope, lang) {
        $scope.listType = $(".agreement_common").attr("data-list-type");
        var agreementList = {
            legal: {
                zh: "声明,网站的归属,访问,担保免责声明和责任限制,链接网站,安全,隐私,适用法律和司法管辖区",
                en: "Notice,Ownership of Site,Access,Disclaimer of Warranty and Limitation of Liability,Linked Sites,Security,Privacy,Applicable Law and Jurisdiction"
            },
            client: {
                zh: "序言,确认书,客户协议范围,客户协议开始,条款解释,服务的提供,客户分类,身份,保证与担保,客户资金,费用,责任,补偿计划,赔偿,客户协议期限,客户协议的通知与修订,终止与违约,风险披露,保密与个人数据保护,电话录音,利益冲突,直接联系许可,声明与保证,不可抗力事件,适用法律、管辖权与争议解决,其他,常见问题解答,其他联系人",
                en: "Introduction,Acknowledgement,Scope of Client Agreement,Commencement of the Client Agreement,Interpretation of Terms,Provision of Services,Client Classification,Capacity,Assurances and Guarantees,Client Money,Charges,Liability,Compensation Scheme,Indemnity,Duration of the Client Agreement,Notifications and Amendments to the Client Agreement,Termination and Default,Risk Disclosure,Confidentiality and Personal Data Protection,Recordings of Telephone Calls,Conflicts of Interest,Direct Contact Consent,Representations and Warranties,Force Majeur Event,Governing Law Jurisdiction and Dispute Resolution,Miscellaneous,FAQs,Additional Contacts"
            },
            risk: {
                zh: "本声明的范围,适当性评估,CFD 的性质,价格和成本,市场状况、所需保证金、杠杆和强平水平,外汇和其他相关风险,技术风险,客户资金,不作建议,过往业绩,更多信息",
                en: "Scope of This Notice,Appropriateness Assessment,Nature of CFDs,Prices and Costs,Market、Conditions、Required Margin Leverage and Stop-Out Levels,Foreign Exchange and Other Related Risks,Technical Risks,Client Money,No Advice,Past Performance,Additional Information"
            },
            cookie: {
                zh: "承诺,申请,保密性和保护客户个人数据,披露您的信息,收集的个人信息类型,选择/选择退出,Cookie,个人信息的安全性和保护措施,访问个人身份信息,法律免责声明,本隐私声明的变更,查询",
                en: "Commitment,Application,Confidentiality and Client's Personal Data Protection,Disclosure of your information,Information we may collect about you,Choice/Opt-out,Cookies,Security and Protection of your personal information,Access to Personally Identifiable Information,Legal Disclaimer,Changes in this Privacy Statement,Enquiries"
            },
            business: {
                zh: "序言,确认书,商业条款和条件的范围,条款解释,电子交易,指令和订单,拒绝执行订单,公司行为,投诉处理程序,其他,常见问题,其他联系人",
                en: "Introduction,Acknowledgement,Scope of the Terms and Conditions of Business,Interpretation of Terms,Electronic Trading,Instructions and Orders,Refusal to Execute Orders,Corporate Actions,Complaints Handling Procedure,Miscellaneous,FAQs,Additional Contacts"
            },
            responsibly: {
                zh: "负责任地交易——理解涉及的风险,如何利用杠杆优势",
                en: "Trade Responsibly – Understanding the risks involved,How to use leverage to your advantage"
            },
            conditions: {
                zh: "降低风险的指令或策略,价格,信息延迟,点差扩大,滑点,汇价跳空,系统报价风险(错价),套汇和操控,价位操纵,交易与第三者参与,交易平台时间,流通量,保证金追加,周末风险,网络交易,手续费,断线时紧急异常处理申请,注意事项说明,常见问题解答,客户服务部,其他联系人",
                en: "Functions or strategies to mitigate risks,Price,Information delay,Spread Fluctuations,Slippage,Exchange rate gap,Risk of System Quotation (Mispricing),Arbitrage and control,Price manipulation,Trade and third-party participation,Platform Trading Hours,Circulation,Margin call,Risks over weekends,Online trading,Commission charge,Application for abnormal conditions,The announcement,FAQs,Customer Support Department,Additional Contacts"
            },
            statement: {
                zh: "客户声明,老虎外汇交易平台风险提示及免责条款",
                en: "Declaration by Client,Risk Warning and Exemptions for Trading on TigerWit Trading Platform"
            },
            categorization: {
                zh: "序言,分类标准,申请不同的类型,保护权,常见问题解答,联系方式",
                en: "Introduction,Categorization Criteria,Request for Different Categorization,Protection Rights,FAQs,Contacts"
            },
            funds: {
                zh: "资金隔离,我们采取的其他措施",
                en: "Segregation of Funds,Additional Measures We Take"
            },
            execution: {
                zh: "序言,范围和服务,最佳执行,执行场所,监控和审查,客户同意书,重要信息,常见问题,其他联系人",
                en: "Introduction,Scope and Services,Best Execution,Execution Venues,Monitor and Review,Client Consent,Important Information,FAQs,Additional Contacts"
            },
            conflicts: {
                zh: "序言,政策范围,识别利益冲突,管理利益冲突,披露,常见问题解答,其他联系人",
                en: "Introduction,Scope of the Policy,Identification of Conflicts of Interest,Managing Conflicts of Interest,Disclosure,Frequently Asked Questions,Additional Contacts"
            },
            complaint: {
                zh: "投诉程序概述,序言,条款解释,投诉处理程序的范围,投诉的定义,程序,常见问题,联系方式",
                en: "SUMMARY OF COMPLAINTS PROCEDURE,INTRODUCTION,INTERPRETATION OF TERMS,SCOPE OF THE COMPLAINTS HANDLING PROCEDURE,DEFINITION OF A COMPLAINT,PROCEDURE,FAQs,CONTACTS"
            }
        };
        $scope.tabList = [];
        $scope.showScrollTop = false;

        setTabList();

        $(window).scroll(function () {
            $scope.$apply(function () {
                if ($(window).scrollTop() == 0) {
                    $scope.showScrollTop = false;
                } else {
                    $scope.showScrollTop = true;
                }   
            });
        });

        function setTabList () {
            var lst = lang.isEnglish() ? agreementList[$scope.listType]["en"].split(',') : agreementList[$scope.listType]["zh"].split(',');
            angular.forEach(lst, function (value, index) {
                $scope.tabList.push({
                    title: value,
                    link: 'agreement'+index
                });
            });
        }

        $scope.toTop = function () {
            $("body,html").animate({ scrollTop: 0 }, 200);
        };
    }
})();