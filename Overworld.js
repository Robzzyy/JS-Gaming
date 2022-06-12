class Overworld {
    constructor(config) {
        // prend le ".game-container"
      this.element = config.element;
      // trouve le canvas dans le ".game-canvas"
      this.canvas = this.element.querySelector(".game-canvas");
      // Methode canvas qui nous donne l'acces pour utiliser la 2d dessus 
      this.ctx = this.canvas.getContext("2d");
    }


    // j'ajoute la methode init à ma classe,sans cela elle n'est pas
    // utiliser
    init() {
        const image = new Image();
        image.onload = () => {
            // callback
            this.ctx.drawImage(image,0,0)
        };
        image.src = "/images/maps/DemoLower.png";

        //Placement des objets!
        const hero = newGameObject ({
            x:5,
            y:6,
        })
        const npc1 = new GameObject({
            x:7,
            y:9,
            src: "/images/characters/people/npc1.png"
        })

    hero.sprite.draw(this.ctx);
    npc1.sprite.draw(this.ctx);

    }

}