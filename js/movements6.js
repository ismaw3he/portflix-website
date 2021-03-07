const tween6 = new TimelineLite();
let tvSize = 650;
let tvTop = -50;
let tvHeight = 500;
let tvElement = document.querySelector(".tv-img")
let tvSectionElement = document.querySelector(".section-tv")
const tv = document.querySelector(".tv-border");
let winter = document.querySelector(".winter-img")
let tvAfter = 500;
if(window.innerHeight < 930){
    tvAfter = 300;
}



if(window.innerWidth < 350){
    tvHeight = 160
}
else if (window.innerWidth < 400){
    tvHeight = 188;
}
else if (window.innerWidth < 500){
    tvHeight = 221;
}
else if (window.innerWidth < 600){
    tvHeight = 275;
}
else if (window.innerWidth < 1200){
    tvHeight = 335;
}
else if (window.innerWidth < 1400){
    tvHeight = 380;
}
console.log(tv.getBoundingClientRect().top);
console.log(tvSectionElement.getBoundingClientRect().top);
console.log(Math.round(tvSectionElement.getBoundingClientRect().top - tv.getBoundingClientRect().top) );
console.log(winter.getBoundingClientRect());
// console.log(winter.height);
// if(window.innerWidth < 500){
//     tvHeight = 250;
// }
// else if(window.innerWidth < 800){
//     tvSize = 550;
//     tvTop = -130;
// }
// else if(window.innerWidth < 900){
//     tvSize = 550;
//     tvTop = -100;
// }
// else if(window.innerWidth < 1200){
//     tvSize = 550;
// }

if(window.innerHeight < window.innerWidth){
    tv.style.transform = `translateY(${Math.round(tvSectionElement.getBoundingClientRect().top - tv.getBoundingClientRect().top) / 2}px) scale(${Math.round(window.innerWidth / tvSize)})`
    console.log("width");
}
else{
    console.log("height");
    tv.style.transform = `translateY(${Math.round(tvSectionElement.getBoundingClientRect().top - tv.getBoundingClientRect().top) / 2}px) scale(${window.innerHeight / tvHeight})`
}
// tv.style.transform = `translateY(${tvTop}px) scale(${window.innerWidth / tvSize})`

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
        transform: `translateY(${tvAfter}px) scale(1)`
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
        transform: "translateY(350px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2',100 ,{
        opacity: 0,
        transform: "translateY(300px)"
    },0)
)

tween6.add(
    TweenLite.to('#canvas-container',300 ,{
        opacity: 1
    },0)
)
tween6.add(
    TweenLite.to('#hero-lightpass',300 ,{
        opacity: 1,
        // display: "block"
    },0)
)
tween6.add(
    TweenLite.to('#canvas-container',100 ,{
        // opacity: 0
        // wait
    },0)
)
tween6.add(
    TweenLite.to('#canvas-container',400 ,{
        opacity: 0
    },0)
)
tween6.add(
    TweenLite.to('#hero-lightpass',400 ,{
        opacity: 0,
        // display: "block"
    },0)
)
const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: '#tv-trigger',
    duration: 2400,
    triggerHook: 0

})
.setTween(tween6)
// .addIndicators()
// .setPin('#tv-trigger')
.addTo(controller6)