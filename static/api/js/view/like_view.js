// build time:Thu Jul 25 2019 09:35:41 GMT+0800 (中国标准时间)
window._bd_share_main.F.module("view/like_view",function(t,e,n){t("like.css");var a=t("base/tangram").T,i=t("base/class").Class,o=t("conf/const"),s=t("view/view_base"),l=t("component/animate"),c={btn:"bdlikebutton",innerBtn:"bdlikebutton-inner",add:"bdlikebutton-add",text:"bdlikebutton-text",count:"bdlikebutton-count"};e.View=i.create(function(t){function e(){var e=t.tag||"";return a("."+c.btn).each(function(t,n){(!e||a(n).attr(o.CONFIG_TAG_ATTR)==e)&&s._entities.push(n)}),s._entities}function n(){var e=t,n=r[e.type];return e.likeText=e.likeText?e.likeText.substr(0,n[0]):n[1],e.likedText=e.likedText?e.likedText.substr(0,n[0]):n[2],e}function i(t){return a(t).parent().get(0)}var s=this,r={small:[4,"顶","已顶过"],medium:[6,"顶","您已顶过"],large:[10,"该内容对我有帮助","您已顶过，谢谢！"]};s.render=function(t){var i=e(),o=c.btn,l=n();s._actBtnSet.className=c.innerBtn,s._actBtnSet.tagName="div",s._actBtnSet.maxDomDepth=1,a(i).each(function(t,e){var n=l.type,i=[];i.push('<div class="',c.innerBtn,'" ',s._actBtnSet.cmdAttr,'="like">'),i.push('<span class="',c.add,'">+1</span>'),i.push('<div class="',c.count,'">加载中</div>'),"small"!=n&&i.push('<div class="',c.text,'">',l.likeText,"</div>"),i.push("</div>"),a(e).html(i.join("")).addClass(o+"-"+l.color).addClass(o+"-"+l.type).addClass(o+"-"+l.type+"-"+l.color)})},s._init=function(){var e=t,n=e.type;a(s._entities).each(function(t,i){var o=a("."+c.innerBtn,i);o.mouseover(function(t){t=a.event(t||window.event);var s=t.relatedTarget;o.contains(s)||("small"==n&&a("."+c.count,i).html(e.likeText),a(i).addClass(c.btn+"-"+e.type+"-"+e.color+"-hover"))}).mouseout(function(t){t=a.event(t||window.event);var s=t.relatedTarget;o.contains(s)||("small"==n?a("."+c.count,i).html(e.count):a("."+c.text,i).html(e.likeText),a(i).removeClass(c.btn+"-"+e.type+"-"+e.color+"-hover"))})})},s.showDoneState=function(e){var n=t,o=i(e),s=c.text;"small"==n.type&&(s=c.count),a("."+s,o).html(n.likedText),a(o).removeClass(o,c.btn+"-"+n.type+"-"+n.color+"-hover")},s.addOne=function(e,n){var o=t,r=i(e),u=a("."+c.add,r);u.show(),l.animate(u.get(0),{top:"-25px",opacity:"0"},300,function(){u.hide(),u.css({top:"0px",opacity:99})}),s.setNumber(n),a(r).removeClass(c.btn+"-"+o.type+"-"+o.color+"-hover")},s.setNumber=function(t){a.type(t)=="number"&&a(s._entities).each(function(e,n){a("."+c.count,n).html(t)})}},s.ViewBase)});
//rebuild by neat 