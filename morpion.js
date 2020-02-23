    let nbpartiejouer= 0;        
    let j1victoire=0;
    let j2victoire=0;
    let draw=0;
    var j1= prompt("Nom du joueur1");
    var j2= prompt("Nom du joueur2")
$(document).ready(function(){
    $(".container").hide();
    $("#rejouer").hide();
    $("h2").hide();
    
    $(".case").data("valeur",0)
})
//bouton rejouer a faire!
    let nbtour=0;
    let player="player1";
$("#jouer").click(function (){
    $(this).hide();
    $(".container").show();
    document.getElementById("nomj1").innerHTML=j1;
    document.getElementById("nomj2").innerHTML=j2;
    document.getElementById("j1victoire").innerHTML= j1victoire;
    document.getElementById("j2victoire").innerHTML= j2victoire;
    document.getElementById("j1defaite").innerHTML= j2victoire;
    document.getElementById("j2defaite").innerHTML= j1victoire;
    document.getElementById("draw1").innerHTML= draw;
    document.getElementById("draw2").innerHTML= draw;
    
    nbpartiejouer++;
    //$("case").data("valeur",0);
    
//penser a ajouter la classe blocked et jouable pr des effets supplémentaires sur la grille   
})
$("#rejouer").click(function(){
    $(this).hide();
    $("h2").hide();
    $(".joueur").removeClass("winner");
    $(".joueur").removeClass("active");
     $(".case").find ("img").removeAttr('src');
    $(".container").show();
    $(".joueur").show();
    $(".grille").show();
    $(".case").data("valeur",0)
   /* $("#j1victoire").append(j1victoire);
    $("#j1defaite").append(j2victoire);
    $("#j2victoire").append(j2victoire);
    $("#j2defaite").append(j1victoire);
    $('.draw'). append(draw);*/
    document.getElementById("j1victoire").innerHTML= j1victoire;
    document.getElementById("j2victoire").innerHTML= j2victoire;
    document.getElementById("j1defaite").innerHTML= j2victoire;
    document.getElementById("j2defaite").innerHTML= j1victoire;
    document.getElementsById("draw1").innerHTML= draw;
    document.getElementsById("draw2").innerHTML= draw;
    
    nbpartiejouer++;
   
})
      
$(".case").click(function(){
    if($(this).data("valeur")!=0){
        $("#erreur").show();
    }
    else{
        $("#erreur").hide();
        nbtour=nbtour+1; 
        console.log (nbtour);
        if(player=="player1"){
            
            $("#joueur1").removeClass("active");
            $("#joueur2").addClass("active");
            let pathImg = 'img/croix.png';
            $(this).find ("img").attr ('src',pathImg);
            $(this).data("valeur",1)         
            player="player2";
            
        }
        else{
            
            $("#joueur1").addClass("active");
            $("#joueur2").removeClass("active");            
            let pathImg='img/rond.png';
            $(this).find ("img").attr ('src',pathImg);
            $(this).data("valeur",2)         
            player="player1";
            
        }
        conditionsVictoire()    
    }
})
