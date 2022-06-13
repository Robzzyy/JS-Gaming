class Overworld {
    constructor(config) {
        // prend le ".game-container"
      this.element = config.element;
      // trouve le canvas dans le ".game-canvas"
      this.canvas = this.element.querySelector(".game-canvas");
      // Methode canvas qui nous donne l'acces pour utiliser la 2d dessus 
      this.ctx = this.canvas.getContext("2d");
      this.map = null;
    }

    // notre boucle va être une fonction qui declenche chaque image
    // environs 60 fois par seconde elle va s'appeller attrendre la 
    // prochaine image s'appeller à nouveau ect ect et lors chaque appel
    // de fonction, il va dessiner le dernier etat de notre jeu sur le
    // canvas
    starGameLoop() {
        const step = () => {
            
            // le navigateur va s'occuper d'appeler cette fonction pour nous à chaque fois
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }



    // j'ajoute la methode init à ma classe,sans cela elle n'est pas
    // utiliser
    init() {

        this.starGameLoop();


        
      
 
    }

}