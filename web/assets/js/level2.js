$(function(){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){
        $('#iframeAudio').remove()
    }
    else {
        $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
    }

    // $('#submit').on('click',() =>{

    //     var payload = $('#payload').val()

    //     $('#puzzle').html(payload)
    // })


    $('#payloadForm').submit( (e) => {
        e.preventDefault();
        // let payload = new FormData(this)
        
        // $.ajax({
        //     url: '/level1',
        //     data: payload,
        //     processData: false,
        //     contentType: false,
        //     type: 'POST'
        // })
    })


    $('#hint').click( () => {
        $('.message').hide('slow')

        $('.message').html('')

        let hint = $('<marquee>').attr('id', 'hint-text').attr('scrollamount', '10').text("For level 2 you still need to use a script tag to pop up an alert with 1 as the message!")

        $('.message').append(hint)

        $('.message').show('slow')
        

    })

})

