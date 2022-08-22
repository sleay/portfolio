let data='';
$.ajax({
    
    url:'./js/data.json',

    success:function(json){
        data=json;

if(localStorage.getItem('k2')){
    let key = localStorage.getItem('k2')

    $('video').attr('src',`${data.project[key].video}`)
    setTimeout(function(){
        localStorage.removeItem('k2')
    },50)
}
       


       
        
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


