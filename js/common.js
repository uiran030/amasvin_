$('#header .nav .depth1 > li ').on('mouseover mouseout', function(e){
    e.preventDefault()
    $(this).toggleClass('on')
})

var dataSrc = "";
var src = "";
$('#header .snsbox a').on('mouseover', function(){
    src = $(this).find('img').attr('src')
    dataSrc = $(this).find('img').attr('data-src')
    $(this).find('img').attr('src',dataSrc)
})
$('#header .snsbox a').on('mouseout', function(){
    $(this).find('img').attr('src', src)
})
