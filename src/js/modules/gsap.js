import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const toTopButton = document.getElementById("to-top-btn");

/*
  Lenis
*/

if (ScrollTrigger.isTouch) {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  toTopButton.addEventListener("click", toTop);
}

if (!ScrollTrigger.isTouch) {
  const lenis = new Lenis({
    duration: 1.5,
  });
  lenis.on("scroll", ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  toTopButton.addEventListener("click", () => {
    lenis.scrollTo("top", {
      duration: 3,
    });
  });
  // gsap.ticker.add(time => {
  //   lenis.raf(time * 1000);
  // });
  // gsap.ticker.lagSmoothing(0);
}

/*
  GSAP | ScrollTrigger
*/

// main-bg-gsap

const initialAnimationMainBg = gsap.timeline();
initialAnimationMainBg.from(".main-bg-gsap", {
  scale: 1.8,
  rotate: -15,
  duration: 2,
});

// main-title-hero

const initialAnimationMainTitle = gsap.timeline();
initialAnimationMainTitle.from(".main-title-gsap", {
  y: 100,
  opacity: 0,
  duration: 1,
});

const mainTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-title-gsap",
    start: "top 30%",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

mainTitle.to(".main-title-gsap", {
  y: -100,
});

// main-btns-hero
const initialAnimationMainBtns = gsap.timeline();
initialAnimationMainBtns.from(".main-btns-gsap", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

const mainBtns = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-btns-gsap",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

mainBtns.to(".main-btns-gsap", {
  y: -100,
});

// main-text-hero

const initialAnimationMainTextHero = gsap.timeline();
initialAnimationMainTextHero.fromTo(
  ".main-text-gsap",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
  },
  {
    y: 50,
    opacity: 1,
  },
);

const mainTextHero = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-text-gsap",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

mainTextHero.fromTo(
  ".main-text-gsap",
  {
    y: 50,
  },
  {
    y: -50,
    duration: 1,
    delay: 0.3,
  },
);

// objects-main-title-gsap

const objectsMainTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".objects-main-title-gsap",
    start: "top bottom",
    end: "bottom 30%",
    scrub: false,
    markers: false,
  },
});

objectsMainTitle.fromTo(
  ".objects-main-title-gsap",
  {
    x: -100,
  },
  {
    x: 0,
    y: -50,
  },
);

// objects-main-content-gsap

const objectsMainContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".objects-main-content-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

objectsMainContent.fromTo(
  ".objects-main-content-gsap",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    y: -100,
    opacity: 1,
  },
);

// principle-top-title-gsap

const principleTopTitleGsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".principle-top-title-gsap",
    start: "top bottom",
    end: "bottom 90%",
    scrub: false,
    markers: false,
  },
});

principleTopTitleGsap.fromTo(
  ".principle-top-title-gsap",
  {
    xPercent: -30,
    rotate: 10,
  },
  {
    y: -100,
    rotate: 0,
    xPercent: 0,
  },
);

// principle-top-title-gsap

const principleBottomTitleGsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".principle-bottom-title-gsap",
    start: "top bottom",
    end: "bottom 90%",
    scrub: false,
    markers: false,
  },
});

principleBottomTitleGsap.fromTo(
  ".principle-bottom-title-gsap",
  {
    xPercent: -30,
    rotate: 10,
  },
  {
    y: -100,
    rotate: 0,
    xPercent: 0,
  },
);

// principle-image-top-gsap

