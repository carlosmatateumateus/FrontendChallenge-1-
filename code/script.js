var background = document.querySelector('#left')
var menu = document.querySelector('#menu')
var img_pos = 1
var active_menu = false

function imgTransition(direction){
    if (direction == 'left'){
        if (img_pos != 1){
            img_pos -= 1
        }
        else{
            img_pos = 3
        }
    }
    if (direction == 'right'){
        if (img_pos != 3){
            img_pos += 1
        }
        else{
            img_pos = 1
        }
    }
    background.style.backgroundImage = `url('../assets/images/desktop-image-hero-${img_pos}.jpg')`
}