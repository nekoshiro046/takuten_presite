$(function() {
	$('html,body').animate({ scrollTop: 0 }, '1');
	$("nav").hide().fadeIn(5800);
	// new Vivus('canvas', {start: 'autostart', type: 'delayed', duration: 150}); 
	var vivusLogo = new Vivus('canvas', {start: 'manual', type: 'delayed', duration: 200}); 
	setTimeout(function(){
        vivusLogo.play(1);
    },1000);
	// new Vivus('canvas', {start: 'autostart', type: 'scenario-sync', duration: 25});
});
var windowWidth = jQuery(window).width();
var menuIconVisible;
if(windowWidth > 800){
	menuIconVisible = false;
}else{
	menuIconVisible = true;
}
var navBtnActive = 0;//0:閉じ 1:開く
$(document).on('click','.menuIcon', function() {
	if(navBtnActive == 0){
		$('nav').addClass('open');
		$('nav').css('position','fixed');
		$('.blackGround').css('display','block');
		$('.menuIcon').css('color','#fff');
		$('.menu__button-bottom').css('fill','#fff');
		$('.menu__button-top').css('fill','#fff');
		$('.menu__button-bottom').css('animation-name','openAnimeBottom');
		$('.menu__button-bottom').css('animation-duration','0.5s');
		$('.menu__button-top').css('animation-name','openAnimeTop');
		$('.menu__button-top').css('animation-duration','0.5s');
		navBtnActive = 1;
	}else{
		$('nav').removeClass('open');
		$('nav').css('position','absolute');
		$('.blackGround').css('display','none');
		$('.menuIcon').css('color','#000');
		$('.menu__button-bottom').css('fill','#000');
		$('.menu__button-top').css('fill','#000');
		$('.menu__button-bottom').css('animation-name','closeAnimeBottom');
		$('.menu__button-bottom').css('animation-duration','0.5s');
		$('.menu__button-top').css('animation-name','closeAnimeTop');
		$('.menu__button-top').css('animation-duration','0.5s');
		navBtnActive = 0;
	}
});
$('.menu').on('click',function(){
	if(navBtnActive == 1){
		$('nav').removeClass('open');
		$('nav').css('position','absolute');
		$('.menuIcon').css('color','#000');
		$('.menu__button-bottom').css('fill','#000');
		$('.menu__button-top').css('fill','#000');
		$('.menu__button-bottom').css('animation-name','closeAnimeBottom');
		$('.menu__button-bottom').css('animation-duration','0.5s');
		$('.menu__button-top').css('animation-name','closeAnimeTop');
		$('.menu__button-top').css('animation-duration','0.5s');
		$('.blackGround').css('display','none');
		navBtnActive = 0;
	}
});
var changed = false;
$(window).scroll(function(){
	if(menuIconVisible){
		var scroll = $(document).scrollTop();
		var windowHeight = jQuery(window).height();
		if(scroll > windowHeight*3/4){
			if(navBtnActive == 0 && !changed){
				$("#top").html('<h1 class="menu_Logo"><a class = "menuIcon"><div class="menu__button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-4 -3.762 29.76 43.882" xml:space="preserve"><g><polygon class="menu__button-bottom" points="0,7.4 0,22.2 14.7,22.2"></polygon></g><g><polygon class="menu__button-top" points="22,14.8 22,0 7.3,0"></polygon></g></svg></div>menu</a></h1>');
				$("#top").hide().fadeIn(1000);
				changed = true;
			}
		} else {
			if(navBtnActive == 0 && changed){
				$("#top").html('<h1 class="menu_Logo">卓展<br>2020</h1>');
				$("#top").hide().fadeIn(1000);
				changed = false;
			}
		}
	}
})
