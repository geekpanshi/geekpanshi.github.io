// build time:Mon Sep 30 2019 06:45:00 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_popup_slide",function(e,o){var n=e("base/tangram").T,t=e("base/class").Class,i=e("conf/const"),a=e("component/pop_base"),s={btn:""},p,r,d,u,c=t.create(function(){function e(e){var o=n(e).offset(),t=o.top+n(e).height()+5,i=o.left,a=r.outerHeight();return t+a>n("body").height()&&t+a>n(window).height()&&(t=o.top-a-5,t=t<0?0:t),{top:t,left:i}}function o(e,o){var i=o.mini||2,a=o.miniList||t._partnerSort.slice(0,8*i),s=[];n.each(a,function(e,o){if(!/(iPhone | iPad | Android)/i.test(navigator.userAgent)||o!=="weixin")s[e]='<li><a href="#" onclick="return false;" class="popup_'+o+'" data-cmd="'+o+'">'+t._partners[o].name+"</a></li>"}),u.html(s.join("")),r.width(i*110+6),d.width(i*110+6)}var t=this;t._hide=function(){d&&d.hide(),r&&r.hide()},t._show=function(i,a){o(t._container,a);var s=e(i.element);n.each([r,d],function(e,o){o.css({top:s.top,left:s.left}).show()}),n(i.element).one("mouseout",function(){var e=!1;r.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&t.hide()},300)})},t._init=function(){var e=['<iframe frameborder="0" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),o=['<div class="bdshare_popup_box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="http://share.baidu.com/" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");n("body").insertHTML("beforeEnd",e+o),t._container=n(".bdshare_popup_box"),r=n(".bdshare_popup_box"),u=n(".bdshare_popup_list"),d=n(".bdshare_popup_bg"),r.mouseleave(t.hide)}},a.PopBase);o.Popup=function(){return p||(p=new c,p.init()),p}()});
//rebuild by neat 