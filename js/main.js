$(function(){
  $(".menu").hover(
    function(){
      $(".menu").addClass("active");
    },
    function(){
      $(".menu").removeClass("active");
    }
  );

  $("#gnb > ul > li:first-child > a").focusin(function(){
    $(".menu").addClass("active");
  });
  $("#gnb li:last-child li:last-child a").focusout(function(){
    $(".menu").removeClass("active");
  });
  $("#gnb > ul > li > a").focusin(function(){
		$(this).addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().prev().removeClass("active");
	});

  var n=0;
  var pos=0;

  setInterval(function(){
    Gmoving();
  }, 5000);
  function Gmoving(){
    n++;
    pos=-1*n*(100);
    $(".key_inner > ul").animate({"left":pos+"%"}, 400, function(){
      if (n == 6) {
        n=0;
        pos=0;
        $(".key_inner > ul").animate({"left":pos},0);
				$(".controls li").eq(n).addClass("active");
      }
    });
		$(".controls li").removeClass("active");
		$(".controls li").eq(n).addClass("active");
  }

  Gmoving();

	$(".controls li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		pos=-1*n*(100);
    $(".key_inner > ul").animate({"left":pos+"%"});
		$(".controls li").removeClass("active");
		$(this).addClass("active")
	});

  var selectN;
	var listName="";

	$(".select dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
	});
	$(".select dd a").click(function(e){
		e.preventDefault();
		var $dlList=$(this).parents("dl"); // dl.center
		var $select=$("select."+$dlList.attr("class")); // select.center

		$dlList.find("dd a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$dlList.find("dt a").html(listName+"<span></span>");
		$dlList.find("dt a").removeClass("active");
		$dlList.find("dd").slideUp(300);

		selectN=$(this).parent().index();
		$select.find("option").prop("selected", false);
		$select.find("option").eq(selectN+1).prop("selected", true);
	});


	$(".collec_wrap li:first-child").fadeIn(300);
	$(".collec_pager li:first-child").addClass("active");

	var n2=0;

	$(".collec_pager li").click(function(e){
		e.preventDefault();
		n2=$(this).index();

		$(".collec_wrap li").fadeOut(300);
		$(".collec_wrap li").eq(n2).fadeIn(300);
		$(".collec_pager li").removeClass("active");
		$(this).addClass("active");
	});
	$(".collec_wrap li").hover(
		function(){
			$(".over").css({opacity:1});
		},
		function(){
			$(".over").css({opacity:0});
		}
	);

	var w=127;
	var amount=0;

	$(".prev").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		rightMoving();
	});

	function leftMoving(){
		amount-=w;
		$(".site_wrap ul").animate({left:amount}, 500, function(){
			$(this).append($(".site_wrap ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	}
	function rightMoving(){
		$(".site_wrap ul").prepend($(".site_wrap ul li:last-child"));
		amount-=w;
		$(".site_wrap ul").css({left:amount});
		amount+=w;
		$(".site_wrap ul").animate({left:amount}, 500);
	}
});
