
gsap.from("main",{
    duration :3,
    opacity : 0,
    skewY : "10deg",
    x:"100px",
    y:"-50px",
    delay: 2,
    ease : "expo.inOut"
})


let menuBtn = document.querySelector('#navLink');
menuBtn.addEventListener('click',function(e){
    e.preventDefault();
    let tl = gsap.timeline({});
    tl.to('#menu-f1',{
        duration: 3,
        ease: 'expo.inOut',
        x:0,
    })
    tl.to('#menu-f2',{
        duration: 3.5,
        ease: 'expo.inOut',
        x:0,
    },"-=2.6")
    tl.fromTo('#menu',{
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
    },'-=2.8')

})