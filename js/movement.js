const beginAnimation = () =>{
    const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 20, y: 50},
            {x: 50, y: 150},
            {x: -200, y: 200},
            {x: -300, y: 200},
            {x: -450, y: 320},
            {x: -550, y: 320},
            {x: -650, y: 320},
            {x: -850, y: 320},
            {x: -950, y: 320},
            {x: -1150, y: 320}
        ]
    }
    
    const tween = new TimelineLite();
    
    tween.add(
        TweenLite.to('#moving-3', 1 ,{
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    )
    
    const controller = new ScrollMagic.Controller();
    
    const scene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        // animasia muddeti
        duration: 650,
        // triggerin yeri y axis
        triggerHook: 0  
    
    })
    .setTween(tween)
    // .addIndicators()
    // .setPin('.animation')
    .addTo(controller)
}



beginAnimation();