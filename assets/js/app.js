var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",function(e){
    document.getElementById("sidebar").classList.toggle('toggled');
},false);









var roomcheck = document.getElementById("room1");
var roomcheck2 = document.getElementById("room2");
var roomcheck3 = document.getElementById("room3");
var roomcheck4 = document.getElementById("room4");
var roomcheck5 = document.getElementById("room5");
var roomcheck6 = document.getElementById("room6");
var roomcheck7 = document.getElementById("room7");
var roomcheck8 = document.getElementById("room8");
var roomcheck9 = document.getElementById("room9");
var roomcheck10 = document.getElementById("room10");


window.addEventListener('load', (event) => {
   if(roomcheck.checked){
        document.getElementById("checkouter").classList.add('active');
        roomcheck.addEventListener('change', function(e){
            if(this.checked){
                document.getElementById("checkouter").classList.add('active');
            }else{
                document.getElementById("checkouter").classList.remove('active');
            }
        })
   }else{
        roomcheck.addEventListener('click', function(e){
            document.getElementById("checkouter").classList.toggle('active');
        })
   }
});

window.addEventListener('load', (event) => {
    if(roomcheck2.checked){
         document.getElementById("checkouter2").classList.add('active');
         roomcheck2.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter2").classList.add('active');
             }else{
                 document.getElementById("checkouter2").classList.remove('active');
             }
         })
    }else{
         roomcheck2.addEventListener('click', function(e){
             document.getElementById("checkouter2").classList.toggle('active');
         })
    }
 });
 
 window.addEventListener('load', (event) => {
    if(roomcheck3.checked){
         document.getElementById("checkouter3").classList.add('active');
         roomcheck3.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter3").classList.add('active');
             }else{
                 document.getElementById("checkouter3").classList.remove('active');
             }
         })
    }else{
         roomcheck3.addEventListener('click', function(e){
             document.getElementById("checkouter3").classList.toggle('active');
         })
    }
 });

 window.addEventListener('load', (event) => {
    if(roomcheck4.checked){
         document.getElementById("checkouter4").classList.add('active');
         roomcheck4.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter4").classList.add('active');
             }else{
                 document.getElementById("checkouter4").classList.remove('active');
             }
         })
    }else{
         roomcheck4.addEventListener('click', function(e){
             document.getElementById("checkouter4").classList.toggle('active');
         })
    }
 });

 window.addEventListener('load', (event) => {
    if(roomcheck5.checked){
         document.getElementById("checkouter5").classList.add('active');
         roomcheck5.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter5").classList.add('active');
             }else{
                 document.getElementById("checkouter5").classList.remove('active');
             }
         })
    }else{
         roomcheck5.addEventListener('click', function(e){
             document.getElementById("checkouter5").classList.toggle('active');
         })
    }
 });
 
 
 window.addEventListener('load', (event) => {
    if(roomcheck6.checked){
         document.getElementById("checkouter6").classList.add('active');
         roomcheck6.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter6").classList.add('active');
             }else{
                 document.getElementById("checkouter6").classList.remove('active');
             }
         })
    }else{
         roomcheck6.addEventListener('click', function(e){
             document.getElementById("checkouter6").classList.toggle('active');
         })
    }
 });

 
 window.addEventListener('load', (event) => {
    if(roomcheck7.checked){
         document.getElementById("checkouter7").classList.add('active');
         roomcheck7.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter7").classList.add('active');
             }else{
                 document.getElementById("checkouter7").classList.remove('active');
             }
         })
    }else{
         roomcheck7.addEventListener('click', function(e){
             document.getElementById("checkouter7").classList.toggle('active');
         })
    }
 });

 
 window.addEventListener('load', (event) => {
    if(roomcheck8.checked){
         document.getElementById("checkouter8").classList.add('active');
         roomcheck8.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter8").classList.add('active');
             }else{
                 document.getElementById("checkouter8").classList.remove('active');
             }
         })
    }else{
         roomcheck8.addEventListener('click', function(e){
             document.getElementById("checkouter8").classList.toggle('active');
         })
    }
 });

 
 window.addEventListener('load', (event) => {
    if(roomcheck9.checked){
         document.getElementById("checkouter9").classList.add('active');
         roomcheck9.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter9").classList.add('active');
             }else{
                 document.getElementById("checkouter9").classList.remove('active');
             }
         })
    }else{
         roomcheck9.addEventListener('click', function(e){
             document.getElementById("checkouter9").classList.toggle('active');
         })
    }
 });

 
 window.addEventListener('load', (event) => {
    if(roomcheck10.checked){
         document.getElementById("checkouter10").classList.add('active');
         roomcheck10.addEventListener('change', function(e){
             if(this.checked){
                 document.getElementById("checkouter10").classList.add('active');
             }else{
                 document.getElementById("checkouter10").classList.remove('active');
             }
         })
    }else{
         roomcheck10.addEventListener('click', function(e){
             document.getElementById("checkouter10").classList.toggle('active');
         })
    }
 });