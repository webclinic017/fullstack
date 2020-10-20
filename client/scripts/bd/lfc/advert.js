; (function () {
  getEmailPhone('', '', function (systemMessage) {
    isCn = systemMessage.ip_country_code === 'CN' || language == 'zh'; // ip || language
    if (isCn) {
      $("#downloadAndroidCn").show()
    }else{
      $("#downloadAndroidGlobal").show()
    }
  })
})();