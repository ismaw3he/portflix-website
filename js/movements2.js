// const flightPath1 = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 200, y: 400},
//         {x: 250, y: 450},
//         {x: 300, y: 500},
//         {x: 500, y: 700},
//         {x: 850, y: 620},
//         {x: 900, y: 550},
//         {x: 850, y: 450},
//         {x: 200, y: 620},
//         {x: 300, y: 1190},
//         {x: 400, y: 1290},
//     ]
// }

const tween2 = new TimelineLite();


// tween2.add(
//     TweenLite.to('.contact-header',400 ,{
//         opacity: 1,
//         transform: "translateY(-200px)"
//     },0)
// )
// tween2.add(
//     TweenLite.to('.contact-header',400 ,{
//         opacity: 0,
//         transform: "translateY(-600px)"
//     },0)
// )

tween2.add(
    TweenLite.to('.contact-header-fixed',100 ,{
        opacity: 1
    },0)
)
// tween2.add(
//     TweenLite.to('.contact-cards-container',400 ,{
//         opacity: 1,
//         transform: "translateY(0px)"
//     },0)
// )
tween2.add(
    TweenLite.to('#canvas-container',150 ,{
        opacity: 0
    },0)
)
tween2.add(
    TweenLite.to('#hero-lightpass',150 ,{
        opacity: 0,
        // display: "block"
    },0)
)
tween2.add(
    TweenLite.to('.section-tv',150 ,{
        // opacity: 0,
        zIndex: "-1"
        // display: "block"
    },0)
)
tween2.add(
    TweenLite.to('.contact-info',200 ,{
        opacity: 1,
        transform: "translateX(0px)"
    },0)
)

tween2.add(
    TweenLite.to('.contact-form',200 ,{
        opacity: 1,
        transform: "translateX(0px)"
    },0)
)
const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '#contact-trigger',
    duration: 700,
    triggerHook: 1

})
.setTween(tween2)
// .addIndicators()
// .setPin('#contact-trigger')
.addTo(controller2)