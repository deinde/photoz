

//Animate Smooth Scroll

$('#view-work').on('click', () => {


    //give me the vertical start position of image div
    const imagesStartPos = $('#images').position().top;

    //grab the body + html and animate to the start of image position
    $('html,body').animate({
        scrollTop: imagesStartPos
    }, 900)
})