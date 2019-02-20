$(document).ready(function(){
    $(".service-content li").on("click",function(){
        var flag = $(this).attr("data-content");
        window.location.href="/order/go/"+flag;
    })
});
