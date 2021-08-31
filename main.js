const section = document.querySelectorAll(".skewScroll");
let currentPixel = window.pageYOffset

console.log(currentPixel)
//looper keeps running and keeps track of where the new pixel is
const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel
    const speed = diff * 0.2;


    section.forEach(sec => {
        sec.style.transform = `skewX(${speed * 0.12}deg) skewY(${speed}deg) translate(${speed}px,${speed}px)`;
    });
        
    
    
    currentPixel = newPixel;
    
    requestAnimationFrame(looper)
}

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
    },2500)
});

me.addEventListener('mousemove',e=>{
    aboutImg.style.opacity = 0.7;
    aboutImg.style.visibility = "visible";
    let {x,y} = e;
    x *= 0.05;
    y *= 0.25

    let aboutMeX = x * -1.5;
    let aboutMeY = y * 0.3;

    aboutImg.style.transform = `translate(${x-(imgWidth/2)}px,${y-(imgHeight/2)}px)`;
    // aboutMe.style.transform = `translate(${aboutMeX}px,${aboutMeY}px)`;
})