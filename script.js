var tl = gsap.timeline()
tl.from('#nav h1',{
    y: -50,
    opacity: 0,
    // delay: 0.4,
    duration: 0.0, 
    stagger: 0.3
})
tl.from('#nav ',{
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.2, 
    stagger: 0.3
})
tl.from('#main h2', {
    x: -500,
    delay: 0.5,
    opacity:0,
    duration: 0.2, 
    stagger: 0.4
})

