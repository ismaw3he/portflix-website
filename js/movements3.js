const sections = document.getElementsByClassName("section");

TweenLite.defaultEase = Linear.easeNone;
let controller3 = new ScrollMagic.Controller();


for (let i = 0; i < sections.length; i++) {
    let target = sections[i].childNodes[1]
    let tl = new TimelineMax();

    tl.from(
        target,
        0.25,
        {
            opacity: 0,
            transform: "translateY(100px)"
        }
    );
    tl.to(
        target,
        0.25,
        {
            opacity: 0,
            transform: "translateY(-100px)"
        },
        0.75
    );

    new ScrollMagic.Scene({
        triggerElement: sections[i],
        triggerHook: 0.2,
        duration: '600'
    })
        .setPin(sections[i])
        .setTween(tl)
        // .addIndicators()
        .addTo(controller3);
}
