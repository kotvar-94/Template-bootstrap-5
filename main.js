    // Sticky Navbar
 window.addEventListener('scroll', function(){
    if(window.scrollY > window.innerHeight){
      document.getElementById('navbar').classList.add("sticky");
    } else {
      document.getElementById('navbar').classList.remove("sticky");
    }
  });
  

