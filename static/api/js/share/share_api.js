// build time:Thu Dec 06 2018 14:55:56 GMT+0800 (中国标准时间)
window._bd_share_main.F.module("share/share_api",function(n,a,t){var e=n("base/tangram").T,i=n("base/class").Class,o=n("component/comm_tools"),c=n("share/api_base");a.Api=i.create(function(n){function a(a){window._bd_share_main.F.use("trans/data",function(t){t.get({type:"share_count",url:n.bdUrl||o.getPageUrl(),callback:function(n,t){var e={count:n,display:t};a&&a(e)}})})}var t=this,e={count:0,clicked:!1};t._init=function(){var n=t.getView();n.render(),n.on("getsharecount",function(){a(function(a){e.count=a.count,n.setNumber(a.count,a.display)})}),n.init()},t._processAction=function(n){return{data:{type:"share"}}}},c.ApiBase)});
//rebuild by neat 