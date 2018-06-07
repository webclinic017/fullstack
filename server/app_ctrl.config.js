;(function(){
    'use strict';

    var info = {
        old: {
            en: {
                ios: {
                    app_info: {
                        version_name : "V3.0.1",
                        description: "新版本更新了服务协议；增加了电汇入金功能；提现银行卡管理功能优化。赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V3.0.5",
                        description: "本次更新：\n1.新版本完善了开户流程\n2.优化了电汇入金功能\n3支持中英文语言切换\n4.适配Android8.0\n5.bug修复\n赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.0.1.apk",
                        force_update : false
                    }
                }
            },
            cn: {
                ios: {
                    app_info: {
                        version_name : "V3.0.1",
                        description: "新版本更新了服务协议；增加了电汇入金功能；提现银行卡管理功能优化。赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V3.0.5",
                        description: "本次更新：\n1.新版本完善了开户流程\n2.优化了电汇入金功能\n3支持中英文语言切换\n4.适配Android8.0\n5.bug修复\n赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.0.1.apk",
                        force_update : false
                    }
                }
            }
        },
        pandafx: {
            en: {
                ios: {
                    app_info: {
                        version_name : "",
                        description: "",
                        updated_description: "",
                        force_update : false
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.5.7",
                        description : "本次更新：\n1.网银支付功能优化\n2.其他细节优化",
                        updated_description: "68%的用户正在使用新版本",
                        url : "https://pandafx.tigerwit.com/downloads/apk/pandafx_v1.5.7.apk",
                        force_update : false
                    }
                }
            },
            cn: {
                ios: {
                    app_info: {
                        version_name : "",
                        description: "",
                        updated_description: "",
                        force_update : false
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.5.8",
                        description : "本次更新：\n1.网银支付功能优化\n2.提现功能优化\n3.申请高手功能优化\n4.登录安全优化， 不支持多设备同时登录\n5.修复高手最大跌幅显示的问题\n6.其他细节优化",
                        updated_description: "68%的用户正在使用新版本",
                        url : "https://pandafx.tigerwit.com/downloads/apk/pandafx_v1.5.8.apk",
                        force_update : false
                    }
                }
            }
        },
        global: {
            en: {
                ios: {
                    app_info: {
                        version_name : "V3.0.9",
                        description: "This update\n1.Deposit/Withdrawal function has been optimization\n2.Experience account expiration support continues to apply\n3.The page of Deposit/Withdrawal has been optimization\n4.Details has been optimization",
                        updated_description: "",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.2.2",
                        description: "This update\n1.Deposit/Withdrawal function has been optimization\n2.Account opening process has been optimization\n3.Deposit credentials must upgrade in two weeks\n4.Details has been optimization",
                        updated_description: "70% users are using new version",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.2.2.apk",
                        force_update : false
                    }
                }
            },
            cn: {
                ios: {
                    app_info: {
                        version_name : "V3.0.9",
                        description: "本次更新：\n1.充值功能优化\n2.增加体验金账户续约功能\n3.充值/提现界面优化\n4.细节优化",
                        updated_description: "70%的用户正在使用新版本",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.2.2",
                        description: "本次更新：\n1.充值/提现功能优化\n2.开户流程优化\n3.入金凭证必须两周内上传\n4.细节优化",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.2.2.apk",
                        force_update : false
                    }
                }
            }
        },
        uk: {
            en: {
                ios: {
                    app_info: {
                        version_name : "",
                        description: "",
                        updated_description: "",
                        force_update : false
                    }
                },
                android: {
                    app_info: {
                        version_name : "",
                        description : "",
                        updated_description: "",
                        url : "",
                        force_update : false
                    }
                }
            },
            cn: {
               ios: {
                    app_info: {
                        version_name : "",
                        description: "",
                        updated_description: "",
                        force_update : false
                    }
                },
                android: {
                    app_info: {
                        version_name : "",
                        description : "",
                        updated_description: "",
                        url : "",
                        force_update : false
                    }
                } 
            }
        }
    };

    function getAppInfo(appType){
        return info[appType];
    }

    module.exports = {
        getAppInfo: getAppInfo
    };

    /*
    * README
    * 配置app下载及其版本信息
    * 路由 action == "version_check" 会调用此模块
    * */
}());