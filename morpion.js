

$(document).ready(function(){
    $('#jouer').show();
    $("#rejouer").hide();
    $('#container').hide();
})
$('#jouer').click(function(){
    $("#j1").addClass("actif");
    $(this).hide();
    $('#container').show();
})
let count=0;
let nbtour=0;
let nbcroix=true;
let nbrond=true;
let statut=0
$(".case").click(function (){
    
if (statut==0){
    nbtour++
  if (count ==0){
    let pathImg = "img/croix.png";
    $(this).find("img").attr("src",pathImg);
    
    $("#j1").removeClass("actif");
    $("#j2").addClass("actif");
    
    count=1;
    return $(this).statut=1
    //$(this).data("nbcroix",nbcroix);
}
    else if(count == 1){
    let pathImg = "img/rond.png";
    $(this).find ("img").attr("src",pathImg);
    //$(this).data("nbrond",nbrond);
    $("#j2").removeClass ("actif");
    $("#j1").addClass ("actif");
    return $(this). statut=2
    count=0
    }  
}


})
