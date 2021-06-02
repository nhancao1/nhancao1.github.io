// Get button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px, the button will appear
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicls on the button, the page will scroll up 
function topFunction() {
  document.body.scrollTop = 0 // Safari 
  document.documentElement.scrollTop = 0; // Chrome, Firefox, Edge, and Opera
}
