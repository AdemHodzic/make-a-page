$(function(){
    $(".content-holder").hide();
    var DELAY = 700, clicks=0,timer=null;;
    $("#myInput").click(function(){
        $(".content-holder").slideToggle();
        var size = $(".content.item").outerHeight();
        var high = $(".app").outerHeight(true)+size*3;
        $(".app").attr("height",high);
    })
    $("#createLink").click(function(){
        $(".container").append("<a>Don't click me.I'm just an example!</a>");
        $(".container").children("a").attr("href","http://keenetrial.com/blog/wp-content/uploads/2014/02/why-you-gotta-be-so-mean-300x238.jpg");
        $(".container").children("a").attr("alt","Please connect your device to network.")
    });
    
    $("#createDiv").on("click",function(e){
        clicks++;
        if(clicks==1){
            timer = setTimeout(function(){
                $(".container").append("<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fuga eius iusto recusandae saepe quos voluptas sequi non eveniet quisquam omnis itaque possimus natus laborum alias illo temporibus nesciunt, totam!</div>");
                clicks=0;
            },DELAY);
            
        }else{
            clearTimeout(timer);
            $(".container").append("<div><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fuga eius iusto recusandae saepe quos voluptas sequi non eveniet quisquam omnis itaque possimus natus laborum alias illo temporibus nesciunt, totam!</b></div>");
            clicks=0;
        }
        
    });
    $(".createDiv").on("dblclick",function(e){
        e.preventDefault();
    });
    
    
    
    $("#createParagraph").on("click",function(e){
        clicks++;
        if(clicks==1){
            timer = setTimeout(function(){
                $(".container").append("<p>Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. </p>");
                clicks=0;
            },DELAY);
            
        }else{
            clearTimeout(timer);
            $(".container").append("<p><b>Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. Example paragraph. ExampleParagraph. </b></p>");
            clicks=0;
        }
        
    });
    $(".createParagraph").on("dblclick",function(e){
        e.preventDefault();
    });
})

