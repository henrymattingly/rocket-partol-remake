let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyD, keyA, keyW;

/*
Henry Mattingly
Rocket Patrol Remake modding assignment
date :
time spent : ~10 hours

changes made:
-added a simultaneous second player (co-op)(30)
-changed the theme of the game, artwork, UI, and music (from sci-fi to foxs in the grass)(60)
-made a different bullet sprite that moves faster, different size, 
    and shoots faster with a different sound new weapon (player 1's weapon) (20)
-created a new scrolling sprite background()
-added new copyright free backgorund music (5)   https://www.youtube.com/watch?v=etlnsi-Kkac
-new scrolling background (5)
-new sprite for spaceship enemies (10)
-new weapon (player 1's weapon) (20)
-added new parallax scrolling background (10)


*/