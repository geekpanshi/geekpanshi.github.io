// build time:Tue Oct 01 2019 06:54:48 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("share/api_base",function(n,e,o){var t=n("base/tangram").T,i=n("base/class").Class;e.ApiBase=i.create(function(n){function e(n){window._bd_share_main.F.use("component/anticheat",function(e){e.process("mouseenter",n.event,n.element)}),c._processEvent(n)}function o(s){window._bd_share_main.F.use("component/anticheat",function(n){n.process("mouseclick",s.event,s.element)});var a=c._processAction(s);if(a&&a.data)if(s.cmd=="more"||s.cmd=="count")window._bd_share_main.F.use("component/pop_dialog",function(t){var i=t.Dialog;i.un(),i.on("clickact",o),i.on("mouseenter",e),i.show(s,n)});else if(s.cmd=="popup")i(s);else{var u;t.type(n.onBeforeClick)=="function"&&(u=t.extend({},n),u=n.onBeforeClick(s.cmd,u));var r=t.extend({},n,u,{__type:a.data.type,__buttonType:s.buttonType,__cmd:s.cmd,__element:s.element});window._bd_share_main.F.use("trans/trans",function(n){n.run(r)}),t.type(n.onAfterClick)=="function"&&n.onAfterClick(s.cmd)}}function i(t){window._bd_share_main.F.use("component/pop_popup",function(i){var c=i.Popup;c.un(),c.on("clickact",o),c.on("mouseenter",e),c.show(t,n)})}var c=this,s=null,a=null;c.getView=function(){return s},c.setView=function(n){s=n},c.init=function(){c._init(),s&&(s.on("clickact",o),s.on("mouseenter",e),s.on("moreover",i))},c.distory=function(){c._distory(),s&&(s.un(),s.distory()),delete c},c._init=function(){},c._distory=function(){},c._processEvent=function(n){},c._processAction=function(n){}})});
//rebuild by neat 