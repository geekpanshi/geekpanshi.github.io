// build time:Fri Sep 27 2019 15:10:39 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_dialog",function(o,a){var e=o("base/tangram").T,i=o("base/class").Class,n=o("conf/const"),t=o("component/pop_base"),d={btn:""},s,r,l,c=i.create(function(){function o(o){o.keyCode==27&&n.hide()}function a(){var o=e.browser.ie==6?e(window).scrollTop():0,a=r.outerWidth(),i=r.outerHeight(),n=e(window).width(),t=e(window).height(),d=(t-i)/2+o,s=(n-a)/2;return{top:d>0?d:0,left:s>0?s:0}}function i(o,a){var i=e.extend({},n._partnerSort,a.bdDialogPartners),t=[];e.each(i,function(o,a){t[o]='<li><a href="#" onclick="return false;" class="popup_'+a+'" data-cmd="'+a+'">'+n._partners[a].name+"</a></li>"}),n._container.html(t.join(""))}var n=this;n._poptype=2,n._hide=function(){l&&l.hide(),r&&r.hide(),e("body").unbind("keydown",o)},n._show=function(t,d){i(n._container,d);var s=a();e.each([r,l],function(o,a){a.css({top:s.top,left:s.left}).show()}),e("body").bind("keydown",o),window._bd_share_main.F.use("trans/logger",function(o){o.dialog()})},n._init=function(){var o=['<iframe frameborder="0" class="bdshare_dialog_bg" style="display:none;"></iframe>'].join(""),a=['<div class="bdshare_dialog_box" style="display:none;">','<div class="bdshare_dialog_top">','<a class="bdshare_dialog_close" href="#" onclick="return false;" title="关闭"></a>分享到',"</div>",'<ul class="bdshare_dialog_list"></ul>','<div class="bdshare_dialog_bottom">','<a href="http://share.baidu.com/" target="_blank;">百度分享</a>',"</div>","</div>"].join("");e("body").insertHTML("beforeEnd",o+a),n._container=e(".bdshare_dialog_list"),r=e(".bdshare_dialog_box"),l=e(".bdshare_dialog_bg"),e(".bdshare_dialog_close").click(n.hide)}},t.PopBase);a.Dialog=function(){return s||(s=new c,s.init()),s}()});
//rebuild by neat 