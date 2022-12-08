$(function () {

    //Removal
    $(".detach").click(function () {
        $("#detach").children().first().detach();
        
    });

    $(".empty").click(function () {
        $("#empty").children().first().empty();
        
    });

    $(".remove").click(function () {
        $("#remove").children().first().remove();
        //Préciser la différence avec detach
    });
    
    $(".unwrap").click(function () {
        $("#unwrap").children().unwrap();
        
    });
    // Replacement
    $(".replaceAll").click(function () {
        $("<p>Boîtes Remplacées</p>").replaceAll( $("#replaceAll").children() );
        
    });

    $(".replaceWith").click(function () {
        $("#replaceWith").children().replaceWith("<p>Boîtes remplacées</p>");
        
    });

});
