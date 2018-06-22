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
                        version_name : "V3.1.0",
                        description: "本次更新：\n1.新版本完善了开户流程\n2.优化了电汇入金功能\n3支持中英文语言切换\n4.适配Android8.0\n5.bug修复\n赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.0.1.apk",
                        force_update : true
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
                        version_name : "V3.1.0",
                        description: "本次更新：\n1.新版本完善了开户流程\n2.优化了电汇入金功能\n3支持中英文语言切换\n4.适配Android8.0\n5.bug修复\n赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.0.1.apk",
                        force_update : true
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
                        version_name : "V0.0.0",
                        description : "本次更新：\n1.优化拍照功能\n2.适配三星手机\n3.其他细节优化",
                        updated_description: "68%的用户正在使用新版本",
                        url : "https://pandafx.tigerwit.com/downloads/apk/pandafx_v1.6.0.apk",
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
                        version_name : "V0.0.0",
                        description : "本次更新：\n1.优化拍照功能\n2.适配三星手机\n3.其他细节优化",
                        updated_description: "68%的用户正在使用新版本",
                        url : "https://pandafx.tigerwit.com/downloads/apk/pandafx_v1.6.0.apk",
                        force_update : false
                    }
                }
            }
        },
        global: {
            en: {
                ios: {
                    app_info: {
                        version_name : "V3.1.1",
                        description: "This update\nThe new version optimizes the function Internet Banking deposit.\nUpdate now to enjoy the new trading experience!",
                        updated_description: "70% users are using new version",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.2.5",
                        description: "Update\n1. Fill in the bank card number before online banking deposit.\n2. Deposit voucher mechanism has been optimization.\n3. Details have been optimization.\nTips:\nUsers with 8.0 and above mobile phone systems click the \"Install Now\" button may to fail to install.\nIf this happens, please step to the app market to manually download updates.",
                        updated_description: "70% users are using new version",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.2.5.apk",
                        force_update : true
                    }
                }
            },
            cn: {
                ios: {
                    app_info: {
                        version_name : "V3.1.1",
                        description: "本次更新：\n新版本优化了网银入金功能。赶快更新享受新的交易体验！",
                        updated_description: "70%的用户正在使用新版本",
                        force_update : true
                    }
                },
                android: {
                    app_info: {
                        version_name : "V1.2.5",
                        description: "本次更新：\n1.网银充值需预先填写银行卡号\n2.入金凭证机制优化\n3.细节优化\n温馨提示：\n手机系统为8.0及以上的用户在此页点击“立即安装”按钮可能安装失败。\n若出现上述情况请移步至应用市场手动下载更新。",
                        updated_description: "70%的用户正在使用新版本",
                        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v1.2.5.apk",
                        force_update : true
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