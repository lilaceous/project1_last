$(function(){$(".menu").hover(function(){$(".menu").addClass("active")},function(){$(".menu").removeClass("active")}),$("#gnb > ul > li:first-child > a").focusin(function(){$(".menu").addClass("active")}),$("#gnb li:last-child li:last-child a").focusout(function(){$(".menu").removeClass("active")}),$("#gnb > ul > li > a").focusin(function(){$(this).addClass("active")}),$("#gnb li li:last-child a").focusout(function(){$(this).parent().parent().prev().removeClass("active")});var i,t=0,l=0;function e(){l=-1*++t*100,$(".key_inner > ul").animate({left:l+"%"},400,function(){6==t&&(l=t=0,$(".key_inner > ul").animate({left:l},0),$(".controls li").eq(t).addClass("active"))}),$(".controls li").removeClass("active"),$(".controls li").eq(t).addClass("active")}setInterval(function(){e()},5e3),e(),$(".controls li").click(function(e){e.preventDefault(),t=$(this).index(),l=-1*t*100,$(".key_inner > ul").animate({left:l+"%"}),$(".controls li").removeClass("active"),$(this).addClass("active")});var a;$(".select dt a").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).parent().next("dd").slideToggle(300)}),$(".select dd a").click(function(e){e.preventDefault();var t=$(this).parents("dl"),e=$("select."+t.attr("class"));t.find("dd a").removeClass("active"),$(this).addClass("active"),a=$(this).text(),t.find("dt a").html(a+"<span></span>"),t.find("dt a").removeClass("active"),t.find("dd").slideUp(300),i=$(this).parent().index(),e.find("option").prop("selected",!1),e.find("option").eq(i+1).prop("selected",!0)}),$(".collec_wrap li:first-child").fadeIn(300),$(".collec_pager li:first-child").addClass("active");var n;$(".collec_pager li").click(function(e){e.preventDefault(),n=$(this).index(),$(".collec_wrap li").fadeOut(300),$(".collec_wrap li").eq(n).fadeIn(300),$(".collec_pager li").removeClass("active"),$(this).addClass("active")}),$(".collec_wrap li").hover(function(){$(".over").css({opacity:1})},function(){$(".over").css({opacity:0})});var s=127,c=0;$(".prev").click(function(e){e.preventDefault(),c-=s,$(".site_wrap ul").animate({left:c},500,function(){$(this).append($(".site_wrap ul li:first-child")),c+=s,$(this).css({left:c})})}),$(".next").click(function(e){e.preventDefault(),$(".site_wrap ul").prepend($(".site_wrap ul li:last-child")),c-=s,$(".site_wrap ul").css({left:c}),c+=s,$(".site_wrap ul").animate({left:c},500)})});