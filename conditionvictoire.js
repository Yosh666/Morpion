/*let j1victoire=0;
let j2victoire=0
let draw=0*/
function Joueur1gagne(){
    $("h2").hide();
    $(".joueur").removeClass("active");
    $("#joueur1").addClass("winner");
    $(".grille").hide();
    $("#joueur2").hide();
    j1victoire ++;
    document.getElementById("j1victoire").innerHTML= j1victoire;
    $("#rejouer").show();
}
function Joueur2gagne(){
    $("h2").hide();
    $(".joueur").removeClass("active");
    $("#joueur2").addClass("winner");
    $(".grille").hide();
    $("#joueur1").hide();
    j2victoire ++;
    document.getElementById("j2victoire").innerHTML= j2victoire;
    $("#rejouer").show();
}
function conditionsVictoire(){
//rejouer sur l'autre js
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
        else if($("#case3").data("valeur")==2&&
            $("#case5").data("valeur")==2&&
            $("#case7").data("valeur")==2){
                Joueur2gagne()
            }
        else{
            $('#titre').show();
            $('#suspens').show();

        }
        if(nbtour==9){
            $(".container").hide();
            draw++;
            $("#titre").show();
            $("h2").hide();
            $("#matchnul").show();
            $("#nbpartie").append(nbpartiejouer);
            $("#nbpartie").show();            
            $("#rejouer").show();
        }
    }
}