(function(){function popover_box(it
/**/) {
var out='<div class="sensors-jssdk-modal-dialog sensors-jssdk-modal-box"> <div class="sensors-jssdk-modal-content"> <div class="sensors-jssdk-modal-header"> <button type="button" class="sensors-jssdk-close" data-dismiss="modal" aria-hidden="true"> &times; </button> <div class="sensors-jssdk-color-green" style="font-size: 14px;line-height:1;font-weight:bold;margin:0;"> 添加埋点 </div> </div> <div class="sensors-jssdk-modal-body"><div style="position: relative;padding:0;margin:0;"><div style="color:#f11;display:none;padding: 5px 0;text-align: left;" class="sensors-jssdk-popover-head-error-notice"></div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">事件名</p> <div> <input class="sensors-jssdk-input-large" type="text" data-name="name" value="'+(it.name || '')+'" placeholder="支持英文、数字和下划线"/> </div> </div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">事件显示名</p> <div> <input class="sensors-jssdk-input-large" type="text" data-name="cname" value="'+(it.cname || '')+'"/> </div> </div> <div class="sensors-jssdk-popover-line sensors-jssdk-popover-line-url-radio">  <p class="sensors-jssdk-color-green">URL匹配方式</p> <div class="clearfix"> <div class="sensors-jssdk-gselectbox-out"> <select data-name="sensorsdata-vtrack-url-radio"> <option value="fixed">固定URL</option> <option value="part">部分匹配</option> <option title="可以使用js正则表达式匹配url" value="regexp">正则匹配</option> </select> </div> <input style="float:right; width: 69%; height: 36px;" class="sensors-jssdk-input-large" type="text" data-name="url" value="'+(it.url || '')+'"/>             </div> </div> <div class="sensors-jssdk-popover-line"> <p class="sensors-jssdk-color-green">限定元素内容</p> <div class="sensors-jssdk-clearfix">  <div class="sensors-jssdk-gselectbox-out"> <select data-name="selfTextCheck"> <option value="no">否</option> <option value="yes">是</option> </select> </div> <input style="float:right; width: 69%; height: 36px;" type="text" data-name="selfText" value="'+(it.selfText || '')+'"/> </div> </div> <p> <a href="javascript:;" class="sensors-jssdk-popover-button">添加埋点</a> </p> </div> </div> </div> </div>';return out;
}var itself=popover_box, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());doT.gtemplate = doT.gtemplate || {};doT.gtemplate['popover_box'] = itself;}());