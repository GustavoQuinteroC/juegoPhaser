import Palas from '../gameObjects/palas.js';


class Scene_play extends Phaser.Scene
{
    constructor()
    {
        super({key: "Scene_play"});
    }
    create()
    {
        this.add.sprite(600,350,'fondo');
        
        
        let center_w=this.sys.game.config.width/2;
        let center_h=this.sys.game.config.height/2;

        //separador
        this.add.image(center_w,center_h,"separator");

        //palas
        
        this.left=new Palas(this,15,center_h,"left");
        this.right=new Palas(this,this.sys.game.config.width-15,center_h,"right")

        //pelota
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_w,center_h,"ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-900);

        //fisicas
        this.physics.add.collider(this.ball, this.left, this.collitionPallete, null, this);
        this.physics.add.collider(this.ball, this.right, this.collitionPallete, null, this);


        this.cursor = this.input.mouse.capture = true;

    }
    update() {
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }
        this.right.y=this.input.mousePointer.worldY;
        this.left.y=this.input.mousePointer.worldY;
        

    }
    collitionPallete()
    {
        this.ball.setVelocityY(Phaser.Math.Between(-120,120));
    }
}

export default Scene_play;