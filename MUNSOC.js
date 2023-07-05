let text = document.getElementById('text')
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 0.9 + 'px';
})

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
