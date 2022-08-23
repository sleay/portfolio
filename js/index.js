
let data='';
$.ajax({
    
    url:'./js/data.json',

    success:function(json){
        data=json;
       console.log(data)

       $.each(data.project,function(k,v){

        console.log(v.title)
    
        let tag=`
        <li>
        <p>${v.title}</p>
        <div>
            <span>${v.sub}</span>
            <span>${v.day1}</span>
            <span>${v.day2}</span>
        </div>
        </li>`
    
        $('.slide > ul').append(tag);
        $('.list > ul').append(tag);

       
    })

    document.querySelectorAll('.list > ul > li > p').forEach(ptag => ptag.innerHTML = '<div><span>' + ptag.textContent.trim().split('').join('</span><span>') + '</span></div>');
   
   
   
    $('.list > ul > li').each(function(k,v){
        $(v).on('mouseenter',function(){
            $('video').attr('src',`${data.project[k].video}`);
        $('video').get(1).play();
        })

        $(v).on('click',function(){
            localStorage.setItem('k2',k);
            localStorage.removeItem('k1');
            location.href = './pr1.html'
        });
    });
    

    $('.slide > ul > li').each(function(k,v){
        $(v).on('click',function(){
            console.log(k)
            localStorage.setItem('k2',k);
            localStorage.removeItem('k1');
            location.href = './pr1.html'
        });
    });


    }
})


    $('.section2 > .frame_box1').on('click',function(){
        location.href = './pr1.html'
    });



// var uAgent = navigator.userAgent.toLowerCase();

// var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce','nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile');
// for (var i = 0; i < mobilePhones.length; i++){
//   if (uAgent.indexOf(mobilePhones[i]) != -1){
//     location.href="./mobile.html";
//   }
// };


if(matchMedia("(min-width:320px) and (max-width:1024px)").matches){
    location.href="./mobile.html";
}








history.scrollRestoration = "manual";

let num=0;
let btncount=0;




if(localStorage.getItem('k1', 'work')){
    $( 'html, body' ).animate( { scrollTop : 2001 }, 0 );
    
    // $('html, body').scrollTop() = 2001;
}

// setTimeout(function(){
//     localStorage.removeItem('k1');
// },50)





frameani()

function frameani(){
    $(window).on('scroll',function(){
        num = $(window).scrollTop();
        if(num == 0){
            $('.frame_box').css({
                left:'0%'
            })
            
            $('.sub').css({
                animation: 'fadeout 0.3s forwards'
            })
            $('.title').css({
                animation: 'fadein 0.3s 2s forwards',
                opacity:'0'
            })
    
            $('header').fadeOut();
    
        }
        else{
            $('.frame_box').css({
                left:'60%'
            })
            
            $('.title').css({
                animation: 'fadeout 0.3s forwards'
            })
            $('.sub').css({
                animation: 'fadein 0.3s 2s forwards'
            })
            $('header').fadeIn();
    
        }
    
       
        if(num > 970){
            $('.frame_box').css({
                width:'calc(100% - 100px)',
                left:'0px',
                top:'50vh',
                marginLeft:'50px',
                transform:'translateY(-50%)',
                height:'calc(80vh - 100px)'
            })
            $('.sub').css({
                animation: 'ani2 0.3s forwards'
            })
    
            
        }
        else{
            $('.frame_box').css({
                width:'33.85%',
                top:'50px',
                transform:'translateY(0)',
                marginLeft:'50px',
                height:'calc(100vh - 100px)'
                
                
            })
            // $('.sub').css({
            //     animation: 'ani1 0.3s 2s forwards'
            // })
            
        }
    
        if(num > 1500){
            if($('.list_view_btn').hasClass('active')){
                $('.frame_box').css({
                    width:'calc(50% - 160px)',
                    left:'50%',
                    marginLeft:'50px',
                    top:'50vh',
                    transform:'translate(-50% , -50%)',
                    height:'calc(50vh - 60px)',
                    transition: '2s',
                    
                })
            }
            else{
                $('.frame_box').css({
                    width:'calc(50% - 160px)',
                    left:'0px',
                    top:'50vh',
                    transform:'translateY(-50%)',
                    marginLeft:'50px',
                    height:'calc(50vh - 60px)',
                    transition: '2s',
                    
                })
            }
            
        }
       
    
    
       
        if(num > 2000){
            
           
           
            if($('.list_view_btn').hasClass('active')){
                $('.frame_box').css({
                    width:'30%',
                    left:'50%',
                    top:'calc(150% + 50px)',
                    
                    transform:'translate(-50% , -50%)',
                    height:'32.47vh',
                    marginLeft:'0',
                    transition: '1s',
                    zIndex:'-2'
                    
                })
                $('video').get(1).play();
            }
            else{
                $('.frame_box').css({
                    width:'calc(50% - 160px)',
                    left:'0px',
                    top:'150vh',
                    transform:'translateY(-50%)',
                    marginLeft:'50px',
                    height:'calc(50% - 60px)',
                    transition: '1s',
                    
                })
                $('video').get(0).play();
            }
    
    
    
            $('.warp').css({transform:'translateY(-100vh)'})
          
                $('.frame_box').css({
                    animation:'fadeout 0.3s 1.2s forwards',
                    zIndex:'-2'
                });
                $('.frame_box1').css({
                    animation:'fadein 0.3s 0.9s forwards'
                });
                $('.bg_frame').css({
                    animation:'fadein 0.3s 0.9s forwards'
                });
    
                // $('.frame_box1').css({
                //     display:'block'
                // });
               
           
        }
        else{
            $('.warp').css({transform:'translateY(0)'})
            // $('.frame_box').fadeIn()
            // $('.frame_box1').fadeOut();
            $('.frame_box1').css({
                animation:'fadeout 0.3s forwards'
            });
            $('.frame_box').css({
                animation:'fadein 0.3s forwards'
            });
            $('.bg_frame').css({
                animation:'fadeout 0.3s forwards'
            });
          
           
        }
    
        if(num > 3000){
            if($('.list_view_btn').hasClass('active')){
                $('.warp').css({transform:'translateY(-206vh)'})
            }
            else{
                $('.warp').css({transform:'translateY(-210vh)'})
                $('')
            }
            $('video').get(0).pause();
    
            
        }
    
        else if(num>2000&&num < 3000){
            $('.warp').css({transform:'translateY(-100vh)'})
        }
        
    });
}


