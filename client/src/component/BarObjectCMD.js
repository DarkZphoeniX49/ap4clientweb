export class BarObject{
        ID_BAR =  0;
        PRODUITS = [];
        
    constructor(idBar, produit) {
            this.ID_BAR = idBar;
            this.PRODUIT = produit;
        }
    
    
    addProduit(produit) {
        
            if(this.ID_BAR === produit.ID_BAR){
            this.PRODUIT.push(produit);
            }
            
    }
}
