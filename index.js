const menu = document.querySelector('.menu-wrap');
const menuMobile = document.querySelector(".menu-wrap-mobile");

menu.addEventListener('click',function(){
  if(menu.classList.contains('open')){
    menu.classList.remove('open');
    menuMobile.classList.remove("open");
  }else{
    menu.classList.add('open');
    menuMobile.classList.add("open");
  }

});