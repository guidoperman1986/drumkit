var letras = ["w","a","s","d","j","k","l"];

for (var i=0; i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',handleClick);

}

function handleClick(letra){
    var boton,audio;
    if (typeof(letra) == 'string'){
        boton = letra;
    } else {        
        boton = this.innerText;
    }    

    buttonAnimation(boton);

    switch(boton){
        case 'w': audio = new Audio('./sounds/tom-1.mp3'); audio.play();
            break;
        case 'a': audio = new Audio('./sounds/tom-2.mp3'); audio.play();
            break;
        case 's': audio = new Audio('./sounds/tom-3.mp3'); audio.play();
            break;
        case 'd': audio = new Audio('./sounds/tom-4.mp3'); audio.play();
            break;
        case 'j': audio = new Audio('./sounds/snare.mp3'); audio.play();
            break;
        case 'k': audio = new Audio('./sounds/crash.mp3'); audio.play();
            break;
        case 'l': audio = new Audio('./sounds/kick-bass.mp3'); audio.play();
            break;
        default:
            break;
    }
    

}

document.addEventListener('keydown',function(event){
    handleClick(event.key);
});

function buttonAnimation(currentKey){    
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}