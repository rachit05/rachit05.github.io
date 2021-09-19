const preloader = document.getElementById('preloader');
document.addEventListener('DOMContentLoaded',function(e){
    setTimeout(() => {
        document.body.classList.add('preloaderRemoved');
    }, 4000);
});





const section = document.querySelectorAll(".skewScroll");
let currentPixel = window.pageYOffset;

console.log(currentPixel);
//looper keeps running and keeps track of where the new pixel is
const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff * 0.2;


    section.forEach(sec => {
        sec.style.transform = `skewX(${speed * 0.12}deg) skewY(${speed}deg) translate(${speed}px,${speed}px)`;
        // sec.style.transform = `
        //     skewX(${speed * 0.12}deg)
        //     translate(${speed}px,${speed}px)
        //     scaleY(${Math.abs(1 - (speed * 0.025))})
        //     rotateX(${-Math.round(speed * 10)}deg)
        // `;
    });
        
    currentPixel = newPixel;
    
    requestAnimationFrame(looper);
};

looper();

const me = document.getElementById('me');
const aboutImg = document.querySelector('#me img');
const aboutMe = document.querySelector('#aboutMe');

const imgWidth = aboutImg.getBoundingClientRect().width;
const imgHeight = aboutImg.getBoundingClientRect().height;
me.addEventListener('mouseenter',()=>{
    aboutImg.style.opacity = 0.7;
    aboutImg.style.visibility = "visible";
});

me.addEventListener('mouseout',()=>{
    aboutImg.style.opacity = 0;
    setTimeout(()=>{
        aboutImg.style.visibility = "hidden";
    },2500);
});

me.addEventListener('mousemove',e=>{
    aboutImg.style.opacity = 0.7;
    aboutImg.style.visibility = "visible";
    let {x,y} = e;
    x *= 0.05;
    y *= 0.25;
    aboutImg.style.transform = `translate(${x-(imgWidth/2)}px,${y-(imgHeight/2)}px)`;

    
    // let aboutMeX = x * -1.5;
    // let aboutMeY = y * 0.3;
    // aboutMe.style.transform = `translate(${aboutMeX}px,${aboutMeY}px)`;
});


let initOffset = pageYOffset;
addEventListener('scroll',e=>{
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById('currentProgress').style.height = `${scrolled * 5}px`;
});


const horLine = document.getElementById('horLine');
const verLine = document.getElementById('verLine');
const cursor = document.querySelector('#cursor');
addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    let target = e.target;
    verLine.style.transform = `translateX(${x}px)`;
    horLine.style.transform = `translateY(${y}px)`;
    x -= (cursor.getBoundingClientRect().width / 2);
    y -= (cursor.getBoundingClientRect().height / 2);
    
    cursor.style.transform = `translate(${x}px,${y}px)scale(1)`;
    cursor.style.background = 'transparent';
    cursor.innerHTML = '';
    cursor.style.border = 'none';
    
    if(target.classList.contains('changeCursor')){
        cursor.style.border = '2px solid white';
        cursor.style.background = 'black';
        cursor.style.mixBlendMode = 'initial';
        cursor.innerHTML = target.getAttribute('data-cursorMsg');
    }

});


const banner = document.querySelector('#bannerMain');

addEventListener('mousemove',function(e){
    banner.style.transform = `translate(${-e.clientX * 2}px,-50%)`;
});





// let aboutMeScroll = document.querySelector('#aboutMe');
// aboutMeScroll.addEventListener('wheel',e=>{
//     e.preventDefault();
//     let {deltaY} = e;
//     aboutMeScroll.scrollLeft += deltaY * 10;
// })



const mainCtaArr = document.querySelectorAll('.mainCTAText');

mainCtaArr.forEach(mainCta => {
    mainCta.addEventListener('click',function(e){
        copy(e.target.innerText);
    });
});

function copy(value){
    navigator.clipboard.writeText(value);
    let element = document.createElement('div');
    element.innerHTML = `<p>Copied <span>${value}</span> to the clipboard!</p>`;
    element.classList.add('copyMsg');
    document.body.appendChild(element);

    setTimeout(()=>{
        element.remove();
    },1500);
}




