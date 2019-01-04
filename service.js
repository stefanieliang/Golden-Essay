$(document).ready(function(){
    $(".service-content li").mouseenter(function(e){
        $(e.target).css('cursor','pointer');
        const src = e.target.getElementsByTagName('img')[0].src;
        const hoverSrc = src.split('.')[0]+'-hover.'+src.split('.')[1];
        e.target.getElementsByTagName('img')[0].src = hoverSrc;
    });
    $(".service-content li").mouseleave(function(e){
        const hoverSrc = e.target.getElementsByTagName('img')[0].src;
        const src = hoverSrc.split('-hover.')[0]+'.'+hoverSrc.split('.')[1];
        e.target.getElementsByTagName('img')[0].src = src;
    });
});
