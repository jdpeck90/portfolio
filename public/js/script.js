$(function() {

  console.log( 'script loaded!' );
 var $hero = $('hero_statement')
 var $navContainer = $('nav_container')
 var $aboutMenuItem = $('li.nav_menu.about')
 var $workSection = $('li.nav_menu.work')
 var $workContainer = $('li.work_container')
 var $educationSection = $('li.nav_menu.education')
 var $socialSection = $('li.nav_menu.connect')
var showNav = function() {
     randomBGColor()
     $('ul.nav_page.container').css('display','block')
  }
///////BUTTON
$('body').on('click','div.nav_button',function(){
      changeColor('div.nav_button')
    rotate('div.nav_button')
   if ($('.nav_page').is(':visible')) {
            $('.nav_page').hide();
            $('.hero_statement').show();
      } else {
            $('.container').hide();
            $('.nav_page').show();
            $('.hero_statement').hide();
      }
    })


  $('div.nav_button').hover(function(){

  })

// var backToMenu = function() {
//   if($('.').is(":visible"))
// }

var changeColor = function(div){
  var colorArray = ['#93B5C6','#DDEDAA','#F0CF65','#D7816A','#BD4F6C']
  var randomNum = (Math.floor(Math.random()*colorArray.length))+1
    $(div).css('background',colorArray[randomNum])
}

var rotate = function(div){
  var degArray = [90,180,270,360]
  var randomNum = (Math.floor(Math.random()*degArray.length))+1
  $(div).css('transform','rotate('+degArray[randomNum]+'deg)')

}
  var randomBGColor = function() {
  var backgroundColorArray = ['#61E294', '#7BCDBA', '#9799CA', '#BD93D8','#B47AEA']
  var randNum = Math.floor(Math.random()*backgroundColorArray.length) +1
  $('body').css('background-color',backgroundColorArray[randNum])
  }

  $()

// HERO
  var hideHero = function() {

  }




// ABOUT
  $($aboutMenuItem).click(function(){
    randomBGColor()
    $('ul.nav_page.container').css('display','none')
    $('div.about_page.container').css('display','block')
  })


// WORK
  $($workSection).click(function(){
    randomBGColor()
    $('ul.nav_page.container').css('display','none')
    $('div.work_page.container').css('display','block')
  })

$('ul.pro h3').hover(function() {
  console.log('pro works')
  $("ul.pro > li").css('display','block');
  $("ul.per > li").css('display','none');
  $(".altcoin_details").css('display','none');
  $(".tripPlanner_details").css('display','none');
  $(".shmabble_details").css('display','none');
   })



$('ul.per h3').hover(
  function() {
  $("ul.per > li").css('display','block');
  $("ul.pro > li").css('display','none');
  $(".eco_details").css('display','none');
  $(".atmosphere_details").css('display','none');
  $(".steelys_details").css('display','none');
   })


$("li.shmabble").hover(
  function() {
  $(".shmabble_details").css('display','block');
   $(".altcoin_details").css('display','none');
   $(".tripPlanner_details").css('display','none');
   })

$("li.altcoin").hover(
  function() {
  $(".shmabble_details").css('display','none');
   $(".altcoin_details").css('display','block');
   $(".tripPlanner_details").css('display','none');
   })
$("li.tripPlanner").hover(
  function() {
  $(".shmabble_details").css('display','none');
   $(".altcoin_details").css('display','none');
   $(".tripPlanner_details").css('display','block');
   })
$("li.atmosphere").hover(
  function() {
    console.log('atmosphere hover')
  $(".eco_details").css('display','none');
   $(".steelys_details").css('display','none');
   $(".atmosphere_details").css('display','block');
   })
$("li.steelys").hover(
  function() {
   $(".eco_details").css('display','none');
   $(".atmosphere_details").css('display','none');
   $(".steelys_details").css('display','block');
})
$("li.eco").hover (
  function() {
   $(".atmosphere_details").css('display','none');
   $(".steelys_details").css('display','none');
   $(".eco_details").css('display','block');
})
// $("span.professional").click(function(){
//     $("p.professional").slideToggle('slow','swing');
//     $("span.professional").addClass('toggleDown')
// });
// $("span.professional").click(function(){
//     $("p.professional.toggleDown").slideToggle('slow','swing');
//     $("span.professional.toggleDown").removeClass('toggleDown')
// });

$("span.personal").click(function(){
    $("p.personal").slideToggle('fast','linear');
    $("span.personal").addClass('toggleDown')
});

  var hideWork = function(){
    $('div.work_page.container').css('display','none')
  }

// EDUCATION
  $($educationSection).click(function(){
    randomBGColor()
    $('ul.nav_page.container').css('display','none')
    $('div.education_page.container').css('display','block')
  })


$('li.ed_item.ed_ga').hover(function(){
  console.log('hover-general')
  $('ul.general_assembly.course').css('display','block')
  $('ul.app_academy.course').css('display','none')
  $('ul.u_of_o.course').css('display','none')
})
$('li.ed_item.ed_aa').hover(function(){
  console.log('hover-AA')
  $('ul.general_assembly.course').css('display','none')
  $('ul.app_academy.course').css('display','block')
  $('ul.u_of_o.course').css('display','none')
})
$('li.ed_item.ed_uo').hover(function(){
  console.log('hover-UOO')
  $('ul.u_of_o.course').css('display','block')
  $('ul.app_academy.course').css('display','none')
  $('ul.general_assembly.course').css('display','none')
})

// SOCIAL
  $($socialSection).click(function(){
    console.log('beforerandom')
    randomBGColor()
    console.log('works')
     $('ul.nav_page.container').css('display','none')
    $('div.connect_page.container').css('display','block')
  })

});

