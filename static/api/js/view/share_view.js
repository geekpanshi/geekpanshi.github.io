// build time:Tue Apr 09 2019 09:30:23 GMT+0800 (中国标准时间)
window._bd_share_main.F.module("view/share_view",function(t,e,n){var i=t("base/tangram").T,a=t("base/class").Class,s=t("conf/const"),r=t("view/view_base"),o={btn:"bdsharebuttonbox",count:"bds_count"};e.View=a.create(function(t){function e(){var e=t.tag||"";return i("."+o.btn).each(function(t,n){if(!e||i(n).attr(s.CONFIG_TAG_ATTR)==e)r._entities.push(n),i(n).removeClass(function(t,e){var n=e.match(/bdshare-button-style\d*-\d*/g);if(n)return n.join(" ")}),i(n).addClass("bdshare-button-style"+c+"-"+u)}),r._entities}function n(){if(t.bdCustomStyle){var e=document.createElement("link");e.href=t.bdCustomStyle,e.rel="styleSheet",e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e)}else window._bd_share_main.F.use("share_style"+c+"_"+u+".css")}function a(){i("."+o.btn).each(function(t,e){i(e).children("a,span").each(function(t,e){var n=i(e).attr(s.CMD_ATTR);n&&window._bd_share_main.F.use("component/partners",function(t){var a=t.partners,s=a[n]?"分享到"+a[n].name:"";!i(e).attr("title")&&s&&i(e).attr("title",s)})})})}var r=this,c=t.bdStyle||0,u="|16|24|32|".indexOf("|"+t.bdSize+"|")>-1?t.bdSize:16;r._buttonType=0,r.render=function(t){e(),a()},r._init=function(){n(),i(r._entities).find("."+o.count).length>0&&r.fire("getsharecount")},r.setNumber=function(t,e){i(r._entities).find("."+o.count).html(e).attr("title","累计分享"+t+"次")}},r.ViewBase)});
//rebuild by neat 