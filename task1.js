let t1 = gsap.timeline();

t1.from("#nav-left",{
    y:40,
    duration:1,
    delay:1,
    opacity:0,
    
   
})
t1.from("#nav-center",{
    y:-60,
    scale:0,
    duration:0.5,
    opacity:0,
})
t1.from("#nav-right",{
    // rotate:360,
    opacity:0,
    duration:0.5,
    // trigger:0.5
})
t1.from("#hero-sec1",{
    opacity:0,
    duration:0.8,
    scale:0,
     
})
t1.from("#line1",{
    x:-60,
    duration:1
})
gsap.from("#line2",{
    x:-600,
    duration:1,
    opacity:0,
    scrollTrigger:"#hero2"
})
t1.from("#getstart",{
    x:-60,
    duration:1,
    opacity:0
})
gsap.from("#hero2",{
    x: -1660,
    duration:2,
    rotate:90,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#hero2",
        start:"top 100%",
        end:"top 80%",
        markers:false,
        scrub:4
    }
})
gsap.from("#hero3",{
    x: 1660,
    duration:2,
    rotate:90,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#hero3",
        start:"top 100%",
        end:"top 80%",
        markers:false,
        scrub:4
    }
})
gsap.from("#hero4",{
    x: -1660,
    duration:2,
    rotate:360,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#hero4",
        start:"top 100%",
        end:"top 80%",
        markers:false,
        scrub:4
    }
})
gsap.from("#",{
    y:60,
    duration:2,
    // rotate:360,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#contact",
        start:"top 100%",
        end:"top 80%",
        markers:false,
        scrub:4
    }
})
gsap.from("#cnt-right-1",{
    x:500,
    duration2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#cnt-right-1",
        start:"top 100%",
        end:"top 80%",
        markers:false,
        scrub:4
    }
})

// let image = document.querySelector("#hr2-image")
    
// image.addEventListener("mouseenter",function(){
//     image.style.display = "none"
// })