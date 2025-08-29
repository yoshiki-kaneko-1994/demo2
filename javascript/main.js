"use strict";

// headerのハンバーガーメニュー(max-width: 1000px以下時)
{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  function styleItem(
    element1,
    element2,
    element3,
    opacity,
    pointerEvents,
    display,
    overflow
  ) {
    element1.style.opacity = opacity;
    element1.style.pointerEvents = pointerEvents;
    element2.style.display = display;
    element3.style.overflow = overflow;
  }

  open.addEventListener("click", () => {
    styleItem(overlay, open, body, "1", "auto", "none", "hidden");
  });

  close.addEventListener("click", () => {
    styleItem(overlay, open, body, "0", "none", "block", "auto");
  });

  overlay.addEventListener("click", () => {
    styleItem(overlay, open, body, "0", "none", "block", "auto");
  });
}

// faq-listのアコーディオン
{
  const dts = document.querySelectorAll("dt");
  dts.forEach((dt) => {
    dt.addEventListener("click", () => {
      dt.parentNode.classList.toggle("appear");

      dts.forEach((el) => {
        if (dt !== el) {
          el.parentNode.classList.remove("appear");
        }
      });
    });
  });
}

// header aをクリックでスクロールで移動(min-width: 1001px以上時)
{
  document.querySelectorAll("header li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  });
}

// overlay aをクリックでスクロール移動(max-width: 1000px以下時)
{
  document.querySelectorAll(".overlay li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    });
  });
}

// swiper
{
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 6000,
    },
    speed: 1500,
    allowTouchMove: false,
  });
}
