// build time:Sun May 31 2020 13:14:02 GMT+0800 (GMT+08:00)
!window._bd_share_is_recently_loaded&&window._bd_share_main.F.module("base/class",function(n,a,e){var s=n("base/min_tangram").T;a.BaseClass=function(){var n=this,a={};n.on=function(n,e){var s=a[n];s||(s=a[n]=[]),s.push(e)},n.un=function(n,e){if(!n){a={};return}var t=a[n];t&&(e?s.each(t,function(n,a){if(a==e)return t.splice(n,1),!1}):a[n]=[])},n.fire=function(e,t){var i=a[e];i&&(t=t||{},s.each(i,function(a,e){t._result=e.call(n,s.extend({_ctx:{src:n}},t))}))}};var t={};t.create=function(n,e){return e=e||a.BaseClass,function(){e.apply(this,arguments);var a=s.extend({},this);n.apply(this,arguments),this._super=a}},a.Class=t});
//rebuild by neat 