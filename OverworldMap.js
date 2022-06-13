class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        // couche inferieur
        this.lowerSrc = config.lowerSrc;
        // couche superieur
        this.upperSrc = config.upperSrc

        this.lowerImage = new image ();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image ();
        this.upperImage.src = config.upperImageSrc;
    }
    drawLowerImage(ctx) {
        ctx.drawImage(thus.lowerImage,0,0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(thus.upperImage,0,0)
    }
}



window.overworldMaps = {
    DemoRoom: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc : "/images/maps/KitchenUpper.png",
    gameObjects: {
        hero: new GameObject ({
            x:3,
            y:1,
        }),
        npc1: new GameObject({
            x:9,
            y:2,
            src:"/images/characters/people/npc1.png"
        })
        npcA: new GameObject({
            x:6,
            y:1,
            src:"/images/characters/people/npc2.png"
        })
        npcB: new GameObject({
            x:10,
            y:4,
            src:"/images/characters/people/npc3.png"
        })
    }
    }
}