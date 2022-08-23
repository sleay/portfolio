let data='';
let data2='';
let tag='';
$.ajax({
    
    url:'./js/data.json',

    success:function(json){
        data=json;

if(localStorage.getItem('k2')){
    let key = localStorage.getItem('k2')

    $('video').attr('src',`${data.project[key].video}`)
    $('.content > img').attr('src',`${data.project[key].thumb}`)
    $('.contain1 > h2').text(`${data.project[key].title}`)
    $('.imgbox > img').attr('src',`${data.project[key].img}`)
    
    tag = ` <div>
                <span>${data.project[key].title}</span>
                <span>${data.project[key].sub}</span>
                <div>
                    <span>${data.project[key].day1}</span>
                    <span>${data.project[key].day2}</span>
                </div>
            </div>`
    $('.textbox').html(tag)

    $('.frame_box1').on('click',function(){
        $('.contain3 > h2').fadeOut();
        $('.frame_box1').addClass('active');

       $('.popup > iframe').attr('src', `${data.project[key].href}`)
       $('html').css({
            overflow:'hidden'
       });
      
            
      
      
        // $('.frame_box1 > .content').animate({
        //     opacity:'0'
        // },1000)
        setTimeout(function(){
            $('.frame_box1 > .content').animate({
                opacity:'0'
            },300)
        },700);
        setTimeout(function(){
          
            
            $('.popup').fadeIn();
            
        },1000);


        if(key==1){
            $('iframe').css({
                width:'375px',
                height:'667px',
                margin:'15vh auto',
                
            })
        }
        else{
            $('iframe').css({
                width:'100%',
                height:'100%',
                
            })
        }


       
    });








    $('.popup > div').on('click',function(){
        $('.popup').fadeOut();
        $('.contain3 > h2').fadeIn();
        $('.frame_box1 > .content').css({opacity:'1'})
        $('.frame_box1').removeClass('active');
        $('html').css({
            overflow:'auto'
       });

    });


}




    }
})


$.ajax({
    
    url:'./js/data.xml',

    success:function(xml){
        data2=xml;
        console.log(data2)

        $(data2).find('div').each(function(k,v){
            console.log($(data2).find('div'))


            if(localStorage.getItem('k2')==k){
                let key = localStorage.getItem('k2');
                $('.textbox').append($(this).html())
                
            }
        })

        
    }

    
    
})












history.scrollRestoration = "manual";
if($(window).scrollTop() == 0){


    $(window).bind('wheel', function(event){
        (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) ? state = true :  state = false;
    aa()
    });
}  

function aa(){
    if(!state){
        $('.frame_box').addClass('active')
        $('.contain1 > h2').fadeOut();
        setTimeout(function(){
            $('body').css({overflow:'auto'})
            $('header').fadeIn();
        },1000)
        $('video').get(0).play();
    }
}

$(window).on('scroll',function(){
    if($(window).scrollTop() > 0){
        $('video').get(0).pause();
    }
    else{
        $('video').get(0).play();
    }
})
let num
$('.frame_box').on('click',function(){
    num++;
    (!num==0) ? state = true :  state = false;
    aa()
})


