const controllers = document.getElementsByClassName("controller");
const apps = document.getElementsByClassName("apps");


TweenLite.defaultEase = Linear.easeNone;
let controller4 = new ScrollMagic.Controller();


for (let i = 0; i < controllers.length; i++) {
    let target = apps[i]
    let tl = new TimelineMax();

    tl.from(
        target,
        0.25,
        {
            transform: "translateY(0px)"
        }
    );
    tl.to(
        target,
        0.25,
        {
            transform: "translateY(-15px)"
        },
        0.75
    );
    if(i>0){
        tl.from(
            apps[i-1],
            0.25,
            {
                transform: "translateY(-15px)"
            }
        );
        tl.to(
            apps[i-1],
            0.25,
            {
                transform: "translateY(0px)"
            },
            0.75
        );
    }

    new ScrollMagic.Scene({
        triggerElement: controllers[i], 
        triggerHook: 1,
        duration: '80'
    })
        .setPin(controllers[i])
        .setTween(tl)
        // .addIndicators()
        .addTo(controller4);
}
