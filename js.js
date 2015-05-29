$(document).ready(function(){
var arrOfImgRotor=[ ["towns/Agra.png","Агра"],["towns/Athens.png","Афины"],["towns/Berlin.png","Берлин"],["towns/Istanbul.png","Стамбул"],["towns/London.png","Лондон"],["towns/Paris.png","Париж"],["towns/Prague.png","Прага"],["towns/Rome.png","Рим"],["towns/Stockholm.png","Стокгольм"],["towns/Vienna.png","Вена"]];
 ///////////////////
 // rotor drowing //
for(var i=0;i<arrOfImgRotor.length;i++){
	//добавляем переключатели для всех элементов
	if(i==2) {
		//для центрального элемента переключатель
		$('#divRotorTips').append("<span class='on' rel='"+i+"'></span>");
	} else {
		$('#divRotorTips').append("<span rel='"+i+"'></span>");
	}
	//наполняем пять li-элементов
	//if(i<=4) {
		if(i==2){
			//для центрального элемента увеличиваем высоту
			$("#id"+i).addClass("bigLi").html("<img src='"+arrOfImgRotor[i][0]+"'/><span>"+arrOfImgRotor[i][1]+"</span>");
			
		} else {
			$("#id"+i).html("<img src='"+arrOfImgRotor[i][0]+"'/><span>"+arrOfImgRotor[i][1]+"</span>");
		}
	//}
	//
 }
 // END rotor drowing //
 ///////////////////////
var normalPos=true;
$(".arrRight").click(function(){
	var currPos=$(".bigLi").attr("data-position");
	$(".bigLi").removeClass("bigLi");
	//бегунок
	var currOn=$(".on");
	currOn.removeClass("on");
	if (++currPos>9) {//если вышли за нижнюю границу массива - переходим к посленему элементу
		currPos=0;
		$("span[rel='0']").addClass("on");
	} else {
		currOn.next().addClass("on");
	}
	
	if (currPos==8 && normalPos==true) {
		var forForvard=$('li').slice( 0, 5 ).detach();
		var somer=parseInt($("#divCenter ul").css("margin-left"))+1000;//to do set NORMAL every LI size 200px;
		$("#divCenter ul").css("margin-left",somer+"px");
		$("ul").append(forForvard);
		normalPos=false;
	} else if (currPos==2 && normalPos!=true) {
		var forForvard=$('li').slice( 0, 5 ).detach();
		var somer=parseInt($("#divCenter ul").css("margin-left"))+1000;
		$("#divCenter ul").css("margin-left",somer+"px");
		$("ul").append(forForvard);
		normalPos=true;
	}
	$("#divCenter ul").animate({"margin-left":"-=200px"},"slow");
	$("#id"+currPos).addClass("bigLi",2000);
});
$(".arrLeft").click(function(){
	var currPos=$(".bigLi").attr("data-position");
	$(".bigLi").removeClass("bigLi");
	//бегунок
	var currOn=$(".on");
	currOn.removeClass("on");
	//если вышли за нижнюю границу массива - переходим к посленему элементу
	if(--currPos<0) {
		currPos=9;
		$("span[rel='9']").addClass("on");
	} else {
		currOn.prev().addClass("on");
	}
	
	if (currPos==7 && normalPos!=true) {
		var forForvard=$('li').slice( 5, 10 ).detach();
		var somer=parseInt($("#divCenter ul").css("margin-left"))-1000;//to do set NORMAL every LI size 200px;
		$("#divCenter ul").css("margin-left",somer+"px");
		$("ul").prepend(forForvard);
		normalPos=true;
	} else if (currPos==1 && normalPos==true) {
		var forForvard=$('li').slice( 5, 10 ).detach();
		var somer=parseInt($("#divCenter ul").css("margin-left"))-1000;
		$("#divCenter ul").css("margin-left",somer+"px");
		$("ul").prepend(forForvard);
		normalPos=false;
	}
	
	$("#divCenter ul").animate({"margin-left":"+=200px"},"slow");
	$("#id"+currPos).addClass("bigLi",2000);
});

});