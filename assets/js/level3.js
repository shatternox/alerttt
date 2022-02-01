$(function(){
    
    // function getAllEvents(element) {
    //     var result = [];
    //     for (var key in element) {
    //         if (key.indexOf('on') === 0) {
    //             result.push(key.slice(2));
    //         }
    //     }
    //     return result.join(' ');
    // }

    // var el = $('#puzzle');
    // el.bind(getAllEvents(el[0]), function(e) {
      
        // code here
     
    // });

    // Override alert
    window.alert = function () {

        let payload = $('#payload').val()
        
        $.ajax({
            url: '/0x5775e60447a0bc86c67c61472476ebf6fcab0d87',
            data: JSON.stringify({payload: payload}),
            processData: false,
            contentType: "application/json",
            type: 'POST'
        })
    }


    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){
        $('#iframeAudio').remove()
    }
    else {
        $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
    }

   

    // $('#submit').on('click',(e) =>{

    //     e.preventDefault();

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

        let hint = $('<marquee>').attr('id', 'hint-text').attr('scrollamount', '10').text("Objective are still the same! But you cannot use the script tag anymore! Btw, are you enjoying this CTF event?")

        $('.message').append(hint)

        $('.message').show('slow')
        

    })


    // function getAllEvents(element) {
    //     var result = [];
    //     for (var key in element) {
    //         if (key.indexOf('on') === 0) {
    //             result.push(key.slice(2));
    //         }
    //     }
    //     return result.join(' ');
    // }

    // var el = $('#puzzle');
    // el.bind(getAllEvents(el[0]), function(e) {
    //     e.preventDefault();
    //     alert(2)
    // });
})

