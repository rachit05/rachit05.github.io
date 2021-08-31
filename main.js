const section = document.querySelectorAll(".skewScroll");
let currentPixel = window.pageYOffset

console.log(currentPixel)
//looper keeps running and keeps track of where the new pixel is
const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel
    const speed = diff * 0.2;


    section.forEach(sec => {
        sec.style.transform = `skewX(${speed * 0.12}deg) skewY(${speed}deg) translateY(${speed}px)`;
    });
        
    
    
    currentPixel = newPixel;
    
    requestAnimationFrame(looper)
}

looper();