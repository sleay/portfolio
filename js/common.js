$('header').load('inc.html header > div',function(){
    $('.menu').on('click',function(){
        if($('header > div').hasClass('active')){
          
            $('header > div').removeClass('active')
        }
        else{
    
            $('header > div').addClass('active')
        }
    });

// location.reload(function(){
//     localStorage.removeItem('k1');
// });
    

    $('nav > a:nth-of-type(1)').on('click',function(){
        localStorage.removeItem('k1');
    })
    $('nav > a:nth-of-type(2)').on('click',function(){
        localStorage.removeItem('k1');
    })


    $('nav > a:nth-of-type(3)').on('click',function(){
        // event.preventDefault()
        // location.href = './index.html'
        
        localStorage.setItem('k1', 'work');
        
        
    })
    $('nav > a:nth-of-type(4)').on('click',function(){
        event.preventDefault();
        localStorage.removeItem('k1');
        $( 'html, body' ).animate( { scrollTop : $(document).height() }, 1000 );
	    return false;
        
        // $(window).scrollTop($(document).height())
        // console.log('ok')
    })
    
});
$('footer').load('inc.html footer > div');


// $('header').ready(function(){
//     $('header').on('click',function(){
//         if($('header > div').hasClass('active')){
          

//         }
//         else{

//             $('header > div').addClass('active')
//         }
//     });


//     $('nav > a:nth-of-type(3)').on('click',function(){
//         event.preventDefault()
//         $(window).scrollTop() = $(document).height();
//         console.log('ok')
//     })


// });


