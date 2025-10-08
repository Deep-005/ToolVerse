function timeLime(){
    var tl = gsap.timeline()
    tl.from("#loader h2",{
        x:50,
        opacity:0,
        duration:1,
        stagger:0.3
    })
    
    tl.to("#loader h2",{
        opacity:0,
        x:-50,
        duration:1,
        stagger:0.2
    })
    
    tl.to("#loader",{
        opacity:0,
        duration:3
    })

    tl.to("#loader",{
        display:"none"
    })
    
    tl.from("main h1 span",{
        y:100,
        opacity:0,
        stagger:0.1, 
        delay:-2,
        duration:1 
    } )

    tl.from("main h3 span",{
        y:100,
        opacity:0,
        stagger:0.1, 
        delay:-2,
        duration:1 
    } )
} timeLime()


