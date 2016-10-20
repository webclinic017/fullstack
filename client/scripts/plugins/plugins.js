/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

/*	jQuery 表单验证插件
 *	jQuery validVal version 5.0.2
 *	demo's and documentation:
 *	validval.frebsite.nl
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

!function(a){function f(c,d){this.form=c,this.opts=a.extend(!0,{},a.fn[b].defaults,d),this._gatherValidation(),this._bindEvents(),this._bindCustomEvents(),this.addField(this.opts.validate.fields.filter(a(e,this.form)))}function g(a,b){this.field=a,this.form=b,this.originalValue=this.field.attr("value")||"",this._gatherValidations(),this._bindEvents(),this._bindCustomEvents(),this._init()}function h(a){return"undefined"!=typeof HTMLElement?a instanceof HTMLElement:a.nodeType&&a.nodeType==Node.ELEMENT_NODE}function i(a){return"string"==typeof a&&(a=a.split(" ")),a.join(".vv ")+".vv"}function j(b){return a.grep(b,function(c,d){return a.inArray(c,b)===d})}function k(a){if(null===a)return"";if("object"==typeof a){var b=[];for(var c in a)b[c]=k(a[c]);return b}return"string"!=typeof a?"":0==a.length?"":a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function l(a){if(null===a)return"";if("object"==typeof a){for(var b in a)a[b]=l(a[b]);return a}if("string"!=typeof a)return"";if(0==a.length)return"";a=k(a);for(var c=[" ","-","+","(",")","/","\\"],d=0,e=c.length;e>d;d++)a=a.split(c[d]).join("");return a}function m(a){switch(a){case 9:case 13:case 16:case 17:case 18:case 37:case 38:case 39:case 40:case 224:return!0;default:return!1}}var b="validVal",c="validValField",d="5.0.2",e='textarea, select, input:not( [type="button"], [type="submit"], [type="reset"] )';a.fn[b]||(f.prototype={addField:function(d){if((h(d)||"string"==typeof d)&&(d=a(d)),!(d instanceof a))return a.fn[b].debug('Not a valid argument for "$field"'),this;var e=this;return d.each(function(){var b=a(this),d=b.data(c);d&&d.destroy(),b.data(c,new g(b,e))})},validate:function(b,d){var f=this;"undefined"==typeof b?(b=this.form,d=!0):"boolean"!=typeof d&&(d=!1),"function"==typeof this.opts.form.onValidate&&this.opts.form.onValidate.call(this.form[0],this.opts.language);var g=a(),h={};return this.opts.validate.fields.filter(a(e,b)).each(function(){var b=a(this),d=b.data(c);if(d)if(d.validate(f.opts.validate.onSubmit),d.valid){var e=b.val();(b.is('[type="radio"]')||b.is('[type="checkbox"]'))&&(b.is(":checked")||(e="")),("undefined"==typeof e||null==e)&&(e=""),h[b.attr("name")]=e}else f.opts.validate.onSubmit!==!1&&(g=g.add(b))}),g.length>0?("function"==typeof this.opts.form.onInvalid&&d&&this.opts.form.onInvalid.call(this.form[0],g,this.opts.language),!1):("function"==typeof this.opts.form.onValid&&d&&this.opts.form.onValid.call(this.form[0],this.opts.language),h)},submitForm:function(){var b=this.validate();return b&&this.opts.validate.fields.filter(a(e,this.form)).each(function(){var b=a(this).data(c);b&&b.clearPlaceholderValue()}),b},resetForm:function(){return"function"==typeof this.opts.form.onReset&&this.opts.form.onReset.call(this.form[0],this.opts.language),this.opts.validate.fields.filter(a(e,this.form)).each(function(){var b=a(this),d=b.data(c);d&&(d.placeholderValue!==!1?(b.addClass("inactive"),b.val(d.placeholderValue)):b.val(d.originalValue),d.isValid(!0,!0))}),!0},options:function(b){return"object"==typeof b&&(this.opts=a.extend(this.opts,b)),this.opts},destroy:function(){return this.form.unbind(".vv"),this.form.data(b,null),this.opts.validate.fields.filter(a(e,this.form)).each(function(){var b=a(this).data(c);b&&b.destroy()}),!0},_gatherValidation:function(){return this.opts.validations={},a.fn[b].customValidations&&(this.opts.validations=a.extend(this.opts.validations,a.fn[b].customValidations)),this.opts.customValidations&&(this.opts.validations=a.extend(this.opts.validations,this.opts.customValidations)),this.opts.validations=a.extend(this.opts.validations,a.fn[b].defaultValidations),this},_bindEvents:function(){var a=this;return this.form.is("form")&&(this.form.attr("novalidate","novalidate"),this.form.bind(i("submit"),function(b,c){return"boolean"!=typeof c&&(c=!0),c?a.submitForm():!0}),this.form.bind(i("reset"),function(){return a.resetForm()})),this},_bindCustomEvents:function(){var b=this;return this.form.bind(i(["addField","destroy","validate","submitForm","resetForm","options"]),function(){arguments=Array.prototype.slice.call(arguments);var c=arguments.shift(),d=c.type;return c.stopPropagation(),"function"!=typeof b[d]?(a.fn.validVal.debug('Public method "'+d+'" not found.'),!1):b[d].apply(b,arguments)}),this}},g.prototype={validate:function(d,f){var g=this;if(d!==!1){if("boolean"!=typeof f&&(f=!0),this.valid=!0,this.field.is(":hidden")&&!this.form.opts.validate.fields.hidden||this.field.is(":disabled")&&!this.form.opts.validate.fields.disabled)return!0;f&&this.clearPlaceholderValue(),"function"==typeof this.form.opts.fields.onValidate&&this.form.opts.fields.onValidate.call(this.field[0],this.form.form,this.form.opts.language);var h=!1,i=k(this.field.val());for(var j in this.form.opts.validations){var l=this.form.opts.validations[j];if("function"==typeof l&&-1!=a.inArray(j,this.validations)&&!l.call(this.field[0],i)){h=j;break}}this.valid=h?!1:!0;var m=this.valid?"invalid"!==d:"valid"!==d;return this.isValid(this.valid,m,h),this.validationgroup!==!1&&a(e).not(this.field).each(function(){var b=a(this).data(c);b&&b.validationgroup==g.validationgroup&&b.isValid(g.valid,!0)}),f&&this.restorePlaceholderValue(),h&&a.fn[b].debug("invalid validation: "+h),this.valid}},isValid:function(a,b){if("boolean"==typeof a&&(this.valid=a,b)){var c=a?"onValid":"onInvalid";"function"==typeof this.form.opts.fields[c]&&this.form.opts.fields[c].call(this.field[0],this.form.form,this.form.opts.language)}return this.valid},getValidations:function(){return this.validations},setValidations:function(b){return"string"==typeof b?this.validations=b.split(" "):b instanceof Array?this.validations=b:a.fn.validVal.debug('Argument "validations" should be an array.'),this.validations},addValidation:function(a){"string"==typeof a&&(a=a.split(" "));for(var b in a)this.validations.push(a[b]);return this.validations},removeValidation:function(b){"string"==typeof b&&(b=b.split(" "));for(var c in b){var d=a.inArray(b[c],this.validations);-1!=d&&this.validations.splice(d,1)}return this.validations},clearPlaceholderValue:function(){return this._togglePlaceholderValue("clear"),!0},restorePlaceholderValue:function(){return this._togglePlaceholderValue("restore"),!0},destroy:function(){return this.field.unbind(".vv"),this.field.data(c,null),!0},_gatherValidations:function(){if(this.autotab=!1,this.corresponding=!1,this.requiredgroup=!1,this.validationgroup=!1,this.placeholderValue=!1,this.placeholderNumber=!1,this.passwordplaceholder=!1,this.validations=[],this.field.is("select")?this.originalValue=this.field.find("option:first").attr("value")||"":this.field.is("textarea")&&(this.originalValue=this.field.text()),this.form.opts.supportHtml5){var c=this.field.data("vv-validations");c&&(this.validations.push(c),this.__removeAttr("data-vv-validations")),this.__hasHtml5Attr("placeholder")&&this.field.attr("placeholder").length>0&&(a.fn[b].support.placeholder&&-1!=a.inArray("placeholder",this.form.opts.keepAttributes)||(this.placeholderValue=this.field.attr("placeholder"))),this.placeholderValue!==!1&&this.__removeAttr("placeholder"),this.__hasHtml5Attr("pattern")&&this.field.attr("pattern").length>0&&(this.pattern=this.field.attr("pattern"),this.validations.push("pattern"),this.__removeAttr("pattern"));for(var d=["corresponding","requiredgroup","validationgroup"],e=0,f=d.length;f>e;e++){var g=this.field.data("vv-"+d[e]);g&&(this[d[e]]=g,this.validations.push(d[e]),this.__removeAttr("data-vv-"+d[e]))}for(var h=["required","autofocus"],i=0,f=h.length;f>i;i++)this.__hasHtml5Attr(h[i])&&(this.validations.push(h[i]),this.__removeAttr(h[i]));for(var k=["number","email","url"],l=0,f=k.length;f>l;l++)this.__hasHtml5Type(k[l])&&this.validations.push(k[l]);this.field.data("vv-autotab")&&(this.autotab=!0,this.__removeAttr("data-vv-autotab"))}var m=this.field.attr("class");if(m&&m.length){if(this.field.hasClass("placeholder")){if(this.field.is("select")){var n=0,o=this.field.data("vv-placeholder-number");if(o)n=o,this.__removeAttr("data-vv-placeholder-number");else if("number"==typeof this.form.opts.selectPlaceholder)n=this.form.opts.selectPlaceholder;else{var p=this.field.find("option"),q=p.index(p.filter("[selected]"));q>-1&&(n=q)}this.placeholderNumber=n,this.originalValue=this.field.find("option:eq( "+n+" )").attr("value")||""}this.placeholderValue=this.originalValue,this.originalValue="",this.__removeClass("placeholder")}var r="corresponding:",s=m.indexOf(r);if(-1!=s){var t=m.substr(s).split(" ")[0],u=t.substr(r.length);u.length&&(this.corresponding=u,this.validations.push("corresponding"),this.field.removeClass(t))}this.field.hasClass("pattern")&&(this.pattern=this.field.attr("alt")||"",this.validations.push("pattern"),this.__removeAttr("alt"),this.__removeClass("pattern"));for(var v=["requiredgroup","validationgroup"],w=0,f=v.length;f>w;w++){var x=v[w]+":",s=m.indexOf(x);if(-1!=s){var y=m.substr(s).split(" ")[0],z=y.substr(x.length);z.length&&(this[v[w]]=z,this.validations.push(v[w]),this.field.removeClass(y))}}this.field.hasClass("autotab")&&(this.autotab=!0,this.__removeClass("autotab"))}this.placeholderValue!==!1&&this.field.is('[type="password"]')&&(this.passwordplaceholder=!0);var m=this.field.attr("class");return m&&m.length&&this.validations.push(m),this.validations=j(this.validations.join(" ").split(" ")),this},_bindEvents:function(){var b=this;return this.field.bind(i("focus"),function(){a(this).addClass("focus"),b.clearPlaceholderValue()}),this.field.bind(i("blur"),function(){a(this).removeClass("focus"),b.validate(b.form.opts.validate.onBlur)}),this.field.bind(i("keyup"),function(a){m(a.keyCode)||b.validate(b.form.opts.validate.onKeyup,!1)}),this.field.is('select, input[type="checkbox"], input[type="radio"]')&&this.field.bind(i("change"),function(){a(this).trigger(i("blur"))}),this},_bindCustomEvents:function(){var b=this;return this.field.bind(i(["validate","isValid","destroy","addValidation","removeValidation"]),function(){arguments=Array.prototype.slice.call(arguments);var c=arguments.shift(),d=c.type;return c.stopPropagation(),"function"!=typeof b[d]?(a.fn.validVal.debug('Public method "'+d+'" not found.'),!1):b[d].apply(b,arguments)}),this.field.bind(i(["validations"]),function(a,b,c){return"undefined"==typeof b?this.getValidations():this.setValidations(b,c)}),this},_init:function(){var b=this;if(this.placeholderValue!==!1){if(""==this.field.val()&&this.field.val(this.placeholderValue),this.passwordplaceholder&&this.field.val()==this.placeholderValue)try{this.field[0].type="text"}catch(c){}this.field.val()==this.placeholderValue&&this.field.addClass("inactive"),this.field.is("select")&&(this.field.find("option:eq("+this.placeholderNumber+")").addClass("inactive"),this.field.bind(i("change"),function(){a(this)[b.field.val()==b.placeholderValue?"addClass":"removeClass"]("inactive")}))}if(this.corresponding!==!1&&a(e).filter('[name="'+this.corresponding+'"]').bind(i("blur"),function(){b.validate(b.form.opts.validate.onBlur)}).bind(i("keyup"),function(a){m(a.keyCode)||b.validate(b.form.opts.validate.onKeyup,!1)}),this.autotab){var d=this.field.attr("maxlength"),f=this.field.attr("tabindex"),g=a(e).filter('[tabindex="'+(parseInt(f)+1)+'"]');this.field.is("select")?f&&this.field.bind(i("change"),function(){g.length&&g.focus()}):d&&f&&this.field.bind(i("keyup"),function(b){a(this).val().length==d&&(m(b.keyCode)||(a(this).trigger(i("blur")),g.length&&g.focus()))})}return-1==a.inArray("autofocus",this.validations)||this.field.is(":disabled")||this.field.focus(),this},_togglePlaceholderValue:function(a){if(this.placeholderValue!==!1){if("clear"==a)var b=this.placeholderValue,c="",d="removeClass",e="password";else var b="",c=this.placeholderValue,d="addClass",e="text";if(this.field.val()==b&&!this.field.is("select")&&(this.field.val(c),this.field[d]("inactive"),this.passwordplaceholder))try{this.field[0].type=e}catch(f){}}return this},__hasHtml5Attr:function(a){return"undefined"==typeof this.field.attr(a)?!1:"false"===this.field.attr(a)||this.field.attr(a)===!1?!1:!0},__hasHtml5Type:function(b){if(this.field.attr("type")==b)return!0;if(this.field.is('input[type="'+b+'"]'))return!0;var c=a("<div />").append(this.field.clone()).html();return-1!=c.indexOf('type="'+b+'"')||-1!=c.indexOf("type='"+b+"'")||-1!=c.indexOf("type="+b)?!0:!1},__removeAttr:function(b){return-1==a.inArray(b,this.form.opts.keepAttributes)&&this.field.removeAttr(b),this},__removeClass:function(b){return-1==a.inArray(b,this.form.opts.keepClasses)&&this.field.removeClass(b),this}},a.fn[b]=function(c,d){return this.each(function(){var e=a(this);e.data(b)&&e.data(b).destroy(),e.data(b,new f(e,c,d))})},a.fn[b].version=d,a.fn[b].defaults={selectPlaceholder:0,supportHtml5:!0,language:"en",customValidations:{},validate:{onBlur:!0,onSubmit:!0,onKeyup:!1,fields:{hidden:!1,disabled:!1,filter:function(a){return a}}},fields:{onValidate:null,onValid:function(){a(this).add(a(this).parent()).removeClass("invalid")},onInvalid:function(){a(this).add(a(this).parent()).addClass("invalid")}},form:{onReset:null,onValidate:null,onValid:null,onInvalid:function(a,b){switch(b){case"nl":msg="Let op, niet alle velden zijn correct ingevuld.";break;case"de":msg="Achtung, nicht alle Felder sind korrekt ausgefuellt.";break;case"es":msg="Atenci\xf3n, no se han completado todos los campos correctamente.";break;case"en":default:msg="Attention, not all fields have been filled out correctly."}alert(msg),a.first().focus()}},keepClasses:["required"],keepAttributes:["pattern","placeholder"]},a.fn[b].defaultValidations={required:function(b){var d=a(this);if(d.is('[type="radio"]')||d.is('[type="checkbox"]')){if(d.is('[type="radio"]')){var e=d.attr("name");e&&e.length>0&&(d=a('input[name="'+e+'"]'))}if(!d.is(":checked"))return!1}else if(d.is("select")){var f=d.data(c);if(f&&f.placeholderValue!==!1){if(d.val()==f.placeholderValue)return!1}else if(0==b.length)return!1}else if(0==b.length)return!1;return!0},Required:function(c){return a.fn[b].defaultValidations.required.call(this,c)},requiredgroup:function(){var f=a(this),g=f.data(c);g&&g.requiredgroup!==!1&&(f=a(),a(e).each(function(){var b=a(this).data(c);b&&b.requiredgroup==g.requiredgroup&&(f=f.add(this))}));var h=!1;return f.each(function(){var c=this;a.fn[b].defaultValidations.required.call(c,k(a(c).val()))&&(h=!0)}),h},corresponding:function(b){var d="",f=a(this).data(c);if(f&&f.corresponding!==!1){var g=a(e).filter('[name="'+f.corresponding+'"]'),f=g.data(c);return f&&(f.clearPlaceholderValue(),d=k(g.val()),f.restorePlaceholderValue()),b==d}return!1},number:function(a){return a=l(a),0==a.length?!0:isNaN(a)?!1:!0},email:function(a){if(0==a.length)return!0;var b=/^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return b.test(a)},url:function(a){return 0==a.length?!0:(a.match(/^www\./)&&(a="http://"+a),a.match(/^(http\:\/\/|https\:\/\/)(.{4,})$/))},pattern:function(b){if(0==b.length)return!0;var d=a(this),e=d.data(c);if(e){var f=e.pattern;return"/"==f.slice(0,1)&&(f=f.slice(1)),"/"==f.slice(-1)&&(f=f.slice(0,-1)),new RegExp(f).test(b)}}},a.fn[b].support={touch:function(){return"ontouchstart"in document.documentElement}(),placeholder:function(){return"placeholder"in document.createElement("input")}()},a.fn[b].debug=function(){},a.fn[b].deprecated=function(a,b){"undefined"!=typeof console&&"undefined"!=typeof console.error&&console.error(a+" is DEPRECATED, use "+b+" instead.")},a.fn.validValDebug||(a.fn.validValDebug=function(){return a.fn[b].debug("validVal debugger not installed!"),this}))}(jQuery);

/*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */
;!function(a){"use strict";var b=document,c="querySelectorAll",d="getElementsByClassName",e=function(a){return b[c](a)},f={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},g={extend:function(a){var b=JSON.parse(JSON.stringify(f));for(var c in a)b[c]=a[c];return b},timer:{},end:{}};g.touch=function(a,b){a.addEventListener("click",function(a){b.call(this,a)},!1)};var h=0,i=["layui-m-layer"],j=function(a){var b=this;b.config=g.extend(a),b.view()};j.prototype.view=function(){var a=this,c=a.config,f=b.createElement("div");a.id=f.id=i[0]+h,f.setAttribute("class",i[0]+" "+i[0]+(c.type||0)),f.setAttribute("index",h);var g=function(){var a="object"==typeof c.title;return c.title?'<h3 style="'+(a?c.title[1]:"")+'">'+(a?c.title[0]:c.title)+"</h3>":""}(),j=function(){"string"==typeof c.btn&&(c.btn=[c.btn]);var a,b=(c.btn||[]).length;return 0!==b&&c.btn?(a='<span yes type="1">'+c.btn[0]+"</span>",2===b&&(a='<span no type="0">'+c.btn[1]+"</span>"+a),'<div class="layui-m-layerbtn">'+a+"</div>"):""}();if(c.fixed||(c.top=c.hasOwnProperty("top")?c.top:100,c.style=c.style||"",c.style+=" top:"+(b.body.scrollTop+c.top)+"px"),2===c.type&&(c.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(c.content||"")+"</p>"),c.skin&&(c.anim="up"),"msg"===c.skin&&(c.shade=!1),f.innerHTML=(c.shade?"<div "+("string"==typeof c.shade?'style="'+c.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(c.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(c.skin?"layui-m-layer-"+c.skin+" ":"")+(c.className?c.className:"")+" "+(c.anim?"layui-m-anim-"+c.anim:"")+'" '+(c.style?'style="'+c.style+'"':"")+">"+g+'<div class="layui-m-layercont">'+c.content+"</div>"+j+"</div></div></div>",!c.type||2===c.type){var k=b[d](i[0]+c.type),l=k.length;l>=1&&layer.close(k[0].getAttribute("index"))}document.body.appendChild(f);var m=a.elem=e("#"+a.id)[0];c.success&&c.success(m),a.index=h++,a.action(c,m)},j.prototype.action=function(a,b){var c=this;a.time&&(g.timer[c.index]=setTimeout(function(){layer.close(c.index)},1e3*a.time));var e=function(){var b=this.getAttribute("type");0==b?(a.no&&a.no(),layer.close(c.index)):a.yes?a.yes(c.index):layer.close(c.index)};if(a.btn)for(var f=b[d]("layui-m-layerbtn")[0].children,h=f.length,i=0;h>i;i++)g.touch(f[i],e);if(a.shade&&a.shadeClose){var j=b[d]("layui-m-layershade")[0];g.touch(j,function(){layer.close(c.index,a.end)})}a.end&&(g.end[c.index]=a.end)},a.layer={v:"2.0",index:h,open:function(a){var b=new j(a||{});return b.index},close:function(a){var c=e("#"+i[0]+a)[0];c&&(c.innerHTML="",b.body.removeChild(c),clearTimeout(g.timer[a]),delete g.timer[a],"function"==typeof g.end[a]&&g.end[a](),delete g.end[a])},closeAll:function(){for(var a=b[d](i[0]),c=0,e=a.length;e>c;c++)layer.close(0|a[0].getAttribute("index"))}},"function"==typeof define?define(function(){return layer}):function(){var a=document.scripts,c=a[a.length-1],d=c.src,e=d.substring(0,d.lastIndexOf("/")+1);c.getAttribute("merge")||document.head.appendChild(function(){var a=b.createElement("link");return a.href=e+"need/layer.scss?2.0",a.type="text/css",a.rel="styleSheet",a.id="layermcss",a}())}()}(window);