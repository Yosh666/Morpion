
let j1victoire=0;
let j2victoire=0;
let j1defaite=0;
let j2defaite=0;
$(document).ready(function(){
    $('#jouer').show();
    $("#rejouer").hide();
    $('#container').hide();
    $("#suspens").hide();
    $("#erreur").hide();
})
$('#jouer').click(function(){
    $("#j1").addClass("actif");
    $(this).hide();
    $('#container').show();
    $("#j1victoire").append(j1victoire);
    $("#j1defaite").append(j1defaite);
    $("#j2victoire").append(j2victoire);
    $("#j2defaite").append(j2defaite);
})

function Joueur1gagne(){
    $("#grille").hide()
    $("#j2").hide()
    j1victoire++;
    j2defaite++;
    $("#rejouer").show()
}
function Joueur2gagne(){
    $("#grille").hide()
    $("#j2").hide()
    j1defaite++;
    j2victoire++;
    $("#rejouer").show()
}
$('.case').data("statut",0)
let count=0;
let nbtour=0;

$(".case").click(function (){
 
if ($(this).data("statut")==0){
    $("#erreur").hide();
    nbtour++
  if (count ==0){
    let pathImg = "img/croix.png";
    $(this).find("img").attr("src",pathImg);    
    $("#j1").removeClass("actif");
    $("#j2").addClass("actif"); 
    count=1;
    
    $(this).data("valeur",1);    
    $(this).data("statut",1);

    //$(this).data("nbcroix",nbcroix);
}
    else if(count == 1){
    let pathImg = "img/rond.png";
    $(this).find ("img").attr("src",pathImg);
    //$(this).data("nbrond",nbrond);
    $("#j2").removeClass ("actif");
    $("#j1").addClass ("actif");
    
    count=0
    $(this).data("valeur",2);
    $(this).data("statut",2);
    
    }  
    if (nbtour>4 &&nbtour<=9){
        if ($('#case1').data("valeur")==1&&
            $("#case2").data("valeur")==1&&
            $("#case3").data("valeur")==1){
                Joueur1gagne();
        }
        else if ($('#case1').data("valeur")==2&&
            $("#case2").data("valeur")==2&&
            $("#case3").data("valeur")==2){
                Joueur2gagne()
        }
        else if($("#case4").data("valeur")==1&&
            $("#case5").data("valeur")==1&&
            $("#case6").data("valeur")==1){
                Joueur1gagne()
            }
        else if($("#case4").data("valeur")==2&&
            $("#case5").data("valeur")==2&&
            $("#case6").data("valeur")==2){
                Joueur2gagne()
            }   
        else if($("#case7").data("valeur")==1&&
            $("#case8").data("valeur")==1&&
            $("#case9").data("valeur")==1){
                Joueur1gagne()
            }
        else if($("#case7").data("valeur")==2&&
            $("#case8").data("valeur")==2&&
            $("#case9").data("valeur")==2){
                Joueur2gagne()
            }
        else if($("#case1").data("valeur")==1&&
            $("#case4").data("valeur")==1&&
            $("#case7").data("valeur")==1){
                Joueur1gagne()
            }
        else if($("#case1").data("valeur")==2&&
            $("#case4").data("valeur")==2&&
            $("#case7").data("valeur")==2){
                Joueur2gagne()
            }
        else if($("#case2").data("valeur")==1&&
            $("#case5").data("valeur")==1&&
            $("#case8").data("valeur")==1){
                Joueur1gagne()
            }
        else if($("#case2").data("valeur")==2&&
            $("#case5").data("valeur")==2&&
            $("#case8").data("valeur")==2){
                Joueur2gagne()
            }
        else if($("#case3").data("valeur")==1&&
            $("#case6").data("valeur")==1&&
            $("#case9").data("valeur")==1){
                Joueur1gagne()
            }   
        else if($("#case3").data("valeur")==2&&
            $("#case6").data("valeur")==2&&
            $("#case9").data("valeur")==2){
                Joueur2gagne()
            }
        else if($("#case1").data("valeur")==1&&
            $("#case5").data("valeur")==1&&
            $("#case9").data("valeur")==1){
                Joueur1gagne()
            }  
        else if($("#case1").data("valeur")==2&&
            $("#case5").data("valeur")==2&&
            $("#case9").data("valeur")==2){
                Joueur2gagne()
            }
        else if($("#case3").data("valeur")==1&&
            $("#case5").data("valeur")==1&&
            $("#case7").data("valeur")==1){
                Joueur1gagne()
            } 
        else if($("#case1").data("valeur")==2&&
            $("#case5").data("valeur")==2&&
            $("#case9").data("valeur")==2){
                Joueur2gagne()
            }
        else{
            $('#titre').show();
            $('#suspens').show();
        }

    }
}
    else{
    $("#erreur").show();
    }
})
