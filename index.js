gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const windowWidth = document.documentElement.clientWidth;

const word = "FullstackDeveloper";
const chars = word.split("");
const titleWrapRef = document.querySelector(".position-wrap");

(() => {
  const markup = chars.map(
    (char, index) => `<p class="main-text char${index + 1}">${char}</p>`
  );
  titleWrapRef.insertAdjacentHTML("beforeend", markup.join(""));
})();

// if (ScrollTrigger.isTouch !== 1) {
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

gsap.fromTo(
  ".hero-section",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "center",
      end: "900",
      scrub: true,
    },
  }
);

let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

if (windowWidth < 480) {
  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-1300",
          end: "-900",
          scrub: true,
        },
      }
    );
  });
} else {
  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-1150",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}

let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

if (windowWidth < 480) {
  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-1300",
          end: "-900",
          scrub: true,
        },
      }
    );
  });
} else {
  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
// }
