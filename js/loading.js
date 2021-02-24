const loaderContainer = document.getElementsByClassName("loader-container")[0];
const cls1 = document.getElementsByClassName("cls-1");
let movingElement1 = document.getElementById("moving-1");
let movingElement2 = document.getElementById("moving-2");
let movingElement3 = document.getElementById("moving-3");
const rectangleForHide = document.getElementById("rectangle");
const appleMenu = document.getElementById("apple-menu");
const chromeIcon = document.getElementById("chrome");
const loaderContainerReset = document.querySelector(".loader-container")
// const body = document.getElementsByTagName("body");
// Loading 

// ****************************************************************
// DISABLE SCROLL UNTIL LOAD

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
//  call this to enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

disableScroll()
// ***********************************************************

window.onload = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


    loaderContainer.style.animationName = "darking";
    movingElement1.style.animationName = "glow";
    movingElement1.style.animationDirection = "alternate";
    movingElement2.style.animationName = "glow";
    movingElement2.style.animationDirection = "alternate";
    movingElement3.style.animationName = "glow";
    movingElement3.style.animationDirection = "alternate";
    // document.getElementById("particles-js").style.backgroundColor = "#000";
    // 
    for (let i = 0; i < cls1.length; i++) {
        cls1[i].style.animationName = "get-blue";
    }
    enableScroll()
}

window.addEventListener("scroll", () => {
    // if (window.scrollY > 1000) {
    //     appleMenu.style.bottom = "30px"
    // }
    // else if (window.scrollY < 1000) {
    //     appleMenu.style.bottom = "-150px"
    // }

    if (window.scrollY < 1) {
        loaderContainerReset.innerHTML = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
        <defs>
        </defs>
        <path class="cls-1" style="fill:#32b7e1"
            d="M148.18,369.64a26.11,26.11,0,0,1,11.34,10.47,35.07,35.07,0,0,1,0,32.34A26,26,0,0,1,148.18,423a38.85,38.85,0,0,1-17.36,3.65H113.5v24.61H99.26V366h31.56A38.71,38.71,0,0,1,148.18,369.64Zm-3.89,39.22q4.83-4.39,4.82-12.55t-4.82-12.54q-4.81-4.39-14.13-4.39H113.5v33.86h16.66Q139.48,413.24,144.29,408.86Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M186.48,447.84A29.51,29.51,0,0,1,175.36,436a39,39,0,0,1,0-34.41,29.58,29.58,0,0,1,11.12-11.81,32.3,32.3,0,0,1,32.1,0,29.67,29.67,0,0,1,11.13,11.81,39.09,39.09,0,0,1,0,34.41,29.6,29.6,0,0,1-11.13,11.88,32.36,32.36,0,0,1-32.1,0ZM215,433.46q4.92-5.59,4.93-14.74T215,404A16.65,16.65,0,0,0,190,404q-4.87,5.6-4.88,14.73T190,433.46a16.65,16.65,0,0,0,24.93,0Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M280.71,385.47V400a15.32,15.32,0,0,0-3.18-.37q-8,0-12.49,5.18t-4.49,14.92v31.55h-13.7V386.2h13v9.5Q265.81,385.47,280.71,385.47Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M329.69,447.71a15.49,15.49,0,0,1-5.86,3.29,24.05,24.05,0,0,1-7.29,1.1q-9.65,0-14.9-5.6t-5.26-16.33v-31.3h-9.64V386.69h9.64V371.83h13.69v14.86h15.67v12.18H310.07v30.94c0,3.17.7,5.58,2.09,7.25a7.39,7.39,0,0,0,6,2.49,11.21,11.21,0,0,0,7.67-2.68Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M354.67,382.79v3.9h16.11v12.18H355.11v52.38h-13.7V398.87h-9.64V386.69h9.64v-4.14q0-10.47,5.48-16.51t15.45-6q7.89,0,12.38,3.54L370.89,375a12.2,12.2,0,0,0-7.56-2.68Q354.68,372.32,354.67,382.79ZM380,360.87h13.7v90.38H380Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M412.3,372.87a9.69,9.69,0,0,1,0-13,8.36,8.36,0,0,1,6.25-2.62,8.58,8.58,0,0,1,8.77,8.77,9.75,9.75,0,0,1-2.47,6.76,8.08,8.08,0,0,1-6.3,2.74A8.35,8.35,0,0,1,412.3,372.87Zm-.65,13.33h13.69v65.05H411.65Z" />
        <path class="cls-1" style="fill:#32b7e1"
            d="M480.57,451.25l-15-22.54-15.12,22.54H435.31l22.79-33-21.8-32h15.23l14.35,21.32,14.36-21.32H495L473.12,418,496,451.25Z" />
        <path id="moving-1" class="cls-1" style="fill:#32b7e1"
            d="M428,466.64H416.22a4.85,4.85,0,0,0-4.85,4.85v8.34a4.85,4.85,0,0,0,4.85,4.85H428a4.85,4.85,0,0,0,4.85-4.85v-8.34A4.85,4.85,0,0,0,428,466.64Zm1.35,11.91a3.19,3.19,0,0,1-3.18,3.18h-8.07a3.18,3.18,0,0,1-3.18-3.18v-5.78a3.18,3.18,0,0,1,3.18-3.18h8.07a3.18,3.18,0,0,1,3.18,3.18Z" />
        <path id="moving-2" class="cls-1" style="fill:#32b7e1"
            d="M459.56,466.64H447.82a4.85,4.85,0,0,0-4.85,4.85v8.34a4.85,4.85,0,0,0,4.85,4.85h11.74a4.85,4.85,0,0,0,4.85-4.85v-8.34A4.85,4.85,0,0,0,459.56,466.64Zm1.34,11.91a3.18,3.18,0,0,1-3.18,3.18h-8.06a3.18,3.18,0,0,1-3.18-3.18v-5.78a3.18,3.18,0,0,1,3.18-3.18h8.06a3.18,3.18,0,0,1,3.18,3.18Z" />
        <path id="moving-3" class="cls-1" style="fill:#32b7e1"
            d="M491.17,466.64H479.43a4.85,4.85,0,0,0-4.85,4.85v8.34a4.85,4.85,0,0,0,4.85,4.85h11.74a4.85,4.85,0,0,0,4.85-4.85v-8.34A4.85,4.85,0,0,0,491.17,466.64Zm1.34,11.91a3.18,3.18,0,0,1-3.18,3.18h-8.06a3.18,3.18,0,0,1-3.18-3.18v-5.78a3.18,3.18,0,0,1,3.18-3.18h8.06a3.18,3.18,0,0,1,3.18,3.18Z" />
        </svg>`;
        movingElement1 = document.getElementById("moving-1");
        movingElement2 = document.getElementById("moving-2");
        movingElement3 = document.getElementById("moving-3");
        movingElement1.style.animationName = "glow";
        movingElement1.style.animationDirection = "alternate";
        movingElement2.style.animationName = "glow";
        movingElement2.style.animationDirection = "alternate";
        movingElement3.style.animationName = "glow";
        movingElement3.style.animationDirection = "alternate";

        beginAnimation()
    }

}
)