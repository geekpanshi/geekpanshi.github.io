// build time:Wed Nov 20 2019 18:55:52 GMT+0800 (GMT+08:00)
(function(e){var t=function(t,a,n){var r=new Date;var l=r.getDate();var s=r.getMonth();var o=r.getFullYear();var i=l;var u=s;var p=o;var f=n;var c=null;var d=null;var v={posts:[],prev:null,next:null};var h="en";y(t);var g=e.extend({},e.fn.aCalendar.defaults,typeof calLanguages==="undefined"?{}:calLanguages[h],a);if(g.root[0]!=="/"){g.root="/"+g.root}if(g.root[g.root.length-1]!=="/"){g.root+="/"}function y(e){if(e&&typeof calLanguages!=="undefined"&&calLanguages[e]){h=e}}function m(){if(u<11){u++}else{u=0;p++}L()}function M(){if(u>0){u--}else{u=11;p--}L()}function x(e){if(e){p=e.getFullYear();u=e.getMonth();L()}}function D(){if(g.single){k()}else{w()}}function k(){if(g.url!=null&&g.url!=""){if(c===null){e.ajax({url:g.url,async:false,success:function(e){c=e;T(Object.keys(c))}})}if(c!==null){if(C()){v.posts=c[p+"-"+(u+1)]}}}}function w(){if(d===null){e.ajax({url:g.root+"list.json",async:false,success:function(e){T(e)}})}if(C()){e.ajax({url:g.root+p+"-"+(u+1)+".json",async:false,success:function(e){v.posts=e}})}}function T(e){d=e.map(function(e){var t=e.split("-");return new Date(Date.UTC(+t[0],+t[1]-1))})}function C(){var e=Date.UTC(p,u);if(d===null||d.length===0){return false}if(v.posts.length===0&&(v.prev===null&&v.next!==null&&v.next.getTime()>e||v.next===null&&v.prev!==null&&v.prev.getTime()<e)){return false}v.posts=[];for(var t=0;t<d.length;t++){var a=d[t].getTime();if(e===a){v.prev=t===0?null:d[t-1];v.next=t===d.length-1?null:d[t+1];return true}else if(e<a){v.prev=t===0?null:d[t-1];v.next=d[t];break}else{v.prev=d[t];v.next=null}}return false}function b(e,t){var a={"LMM+":g.months[e.getMonth()],"MM+":e.getMonth()+1};if(/(y+)/.test(t)){t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))}for(var n in a){if(new RegExp("("+n+")").test(t)){t=t.replace(RegExp.$1,n==="LMM+"?a[n]:("00"+a[n]).substr((""+a[n]).length))}}return t}function L(){D();var t=new Date(p,u,1).getDay()-g.weekOffset;if(t<=0){t=6-(t+1)*-1}var a=new Date(p,u+1,0).getDate();var n=new Date(p,u,0).getDate()-t+1;var r=e("<div/>").addClass("cal-head");var l=e("<div/>");var c=e("<div/>");var d=e("<div/>").addClass("cal-title");c.html(g.headArrows.previous);l.html(g.headArrows.next);curDate=new Date(Date.UTC(p,u));if(v.posts.length===0){d.html(b(curDate,g.titleFormat))}else{cTitleLink=e("<a/>").attr("href",b(curDate,g.titleLinkFormat)).attr("title",b(curDate,g.postsMonthTip)).html(b(curDate,g.titleFormat));d.html(cTitleLink)}c.on("click",M);l.on("click",m);r.append(c);r.append(d);r.append(l);var h=e("<table/>").addClass("cal");var y=g.weekOffset;var k=e("<thead/>");var w=e("<tr/>");for(var T=0;T<7;T++){if(y>6){y=0}var C=e("<th/>").attr("scope","col").attr("title",g.dayOfWeek[y]);C.html(g.dayOfWeekShort[y]);w.append(C);y++}k.append(w);h.append(k);var L=e("<tfoot/>");var F=e("<tr/>");var O=e("<td/>").attr("colspan",3);var j=e("<td/>").html("&nbsp;");var A=e("<td/>").attr("colspan",3);if(v.prev){O.html(g.footArrows.previous+g.months[v.prev.getMonth()]).addClass("cal-foot").attr("title",b(v.prev,g.postsMonthTip))}if(v.next){A.html(g.months[v.next.getMonth()]+g.footArrows.next).addClass("cal-foot").attr("title",b(v.next,g.postsMonthTip))}O.on("click",function(){x(v.prev)});A.on("click",function(){x(v.next)});F.append(O);F.append(j);F.append(A);L.append(F);var S=e("<tbody/>");var W=1;var E=1;for(var T=0;T<6;T++){var R=e("<tr/>");for(var J=0;J<7;J++){var U=e("<td/>");if(T*7+J<t){U.addClass("cal-gray");U.html(n++)}else if(W<=a){if(W==i&&s==u&&o==p){U.addClass("cal-today")}var Y={num:0,keys:[]};for(var $=0;$<v.posts.length;$++){var N=new Date(Date.parse(v.posts[$].date));if(N.getDate()==W){Y.keys[Y.num++]=$}}if(Y.num!==0){var P=Y.keys[0];var Q=e("<a>").attr("href",v.posts[P].link).attr("title",v.posts[P].title).html(W++);U.append(Q)}else{U.html(W++)}}else{U.addClass("cal-gray");U.html(E++)}R.append(U)}S.append(R)}h.append(k);h.append(L);h.append(S);e(f).html(r);e(f).append(h)}return L()};e.fn.aCalendar=function(a,n){return this.each(function(){return t(a,n,e(this))})};e.fn.aCalendar.defaults={months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["S","M","T","W","T","F","S"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],postsMonthTip:"Posts published in LMM yyyy",titleFormat:"yyyy LMM",titleLinkFormat:"/archives/yyyy/MM/",headArrows:{previous:'<span class="cal-prev"></span>',next:'<span class="cal-next"></span>'},footArrows:{previous:"« ",next:" »"},weekOffset:0,single:true,root:"/calendar/",url:"/calendar.json"}})(jQuery);
//rebuild by neat 