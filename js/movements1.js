console.log("test");
console.log(window.innerWidth);
let phonePositionX = 300;
let mobileInterior = 1640;
let phoneBorderLastPosition = -400;
let duration = 4000;
let appleMenuY = -240;
let phonePositionY = 3650;
let flightPath1 = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 200, y: 100},
        {x: 250, y: 150},
        {x: 300, y: 200},
        {x: 500, y: 400},
        {x: 850, y: 320},
        {x: 900, y: 250},
        {x: 850, y: 150},
        {x: 200, y: 320},
        {x: 300, y: 800},
        {x: 400, y: 810},
        {x: 450, y: 810},
    ]
}
if(window.innerWidth < 800){
    phonePositionY = 3100;
    duration = 3500;
    phoneBorderLastPosition = -230;
    mobileInterior = 1150;
    phonePositionX = 100;
    if(window.innerWidth <= 330){
        appleMenuY = -215;
        phonePositionX = -10;
        mobileInterior = 735;
        phoneBorderLastPosition = -180;
    }
    else if(window.innerWidth <= 380){
        appleMenuY = -215;
        phonePositionX = -10;
        mobileInterior = 865;
        phoneBorderLastPosition = -180;
    }
    else if(window.innerWidth <= 450){
        phonePositionX = -10;
        mobileInterior = 935;
        phoneBorderLastPosition = -180;
    }
    else if(window.innerWidth <= 550){
        phonePositionX = -10;
        mobileInterior = 1020;
        phoneBorderLastPosition = -180;
    }
    else if(window.innerWidth < 750){
        phonePositionX = 50;
    }



    console.log(phonePositionX);
    flightPath1 = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100, y: 300},
            {x: 150, y: 350},
            {x: 200, y: 400},
            {x: 400, y: 600},
            {x: 750, y: 520},
            {x: 800, y: 450},
            {x: 750, y: 350},
            {x: 100, y: 520},
            {x: 150, y: 1000},
            {x: 250, y: 1040}
        ]
    }
    
    if(window.innerWidth < 425 && window.innerWidth > 420){
        flightPath1 = {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x: 100, y: 300},
                {x: 120, y: 400},
                {x: 150, y: 500},
                {x: 200, y: 620},
                {x: 300, y: 600},
                {x: 320, y: 430},
                {x: 250, y: 470},
                {x: 200, y: 600},
                {x: 170, y: 620},
                {x: 150, y: 640},
                {x: 97, y: 920}
            ]
        }
    }

}
else if(window.innerWidth < 1050){

    phoneBorderLastPosition = -320;
    mobileInterior = 1340;
    phonePositionX = 180;
    flightPath1 = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100, y: 300},
            {x: 150, y: 350},
            {x: 200, y: 400},
            {x: 400, y: 600},
            {x: 750, y: 520},
            {x: 800, y: 450},
            {x: 750, y: 350},
            {x: 100, y: 520},
            {x: 200, y: 1000},
            {x: 300, y: 1040}
        ]
    }
    if(window.innerWidth < 900){
        phonePositionX = 125;

        flightPath1 = {
            curviness: 1.25,
            autoRotate: true,
            values: [
                {x: 100, y: 300},
                {x: 150, y: 350},
                {x: 200, y: 400},
                {x: 400, y: 600},
                {x: 750, y: 520},
                {x: 800, y: 450},
                {x: 750, y: 350},
                {x: 100, y: 520},
                {x: 150, y: 1000},
                {x: 250, y: 1040}
            ]
        }
    }

}
else if(window.innerWidth< 1199){
    phonePositionX = 200;

    let phoneBorder = document.querySelector(".phone-border");
    phoneBorder.style.transform = "translateX(-150px);";
    mobileInterior = 1485;
    
    flightPath1 = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100, y: 300},
            {x: 150, y: 350},
            {x: 200, y: 500},
            {x: 400, y: 600},
            {x: 750, y: 520},
            {x: 800, y: 450},
            {x: 750, y: 350},
            {x: 100, y: 520},
            {x: 200, y: 1000},
            {x: 300, y: 1050},
            {x: 350, y: 1050},
        ]
    }
}



const tween1 = new TimelineLite();


tween1.add(
    TweenLite.to('.header-center-animated-container', 350 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1,
    })
)
tween1.add(
    TweenLite.to('.header-center-animated-container', 350 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 0,
    })
)
tween1.add(
    TweenLite.to('#apple-menu', 200 ,{
        // width: "760px"    ,
        transform: `translateY(${appleMenuY}px)`
        // bottom: "-200vh"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#rectangle', 1000 ,{
        bezier: flightPath1,
        // ease: Power1.easeInOut,
        // opacity: 1,
    })
)
tween1.add(
    TweenLite.to('#rectangle', 50 ,{
        // bezier: flightPath1,
        // ease: Power1.easeInOut,
        opacity: 0,
    })
)
tween1.add(
    TweenLite.to('#chrome', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#chrome', 70,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#facebook', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#facebook', 70,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#gmail', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#gmail',70 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#speed', 70,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#speed', 200,{
        // width: "760px"    ,
        transform: "translateY(-35px) scale(3.5)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#apple-menu', 100 ,{
        // width: "760px"    ,
        transform: "translateY(240px)"
        // bottom: "-200vh"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('.smartphone-img', 100 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "scale(1)"
    })
)

tween1.add(

    TweenLite.to('.mobile-interior', 10 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        width: `${mobileInterior}px`,
    })
)
tween1.add(
    TweenLite.to('.phone-border', 500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: `translateY(1800px) translateX(${phoneBorderLastPosition}px) scale(0.3)`
    })
)

tween1.add(
    TweenLite.to('.speedtestBCK', 500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1
    })
)
tween1.add(
    TweenLite.to('.mobile-interior', 100 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        background: "none",
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-paragraph', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-paragraph', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header-second', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-second', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.youtubeBCK', 400 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1
    })
)
tween1.add(
    TweenLite.to('.speedtestBCK', 400 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 0
    })
)

tween1.add(
    TweenLite.to('.phone-border', 1500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: `translateY(${phonePositionY}px) translateX(${phonePositionX}px) scale(0.3)`
    })
)



tween1.add(
    TweenLite.to('.phone-animated-header-benefit', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-1', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-1', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header-benefit-2', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-2', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)


const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '#phone-trigger',
    duration: duration,
    triggerHook: 0.2 

})
.setTween(tween1)
// .addIndicators()
.setPin('#phone-trigger')
.addTo(controller1)