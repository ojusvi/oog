function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./00001.png
     ./00002.png
     ./00003.png
     ./00004.png
     ./00005.png
     ./00006.png
     ./00007.png
     ./00008.png
     ./00009.png
     ./00010.png
     ./00011.png
     ./00012.png
     ./00013.png
     ./00014.png
     ./00015.png
     ./00016.png
     ./00017.png
     ./00018.png
     ./00019.png
     ./00020.png
     ./00021.png
     ./00022.png
     ./00023.png
     ./00024.png
     ./00025.png
     ./00026.png
     ./00027.png
     ./00028.png
     ./00029.png
     ./00030.png
     ./00031.png
     ./00032.png
     ./00033.png
     ./00034.png
     ./00035.png
     ./00036.png
     ./00037.png
     ./00038.png
     ./00039.png
     ./00040.png
     ./00041.png
     ./00042.png
     ./00043.png
     ./00044.png
     ./00045.png
     ./00046.png
     ./00047.png
     ./00048.png
     ./00049.png
     ./00050.png
     ./00051.png
     ./00052.png
     ./00053.png
     ./00054.png
     ./00055.png
     ./00056.png
     ./00057.png
     ./00058.png
     ./00059.png
     ./00060.png
     ./00061.png
     ./00062.png
     ./00063.png
     ./00064.png
     ./00065.png
     ./00066.png
     ./00067.png
     ./00068.png
     ./00069.png
     ./00070.png
     ./00071.png
     ./00072.png
     ./00073.png
     ./00074.png
     ./00075.png
     ./00076.png
     ./00077.png
     ./00078.png
     ./00079.png
     ./00080.png
     ./00081.png
     ./00082.png
     ./00083.png
     ./00084.png
     ./00085.png
     ./00086.png
     ./00087.png
     ./00088.png
     ./00089.png
     ./00090.png
 `;
  return data.split("\n")[index];
}

const frameCount = 90;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})