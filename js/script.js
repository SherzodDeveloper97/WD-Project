/* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header_top");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
  })
  
  /* navbar sticky - close */

  /* humburger menu - JS open*/
  const burger = document.querySelector('.burger');
  const navMain = document.querySelector('.nav_menu');
 
 burger.addEventListener('click', () => {
     navMain.classList.toggle('active');
     burger.classList.toggle('toggle');
 })
 
 // Body Not-Scroll
 const menuBtn = document.querySelector(".burger");
 let menuOpen = false;
 var x = document.getElementsByTagName("BODY")[0];
 
     menuBtn.addEventListener('click', () => {
         if (!menuOpen) {
             menuBtn.classList.add('open');
             menuOpen = true;
             x.style.overflow = 'hidden';
         }
         else{
             menuBtn.classList.remove('open');
             menuOpen = false;
             x.style.overflow = 'visible';
         }
     });
/* humburger menu - JS close*/