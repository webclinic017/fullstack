;(function () {
  var indexBasePath = "/white_label";
  var data = {
    logo: {
      en: indexBasePath + "/header/tigerwit-logo-en.png",
      id: indexBasePath + "/header/tigerwit-logo-en.png",
      zh: indexBasePath + "/header/tigerwit-logo-en.png",
      vi: indexBasePath + "/header/tigerwit-logo-en.png",
      "zh-Hant": indexBasePath + "/header/tigerwit-logo-en.png",
      es: indexBasePath + "/header/tigerwit-logo-en.png"
    },
    ico: {
        en: indexBasePath + "/tigerwit.ico",
        id: indexBasePath + "/tigerwit.ico",
        zh: indexBasePath + "/tigerwit.ico",
        vi: indexBasePath + "/tigerwit.ico",
        "zh-Hant": indexBasePath + "/tigerwit.ico",
        es: indexBasePath + "/tigerwit.ico"
    },
    h5RegisterLogo: {
        en: indexBasePath + "/h5_register_logo_TigerWit.png",
        id: indexBasePath + "/h5_register_logo_TigerWit.png",
        zh: indexBasePath + "/h5_register_logo_TigerWit.png",
        vi: indexBasePath + "/h5_register_logo_TigerWit.png",
        "zh-Hant": indexBasePath + "/h5_register_logo_TigerWit.png",
        es: indexBasePath + "/h5_register_logo_TigerWit.png"
    },
    basicLogoWhite: {
        en: indexBasePath + "/basic_logo_tiger_white.png",
        id: indexBasePath + "/basic_logo_tiger_white.png",
        zh: indexBasePath + "/basic_logo_tiger_white.png",
        vi: indexBasePath + "/basic_logo_tiger_white.png",
        "zh-Hant": indexBasePath + "/basic_logo_tiger_white.png",
        es: indexBasePath + "/basic_logo_tiger_white.png"
    },
    homeFocusCn: {
        en: indexBasePath + "/home/focus-cnEn-1.0.png",
        id: indexBasePath + "/home/focus-cnEn-1.0.png",
        zh: indexBasePath + "/home/focus-cnCn-1.0.png",
        vi: indexBasePath + "/home/focus-globalVi-1.0.png",
        "zh-Hant": indexBasePath + "/home/focus-globalZhHant-1.0.png",
        es: indexBasePath + "/home/focus-cnEn-1.0.png"
    }, //
    homeFocusGlobal: {
        en: indexBasePath + "/home/focus-globalEn-1.0.png",
        id: indexBasePath + "/home/focus-globalEn-1.0.png",
        zh: indexBasePath + "/home/focus-globalCn-1.0.png",
        vi: indexBasePath + "/home/focus-globalVi-1.0.png",
        "zh-Hant": indexBasePath + "/home/focus-globalZhHant-1.0.png",
        es: indexBasePath + "/home/focus-globalEn-1.0.png"
    }, //
    homeAppIos: {
        en: indexBasePath + "/home/focus-icon-ios-en.png",
        id: indexBasePath + "/home/focus-icon-ios-id.png",
        zh: indexBasePath + "/home/focus-icon-ios-cn-1.0.png",
        vi: indexBasePath + "/home/focus-icon-ios-vi.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-ios-cn-1.0.png",
        es: indexBasePath + "/home/focus-icon-ios-en.png"
    }, //
    homeAppAndroidCn: {
        en: indexBasePath + "/home/focus-icon-android-en.png",
        id: indexBasePath + "/home/focus-icon-android-id.png",
        zh: indexBasePath + "/home/focus-icon-android-cn.png",
        vi: indexBasePath + "/home/focus-icon-android-vi.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-android-cn.png",
        es: indexBasePath + "/home/focus-icon-android-en.png"
    }, //
    homeAppAndroidGlobal: {
        en: indexBasePath + "/home/focus-icon-google-en-1.0.png",
        id: indexBasePath + "/home/focus-icon-google-id.png",
        zh: indexBasePath + "/home/focus-icon-google-cn.png",
        vi: indexBasePath + "/home/focus-icon-google-vi.png",
        "zh-Hant": indexBasePath + "/home/focus-icon-google-cn.png",
        es: indexBasePath + "/home/focus-icon-google-en-1.0.png"
    }, // 
    homeToolsBgCn: {
        en: indexBasePath + "/home/tools-bg-cnEn.png",
        id: indexBasePath + "/home/tools-bg-cnEn.png",
        zh: indexBasePath + "/home/tools-bg-cnCn.png",
        vi: indexBasePath + "/home/tools-bg-globalVi.png",
        "zh-Hant": indexBasePath + "/home/tools-bg-globalZhHant.png",
        es: indexBasePath + "/home/tools-bg-cnEn.png"
    }, //
    homeToolsBgGlobal: {
        en: indexBasePath + "/home/tools-bg-globalEn.png",
        id: indexBasePath + "/home/tools-bg-globalEn.png",
        zh: indexBasePath + "/home/tools-bg-globalCn.png",
        vi: indexBasePath + "/home/tools-bg-globalVi.png",
        "zh-Hant": indexBasePath + "/home/tools-bg-globalZhHant.png",
        es: indexBasePath + "/home/tools-bg-globalEn.png"
    }, //
    homeMap: {
        en: indexBasePath + "/home/client-map-en-en.png",
        id: indexBasePath + "/home/client-map-id-id.png",
        zh: indexBasePath + "/home/client-map-cn-cn.png",
        vi: indexBasePath + "/home/client-map-vi-vi.png",
        "zh-Hant": indexBasePath + "/home/client-map-cn-ht.png",
        es: indexBasePath + "/home/client-map-en-en.png"
    }, //
    downloadAppCn: {
        en: indexBasePath + "/download/focus-icon-cn-en.png",
        id: indexBasePath + "/download/focus-icon-cn-id.png",
        zh: indexBasePath + "/download/focus-icon-cn-cn.png",
        vi: indexBasePath + "/download/focus-icon-cn-vi.png",
        "zh-Hant": indexBasePath + "/download/focus-icon-cn-zh-Hant.png",
        es: indexBasePath + "/download/focus-icon-cn-en.png"
    }, //
    downloadAppGlobal: {
        en: indexBasePath + "/download/focus-icon-global-en.png",
        id: indexBasePath + "/download/focus-icon-global-id.png",
        zh: indexBasePath + "/download/focus-icon-global-cn.png",
        vi: indexBasePath + "/download/focus-icon-global-vi.png",
        "zh-Hant": indexBasePath + "/download/focus-icon-global-zh-Hant.png",
        es: indexBasePath + "/download/focus-icon-global-en.png"
    }, //
    downloadFocus: {
        en: indexBasePath + "/download/download_banner-en.png",
        id: indexBasePath + "/download/download_banner-en.png",
        zh: indexBasePath + "/download/download_banner.png",
        vi: indexBasePath + "/download/download_banner-vi.png",
        "zh-Hant": indexBasePath + "/download/download_banner-zh-Hant.png",
        es: indexBasePath + "/download/download_banner-en.png"
    }, //
    footerCustomerCn: {
        en: indexBasePath + "/footer-layer/cn-en.png",
        id: indexBasePath + "/footer-layer/cn-en.png",
        zh: indexBasePath + "/footer-layer/cn-cn-new.png",
        vi: indexBasePath + "/footer-layer/global-vi.png",
        "zh-Hant": indexBasePath + "/footer-layer/global-zh-hant.png",
        es: indexBasePath + "/footer-layer/cn-en.png"
    }, // 
    footerCustomerGloabal: {
        en: indexBasePath + "/footer-layer/global-en-new.png",
        id: indexBasePath + "/footer-layer/global-en-new.png",
        zh: indexBasePath + "/footer-layer/global-cn.png",
        vi: indexBasePath + "/footer-layer/global-vi.png",
        "zh-Hant": indexBasePath + "/footer-layer/global-zh-hant.png",
        es: indexBasePath + "/footer-layer/global-en-new.png"
    }, //
    // recordForm: {
    //     en: indexBasePath + "/agent/proxy/record-form-en.png",
    //     id: indexBasePath + "/agent/proxy/record-form-en.png",
    //     zh: indexBasePath + "/agent/proxy/record-form-cn.png",
    //     vi: indexBasePath + "/agent/proxy/record-form-vi.png",
    //     "zh-Hant": indexBasePath + "/agent/proxy/record-form-zh-hant.png"
    // },
    agentBgH5: {
        en: indexBasePath + "/background/agent-bg-h5-en.png",
        id: indexBasePath + "/background/agent-bg-h5-en.png",
        zh: indexBasePath + "/background/agent-bg-h5-zh.png",
        vi: indexBasePath + "/background/agent-bg-h5-vi.png",
        "zh-Hant": indexBasePath + "/background/agent-bg-h5-zh-hant.png",
        es: indexBasePath + "/background/agent-bg-h5-en.png"
    }, //
    downloadGlobalH5Section1: {
        en: indexBasePath + "/m_download_global/section1-phone.png",
        id: indexBasePath + "/m_download_global/section1-phone.png",
        zh: indexBasePath + "/m_download_global/section1-phone.png",
        vi: indexBasePath + "/m_download_global/section1-phone.png",
        "zh-Hant": indexBasePath + "/m_download_global/section1-phone.png",
        es: indexBasePath + "/m_download_global/section1-phone.png"
    }, //
    downloadGlobalH5Section4: {
        en: indexBasePath + "/m_download_global/section4-phone-en.png",
        id: indexBasePath + "/m_download_global/section4-phone-en.png",
        zh: indexBasePath + "/m_download_global/section4-phone-en.png",
        vi: indexBasePath + "/m_download_global/section4-phone-en.png",
        "zh-Hant": indexBasePath + "/m_download_global/section4-phone-en.png",
        es: indexBasePath + "/m_download_global/section4-phone-en.png"

        // en: indexBasePath + "/m_download_global/section4-phone-en.png",
        // id: indexBasePath + "/m_download_global/section4-phone-id.png",
        // zh: indexBasePath + "/m_download_global/section4-phone-zh.png",
        // vi: indexBasePath + "/m_download_global/section4-phone-vi.png",
        // "zh-Hant": indexBasePath + "/m_download_global/section4-phone-zh-Hant.png"
    }, //

    downloadGlobalH5Section6: {
        en: indexBasePath + "/m_download_global/section6-bg-en.png",
        id: indexBasePath + "/m_download_global/section6-bg-id.png",
        zh: indexBasePath + "/m_download_global/section6-bg-zh.png",
        vi: indexBasePath + "/m_download_global/section6-bg-vi.png",
        "zh-Hant": indexBasePath + "/m_download_global/section6-bg-zh-Hant.png",
        es: indexBasePath + "/m_download_global/section6-bg-en.png"
    }, //

    downloadCnH5App: {
        en: indexBasePath + "/m_download_global/focus-icon-cn-en.png",
        id: indexBasePath + "/m_download_global/focus-icon-cn-id.png",
        zh: indexBasePath + "/m_download_global/focus-icon-cn-zh.png",
        vi: indexBasePath + "/m_download_global/focus-icon-cn-vi.png",
        "zh-Hant": indexBasePath + "/m_download_global/focus-icon-cn-zh-Hant.png",
        es: indexBasePath + "/m_download_global/focus-icon-cn-es.png"
    }, //
    downloadGlobalH5App: {
        en: indexBasePath + "/m_download_global/focus-icon-global-en.png",
        id: indexBasePath + "/m_download_global/focus-icon-global-id.png",
        zh: indexBasePath + "/m_download_global/focus-icon-global-zh.png",
        vi: indexBasePath + "/m_download_global/focus-icon-global-vi.png",
        "zh-Hant": indexBasePath + "/m_download_global/focus-icon-global-zh-Hant.png",
        es: indexBasePath + "/m_download_global/focus-icon-global-es.png"
    }, //
    
    freesignTitle: {
        en: indexBasePath + "/bd/bonus/freesign-web-en.png",
        id: indexBasePath + "/bd/bonus/freesign-web-id.png",
        zh: indexBasePath + "/bd/bonus/freesign-web-en.png",
        vi: indexBasePath + "/bd/bonus/freesign-web-en.png",
        "zh-Hant": indexBasePath + "/bd/bonus/freesign-web-en.png",
        es: indexBasePath + "/bd/bonus/freesign-web-es.png"
    }, //
    rebateplanTitle: {
        en: indexBasePath + "/bd/bonus/rebateplan-en.png",
        id: indexBasePath + "/bd/bonus/rebateplan-id.png",
        zh: indexBasePath + "/bd/bonus/rebateplan-en.png",
        vi: indexBasePath + "/bd/bonus/rebateplan-en.png",
        "zh-Hant": indexBasePath + "/bd/bonus/rebateplan-en.png",
        es: indexBasePath + "/bd/bonus/rebateplan-es.png"
    }, //
    whyChooseTitle: {
        en: indexBasePath + "/bd/bonus/why-choose-en.png",
        id: indexBasePath + "/bd/bonus/why-choose-id.png",
        zh: indexBasePath + "/bd/bonus/why-choose-en.png",
        vi: indexBasePath + "/bd/bonus/why-choose-en.png",
        "zh-Hant": indexBasePath + "/bd/bonus/why-choose-en.png",
        es: indexBasePath + "/bd/bonus/why-choose-es.png"
    }, //
    eventDetailsTitle: {
        en: indexBasePath + "/bd/bonus/event-details-en.png",
        id: indexBasePath + "/bd/bonus/event-details-id.png",
        zh: indexBasePath + "/bd/bonus/event-details-en.png",
        vi: indexBasePath + "/bd/bonus/event-details-en.png",
        "zh-Hant": indexBasePath + "/bd/bonus/event-details-en.png",
        es: indexBasePath + "/bd/bonus/event-details-es.png"
    }, //
    freesignH5Title: {
        en: indexBasePath + "/bd/bonus/freesign-h5-en.png",
        id: indexBasePath + "/bd/bonus/freesign-h5-id.png",
        zh: indexBasePath + "/bd/bonus/freesign-h5-en.png",
        vi: indexBasePath + "/bd/bonus/freesign-h5-en.png",
        "zh-Hant": indexBasePath + "/bd/bonus/freesign-h5-en.png",
        es: indexBasePath + "/bd/bonus/freesign-h5-es.png"
    }, //
    // : {
    //     en: indexBasePath + "",
    //     id: indexBasePath + "",
    //     zh: indexBasePath + "",
    //     vi: indexBasePath + "",
    //     "zh-Hant": indexBasePath + "",
    //     es: indexBasePath + ""
    // } //
  };
  module.exports = data;
})();