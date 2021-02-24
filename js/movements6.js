
const tween6 = new TimelineLite();
let tvSize = 650;
let tvTop = -50;
if(window.innerWidth < 800){
    tvSize = 550;
    tvTop = -130;
}
else if(window.innerWidth < 900){
    tvSize = 550;
    tvTop = -100;
}
else if(window.innerWidth < 1200){
    tvSize = 550;
}

const tv = document.querySelector(".tv-border");
tv.style.transform = `translateY(${tvTop}px) scale(${window.innerWidth / tvSize})`
// tween6.add(
//     TweenLite.to('.winter-img', 1 ,{
//         // bezier: flightPath6,
//         // ease: Power1.easeInOut,
//         backgroundAttachment: "scroll",
//         // backgroundSize: "1620px 900px"
//     })
// )
tween6.add(
    TweenLite.to('.tv-border', 250 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "translateY(500px) scale(1)"
    })
)

tween6.add(
    TweenLite.to('.tv-text-header', 100 ,{
        opacity: 1,
        transform: "translateY(-150px)"
    },0)
)
tween6.add(
    TweenLite.to('.tv-text-header',100 ,{
        opacity: 0,
        transform: "translateY(-300px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2', 100 ,{
        opacity: 1,
        transform: "translateY(300px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2',100 ,{
        opacity: 0,
        transform: "translateY(250px)"
    },0)
)

tween6.add(
    TweenLite.to('#canvas-container',20 ,{
        opacity: 1
    },0)
)
tween6.add(
    TweenLite.to('#hero-lightpass',200 ,{
        opacity: 1,
        display: "block"
    },0)
)


const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: '#tv-trigger',
    duration: 1300,
    triggerHook: 0

})
.setTween(tween6)
// .addIndicators()
// .setPin('#tv-trigger')
.addTo(controller6)

