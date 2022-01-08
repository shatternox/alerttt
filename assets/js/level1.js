var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}


var form = $('#submit').on('click',() =>{

    var payload = $('#payload').val()

    $('#puzzle').html(payload)
})