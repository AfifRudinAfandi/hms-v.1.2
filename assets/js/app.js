var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",function(e){
    document.getElementById("sidebar").classList.toggle('toggled');
},false);