/*!
@author:NaNme@oscaralderete.com>
@website: https://oscaralderete.com
@editor:NetBeans IDE v12.5
*/"use strict";function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _classPrivateMethodInitSpec(obj,privateSet){_checkPrivateRedeclaration(obj,privateSet);privateSet.add(obj)}function _checkPrivateRedeclaration(obj,privateCollection){if(privateCollection.has(obj)){throw new TypeError("Cannot initialize the same private elements twice on an object")}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _classPrivateMethodGet(receiver,privateSet,fn){if(!privateSet.has(receiver)){throw new TypeError("attempted to get private field on non-instance")}return fn}var _call=new WeakSet;var _serialize=new WeakSet;var OAjax=function(){function OAjax(url){_classCallCheck(this,OAjax);_classPrivateMethodInitSpec(this,_serialize);_classPrivateMethodInitSpec(this,_call);_defineProperty(this,"_url","");this._url=url}_createClass(OAjax,[{key:"post",value:function post(obj,callback){_classPrivateMethodGet(this,_call,_call2).call(this,_classPrivateMethodGet(this,_serialize,_serialize2).call(this,obj),callback)}}]);return OAjax}();function _call2(params,callback){fetch(this._url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:params}).then(function(response){return response.json()}).then(function(data){if(typeof callback==="function"){callback(data)}})["catch"](function(error){console.error("ERROR:",error)})}function _serialize2(obj,prefix){var str=[],p;for(p in obj){if(obj.hasOwnProperty(p)){var k=prefix?"".concat(prefix,"[").concat(p,"]"):p,v=obj[p];str.push(v!==null&&_typeof(v)==="object"?_classPrivateMethodGet(this,_serialize,_serialize2).call(this,v,k):"".concat(encodeURIComponent(k),"=").concat(encodeURIComponent(v)))}}return str.join("&")}