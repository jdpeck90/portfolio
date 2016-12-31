$(function() {
  console.log( 'script loaded!' );
 var $hero = $('hero_statement')
 var $navContainer = $('nav_container')
 var $aboutMenuItem = $('div.nav_menu.about')
 var $workSection = $('div.nav_menu.work')
 var $workContainer = $('div.work_container')
 var $educationSection = $('div.nav_menu.education')
 var $educationContainer = $('div.education_container')
 var $socialSection = $('div.nav_menu.social')
 var $navButton = $('div.nav_button')

var showNav = function() {
     randomBGColor()
     $('div.nav_page.container').css('display','block')
  }

  $($navButton).click(function(event,r){
    if($('.inAbout').length > 0) {
      hideAbout()
      $('div.nav_button.inAbout').removeClass('inAbout')
      console.log('finished!')
    } else if ($('.inWork').length > 0) {
      console.log('inWork in da haus')
      hideWork()
      showNav()
      $('div.nav_button.inWork').removeClass('inWork') }
      else {
    event.preventDefault()
    $navButton.addClass('')
    // addClassMain()
    // changeShape()
    randomBGColor()
    hideHero()
  }
  })

  $('div.nav_button').hover(function(){
    changeColor('div.nav_button')
    rotate('div.nav_button')
  })

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

// HERO
  var hideHero = function() {
    randomBGColor()
    $('.hero_statement').css('display','none')
    $('.nav_page.container').css('display','block')
  }

// ABOUT
  $($aboutMenuItem).click(function(){
    randomBGColor()
    console.log('clicked About')
    $('div.nav_page.container').css('display','none')
    $('div.about_page.container').css('display','block')
    $('div.nav_button').addClass('inAbout')
    console.log('should have loaded, check button classes & page containers')
  })

var hideAbout = function(){
  $('div.about_page.container').css('display','none')
   showNav()
}

// WORK
  $($workSection).click(function(){
    randomBGColor()
    $('div.nav_page.container').css('display','none')
    $('div.work_page.container').css('display','block')
    $('div.nav_button').addClass('inWork')
  })

$('span.professional h3').hover(
  function() {
  $("ul.professional_items").css('display','block');
  $("ul.personal_items").css('display','none');
  $(".altcoin_details").css('display','none');
  $(".tripPlanner_details").css('display','none');
  $(".shmabble_details").css('display','none');
   })



$('span.personal h3').hover(
  function() {
  $("ul.personal_items").css('display','block');
  $("ul.professional_items").css('display','none');
  $(".eco_details").css('display','none');
  $(".atmosphere_details").css('display','none');
  $(".steelys_details").css('display','block');a
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
    console.log('steelys hover')
  $(".eco_details").css('display','none');
   $(".atmosphere_details").css('display','none');
   $(".steelys_details").css('display','block');
   })
$("li.eco").hover (
  function() {
    console.log('eco hover')
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
    $('div.nav_page.container').css('display','none')
    $('div.education_page.container').css('display','block')
    $('div.nav_button').addClass('inEducation')
  })

var hideEducation = function(){
  $($educationContainer).css('display','none')
  }

$('li.general_assembly').hover(function(){
  console.log('hover-general')
  $('ul.general_assembly.course').css('display','block')
  $('ul.app_academy.course').css('display','none')
  $('ul.u_of_o.course').css('display','none')
})
$('li.app_academy').hover(function(){
  console.log('hover-AA')
  $('ul.general_assembly.course').css('display','none')
  $('ul.app_academy.course').css('display','block')
  $('ul.u_of_o.course').css('display','none')
})
$('li.u_of_o').hover(function(){
  console.log('hover-UOO')
  $('ul.u_of_o.course').css('display','block')
  $('ul.app_academy.course').css('display','none')
  $('ul.general_assembly.course').css('display','none')
})

// SOCIAL
  $($socialSection).click(function(){
    randomBGColor()
    $('div.nav_container').css('display','none')
    $('div.social_container').css('display','block')
    $('div.nav_button').addClass('inSocial')
  })

});

