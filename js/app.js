(function () {
  let socials = document.querySelectorAll(".social div");
  socials?.forEach((link, index) => {
    link.style.animation = `moveSocialLinksIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${
      index / 7 + 0.2
    }s`;
  });

  let rocketPieces = document.querySelectorAll(".middle-rocket span");
  let rocket = document.querySelector(".rocket");
  let triggerStart = window.innerHeight / 5;
  let rocketOffsetTop = rocket.offsetTop;
  let thirdOffsetTop = rocketPieces[2].offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > rocketOffsetTop - triggerStart) {
      rocketPieces[0].classList.add("active");
      rocketPieces[1].classList.add("active");
    } else {
      rocketPieces[0].classList.remove("active");
      rocketPieces[1].classList.remove("active");
    }

    if (window.scrollY > thirdOffsetTop - triggerStart) {
      rocketPieces[2].classList.add("active");
    } else {
      rocketPieces[2].classList.remove("active");
    }
  });
})();
