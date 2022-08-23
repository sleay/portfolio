if(matchMedia("(min-width:1025px) and (max-width:2440px)").matches){
    location.href="./index.html";
}

$.ajax({
    
    url:'./js/data.json',

    success:function(json){
        data=json;

        $.each(data.project,function(k,v){
            let tag=`<li>
            <p>${v.title}</p>
            <div>
                <span>${v.sub}</span>
                <p><span>${v.day1}</span><span>${v.day2}</span></p>
            </div>
        </li>`

        $('.section2 > ul').append(tag);




        });

        $('.section2 > ul >li').each(function(k,v){
            $(v).on('click',function(){
                $('.content > video').attr('src',`${data.project[k].video}`)
                $('video').get(0).play();
                localStorage.setItem('k2',k);
                localStorage.removeItem('k1');
            });
        });

        
        



    }
})





$('.bg_frame').on('click',function(){
    location.href = './pr1.html'
});


$(window).on('scroll',function(){
    console.log($(window).scrollTop())

});




if(localStorage.getItem('k1', 'work')){
    $( 'html, body' ).animate( { scrollTop : 870 }, 1000 );
    
    // $('html, body').scrollTop() = 2001;
}
























