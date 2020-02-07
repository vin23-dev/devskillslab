$(document).ready(function(){
    $("#addSkill").click(function(){
        $(".listOfSkills").append("<li>" + $("#enterText").val());
    });
    $("<ol>").click(function(){
        $("<li>").remove("<li>");
    }) 
});

    