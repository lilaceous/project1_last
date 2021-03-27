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

  var keyvisual={
		key1 : "key1.jpg",
		key2 : "key2.jpg",
		key3 : "key3.jpg",
		key4 : "key4.jpg",
		key5 : "key5.jpg",
    key6 : "key6.jpg",
    key7 : "key1.jpg"
	}

	var dataN=0;
	//<div class="keyvisual">
	var keyContainer=document.getElementsByClassName("keyvisual")[0];

	//<div class="keyvisual_inner">

	var inner=document.createElement("div");  //메모리에 그리기

	inner.setAttribute("class", "key_inner"); //속성을 추가하기

	keyContainer.appendChild(inner);   //appendChild() 화면그리기



	//<div class="controls">
	var controls=document.createElement("div");
	controlls.setAttribute("class", "controlls");
	keyContainer.appendChild(controlls);

	var keyString="";
	var controllString="";

	keyString+='<ul>\n' //문자열 안에서 개행처리하는 특수문자입니다.
	controllString+='<ul>\n'


	for(key in keyvisual){
		//console.log(key+":"+keyvisual[key]);
		//key1 : "keyvisual1.jpg"
		//<li><a href="#"><img src="images/keyvisual2.jpg" alt="keyvisual1"></a></li>

		keyString += '<li><a href="#"><img src="images/' + keyvisual[key]+ '"alt=" + "key'+ (dataN+1) + '"></a></li>\n';

		//console.log("dataN :"+dataN); //for in 구문을 for처럼 사용하는 방법
		controllString +='<li><a href="#">' + (dataN+1) + '</a></li>' //추가
		dataN++; //0,1,2 ...

	}

	keyString+='</ul>';
	inner.innerHTML=keyString;
	//console.log(keyString);

	controllString+='</ul>' //추가
	controlls.innerHTML=controllString; //추가

  $(".controls li").eq(n).addClass("active");
	$$(".controls li a").click(function(e){
		e.preventDefault();
		$(".controls li").removeClass("active");
		$(this).parent("li").addClass("active");

		n=$(this).parent().index();
		console.log(n);
	   pos=n*-1*100+"%";
		$galleryMoving.animate({left:pos}, 400);
	});

});
