;(function () {
  var indexBasePath = "/white_label";
  var data = {
    logo: {
      en: indexBasePath + "/header/tigerwit-logo-en.png",
      zh: indexBasePath + "/header/tigerwit-logo-en.png",
      vi: indexBasePath + "/header/tigerwit-logo-en.png",
      "zh-Hant": indexBasePath + "/header/tigerwit-logo-en.png"
    },
    helpLogo: {
        en: indexBasePath + "/help-logo-tigerwit.png",
        zh: indexBasePath + "/help-logo-tigerwit.png",
        vi: indexBasePath + "/help-logo-tigerwit.png",
        "zh-Hant": indexBasePath + "/help-logo-tigerwit.png"
    },
    homePerson: {
        en: indexBasePath + "/index-person-tiger.jpg",
        zh: indexBasePath + "/index-person-tiger.jpg",
        vi: indexBasePath + "/index-person-tiger.jpg",
        "zh-Hant": indexBasePath + "/index-person-tiger.jpg"
    },
    homeTrade: {
        en: indexBasePath + "/index2-trade-img-tigerwit-en.png",
        zh: indexBasePath + "/index2-trade-img-tigerwit.png",
        vi: indexBasePath + "/index2-trade-img-tigerwit-en.png",
        "zh-Hant": indexBasePath + "/index2-trade-img-tigerwit.png"
    },
    homePlus: {
        en: indexBasePath + "/index2-master-jia-tiger.png",
        zh: indexBasePath + "/index2-master-jia-tiger.png",
        vi: indexBasePath + "/index2-master-jia-tiger.png",
        "zh-Hant": indexBasePath + "/index2-master-jia-tiger.png"
    },
    webCopyRule: {
        en: indexBasePath + "/rules-banner-tigerwit.jpg",
        zh: indexBasePath + "/rules-banner-tigerwit.jpg",
        vi: indexBasePath + "/rules-banner-tigerwit.jpg",
        "zh-Hant": indexBasePath + "/rules-banner-tigerwit.jpg"
    },
    webCopySelect: {
        en: indexBasePath + "/select-banner-tigerwit.jpg",
        zh: indexBasePath + "/select-banner-tigerwit.jpg",
        vi: indexBasePath + "/select-banner-tigerwit.jpg",
        "zh-Hant": indexBasePath + "/select-banner-tigerwit.jpg"
    },
    webAgentProxy: {
        en: indexBasePath + "/agent-banner-tigerwit-new.jpg",
        zh: indexBasePath + "/agent-banner-tigerwit-new.jpg",
        vi: indexBasePath + "/agent-banner-tigerwit-new.jpg",
        "zh-Hant": indexBasePath + "/agent-banner-tigerwit-new.jpg"
    },
    webAgentBecome: {
        en: indexBasePath + "/become-banner-tigerwit.png",
        zh: indexBasePath + "/become-banner-tigerwit.png",
        vi: indexBasePath + "/become-banner-tigerwit.png",
        "zh-Hant": indexBasePath + "/become-banner-tigerwit.png"
    },
    ico: {
        en: indexBasePath + "/tigerwit.ico",
        zh: indexBasePath + "/tigerwit.ico",
        vi: indexBasePath + "/tigerwit.ico",
        "zh-Hant": indexBasePath + "/tigerwit.ico"
    },
    h5RegisterLogo: {
        en: indexBasePath + "/h5_register_logo_TigerWit.png",
        zh: indexBasePath + "/h5_register_logo_TigerWit.png",
        vi: indexBasePath + "/h5_register_logo_TigerWit.png",
        "zh-Hant": indexBasePath + "/h5_register_logo_TigerWit.png"
    },
    t33_logo: {
        en: indexBasePath + "/t33_logo-tigerwit.png",
        zh: indexBasePath + "/t33_logo-tigerwit.png",
        vi: indexBasePath + "/t33_logo-tigerwit.png",
        "zh-Hant": indexBasePath + "/t33_logo-tigerwit.png"
    },
    basicLogoBlack: {
        en: indexBasePath + "/basic_logo_tiger_black.png",
        zh: indexBasePath + "/basic_logo_tiger_black.png",
        vi: indexBasePath + "/basic_logo_tiger_black.png",
        "zh-Hant": indexBasePath + "/basic_logo_tiger_black.png"
    },
    basicLogoWhite: {
        en: indexBasePath + "/basic_logo_tiger_white.png",
        zh: indexBasePath + "/basic_logo_tiger_white.png",
        vi: indexBasePath + "/basic_logo_tiger_white.png",
        "zh-Hant": indexBasePath + "/basic_logo_tiger_white.png"
    },
    homeFocusCn: {
        en: indexBasePath + "/home/focus-cnEn.png",
        zh: indexBasePath + "/home/focus-cnCn.png",
        vi: indexBasePath + "/home/focus-cnEn.png",
        "zh-Hant": indexBasePath + "/home/focus-cnCn.png"
    },
    homeFocusGlobal: {
        en: indexBasePath + "/home/focus-globalEn.png",
        zh: indexBasePath + "/home/focus-globalCn.png",
        vi: indexBasePath + "/home/focus-globalEn.png",
        "zh-Hant": indexBasePath + "/home/focus-globalCn.png"
    },
    homeAppIos: {
        en: indexBasePath + "/home/focus-icon-ios-en.png",
        zh: indexBasePath + "/home/focus-icon-ios-cn-1.0.png",
        vi: indexBasePath + "/home/focus-icon-ios-en.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-ios-cn-1.0.png"
    },
    homeAppAndroidCn: {
        en: indexBasePath + "/home/focus-icon-android-en.png",
        zh: indexBasePath + "/home/focus-icon-android-cn.png",
        vi: indexBasePath + "/home/focus-icon-android-en.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-android-cn.png"
    },
    homeAppAndroidGlobal: {
        en: indexBasePath + "/home/focus-icon-google-en-1.0.png",
        zh: indexBasePath + "/home/focus-icon-google-cn.png",
        vi: indexBasePath + "/home/focus-icon-google-en-1.0.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-google-cn.png"
    },
    homeToolsBgCn: {
        en: indexBasePath + "/home/tools-bg-cnEn.png",
        zh: indexBasePath + "/home/tools-bg-cnCn.png",
        vi: indexBasePath + "/home/tools-bg-cnEn.png",
        "zh-Hant": indexBasePath + "/home/tools-bg-cnCn.png"
    },
    homeToolsBgGlobal: {
        en: indexBasePath + "/home/tools-bg-globalEn.png",
        zh: indexBasePath + "/home/tools-bg-globalCn.png",
        vi: indexBasePath + "/home/tools-bg-globalEn.png",
        "zh-Hant": indexBasePath + "/home/tools-bg-globalCn.png"
    },
    downloadAppIos: {
        en: indexBasePath + "/download/focus-icon-ios-en.png",
        zh: indexBasePath + "/download/focus-icon-ios-cn-1.0.png",
        vi: indexBasePath + "/download/focus-icon-ios-en.png",
        "zh-Hant": indexBasePath + "/download/focus-icon-ios-cn-1.0.png"
    },
    downloadAppAndroidCn: {
        en: indexBasePath + "/download/focus-icon-android-en.png",
        zh: indexBasePath + "/download/focus-icon-android-cn.png",
        vi: indexBasePath + "/download/focus-icon-android-en.png",
        "zh-Hant": indexBasePath + "/download/focus-icon-android-cn.png"
    },
    downloadAppAndroidGlobal: {
        en: indexBasePath + "/download/focus-icon-google-en.png",
        zh: indexBasePath + "/download/focus-icon-google-cn.png",
        vi: indexBasePath + "/download/focus-icon-google-en.png",
        "zh-Hant": indexBasePath + "/download/focus-icon-google-cn.png"
    },
    footerCustomerCn: {
        en: indexBasePath + "/footer-layer/cn-en.png",
        zh: indexBasePath + "/footer-layer/cn-cn-new.png",
        vi: indexBasePath + "/footer-layer/cn-en.png",
        "zh-Hant": indexBasePath + "/footer-layer/cn-cn-new.png"
    },
    footerCustomerGloabal: {
        en: indexBasePath + "/footer-layer/global-en-new.png",
        zh: indexBasePath + "/footer-layer/global-cn.png",
        vi: indexBasePath + "/footer-layer/global-en-new.png",
        "zh-Hant": indexBasePath + "/footer-layer/global-cn.png"
    },
    recordForm: {
        en: indexBasePath + "/agent/proxy/record-form-en.png",
        zh: indexBasePath + "/agent/proxy/record-form-cn.png",
        vi: indexBasePath + "/agent/proxy/record-form-en.png",
        "zh-Hant": indexBasePath + "/agent/proxy/record-form-cn.png"
    },
  };
  module.exports = data;
})();