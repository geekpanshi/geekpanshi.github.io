// build time:Wed Mar 03 2021 09:37:11 GMT+0800 (GMT+08:00)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var i=$(this);var e=i.attr("title");var t=i.parent("a");if(t.length<1){var a=i.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=i.wrap('<a data-fancybox="group" href="'+a+'"></a>').parent("a")}t.addClass("fancybox fancybox.image");t.attr("rel","group");if(e){t.append('<p class="image-caption">'+e+"</p>");t.attr("title",e)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var i=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""){$(i+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(i+".tab").on("click",function(i){i.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(i){var e=i.which===27&&$(".search-popup").is(":visible");if(e){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var i=50;var e=$(".back-to-top");function t(){e.toggleClass("back-to-top-on",window.pageYOffset>i);var t=$(window).scrollTop();var a=NexT.utils.getContentVisibilityHeight();var n=t/a;var o=Math.round(n*100);var r=o>100?100:o;$("#scrollpercent>span").html(r)}$(window).on("load",function(){t()});$(window).on("scroll",function(){t()});e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var i=$("iframe");var e=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var t=new RegExp(e.join("|"));function a(i){return{width:i.width(),height:i.height()}}function n(i,e){return e/i*100}i.each(function(){var i=this;var e=$(this);var o=a(e);var r;if(this.src.search(t)>0){var s=n(o.width,o.height);e.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=s+"%";c.style.paddingTop===""&&(c.style.paddingTop="50%");var d=i.parentNode;d.insertBefore(c,i);c.appendChild(i);if(this.src.search("music.163.com")>0){r=a(e);var h=r.width>o.width||r.height<o.height;if(h){c.style.paddingTop=n(r.width,o.height)+"%"}}}})},hasMobileUA:function(){var i=window.navigator;var e=i.userAgent;var t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(i){return i.replace(/[!"$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var i=$("<div />").addClass("scrollbar-measure").prependTo("body");var e=i[0];var t=e.offsetWidth-e.clientWidth;i.remove();return t},getContentVisibilityHeight:function(){var i=$("#content").height();var e=$(window).height();var t=i>e?i-e:$(document).height()-e;return t},getSidebarb2tHeight:function(){var i=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return i},getSidebarSchemePadding:function(){var i=$(".sidebar-nav").css("display")==="block"?$(".sidebar-nav").outerHeight(true):0;var e=$(".sidebar-inner");var t=e.innerWidth()-e.width();var a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;var n=this.isPisces()||this.isGemini()?t*2+i+a+this.getSidebarb2tHeight():t*2+i/2;return n}};$(document).ready(function(){function i(i){i=i||"auto";$(".site-overview, .post-toc").css("max-height",i)}function e(){var e;$(window).on("resize",function(){e&&clearTimeout(e);e=setTimeout(function(){var e=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();i(e)},0)});var t=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+t+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+t+"px)")}i(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}e()});
//rebuild by neat 