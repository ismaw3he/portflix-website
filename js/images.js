const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const container = document.getElementById("canvas-container");

const frameCount = 38;
const currentFrame = index => (
  `./img/img-sequence/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};


const img = new Image()
img.src = currentFrame(1);
canvas.width=1741;
canvas.height=979;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  // console.log(index)
  if(index === 38 || index < 3){
    container.style.opacity = "0"
  }
  else if(index <= 38){
    container.style.opacity = "1"
  }
  img.src = currentFrame(index);
  // console.log(img.src);
  context.drawImage(img, 0, 0, 1741, 979, 0 , 0 , 1741, 979);
}

window.addEventListener('scroll', () => {  
  let scrollTop = container.getBoundingClientRect().top;
  // console.log(scrollTop)
  if(scrollTop < 0){
    scrollTop = Math.abs(scrollTop);
    // console.log(scrollTop);
  
    const maxScrollTop =   window.innerHeight;
    // console.log(maxScrollTop);
    // console.log(window);
    // console.log(getCoords(container).top)
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    console.log(scrollFraction)
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  }

});

preloadImages()