function listchange(){


$('.btn_warp > a').on('click',function(){
    event.preventDefault()
});

$('.list_view_btn').on('click',function(){
    
    $('.slide_view_btn').removeClass('active');
    $('.list_view_btn').addClass('active');
   
    $('.section2').fadeOut();
    // setTimeout(function(){
    //     $('.section3').fadeIn();
    // },1)
    
        $('.section3').fadeIn(function(){
            $('video').get(1).play();
        })
   
    

    $('.section4').addClass('active');
    $('footer').addClass('active');

    $('.frame_box').css({
        width:'30%',
        left:'50%',
        top:'150%',
        transform:'translate(-50% , -50%)',
        height:'32.47vh',
        marginLeft:'0',
        zIndex:'-2'
        
    })
   

});




$('.slide_view_btn').on('click',function(){
    $('.list_view_btn').removeClass('active');
    $('.slide_view_btn').addClass('active');

    // $('.section3').fadeOut();
    // setTimeout(function(){
    //     $('.section2').fadeIn();
    // },1)
    $('.section3').fadeOut();
        $('.section2').fadeIn(function(){
            $('video').get(0).play();
        });
   
    

    $('.section4').removeClass('active');
    $('footer').removeClass('active');


});
}

listchange()

function cc(){
    if(btncount==0){
        $('.slide > a').eq(0).addClass('active')
    }
    else if(btncount==$('.slide > ul > li').length-1){
        $('.slide > a').eq(1).addClass('active')
    }
    else{
        $('.slide > a').removeClass('active')
    }
}

cc()

$('.slide>a').eq(0).on('click',function(){
    if(btncount>0){
        btncount--;
        console.log(btncount)
        cc()
        $('.slide > ul > li').css({
            transform:`translateY(-${btncount}00%)`
        })
    }
    $('video').attr('src',`${data.project[btncount].video}`);
    $('video').get(0).play();

});

$('.slide>a').eq(1).on('click',function(){
    if(btncount < $('.slide > ul > li').length-1){
        ++btncount;
        cc()
        $('.slide > ul > li').css({
            transform:`translateY(-${btncount}00%)`
        })
        console.log(btncount)

        $('video').attr('src',`${data.project[btncount].video}`);
        $('video').get(0).play();
}
});


// $('.list > ul > li').on('mouseenter',function(){
//     $('video').attr('src','./video/webflex.mp4');
//     $('video').get(1).play();
// });

