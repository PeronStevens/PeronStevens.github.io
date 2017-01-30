$().ready(function(){
    $(".content").fadeIn(4000);

    $("#title").typed({
        strings: ["UNIX enthusiast", "Some guy with a keyboard", "Likes keyboard shortcuts", "Full Stack Web Developer"],
        typeSpeed: 0,
        showCursor: false
    });
});