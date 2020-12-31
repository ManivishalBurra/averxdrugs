
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
},{passive:true});

//loadingPage//


function hidediv()
{
    document.getElementById("loadingPage").style.height="0vh";
    document.getElementById("loading").style.height="0vh";
    document.getElementById("loadvideo").style.display="none";
  };

setTimeout("hidediv()",5000);
//this is for parallax effect;
const parallax=document.getElementById("parallax");
window.addEventListener("scroll",function(){
  var offset=window.pageYOffset;

  var intViewportWidth = window.innerWidth;
  var x=792;


 if(offset>=3260 && offset<=4560 &&intViewportWidth>=600)
 {
  offset=offset-3260;
  parallax.style.backgroundPositionY="-"+offset*0.1+"px";
 }
 else if(intViewportWidth>=600)
 {  console.log('intViewportWidth: '+intViewportWidth);
    video.style.backgroundPositionY="-"+offset*0.1+"px";
    offset=offset-x;
    slide2.style.backgroundPositionY="-"+offset*0.1+"px";
    offset=offset-x;
    slide3.style.backgroundPositionY="-"+offset*0.1+"px";
    console.log('newoffset: '+ offset);
 }
 else
 {
   video.style.backgroundPositionY="-"+offset*0+"px";
 }
},{passive:true});
