function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var o=[],n=!0,i=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(l){i=!0,r=l}finally{try{n||null==c.return||c.return()}finally{if(i)throw r}}return o}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,o){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=_superPropBase(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(o):i.value}})(t,e,o||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dgxB:function(t,e,o){"use strict";o.r(e);var n,i,r=o("PCNd"),a=o("tyNb"),c=o("fXoL"),l=o("XNiG"),s=o("lJxs"),u=o("pLZG"),b=o("GtPT"),g=o("2Vo4"),p=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"onInit",value:function(){_get(_getPrototypeOf(e.prototype),"onInit",this).call(this),this._eventLog=[],this._eventLogSubject=new g.a(this._eventLog),this._eventLog$=this._eventLogSubject.asObservable(),this._activeAgentsInfo={activeLights:0,activeControls:0},this._activeAgentsInfoSubject=new l.a,this._activeAgentsInfo$=this._activeAgentsInfoSubject.asObservable()}},{key:"onCommunicationManagerStarting",value:function(){var t=this;this.observeObjectLifecycleInfoByCoreType("Identity",(function(t){return"LightAgent"===t.name||"LightControlAgent"===t.name})).subscribe((function(e){void 0!==e.added&&e.added.forEach((function(e){return t._updateActiveAgentsInfo("LightAgent"===e.name,!0)})),void 0!==e.removed&&e.removed.forEach((function(e){return t._updateActiveAgentsInfo("LightAgent"===e.name,!1)}))}))}},{key:"clearEventLog",value:function(){this._eventLog=[],this._eventLogSubject.next(this._eventLog)}},{key:"switchLights",value:function(t,e,o,n,i){var r=this,a=b.CallEvent.with(this.runtime.commonOptions.extra.lightControlOperation,{on:e,color:n,luminosity:o,switchTime:i},t),c=this.addCallToEventLog(a);this.communicationManager.publishCall(a).subscribe((function(t){r.addReturnToEventLog(t,c)}))}},{key:"_updateActiveAgentsInfo",value:function(t,e){e?t?this._activeAgentsInfo.activeLights++:this._activeAgentsInfo.activeControls++:t?this._activeAgentsInfo.activeLights--:this._activeAgentsInfo.activeControls--,this._activeAgentsInfoSubject.next(Object.assign({},this._activeAgentsInfo))}},{key:"addCallToEventLog",value:function(t){var e=this.runtime.newUuid();return this._eventLog.unshift({correlationId:e,callEvent:t,callEventTime:Date.now(),returnEvents:[]}),this._eventLogSubject.next(this._eventLog),e}},{key:"addReturnToEventLog",value:function(t,e){var o=this._eventLog.find((function(t){return t.correlationId===e}));o&&(o.returnEvents.push({event:t,eventTime:Date.now()}),this._eventLogSubject.next(this._eventLog))}},{key:"eventLog$",get:function(){return this._eventLog$}},{key:"activeAgentsInfo$",get:function(){return this._activeAgentsInfo$}}]),e}(b.ObjectLifecycleController),f=o("2ChS"),h=o("/t3+"),m=o("bTqV"),d=o("Qu3c"),v=o("NFeN"),y=((n=function(){function t(e,o){_classCallCheck(this,t),this.data=e,this.bottomSheetRef=o}return _createClass(t,[{key:"close",value:function(t){this.bottomSheetRef.dismiss(),t.preventDefault()}}]),t}()).\u0275fac=function(t){return new(t||n)(c.Nb(f.a),c.Nb(f.d))},n.\u0275cmp=c.Hb({type:n,selectors:[["app-code-viewer-bottom-sheet"]],decls:32,vars:3,consts:[[1,"code-toolbar"],[1,"code-header"],[1,"code-key"],[1,"app-space-filler"],["mat-icon-button","","matTooltip","Close",1,"code-toolbar-button",3,"click"],["aria-hidden","false","aria-label","Close"],[1,"code-value"]],template:function(t,e){1&t&&(c.Sb(0,"mat-toolbar",0),c.Sb(1,"span",1),c.Sb(2,"code"),c.yc(3,"CallEvent.withData(this.identity, "),c.Rb(),c.Sb(4,"code",2),c.yc(5,"operation"),c.Rb(),c.Sb(6,"code"),c.yc(7,", "),c.Rb(),c.Sb(8,"code",2),c.yc(9,"parameters"),c.Rb(),c.Sb(10,"code"),c.yc(11,", "),c.Rb(),c.Sb(12,"code",2),c.yc(13,"contextFilter"),c.Rb(),c.Sb(14,"code"),c.yc(15,")"),c.Rb(),c.Rb(),c.Ob(16,"span",3),c.Sb(17,"button",4),c.ac("click",(function(t){return e.close(t)})),c.Sb(18,"mat-icon",5),c.yc(19,"close "),c.Rb(),c.Rb(),c.Rb(),c.Sb(20,"pre",2),c.yc(21,"operation"),c.Rb(),c.Sb(22,"pre",6),c.yc(23),c.Rb(),c.Sb(24,"pre",2),c.yc(25,"parameters"),c.Rb(),c.Sb(26,"pre",6),c.yc(27),c.Rb(),c.Sb(28,"pre",2),c.yc(29,"contextFilter"),c.Rb(),c.Sb(30,"pre",6),c.yc(31),c.Rb()),2&t&&(c.Bb(23),c.zc(e.data.operation),c.Bb(4),c.zc(e.data.operationParameters),c.Bb(4),c.zc(e.data.contextFilter))},directives:[h.a,m.b,d.a,v.a],styles:[".code-toolbar[_ngcontent-%COMP%]{font-size:17px;height:60px;padding-right:0;margin-top:-8px;margin-left:-16px;margin-right:-16px;width:calc(100% + 32px)}.code-toolbar-button[_ngcontent-%COMP%]{margin:0 16px}.code-key[_ngcontent-%COMP%]{color:#673ab7}.code-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}"]}),n),C=o("/Uk7"),k=o("tXAj"),S=o("Wp6s"),w=o("ofXK"),R=o("f0Cb"),x=o("kmnG"),L=o("d3UM"),O=o("3Pt+"),T=o("1G5W"),_=o("FKr1"),I=((i=function(){function t(e){_classCallCheck(this,t),this.matSelect=e,this.state="checked",this.options=[],this.value=[],this.destroyed=new l.a}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;this.options=this.matSelect.options.map((function(t){return t.value})),this.matSelect.options.changes.pipe(Object(T.a)(this.destroyed)).subscribe((function(e){t.options=t.matSelect.options.map((function(t){return t.value})),t.updateState()})),this.value=this.matSelect.ngControl.control.value,this.matSelect.ngControl.valueChanges.pipe(Object(T.a)(this.destroyed)).subscribe((function(e){t.value=e,t.updateState()})),setTimeout((function(){t.updateState()}))}},{key:"ngOnDestroy",value:function(){this.destroyed.next(),this.destroyed.complete()}},{key:"onSelectAllClick",value:function(t){this.matSelect.ngControl.control.setValue("checked"===this.state?[]:this.options)}},{key:"updateState",value:function(){var t=this.areArraysEqual(this.value,this.options);this.state=t?"checked":this.value.length>0?"indeterminate":"unchecked"}},{key:"areArraysEqual",value:function(t,e){return _toConsumableArray(t).sort().join(",")===_toConsumableArray(e).sort().join(",")}}]),t}()).\u0275fac=function(t){return new(t||i)(c.Nb(L.a,1))},i.\u0275cmp=c.Hb({type:i,selectors:[["app-mat-option-select-all"]],decls:4,vars:1,consts:[[1,"mat-option",3,"click"],[1,"mat-option-pseudo-checkbox",3,"state"],[1,"mat-option-text"]],template:function(t,e){1&t&&(c.Sb(0,"div",0),c.ac("click",(function(t){return e.onSelectAllClick(t)})),c.Ob(1,"mat-pseudo-checkbox",1),c.Sb(2,"span",2),c.yc(3,"Select all"),c.Rb(),c.Rb()),2&t&&(c.Bb(1),c.kc("state",e.state))},directives:[_.l],styles:[".mat-option[_ngcontent-%COMP%] {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      height: 3.5em;\n      line-height: 3.5em;\n  }"]}),i),B=o("DoL9"),A=o("1jcm"),E=o("5RNC"),P=o("jaxi"),M=o("bSwM"),j=o("7EHt"),q=o("MutI"),F=["controlCard"];function N(t,e){if(1&t&&(c.Sb(0,"mat-icon",12),c.yc(1),c.Rb()),2&t){var o=e.ngIf;c.kc("matTooltip",o.isOnline?"Connected to "+o.brokerHost:"Not connected to "+o.brokerHost),c.Bb(1),c.Ac(" ",o.isOnline?"wifi":"wifi_off"," ")}}function H(t,e){1&t&&(c.Sb(0,"mat-card-content"),c.yc(1,"Initializing..."),c.Rb())}function W(t,e){if(1&t&&(c.Sb(0,"mat-option",37),c.yc(1),c.Rb()),2&t){var o=e.$implicit;c.kc("value",o),c.Bb(1),c.Ac(" ",o," ")}}function $(t,e){if(1&t&&(c.Sb(0,"mat-option",37),c.yc(1),c.Rb()),2&t){var o=e.$implicit;c.kc("value",o),c.Bb(1),c.Ac(" ",o," ")}}function D(t,e){if(1&t&&(c.Sb(0,"mat-option",37),c.yc(1),c.Rb()),2&t){var o=e.$implicit;c.kc("value",o),c.Bb(1),c.Ac(" ",o," ")}}function z(t,e){if(1&t){var o=c.Tb();c.Sb(0,"a",44),c.ac("click",(function(t){return c.qc(o),c.ec(2).onQrCodeClear(t)})),c.Sb(1,"mat-icon",45),c.yc(2," highlight_off "),c.Rb(),c.Rb()}}function Q(t,e){if(1&t&&c.Ob(0,"mat-button-toggle",46),2&t){var o=e.$implicit,n=c.ec(2);c.vc("background-color",n.colorRgbaToCssRgba(o.rgba))("border-color",n.selectedCustomColor===o?"#ffd740":"rgba(0, 0, 0, 0.12)"),c.kc("value",o)("matTooltip",o.name)}}function G(t,e){if(1&t&&(c.Sb(0,"code",61),c.Sb(1,"span"),c.yc(2),c.Rb(),c.Sb(3,"span"),c.yc(4),c.fc(5,"json"),c.Rb(),c.Sb(6,"span"),c.yc(7),c.Rb(),c.Rb()),2&t){var o=c.ec().$implicit;c.Bb(2),c.Ac("light #",o.event.data.executionInfo.lightId," "),c.Bb(2),c.Ac("error message: ",c.gc(5,3,o.event.data.error.message)," , "),c.Bb(3),c.Ac("error code: ",o.event.data.error.code,"")}}function U(t,e){if(1&t&&(c.Sb(0,"code",53),c.Sb(1,"span"),c.yc(2),c.Rb(),c.Sb(3,"span"),c.yc(4),c.fc(5,"json"),c.Rb(),c.Sb(6,"span"),c.yc(7),c.fc(8,"date"),c.Rb(),c.Rb()),2&t){var o=c.ec().$implicit;c.Bb(2),c.Ac("light #",o.event.data.executionInfo.lightId," "),c.Bb(2),c.Ac("result: ",c.gc(5,3,o.event.data.result),", "),c.Bb(3),c.Ac("triggerTime: ",c.hc(8,5,o.event.data.executionInfo.triggerTime,"HH:mm:ss.SSS"),"")}}function V(t,e){if(1&t&&(c.Sb(0,"mat-list-item",56),c.Sb(1,"mat-icon",57),c.yc(2," arrow_forward"),c.Rb(),c.Sb(3,"h4",58),c.yc(4),c.fc(5,"date"),c.Rb(),c.wc(6,G,8,5,"code",59),c.wc(7,U,9,8,"code",60),c.Rb()),2&t){var o=e.$implicit;c.Bb(1),c.kc("color",o.event.data.isError?"warn":""),c.Bb(2),c.Eb("control-event-log-warn",o.event.data.isError),c.Bb(1),c.Ac(" ReturnEvent @ ",c.hc(5,6,o.eventTime,"HH:mm:ss.SSS")," "),c.Bb(2),c.kc("ngIf",o.event.data.isError),c.Bb(1),c.kc("ngIf",!o.event.data.isError)}}function J(t,e){if(1&t){var o=c.Tb();c.Sb(0,"mat-list-item",50),c.Sb(1,"mat-icon",51),c.yc(2," arrow_back"),c.Rb(),c.Sb(3,"div",52),c.yc(4),c.fc(5,"date"),c.Sb(6,"code",53),c.Sb(7,"span"),c.yc(8),c.Rb(),c.Sb(9,"span"),c.yc(10),c.Rb(),c.Sb(11,"span"),c.yc(12),c.Rb(),c.Sb(13,"span"),c.yc(14),c.Rb(),c.Rb(),c.Sb(15,"a",54),c.ac("click",(function(){c.qc(o);var t=e.$implicit;return c.ec(3).viewCallEventData(t.callEvent.data)})),c.Sb(16,"mat-icon",45),c.yc(17," code "),c.Rb(),c.Rb(),c.Rb(),c.wc(18,V,8,9,"mat-list-item",55),c.Rb()}if(2&t){var n=e.$implicit;c.Eb("control-event-log-list-item-alternate",e.even),c.Bb(4),c.Ac(" CallEvent @ ",c.hc(5,8,n.callEventTime,"HH:mm:ss.SSS")," "),c.Bb(4),c.Ac("on: ",n.callEvent.data.getParameterByName("on"),", "),c.Bb(2),c.Ac("luminosity: ",n.callEvent.data.getParameterByName("luminosity"),", "),c.Bb(2),c.Ac("color: ",n.callEvent.data.getParameterByName("color"),", "),c.Bb(2),c.Ac("switchTime: ",n.callEvent.data.getParameterByName("switchTime")," "),c.Bb(4),c.kc("ngForOf",n.returnEvents)}}function K(t,e){if(1&t){var o=c.Tb();c.Sb(0,"mat-expansion-panel"),c.Sb(1,"mat-expansion-panel-header"),c.Sb(2,"mat-panel-title"),c.yc(3," Event Log "),c.Rb(),c.Sb(4,"mat-panel-description"),c.yc(5),c.Rb(),c.Rb(),c.Sb(6,"mat-list",47),c.wc(7,J,19,11,"mat-list-item",48),c.Rb(),c.Sb(8,"mat-action-row"),c.Sb(9,"button",49),c.ac("click",(function(){return c.qc(o),c.ec(2).clearEventLog()})),c.yc(10,"CLEAR"),c.Rb(),c.Rb(),c.Rb()}if(2&t){var n=e.ngIf,i=c.ec(2);c.Bb(5),c.Bc(" Call (",n.length,") \u22c5 Return (",i.getReturnEventsCount(n),") "),c.Bb(2),c.kc("ngForOf",n)("ngForTrackBy",i.trackByEventLogEntries),c.Bb(2),c.kc("disabled",!i.controlContainer)}}function X(t,e){if(1&t){var o=c.Tb();c.Sb(0,"mat-card-content"),c.Sb(1,"h1",13),c.yc(2),c.fc(3,"async"),c.Rb(),c.Sb(4,"h1",14),c.yc(5),c.fc(6,"async"),c.Rb(),c.Sb(7,"h4",15),c.yc(8,"SELECT CONTEXT FILTER"),c.Rb(),c.Sb(9,"mat-form-field",16),c.Sb(10,"mat-label"),c.yc(11,"Buildings"),c.Rb(),c.Sb(12,"mat-select",17),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().selectedBuildings=t})),c.Ob(13,"app-mat-option-select-all"),c.wc(14,W,2,2,"mat-option",18),c.Rb(),c.Rb(),c.Sb(15,"mat-form-field",16),c.Sb(16,"mat-label"),c.yc(17,"Floors"),c.Rb(),c.Sb(18,"mat-select",17),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().selectedFloors=t})),c.Ob(19,"app-mat-option-select-all"),c.wc(20,$,2,2,"mat-option",18),c.Rb(),c.Rb(),c.Sb(21,"mat-form-field",16),c.Sb(22,"mat-label"),c.yc(23,"Rooms"),c.Rb(),c.Sb(24,"mat-select",17),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().selectedRooms=t})),c.Ob(25,"app-mat-option-select-all"),c.wc(26,D,2,2,"mat-option",18),c.Rb(),c.Rb(),c.Sb(27,"div",19),c.Sb(28,"mat-label",20),c.yc(29,"Light"),c.Rb(),c.Sb(30,"qrcode",21),c.ac("dragover",(function(t){return c.qc(o),c.ec().onQrCodeDragOver(t)}))("drop",(function(t){return c.qc(o),c.ec().onQrCodeDrop(t)})),c.Rb(),c.wc(31,z,3,0,"a",22),c.Rb(),c.Sb(32,"h4"),c.yc(33,"SELECT OPERATION PARAMETERS"),c.Rb(),c.Sb(34,"div",23),c.Sb(35,"div",24),c.Sb(36,"div",25),c.Sb(37,"mat-icon",26),c.yc(38," wb_incandescent "),c.Rb(),c.yc(39," On/Off "),c.Rb(),c.Sb(40,"mat-slide-toggle",27),c.ac("change",(function(t){return c.qc(o),c.ec().onOnOffToggle(t)}))("ngModelChange",(function(t){return c.qc(o),c.ec().onOff=t})),c.Rb(),c.Rb(),c.Sb(41,"div",28),c.Sb(42,"div",25),c.Sb(43,"mat-icon",29),c.yc(44," wb_sunny "),c.Rb(),c.yc(45," Luminosity "),c.Rb(),c.Sb(46,"mat-slider",30),c.ac("change",(function(t){return c.qc(o),c.ec().onLuminosityChange(t)}))("ngModelChange",(function(t){return c.qc(o),c.ec().luminosityPercent=t})),c.Rb(),c.Rb(),c.Sb(47,"div",31),c.Sb(48,"div",25),c.Sb(49,"mat-icon",29),c.yc(50," color_lens "),c.Rb(),c.yc(51," Color "),c.Rb(),c.Sb(52,"mat-slider",32),c.ac("input",(function(t){return c.qc(o),c.ec().onPrimaryColorDrag(t)}))("change",(function(t){return c.qc(o),c.ec().onPrimaryColorChange(t)}))("ngModelChange",(function(t){return c.qc(o),c.ec().primaryColorPosition=t})),c.Rb(),c.Sb(53,"mat-button-toggle-group",33),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().selectedCustomColor=t}))("change",(function(t){return c.qc(o),c.ec().onCustomColorChange(t)})),c.wc(54,Q,1,6,"mat-button-toggle",34),c.Rb(),c.Rb(),c.Sb(55,"div",28),c.Sb(56,"div",25),c.Sb(57,"mat-icon",35),c.yc(58," timer "),c.Rb(),c.yc(59," Switch time "),c.Rb(),c.Sb(60,"mat-button-toggle-group",36),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().switchTime=t}))("change",(function(t){return c.qc(o),c.ec().onSwitchTimeChange(t)})),c.Sb(61,"mat-button-toggle",37),c.yc(62,"Immediate"),c.Rb(),c.Sb(63,"mat-button-toggle",37),c.yc(64,"5sec"),c.Rb(),c.Sb(65,"mat-button-toggle",37),c.yc(66,"10sec"),c.Rb(),c.Sb(67,"mat-button-toggle",37),c.yc(68,"20sec"),c.Rb(),c.Sb(69,"mat-button-toggle",37),c.yc(70,"30sec"),c.Rb(),c.Sb(71,"mat-button-toggle",37),c.yc(72,"60sec"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(73,"div",38),c.Sb(74,"button",39),c.ac("click",(function(){return c.qc(o),c.ec().switchLights()})),c.yc(75,"Switch lights "),c.Rb(),c.Sb(76,"mat-checkbox",40),c.ac("ngModelChange",(function(t){return c.qc(o),c.ec().autoSwitch=t})),c.yc(77," Auto switch on parameter changes "),c.Rb(),c.Ob(78,"div",41),c.Sb(79,"button",42),c.ac("click",(function(){return c.qc(o),c.ec().openCodeViewer()})),c.Sb(80,"mat-icon",43),c.yc(81,"code "),c.Rb(),c.Rb(),c.Rb(),c.wc(82,K,11,5,"mat-expansion-panel",9),c.fc(83,"async"),c.Rb()}if(2&t){var n,i,r=c.ec();c.Bb(2),c.Ac("# Lights: ",null==(n=c.gc(3,45,r.activeAgentsInfo$))?null:n.activeLights,""),c.Bb(3),c.Ac("# Controls: ",null==(i=c.gc(6,47,r.activeAgentsInfo$))?null:i.activeControls,""),c.Bb(7),c.kc("ngModel",r.selectedBuildings)("disabled",!!r.selectedLightId),c.Bb(2),c.kc("ngForOf",r.availableBuildings),c.Bb(4),c.kc("ngModel",r.selectedFloors)("disabled",!!r.selectedLightId),c.Bb(2),c.kc("ngForOf",r.availableFloors),c.Bb(4),c.kc("ngModel",r.selectedRooms)("disabled",!!r.selectedLightId),c.Bb(2),c.kc("ngForOf",r.availableRooms),c.Bb(4),c.vc("opacity",r.selectedLightId?1:.3),c.kc("matTooltip",r.selectedLightId?r.selectedLightUrl:"Drop QR Code of a light here to switch this light only")("title","")("qrdata",r.selectedLightUrl||"coaty.io")("usesvg",!0)("level","M"),c.Bb(1),c.kc("ngIf",r.selectedLightId),c.Bb(9),c.kc("color","accent")("labelPosition","before")("ngModel",r.onOff),c.Bb(6),c.kc("min",0)("max",100)("tickInterval",10)("step",1)("thumbLabel",!0)("ngModel",r.luminosityPercent),c.Bb(6),c.kc("min",0)("max",r.primaryColorPositionMax)("step",1)("thumbLabel",!0)("displayWith",r.primaryColorThumbDisplayer)("ngModel",r.primaryColorPosition),c.Bb(1),c.kc("ngModel",r.selectedCustomColor),c.Bb(1),c.kc("ngForOf",r.customColors),c.Bb(6),c.kc("ngModel",r.switchTime),c.Bb(1),c.kc("value",0),c.Bb(2),c.kc("value",5e3),c.Bb(2),c.kc("value",1e4),c.Bb(2),c.kc("value",2e4),c.Bb(2),c.kc("value",3e4),c.Bb(2),c.kc("value",6e4),c.Bb(5),c.kc("ngModel",r.autoSwitch),c.Bb(6),c.kc("ngIf",c.gc(83,49,r.eventLog$))}}function Z(t,e){if(1&t){var o=c.Tb();c.Sb(0,"mat-card-actions"),c.Sb(1,"button",62),c.ac("click",(function(){return c.qc(o),c.ec().openLightApp()})),c.yc(2,"NEW LIGHT "),c.Rb(),c.Sb(3,"a",63),c.yc(4,"NEW LIGHT IN TAB "),c.Rb(),c.Sb(5,"a",64),c.yc(6,"NEW LIGHT CONTROL "),c.Rb(),c.Rb()}}function Y(t,e){if(1&t&&(c.Sb(0,"div"),c.yc(1),c.fc(2,"date"),c.Rb()),2&t){var o=e.ngIf;c.Bb(1),c.Ac("Last switch operation: ",c.hc(2,1,null==o[0]?null:o[0].callEventTime,"HH:mm:ss.SSS"),"")}}function tt(t,e){1&t&&(c.Sb(0,"div"),c.yc(1,"Last switch operation:"),c.Rb())}function et(t,e){if(1&t&&(c.Sb(0,"div",65),c.Sb(1,"a",66),c.Ob(2,"img",67),c.Rb(),c.Sb(3,"a",68),c.Ob(4,"img",69),c.Rb(),c.Rb()),2&t){var o=e.ngIf;c.Bb(1),c.kc("matTooltip",(null==o?null:o.packageInfo.name)+"@"+(null==o?null:o.packageInfo.version)+" on GitHub")}}var ot,nt,it=[{path:"",component:(ot=function(){function t(e,o,n,i,r){_classCallCheck(this,t),this.appContext=e,this.bottomSheet=o,this.changeRef=n,this.route=i,this.autoSwitch=!1,this.primaryColorPositionMax=1e3,this.currentClock$=new l.a,this.appContext.setContext("Light Control"),this.startClock(),this.connectControlController(r)}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.queryParamMap.pipe(Object(s.a)((function(t){return t.get("light_id")})),Object(u.a)((function(t){return!!t}))).subscribe((function(e){setTimeout((function(){t.selectedLightId=e,t.selectedLightUrl=window.location.href}))}))}},{key:"ngAfterContentInit",value:function(){var t=this;setTimeout((function(){t.updateColorSliderThumb(t.primaryColorPosition)}))}},{key:"ngOnDestroy",value:function(){this.stopClock(),this.controlContainer&&this.controlContainer.shutdown()}},{key:"onOnOffToggle",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onLuminosityChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"primaryColorThumbDisplayer",value:function(t){return""}},{key:"onPrimaryColorDrag",value:function(t){this.updateColorSliderThumb(t.value),this.selectedCustomColor=void 0}},{key:"onPrimaryColorChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onCustomColorChange",value:function(t){t.source.checked&&(this.updateColorSliderThumb(-1),this.autoSwitch&&this.switchLights())}},{key:"onSwitchTimeChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onQrCodeDragOver",value:function(t){t.dataTransfer.types.includes("text/qrcode")&&t.preventDefault()}},{key:"onQrCodeDrop",value:function(t){var e=t.dataTransfer.getData("text/qrcode"),o=e.lastIndexOf("?light_id=");-1!==o&&(this.selectedLightId=e.substr(o+10),this.selectedLightUrl=e),t.preventDefault()}},{key:"onQrCodeClear",value:function(t){this.selectedLightId=void 0,this.selectedLightUrl=void 0}},{key:"switchLights",value:function(){this.controlContainer.getController("ControlController").switchLights(this.createContextFilter(),this.onOff,this.luminosity,this.effectiveColor,this.switchTime)}},{key:"openCodeViewer",value:function(){this.bottomSheet.open(y,{data:this.getFormattedEventData(this.onOff,this.luminosity,this.effectiveColor,this.switchTime,this.createContextFilter())})}},{key:"openLightApp",value:function(){this.openLightAppInPopup()}},{key:"viewCallEventData",value:function(t){console.log(t.filter),this.bottomSheet.open(y,{data:this.getFormattedEventData(t.getParameterByName("on"),t.getParameterByName("luminosity"),t.getParameterByName("color"),t.getParameterByName("switchTime"),t.filter)})}},{key:"clearEventLog",value:function(){this.controlContainer.getController("ControlController").clearEventLog()}},{key:"colorRgbaToCssRgba",value:function(t){return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}},{key:"getReturnEventsCount",value:function(t){return t.reduce((function(t,e){return t+e.returnEvents.length}),0)}},{key:"trackByEventLogEntries",value:function(t,e){return e.correlationId}},{key:"startClock",value:function(){var t=this,e=Date.now();this.currentClock$.next(e),this.isClockStopped=!1,function o(){t.isClockStopped||requestAnimationFrame((function(){var n=Date.now();n-e>=1e3&&t.currentClock$.next(e=n),o()}))}()}},{key:"stopClock",value:function(){this.isClockStopped=!0}},{key:"initContextFilterBindings",value:function(t,e){var o=function(t,e){return Array.from({length:e-t+1},(function(e,o){return o+t}))};this.availableBuildings=o(t.building.min,t.building.max),this.availableFloors=o(t.floor.min,t.floor.max),this.availableRooms=o(t.room.min,t.room.max),this.selectedBuildings=e.initialContextFilterBuildings,this.selectedFloors=e.initialContextFilterFloors,this.selectedRooms=e.initialContextFilterRooms}},{key:"createContextFilter",value:function(){return this.selectedLightId?{conditions:["lightId",b.filterOp.equals(this.selectedLightId)]}:{conditions:{and:[["building",b.filterOp.in(this.selectedBuildings)],["floor",b.filterOp.in(this.selectedFloors)],["room",b.filterOp.in(this.selectedRooms)]]}}}},{key:"initOperationParams",value:function(t){this.onOff=t.initialOpParamOnOff,this.luminosityPercent=100*t.initialOpParamLuminosity,this.primaryColorPosition=this.rgbaToColorPosition(t.initialOpParamPrimaryColor),this.customColors=t.customColors,this.switchTime=t.initialSwitchTime}},{key:"connectControlController",value:function(t){var e=this;t.resolveContainer("LightControlAgent","ControlController",p).then((function(t){e.controlContainer=t;var o=t.getController("ControlController");e.initBrokerConnectionInfo(o.options),e.initContextFilterBindings(t.runtime.commonOptions.extra.lightContextRanges,o.options),e.initOperationParams(o.options),e.eventLog$=o.eventLog$,e.activeAgentsInfo$=o.activeAgentsInfo$,e.changeRef.detectChanges(),e.appContext.setContext("Light Control #".concat(t.identity.objectId))})).catch((function(t){throw new Error("Agent container for ControlComponent couldn't be resolved: ".concat(t))}))}},{key:"initBrokerConnectionInfo",value:function(t){var e=this;this.brokerConnectionInfo$=this.controlContainer.communicationManager.observeCommunicationState().pipe(Object(s.a)((function(t){return{state:t,isOnline:t===b.CommunicationState.Online,brokerHost:e.controlContainer.communicationManager.options.brokerUrl}})))}},{key:"openLightAppInPopup",value:function(){var t,e,o=this.controlContainer.getController("ControlController").options,n=window.open("./light","_blank","toolbar=no,resizable=no,status=no,location=no,menubar=no,titlebar=no,width=".concat(o.lightWindowWidth,",height=").concat(o.lightWindowHeight)),i={screenLeft:n.screenLeft,screenTop:n.screenTop,outerWidth:n.outerWidth,outerHeight:n.outerHeight,availTop:n.screen.availTop||0,availLeft:n.screen.availLeft||0,availWidth:n.screen.availWidth,availHeight:n.screen.availHeight};if(this.currentLightWindowLayout){var r=this.currentLightWindowLayout.outerWidth,a=this.currentLightWindowLayout.outerHeight,c=this.currentLightWindowLayout.availTop,l=this.currentLightWindowLayout.availLeft,s=this.currentLightWindowLayout.availWidth;t=this.currentLightWindowLayout.screenLeft,(e=this.currentLightWindowLayout.screenTop+a)+a>=c+this.currentLightWindowLayout.availHeight&&(e=c,(t+=r)+r>=l+s&&(t=l,e=c))}else t=i.availLeft,e=i.availTop;n.moveTo(t,e),i.screenLeft=n.screenLeft,i.screenTop=n.screenTop,this.currentLightWindowLayout=i}},{key:"updateColorSliderThumb",value:function(t){var e=this.colorPositionToRgba(t)||[255,255,255,0],o=this.cardElementRef.nativeElement.querySelector(".control-color-slider .mat-slider-thumb-label");o&&(o.style.backgroundColor=this.colorRgbaToCssRgba(e))}},{key:"rgbaToColorPosition",value:function(t){var e,o=_slicedToArray(t,4),n=o[0],i=o[1],r=o[2],a=(o[3],1/6);if(255===n&&0===r)e=a*i/255;else if(255===i&&0===r)e=a+(255-a*n)/255;else if(0===n&&255===i)e=2*a+a*r/255;else if(0===n&&255===r)e=.5+(255-a*i)/255;else if(0===i&&255===r)e=4*a+a*n/255;else{if(255!==n||0!==i)return-1;e=5*a+(255-a*r)/255}return e*this.primaryColorPositionMax}},{key:"colorPositionToRgba",value:function(t){if(-1!==t){var e=0,o=0,n=0,i=t/this.primaryColorPositionMax,r=1/6;return i<=r?(e=255,o=255*i/r,n=0):i<=2*r?(e=255-255*(i-r)/r,o=255,n=0):i<=.5?(e=0,o=255,n=255*(i-2*r)/r):i<=4*r?(e=0,o=255-255*(i-.5)/r,n=255):i<=5*r?(e=255*(i-4*r)/r,o=0,n=255):(e=255,o=0,n=255-255*(i-5*r)/r),[Math.round(e),Math.round(o),Math.round(n),1]}}},{key:"getFormattedEventData",value:function(t,e,o,n,i){var r=function(t){return JSON.stringify(t).replace(/,/g,", ")},a=function(t,e){return Array.isArray(e)&&e.every((function(t){return!Array.isArray(t)}))?r(e):e},c=function(t){return function(t){return t.replace(/\\/g,"").replace(/\"\[/g,"[").replace(/\]\"/g,"]").replace(/\"\{/g,"{").replace(/\}\"/g,"}")}(JSON.stringify(t,a,2))};return{operation:c(this.controlContainer.runtime.commonOptions.extra.lightControlOperation),operationParameters:c({on:t,luminosity:e,color:o,switchTime:n}),contextFilter:function(t){return t.replace(/\"filterOp/g,"filterOp").replace(/\)\"/g,")")}(c(function(t){if(Array.isArray(t.conditions)){var e=t.conditions;return e[1]="filterOp.".concat(b.ObjectFilterOperator[e[1][0]],"(").concat(JSON.stringify(e[1][1]),")"),t}return t.conditions.and.forEach((function(t){return t[1]="filterOp.".concat(b.ObjectFilterOperator[t[1][0]],"(").concat(r(t[1][1]),")")})),t}(i)))}}},{key:"luminosity",get:function(){return this.luminosityPercent/100}},{key:"effectiveColor",get:function(){if(this.selectedCustomColor)return this.selectedCustomColor.rgba;var t=this.colorPositionToRgba(this.primaryColorPosition);return t[3]=.75,t}}]),t}(),ot.\u0275fac=function(t){return new(t||ot)(c.Nb(C.a),c.Nb(f.b),c.Nb(c.h),c.Nb(a.a),c.Nb(k.a))},ot.\u0275cmp=c.Hb({type:ot,selectors:[["app-control"]],viewQuery:function(t,e){var o;1&t&&c.uc(F,!0,c.l),2&t&&c.nc(o=c.bc())&&(e.cardElementRef=o.first)},decls:27,vars:18,consts:[[1,"app-card"],["controlCard",""],["mat-card-avatar","",1,"control-card-header-avatar"],[1,"app-text-with-ellipsis"],["class","control-card-title-icon",3,"matTooltip",4,"ngIf"],[1,"control-time-overlay"],["mat-card-image","","src","./assets/images/light-control-image.jpg","alt","Key visual with a light bulb",1,"app-map-card-image-centered","app-keyvisual-layout"],["initializing",""],[4,"ngIf","ngIfElse"],[4,"ngIf"],["nolog",""],["class","app-card-footer-link-group",4,"ngIf"],[1,"control-card-title-icon",3,"matTooltip"],[1,"control-light-agents-info-overlay"],[1,"control-control-agents-info-overlay"],[1,"app-heading-no-top-margin"],[1,"control-form-field"],["multiple","",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"control-context-qrcode-field"],[1,"control-context-qrcode-label"],[1,"control-context-qrcode",3,"matTooltip","title","qrdata","usesvg","level","dragover","drop"],["class","control-context-qrcode-button","matTooltip","Remove light from context filter","aria-label","icon button to remove QR Code from context filter",3,"click",4,"ngIf"],[1,"control-operation-params"],[1,"control-operation-param","control-operation-param-no-grow"],[1,"control-operation-param-label"],["aria-label","light bulb icon",1,"app-mat-icon-flipped"],["aria-label","on/off switch",3,"color","labelPosition","ngModel","change","ngModelChange"],[1,"control-operation-param"],["aria-label","light bulb icon"],[3,"min","max","tickInterval","step","thumbLabel","ngModel","change","ngModelChange"],[1,"control-operation-param","control-operation-param-color"],[1,"control-color-slider",3,"min","max","step","thumbLabel","displayWith","ngModel","input","change","ngModelChange"],[3,"ngModel","ngModelChange","change"],[3,"value","matTooltip","background-color","border-color",4,"ngFor","ngForOf"],["aria-label","timer icon"],["aria-label","Switch time",1,"control-operation-param-time-switch-group",3,"ngModel","ngModelChange","change"],[3,"value"],[1,"control-operation-request"],["mat-flat-button","","color","primary",3,"click"],[3,"ngModel","ngModelChange"],[1,"app-space-filler"],["mat-mini-fab","","color","primary","matTooltip","View CallEvent data",3,"click"],["aria-label","View code of currently selected filter and parameters"],["matTooltip","Remove light from context filter","aria-label","icon button to remove QR Code from context filter",1,"control-context-qrcode-button",3,"click"],["color","primary"],[3,"value","matTooltip"],[1,"control-event-log-list"],["class","control-event-log-list-item",3,"control-event-log-list-item-alternate",4,"ngFor","ngForOf","ngForTrackBy"],["mat-button","","color","primary",3,"disabled","click"],[1,"control-event-log-list-item"],["matListIcon","",1,"control-event-log-call-icon"],["matLine","",1,"control-event-log-heading"],[1,"control-event-log-code"],["matTooltip","View CallEvent data","aria-label","icon button for viewing CallEvent data in bottom sheet",1,"control-code-icon",3,"click"],["matLine","","class","control-event-log-return-list-item",4,"ngFor","ngForOf"],["matLine","",1,"control-event-log-return-list-item"],["matListIcon","",3,"color"],[1,"control-event-log-heading"],["class","control-event-log-code control-event-log-warn",4,"ngIf"],["class","control-event-log-code",4,"ngIf"],[1,"control-event-log-code","control-event-log-warn"],["mat-button","","color","primary","matTooltip","Open new light in popup","aria-label","Button that opens a new light in a popup window",3,"click"],["mat-button","","color","primary","matTooltip","Open new light in new tab","aria-label","Button that opens a new light in a new tab","routerLink","/light","target","_blank"],["mat-button","","color","primary","matTooltip","Open new light control in new tab","aria-label","Button that opens a new light control in a new tab","routerLink","/control","target","_blank"],[1,"app-card-footer-link-group"],["mat-button","","href","https://github.com/coatyio/coaty-examples/tree/master/remote-operations/js","target","_blank",3,"matTooltip"],["src","./assets/images/github-icon.svg","alt","github-logo"],["mat-button","","href","https://coaty.io","target","_blank"],["src","./assets/images/coaty-logo-accent.svg","alt","coaty-logo"]],template:function(t,e){if(1&t&&(c.Sb(0,"mat-card",0,1),c.Sb(2,"mat-card-header"),c.Ob(3,"a",2),c.Sb(4,"mat-card-title",3),c.yc(5," Light Control "),c.Rb(),c.Sb(6,"mat-card-subtitle",3),c.yc(7),c.Rb(),c.wc(8,N,2,2,"mat-icon",4),c.fc(9,"async"),c.Rb(),c.Sb(10,"h1",5),c.yc(11),c.fc(12,"date"),c.fc(13,"async"),c.Rb(),c.Ob(14,"img",6),c.wc(15,H,2,0,"ng-template",null,7,c.xc),c.wc(17,X,84,51,"mat-card-content",8),c.Ob(18,"mat-divider"),c.wc(19,Z,7,0,"mat-card-actions",9),c.Ob(20,"mat-divider"),c.Sb(21,"mat-card-footer"),c.wc(22,Y,3,4,"div",8),c.fc(23,"async"),c.wc(24,tt,2,0,"ng-template",null,10,c.xc),c.wc(26,et,5,1,"div",11),c.Rb(),c.Rb()),2&t){var o=c.oc(16),n=c.oc(25);c.Bb(7),c.Ac(" #",null==e.controlContainer?null:e.controlContainer.identity.objectId," "),c.Bb(1),c.kc("ngIf",c.gc(9,9,e.brokerConnectionInfo$)),c.Bb(3),c.zc(c.hc(12,11,c.gc(13,14,e.currentClock$),"HH:mm:ss")),c.Bb(6),c.kc("ngIf",e.controlContainer)("ngIfElse",o),c.Bb(2),c.kc("ngIf",e.controlContainer),c.Bb(3),c.kc("ngIf",c.gc(23,16,e.eventLog$))("ngIfElse",n),c.Bb(4),c.kc("ngIf",null==e.controlContainer?null:e.controlContainer.runtime.commonOptions.agentInfo)}},directives:[S.a,S.f,S.c,S.j,S.i,w.m,S.g,R.a,S.e,v.a,d.a,S.d,x.a,x.d,L.a,O.g,O.i,I,w.l,B.a,A.a,E.a,P.b,P.a,m.b,M.a,_.j,j.b,j.e,j.f,j.d,q.a,j.c,q.c,q.b,_.g,S.b,m.a,a.b],pipes:[w.b,w.e,w.g],styles:[".control-card-header-avatar{background-image:url(/coaty-examples/remote-operations/assets/images/light-switch-avatar.jpg);background-size:cover}.control-card-title-icon{margin-left:auto;margin-right:32px}.control-light-agents-info-overlay{margin-top:-100px!important}.control-control-agents-info-overlay,.control-light-agents-info-overlay{color:#ff8c00;background-color:rgba(0,0,0,.5);position:absolute;left:16px;padding:4px}.control-control-agents-info-overlay{margin-top:-62px!important}.control-time-overlay{color:#fff;background-color:rgba(0,0,0,.5);position:absolute;margin-top:0!important;left:16px;padding:4px}.control-form-field{margin-right:16px}.control-context-qrcode-field{display:inline-block;position:relative}.control-context-qrcode-label{margin-right:12px;color:rgba(0,0,0,.54);font-size:14px;font-weight:400;display:inline-block;-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px)}.control-context-qrcode{display:inline-block;vertical-align:middle;width:80px;height:80px}.control-context-qrcode-button{cursor:pointer;position:absolute!important;left:10px;bottom:-4px}.control-operation-params{flex-wrap:wrap}.control-operation-param,.control-operation-params{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.control-operation-param{-webkit-box-flex:1;flex:1 0 auto;margin-right:48px;margin-top:16px}.control-operation-param.control-operation-param-no-grow{-webkit-box-flex:0;flex:0 0 auto}.control-operation-param-label{align-self:center;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.control-operation-param-label>:first-child{margin-right:6px}.control-color-slider{background-origin:content-box;background-clip:content-box;background-position-y:center;background-size:100% 40%;background-repeat:no-repeat;background-image:-webkit-gradient(linear,left top,right top,from(red),color-stop(#ff0),color-stop(#0f0),color-stop(#0ff),color-stop(#00f),color-stop(#f0f),to(red));background-image:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.control-color-slider .mat-slider-thumb-label{background-color:transparent;-webkit-transition:none!important;transition:none!important}.control-color-slider .mat-slider-track-wrapper{display:none}.control-operation-param-color .mat-button-toggle-group{overflow:visible!important;height:20px}.control-operation-param-color .mat-button-toggle{overflow:hidden!important;width:20px;height:20px;border:2px solid rgba(0,0,0,.12)}.control-operation-param-time-switch-group{margin-left:8px}.control-operation-request{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-align:center;align-items:center;margin-top:24px;margin-bottom:32px}.control-operation-request>*{margin-right:16px!important}.control-event-log-list{padding-top:0!important;overflow-y:auto;max-height:250px}.control-event-log-list-item{height:auto!important}.control-event-log-list-item-alternate{background-color:#eceff1}.control-event-log-call-icon{align-self:flex-start}.control-event-log-warn{color:#f44336}.control-event-log-heading{font-size:16px!important;font-weight:400;margin:0!important}.control-event-log-heading.mat-line{margin-top:2px!important;margin-bottom:2px!important}.control-event-log-code{margin-left:16px;font-size:12px;vertical-align:middle}.control-event-log-return-list-item{height:32px!important}.control-event-log-return-list-item .mat-list-item-content{padding:2px 0!important}.control-code-icon{cursor:pointer}.control-code-icon mat-icon{vertical-align:bottom}"],encapsulation:2,changeDetection:0}),ot)}],rt=((nt=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:nt}),nt.\u0275inj=c.Kb({factory:function(t){return new(t||nt)},imports:[[a.c.forChild(it)],a.c]}),nt);o.d(e,"ControlModule",(function(){return ct}));var at,ct=((at=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:at}),at.\u0275inj=c.Kb({factory:function(t){return new(t||at)},imports:[[r.a,rt]]}),at)}}]);