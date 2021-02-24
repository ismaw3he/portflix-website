// const flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 20, y: 50},
//         {x: 50, y: 150},
//         {x: -200, y: 200},
//         {x: -300, y: 200},
//         {x: -450, y: 320},
//         {x: -550, y: 320},
//         {x: -650, y: 320},
//         {x: -850, y: 320}
//     ]
// }
const flightPath2 = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: 400},
        {x: 150, y: 450},
        {x: 200, y: 500},
        {x: 400, y: 700},
        {x: 650, y: 720},
        {x: 700, y: 650},
        {x: 650, y: 550},
        {x: 100, y: 720},
        {x: 200, y: 1190},
        {x: 300, y: 1290},
        {x: 400, y: 1390},
        // {x: 450, y: 1190},
        // {x: 490, y: 1190},
        // {x: 510, y: 1190},
        // {x: 530, y: 1190},
        // {x: 550, y: 1190},
        // {x: 580, y: 1190},
        // {x: 600, y: 1190},
        // {x: 620, y: 1190}
    ]
}
const tween5 = new TimelineLite();

tween5.add(
    TweenLite.to('#rectangle', 100 ,{
        bezier: flightPath2,
        ease: Power1.easeInOut
    })
)
tween5.add(
    TweenLite.to('#rectangle', 2 ,{
        opacity: 0,
        border: "none"
    })
)
tween5.add(
    TweenLite.to('#apple-menu', 5 ,{
        // width: "760px"    ,
        // transform: "translateY(-150px)"
        position: "fixed",
        bottom: "35px"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#chrome', 5 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#chrome', 5,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#facebook', 5 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#facebook', 5,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#gmail', 5 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#gmail',5 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#speed', 5 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#speed', 5,{
        // width: "760px"    ,
        transform: "translateY(-35px) scale(3.5)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#apple-menu',5 ,{
        // width: "760px"    ,
        // transform: "translateY(200px)"
        position: "fixed",
        bottom: "-150px"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('.box', 0.5 ,{
        display: "none"
    },0)
)
tween5.add(
    TweenLite.to('.animation', 5 ,{
        width: "730px",
        left: "0",
        height: "1450px"
    },0)
)
tween5.add(
    TweenLite.to('#apple-menu', 1 ,{
        // display: "none",
        opacity: "0"
    })
)
tween5.add(
    TweenLite.to('.frame', 0.3 ,{
        width: "760px"    ,
        backgroundImage: 'url("../img/smartphone.png")  '
    },0)
)
tween5.add(
    TweenLite.to('.speed-test-container', 1.2 ,{
        display: "flex"
    })
)
tween5.add(
    TweenLite.to('.mobile-cover', 1.7 ,{
        // bezier: flightPath,
        // ease: Power1.easeInOut
        // height: "100vh"
        transform: "translateY(1350px) translateX(-200px) scale(0.5)"
    })
)
tween5.add(
    TweenLite.to('.animation', 6 ,{
        background: "none"
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-header', 25 ,{
        opacity: 1,
        // transform: "translateY(100px)"
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-header', 25 ,{
        opacity: 0,
        transform: "translateY(-100px)"
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-paragraph', 25 ,{
        opacity: 1,
        transform: "translateY(0px)"
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-paragraph',25 ,{
        opacity: 0,
        transform: "translateY(-100px)"
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-header-second', 30 ,{
        opacity: 1
    },0)
)
tween5.add(
    TweenLite.to('.animating-text-container-header-second',25 ,{
        opacity: 0,
        transform: "translateY(100px)"
    },0)
)
tween5.add(
    TweenLite.to('.speed-image', 0.1,{
        src: "./img/speedtestBCKUP.png"
    })
)
tween5.add(
    TweenLite.to('.mobile-cover', 40,{
        transform: "translateY(2500px) translateX(500px) scale(0.5)"
    })
)






tween5.add(
    TweenLite.to('.animation-text-header', 15 ,{
        opacity: 1,
        // transform: "translateY(100px)"
    },0)
)
tween5.add(
    TweenLite.to('.animation-text-header', 15 ,{
        opacity: 0,
        transform: "translateY(-400px)"
    },0)
)
tween5.add(
    TweenLite.to('.animation-text-header-1', 15 ,{
        opacity: 1,
        transform: "translateY(-200px)"
    },0)
)
tween5.add(
    TweenLite.to('.animation-text-header-1',15 ,{
        opacity: 0,
        transform: "translateY(-350px)"
    },0)
)
tween5.add(
    TweenLite.to('.animation-text-header-2', 15 ,{
        opacity: 1,
        transform: "translateY(-70px)"
    },0)
)
tween5.add(
    TweenLite.to('.animation-text-header-2',35 ,{
        opacity: 0,
        transform: "translateY(-150px)"
    },0)
)

const controller5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
    triggerElement: '#mobile-trigger',
    duration: 3000,
    triggerHook: 0.9 

})
.setTween(tween5)
// .addIndicators()
// .setPin('#mobile-trigger')
.addTo(controller5)