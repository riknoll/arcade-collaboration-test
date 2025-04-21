controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 1 . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . d f d f . . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . d d e e e . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . 2 8 2 2 2 2 8 2 . . . . . . 
    . 2 . 8 2 2 2 2 8 . 2 . . . . . 
    . 2 . 8 2 2 2 2 8 . 2 . . . . . 
    . 2 . 5 2 2 2 2 5 . 2 . . . . . 
    . d . 8 8 8 8 8 8 . d . . . . . 
    . . . 8 8 8 8 8 8 . . . . . . . 
    . . . 8 . . . . 8 . . . . . . . 
    . . . 8 . . . . 8 . . . . . . . 
    . . . e e . . . e e . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
