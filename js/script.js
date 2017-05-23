$(document).ready(function(){
    // $(".about").click(function(){
    //     $("body").toggleClass("change");
    //     $(".title, .list, .back, a").toggleClass("white");
    // })
    // $(".about").hover(function(){
    //     $("body").toggleClass("change");
    //     $(".title, .list, .back, a").toggleClass("white");
    // })
    $(function(){
        $(".about-wrap").bind("tap", tapChange)

        function tapChange(){
            $("body").toggleClass("change");
            $(".title, .list, .back, a").toggleClass("white");
        }
    })
})