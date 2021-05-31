// The user scrolls 80px from the top of the page 
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTOp > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.padding = "25px";
  }
  else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.padding = "35px";
  }
}
