$('svg').each(function(){
    var viewbox = this.getAttribute('viewBox');
    var elwidth = $(this).width();  // SIZE IS CALCULATED BY ELEMENT WIDTH FORM CSS
    var viewboxArr = viewbox.split(" ");
    var elNewHeight = (elwidth * viewboxArr[3] / viewboxArr[2]);  //HOLD RATIO
    $(this).attr({ // ADD ATTRIBUTES FOR SAFARI AND IE
        'width' : elwidth,
        'height' : elNewHeight
    }).css({    // CSS IS GOOD FOR OTHER BROWSERS
        'width' : elwidth,
        'height' : elNewHeight
    });
});