const principleImageTopGsap = gsap.timeline({
  scrollTrigger: {
    trigger: ".principle-image-top-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

principleImageTopGsap.fromTo(
  ".principle-image-top-gsap",
  {
    y: -200,
  },
  {
    y: 0,
  },
);

// principle-image-bottom-gsap

const principleImageBottom = gsap.timeline({
  scrollTrigger: {
    trigger: ".principle-image-bottom-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

principleImageBottom.fromTo(
  ".principle-image-bottom-gsap",
  {
    y: -150,
  },
  {
    y: -50,
  },
);

// principle-bottom-content-gsap

const principleBottomContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".principle-bottom-content-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

principleBottomContent.fromTo(
  ".principle-bottom-content-gsap",
  {
    y: -150,
  },
  {
    y: -50,
  },
);

// guarantee-item-gsap

const guaranteeItem = gsap.timeline({
  scrollTrigger: {
    trigger: ".guarantee-item-gsap",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true,
    markers: false,
  },
});

guaranteeItem.fromTo(
  ".guarantee-item-gsap",
  {
    y: 100,
  },
  {
    y: 0,
    stagger: 0.3,
    delay: 0.2,
  },
);

// guarantee-title-gsap

const guaranteeTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".guarantee-title-gsap",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

guaranteeTitle.fromTo(
  ".guarantee-title-gsap",
  {
    xPercent: -30,
    rotate: 10,
  },
  {
    rotate: 0,
    xPercent: 0,
  },
);

// guarantee-image-big-gsap

const guaranteeImageBig = gsap.timeline({
  scrollTrigger: {
    trigger: ".guarantee-image-big-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

guaranteeImageBig.fromTo(
  ".guarantee-image-big-gsap",
  {
    y: -100,
  },
  {
    y: 50,
  },
);

// guarantee-image-small-gsap

const guaranteeImageSmall = gsap.timeline({
  scrollTrigger: {
    trigger: ".guarantee-image-small-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});

guaranteeImageSmall.fromTo(
  ".guarantee-image-small-gsap",
  {
    y: 100,
  },
  {
    y: -50,
  },
);

// steps-title-gsap

const stepsTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".steps-title-gsap",
    start: "top bottom",
    end: "bottom 10%",
    scrub: false,
    markers: false,
  },
});

stepsTitle.fromTo(
  ".steps-title-gsap",
  {
    xPercent: -30,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
  },
);

// steps-text-gsap
const stepsText = gsap.timeline({
  scrollTrigger: {
    trigger: ".steps-text-gsap",
    start: "top bottom",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

stepsText.fromTo(
  ".steps-text-gsap",
  {
    y: 100,
  },
  {
    y: 0,
    stagger: 0.3,
    delay: 0.2,
  },
);

/*
  single page
*/

const singleToTopEls = gsap.utils.toArray(".single-to-top-gsap");
const singleToBottomEls = gsap.utils.toArray(".single-to-bottom-gsap");
const leftSlide = gsap.utils.toArray(".left-slide-gsap");
const rightSlide = gsap.utils.toArray(".right-slide-gsap");
const zoomInEls = gsap.utils.toArray(".zoom-in-gsap");
const zoomOutEls = gsap.utils.toArray(".zoom-out-gsap");

singleToTopEls.forEach(el => {
  gsap.fromTo(
    el,
    {
      y: 60,
    },
    {
      y: 0,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

singleToBottomEls.forEach(el => {
  gsap.fromTo(
    el,
    {
      y: 0,
    },
    {
      y: 60,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

// single-zoom-gsap

zoomOutEls.forEach(el => {
  gsap.fromTo(
    el,
    {
      scale: 1.4,
    },
    {
      scale: 1,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

zoomInEls.forEach(el => {
  gsap.fromTo(
    el,
    {
      scale: 1,
    },
    {
      scale: 1.4,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

leftSlide.forEach(el => {
  gsap.fromTo(
    el,
    {
      x: -150,
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

rightSlide.forEach(el => {
  gsap.fromTo(
    el,
    {
      x: 150,
    },
    {
      x: 0,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});

// info-buildings-gsap

// info-buildings-gsap

gsap.fromTo(
  ".info-buildings-gsap",
  {
    y: 50,
  },
  {
    y: 0,
    stagger: 0.3,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".info-buildings-gsap",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
  },
);

gsap.fromTo(
  ".info-gsap-logo",
  {
    y: 300,
    x: -300,
  },
  {
    y: 0,
    x: 0,

  },
);

gsap.fromTo(
  ".info-gsap-text",
  {
    y: 700,
    x: -700,
  },
  {
    delay: 0.3,
    y: 0,
    x: 0,
  },
);

gsap.fromTo(
  ".info-gsap-image-bg",
  {
    x: 700,
  },
  {
    x: 0,
    delay: 0.3,
  },
);

gsap.fromTo(
  ".info-gsap-image-main",
  {
    x: 700,
  },
  {
   
    x: 0,
  },
);
