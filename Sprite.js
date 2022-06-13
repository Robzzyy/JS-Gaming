class Sprite {
    constructor(config) {   
        //Set up the image 
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            // avec cette facon je ne peux po esseyer de dessiner
            // avant de savoir si c'est vrai.
            this.isLoaded = true;
        }

        //Ombre
        this.shadow = new Image ();
        this.useShadow = true; // config.useShadow || false
        if (this.useShadow) {
        this.shadow.src = "/images/characters/shadow.png"
            }
        this.shadow.onload = () => {
        this.isShadowLoaded = true;
        }
       



        //Configure Animation et état initial :)     

        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }


// de cette façon, si nous voulons commencer dans une animation différente, nous pouvons la transmettre à la première
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;
        // référence à l'objet du jeu
        this.gameObject = config.gameObject;
    }

// nouvell methode appeller draw

draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

     this.isLoaded && ctx.drawImage(this.image,
        0,0,
        32,32,
        x,y ,
        32,32
        )
    }

}
