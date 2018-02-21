let Damier;
(function () {
    "use strict";
    Damier = function Damier(sizeX,sizeY,id) {
        let self = this;
        this.joueur_un = true;
        this.hauteur = sizeX || 8;
        this.largeur = sizeY || 8;
        this.tab = new Array();
        this.get_carac_joueur = function() {
            return (this.joueur_un ? 'X' : 'O');
        };
        this.nb_element_identiques = function(x_start,y_start,addx,addy){
            let x = x_start,
                y = y_start,
                e= self.tab[y_start][x_start],
                retour = 0;
            if (e === '') 
                return 0;
            while(((x+addx)<self.largeur) && ((y+addy)<self.hauteur)){
                if (self.tab[y+addy][x+addx] !== e){
                    break;                    
                }
                ++retour; 
                x += addx;
                y += addy;
            }
            return (retour >   0 ? retour+1 : 0);            
        };
        this.checkEnd = function() {
            for (let i=0; i < self.hauteur; ++i){
                for (let j=0;j<self.largeur;++j ){                    
                    if (self.nb_element_identiques(j,i,1,0)>=3)
                        return true;
                }           
            }
            return false;
        };
        this.clickCase = function(){
            let x = $(this).data('x');
            let y = $(this).data('y');
            if (!self.tab[x][y])
                $(this).html(self.get_carac_joueur());
            self.tab[x][y] = self.get_carac_joueur();
            self.joueur_un = !self.joueur_un;
            if (self.checkEnd()){ // test gagnant
                console.log("WIN"); 
            }
        };
        
        let creer_case_noire = function(x,y) {
            return $('<td />').data('x', x).data('y', y).addClass('case-noire').html(' ').click(self.clickCase);
        };
        let creer_case_blanche = function(x,y) {
            return $('<td />').data('x', x).data('y', y).addClass('case-blanche').html(' ').click(self.clickCase);
        };

        
        let damier = $(id);
            for (let i = 0; i < this.hauteur; i++) {
              this.tab[i] = new Array();
              let tr = $('<tr />');
              for (var j = 0; j < this.largeur; j++) {
                let slot = (((j+i)%2) === 0 ? creer_case_blanche(i,j) : creer_case_noire(i,j));
                tr.append(slot);
                this.tab[i][j] = '';
              }
              damier.append(tr);
            }                    
        };
}
 
)();