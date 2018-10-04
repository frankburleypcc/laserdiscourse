$(document).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
        event.stopPropagation();
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        
    });
         
    });
    
    $(document).on("click", function(event){
        var $trigger = $(".hamburger");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".menu").slideUp("slow");
            $( ".hamburger" ).show();
            $( ".cross" ).hide();
        }            
    });

});