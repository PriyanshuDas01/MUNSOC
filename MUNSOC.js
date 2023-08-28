let text = document.getElementById('text')
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 0.9 + 'px';
})

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

function myFunction() {
    if (window.scrollY) {
      navbar.style.backgroundColor=" rgb(0, 0, 0)";
    }
    else {
      navbar.style.backgroundColor=" rgba(0, 0, 0, 0)";
    }
  }

