function pg() {
    gsap.to("#main", {
      scrollTrigger: {
        trigger: ".home",
        pin: true,
           markers:true,
        scrub: true,
      },
      // position:"relative",
      height: "85vh",
      width: "85vw",
      duration: 10,
    });
}