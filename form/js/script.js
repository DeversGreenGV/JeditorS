let menu = document.querySelector('.menu');
let menubut = document.querySelector('.menubut');
let menuContains = document.querySelector('.menuContains');

menubut.addEventListener('click', OpenMenu);


function OpenMenu() {
    if (menuContains.classList.contains('active')) {
        menuContains.classList.toggle('active')
      
        setTimeout("menu.classList.toggle('active')", 1000);
    }else {
        menu.classList.toggle('active');
        setTimeout("menuContains.classList.toggle('active')", 1000);
    }
    // menuContains.classList.toggle('active');
    // menu.classList.toggle('active');
    // setTimeout( "menu.classList.toggle('active')", 5000);
   
}

let hoverOne = document.querySelectorAll('.hoverOne');
let timer;
for (let index = 0; index < hoverOne.length; index++) {
    hoverOne[index].addEventListener('mouseover',  HoverEffect1);
   
}
    function HoverEffect1() {

        let act_el = this;
   
             timer=setTimeout(setT, 100) ;
             console.log('yes');

        this.addEventListener('mouseout', function name(params) {
            clearTimeout(timer);
            console.log('no');
        });

        function setT() {
            
      
            if (!act_el.classList.contains('Cooldown')) {
                
            
                act_el.classList.toggle('hover1-act');
                
                act_el.classList.toggle('Cooldown');

                act_el.addEventListener('mouseout', function name(params) {

                  

                    setTimeout( H_E, 1000);
                    setTimeout( cdOff, 2500);
                   
                    function H_E(params) {
                        act_el.classList.remove('hover1-act')
                    }
                    function cdOff(params) {
                        act_el.classList.remove('Cooldown')
                    }

                })
                
            }
        }
 
    }