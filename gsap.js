

let menuBtn = document.querySelector('#navLink');
let menuCloseBtn = document.querySelector('#menuCloseBtn');
let aboutMeBtn = document.querySelector('#scrollTo__aboutMe');
let contactBtn = document.querySelector('#scrollTo__contact');
let workBtn = document.querySelector('#scrollTo__work');
let backToTopBtn = document.querySelector('#scroll__backToTop');


gsap.from("main",{
    duration :3,
    opacity : 0,
    skewY : "-10deg",
    x:"100px",
    y:"-50px",
    delay: 2,
    ease : "power4.inOut"
})



let menuTimeline = gsap.timeline({});

function toggleMenuClass(){
    if (menuTimeline.reversed()) {
        menuTimeline.play();
        menuBtn.classList.toggle('menuOpen');
        return;
    }
    menuBtn.classList.toggle('menuOpen');
    
    menuTimeline.fromTo('#menu-f1',{
        x:"-100%",
        y:"100%",
        borderRadius:"80%",
        // skewY:"50deg",
    },{
        duration: 2,
        ease: 'expo.inOut',
        borderRadius:"0%",
        // skewY:"0deg",
        x:0,
        y:0,
    })
    menuTimeline.fromTo('#menu-f2',{
        x:"-100%",
        y:"100%",
        borderRadius:"80%",
        // skewY:"50deg",
    },{
        duration: 2,
        ease: 'expo.inOut',
        borderRadius:"0%",
        // skewY:"0deg",
        x:0,
        y:0,
    },'-=1.9')
    menuTimeline.fromTo('#menu',{
        x:"-100%",
        y:"100%",
        borderRadius:"80%",
        // skewY:"50deg",
    },{
        duration: 3,
        ease: 'expo.inOut',
        borderRadius:"0%",
        // skewY:"0deg",
        x:0,
        y:0,
    },'-=2.2')

    menuTimeline.fromTo('.menuLink',{
        y:50,
        opacity:0,
        skewY:"-10deg",
        visibility:'hidden'
    },{
        duration:1,
        ease:'expo.inOut',
        y:0,
        skewY:"0deg",
        opacity:1,
        visibility:'visible',
        stagger:0.2
    },"-=1.2")
}


menuBtn.addEventListener('click',function(e){
    e.preventDefault();
    toggleMenuClass();
})


menuCloseBtn.addEventListener('click',function(e){
    e.preventDefault();
    menuTimeline.reverse();
    menuBtn.classList.toggle('menuOpen');

})

aboutMeBtn.addEventListener('click',function(e){
    e.preventDefault();
    menuTimeline.reverse();
    menuBtn.classList.toggle('menuOpen');

    gsap.to(window,{duration:3,scrollTo:'#me',ease:'expo.inOut'});
});
workBtn.addEventListener('click',function(e){
    e.preventDefault();
    menuTimeline.reverse();
    menuBtn.classList.toggle('menuOpen');

    gsap.to(window,{duration:3,scrollTo:'#work',ease:'expo.inOut'});
})
contactBtn.addEventListener('click',function(e){
    e.preventDefault();
    menuTimeline.reverse();
    menuBtn.classList.toggle('menuOpen');

    gsap.to(window,{duration:3,scrollTo:'#contact',ease:'expo.inOut'});
})
backToTopBtn.addEventListener('click',function(e){
    e.preventDefault();
    gsap.to(window,{duration:3,scrollTo:'#topNavigation',ease:'expo.inOut'});
})


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#workDisplay',
        start : "top 70%",
        end:'+=200',
        toggleActions:'play none none reverse'
    }
});
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#me',
        start : "top 70%",
        end:'+=200',
        toggleActions:'play none none reverse'
    }
});

tl.from('.workCard',{
    duration:1,
    opacity:0,
    ease:"power4.inOut",
    stagger:0.15,
})
// tl2.from('#aboutMe',{
//     duration:2,
//     delay:0.5,
//     opacity:0,
//     ease:"power4.inOut",
//     stagger:0.15,
// })