class Rocket extends Phaser.GameObject.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //adds the object to the scene
        scene.add.existing(this);
    }
}