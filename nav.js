window.addEventListener("scroll",function(){
  const scrolled= window.scrollY;



  if(scrolled>=50)
  {
   $(".navlinks").css("color","black");
   document.querySelector("nav").classList.add("backdrop-blur");
   document.querySelectorAll("img")[0].classList.add("imagext");
   document.querySelectorAll("img")[1].classList.add("imagetext");
   document.querySelectorAll("ul")[1].classList.add("symba");
   document.querySelectorAll("a")[4].classList.add("symbal");
   document.querySelectorAll("a")[5].classList.add("symbal");
   document.querySelectorAll("a")[4].innerHTML='<i class="fas fa-phone-alt"></i>';
   document.querySelectorAll("a")[5].innerHTML='<i class="far fa-envelope"></i>';
  }
  else
  {document.querySelector("nav").classList.remove("backdrop-blur");
   document.querySelectorAll("img")[0].classList.remove("imagext");
   document.querySelectorAll("img")[1].classList.remove("imagetext");
   document.querySelectorAll("a")[4].innerHTML='<i class="fas fa-phone-alt"></i> <span class="details">+91-7993538436</span>';
   document.querySelectorAll("a")[5].innerHTML='<i class="far fa-envelope"></i><span class="details">averxdrugs@gmail.com</span>';
   document.querySelectorAll("ul")[1].classList.remove("symba");
   document.querySelectorAll("a")[4].classList.remove("symbal");
   document.querySelectorAll("a")[5].classList.remove("symbal");
   document.querySelector("div").classList.remove("color");
   $(".navlinks").css("color","black");
 }
},{passive:true});
//this is for the closing of nav bar
var lastScrollTop=0;
navbar=document.getElementById("navigate_bar");
window.addEventListener("scroll",function(){
var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
console.log(scrollTop+"this is scrolltop")
if(scrollTop>lastScrollTop && scrollTop>2310)
{
navbar.style.top="-90px";
}
else
{
navbar.style.top="0";
}
lastScrollTop=scrollTop;
},{passive:true});
//this is for poping of averxDrugs title;
