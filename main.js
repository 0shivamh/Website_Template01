$(document).ready(function(){
    
    document.getElementById("mainlogo").classList.add('animate__animated','animate__fadeInLeftBig')
    
    
   

    $(window).scroll(function(){
        let pos_top=$(window).scrollTop();
        console.log(pos_top);


        if((pos_top>5) && (pos_top<50)){
            var element = document.getElementById("navBar");
            element.classList.add("sticky-top");
            document.getElementById('navBar').classList.add('animate__animated','animate__fadeInDown')
            
        }
        else if((pos_top==0)){
            document.getElementById('navBar').classList.remove('animate__animated','animate__fadeInDown')
        }
        else if((pos_top>20) && (pos_top<665)){

            
            document.getElementById('card1').classList.add('animate__animated','animate__fadeInLeft');
            document.getElementById('card3').classList.add('animate__animated','animate__fadeInRight');
            document.getElementById('card2').classList.add('animate__animated','animate__fadeInUp');
            document.getElementById('card4').classList.add('animate__animated','animate__fadeInUp');

            $('#servises').addClass('ser2');
            $('#services').removeClass('ser1');

        }
        else if((pos_top>800) && (pos_top<1132) || (pos_top>800) && (pos_top<1288)){
            document.getElementById('YT').classList.add('animate__animated','animate__fadeInUp' );

            $('#YT').addClass('ser2');
            $('#YT').removeClass('ser1');
        }

    });

    $('#navbtn1').click(function(){
        //do something 
        document.getElementById('navbarSupportedContent').classList.add('animate__animated','animate__bounceInLeft')
    });
});



