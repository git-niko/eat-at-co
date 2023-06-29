window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.paddingTop = "5px";
      document.getElementById("navbar").style.backgroundColor = "black";
      document.getElementById("navbar").style.height= "7vh";
      document.getElementById("logo").style.width = "50px";
    } else {
      document.getElementById("navbar").style.paddingTop = "50px";
      document.getElementById("navbar").style.backgroundColor = "transparent"
      document.getElementById("navbar").style.height= "15vh";
      document.getElementById("logo").style.width = "150px";
    }
  }
