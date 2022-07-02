$(document).ready(function(){
    $("#experience-button").click(function(){
        $("#education").hide();
        $("#experience").fadeToggle("slow");
        document.getElementById("experience").scrollIntoView({behavior: "smooth", block: "start"});
    });

    $("#education-button").click(function(){
        $("#experience").hide();
        $("#education").fadeToggle("slow");
        document.getElementById("education").scrollIntoView({behavior: "smooth", block: "start"});
    });
});