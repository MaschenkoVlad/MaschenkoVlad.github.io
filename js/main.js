$(document).ready(function(){
    $('.slider').slick();
  });

$('.burger').on('click', function(){
    $('.header__list').toggleClass('open');
    $('.br-stick').toggleClass('j-menu');
});

$('.form__title').click(function(){
  $(this).toggleClass('j-open');
  $(this).next().toggleClass('j-open');
});﻿


