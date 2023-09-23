dino=document.querySelector(".dino")
container=document.querySelector('.cont')
btnj=document.querySelector(".btnj")
btns=document.querySelector(".btns")
score=document.querySelector(".score")
//cactus=document.querySelector(".cactus")
obj=document.querySelector(".obj")
msg=document.querySelector(".msg")

const audio1 = new Audio("bow.mp3")
const audio2 = new Audio("sfart.mp3")
const audio3 = new Audio("hag.mp3")

const list = ['ais.jpg','face.png','byas.jpg','cry.png','gae.jpg','twrk.png','sm7ni.png']
let pos = -5
let upt = 500;
let boi = 100;
let speed = 50;
let interval
let intervals
let sc=0

sp = 2

function jump(){
    dino.style.transform = 'translateY(-200%)';
    setTimeout(() => {
        dino.style.transform = 'translateY(0%)';
    },upt);
    audio2.play()
}
function ts() {
    sc++    
    score.textContent = sc
}

function play (){
    document.addEventListener('keypress' , (u)=>{
        if (u.key == " "){jump()}
        if (u.key == "z"){jump()}
        if (u.key == "Z"){jump()}
    });

    btnj.addEventListener('click', jump)

    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    container.appendChild(cactus);  

    const dib = dino.getBoundingClientRect();
    const cacb = cactus.getBoundingClientRect();
    const objb = obj.getBoundingClientRect();

    
    if (
        cacb.right >= objb.left &&
        cacb.left <= objb.right &&
        cacb.bottom >= objb.top &&
        cacb.top <= objb.bottom
    ) { 
        const cactus = document.createElement('div');
        cactus.classList.add('cactus');
        container.appendChild(cactus); 

        cactus.style.width = (Math.floor(Math.random() * (12 - 5) + 5)) + '%';

        src = list[Math.floor(Math.random()* list.length)];
        console.log(src)
        cactus.style.backgroundImage=`url(${src})`;
        
    }

    if (
        cacb.right >= dib.left &&
        cacb.left <= dib.right &&
        cacb.bottom >= dib.top &&
        cacb.top <= dib.bottom
    ) {msg.textContent = " u lost bitch r u f*ckin gay ? "; clearInterval(interval) ; clearInterval(intervals) ;audio1.play();}

    function set(){
        speed = speed - 5
        clearInterval(interval);
        interval = setInterval(play,speed);
    }
    if (sc == boi){
        upt = upt - 5;
        boi += 250;
        audio3.play()
        set()
    }
}

function start (){
    interval = setInterval(play,speed)
    intervals =setInterval(ts,100)
    btns.style.display = 'none';
}



