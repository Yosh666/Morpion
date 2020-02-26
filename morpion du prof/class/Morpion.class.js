
class Joueur{
    
    constructor(symbol, className){
        
        this.symbol = symbol
        this.className = className
        this.score=0
    }
    render(scoredelautre){//score de l'autre permettra de cibler l'autre joueur voir index
        let html="le joueur "+this.symbol+"<br>Victoire : "+this.score+"<br> Défaite : "+scoredelautre //on est sur le joueur  au choixon modifiera le nom du joueur directement dans l'index
        return html
    }
    
}

class Morpion{
    
    constructor(symbol1, symbol2, depth) {
        
        this.joueur1 = new Joueur(symbol1, "joueur1")
        this.joueur2 = new Joueur(symbol2, "joueur2")
        
        this.depth = depth
        this.init()
    }
    
    init(){
        
        this.alternate()
        
        this.grid = []
        
        for(let x = 1; x <= this.depth; x++){
            
            for(let y = 1; y <= this.depth; y++){
                let coord = x+"-"+y
                this.grid[coord] = ""
            }
            
        }
    }
    
    renderDiv(){
        let html = "<div id='grille' style='width:"+this.depth*6+"rem;'>"
        for(let x = 1; x <= this.depth; x++){
            
            for(let y = 1; y <= this.depth; y++){
                html+= "<div class='case' id='"+x+"-"+y+"'></div>"
            }
            
        }
        html+= "</div>"
        return html
    }
    
    renderTable(){
        let html = "<table id='grille'><tbody>"
        
        for(let x = 1; x <= this.depth; x++){
            html+= "<tr>"
            for(let y = 1; y <= this.depth; y++){
                html+= "<td class='case' id='"+x+"-"+y+"'></td>"
            }
            html+= "</tr>"
        }
        html+= "</tbody></table>"
        return html
    }
    
    
    playCell(coords){
        this.grid[coords] = this.joueurActuel.symbol
        
        return this.joueurActuel.symbol
    }
    
    alternate(){
        //affectation de joueurActuel slmt si joueurActuel est égal à joueur1 alors joueur2 sinon joueur1
        this.joueurActuel = (Object.is(this.joueurActuel, this.joueur1)) ? this.joueur2 : this.joueur1
    }
    
    hasWinner(){
    
        let diag1 = ""
        let diag2 = ""
        
        let pattern  = this.joueurActuel.symbol.repeat(this.depth)
        
        for(let x = 1; x <= this.depth; x++){
            let ligne = ""
            let colonne = ""
            for(let y = 1; y <= this.depth; y++){
                ligne+= this.grid[x+"-"+y]
                colonne+= this.grid[y+"-"+x]
                diag1+= (x == y)     ? this.grid[x+"-"+y] : ""
                diag2+= (x + y == this.depth+1) ? this.grid[x+"-"+y] : ""
            }
            
            if(ligne == pattern || colonne == pattern){
                
                this.joueurActuel.score++
                return true;
            }
        }
        
        if(diag1 == pattern || diag2 == pattern){
            
            this.joueurActuel.score++
            return true;
        }
        
        return false;
    }
    
    isDraw(){
        /*let draw = true
        
        if(this.grid.indexOf("")){
            draw =  false
        }
        return draw*/
        for (var key in this.grid){
            if (this.grid[key]=='')
            return false
        }
        return true
    }
}
           