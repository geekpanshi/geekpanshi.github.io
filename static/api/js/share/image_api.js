// build time:Mon Jan 14 2019 09:10:07 GMT+0800 (中国标准时间)
window._bd_share_main.F.module("share/image_api",function(e,i,a){var n=e("base/tangram").T,t=e("base/class").Class,r=e("component/comm_tools"),o=e("share/api_base");i.Api=t.create(function(e){var i=this;i._init=function(){var e=i.getView();e.render(),e.init(),e.on("moreover",function(){e._keepBarVisible()})},i._processAction=function(a){var n=i.getView();return e.bdPic=n._getImageSrc(),{data:{type:"imgshare"}}},i._distory=function(){}},o.ApiBase)});
//rebuild by neat 