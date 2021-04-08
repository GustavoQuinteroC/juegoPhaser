class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"});
    }
    preload(){
        this.load.on
        ("complete",()=>
            {
                this.scene.start("Scene_play");
            }
        );
        this .scene.start("Scene_play");
        this.load.image("ball","./assets/ball.png");
        this.load.image("left","./assets/left_pallete.png");
        this.load.image("right","./assets/right_pallete.png");
        this.load.image("separator","./assets/separator.png");
        this.load.image("fondo","../assets/fondo.png");
        this.load.audio("sonido","./assets/musica.mp3");
    }

    create ()
    {
        this.load.on
        ("complete",()=>
            {
                this.scene.start("Scene_play");
            }
        );
    backgroundSound = this.sound.add('background_sound', {
        volume: 0.15,
        loop: true
    });
    }
}

export default Bootloader;