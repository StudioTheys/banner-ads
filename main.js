// Initialize banner animation
function initBanner() {
  // Define a reusable timeline with repeating settings
  const tl = gsap.timeline({
    repeat: 2,   // Runs 3 times total: 1 + 2 repeats
    repeatDelay: 1 // Optional delay between repeats (1 second here)
  });

  const animationDuration = 1;
  const ctaBounceDuration = 0.5;
  const staggerDelay = "+=0";

  // Initial state: Hide all elements with the 'hide' class
  tl.set('.hide', { alpha: 0 });

  tl.from(".textBubble", {
    duration: animationDuration,
    alpha: 1,
    scale: 0,
    ease: "power4.out",
    transformOrigin: "50% 100%"
  }, staggerDelay);

  tl.from(".subText", {
    duration: animationDuration,
    alpha: 1,
    scale: 0,
    ease: "power4.out",
  }, "-=0.5");

  // Frame 1: First painter appears
  tl.from(".painter1", {
    duration: animationDuration,
    alpha: 1,
    y: 500,
    ease: "power4.out", // Smoother easing
  }, "<");

  // CTA Button Entrance
  tl.from(".cta", {
    duration: 0.6,
    alpha: 0,
    y: 20,
    ease: "power2.out"
  }, "<");

  // Frame 2: Subsequent elements with smoother, consistent animation
  tl.from(".painter2", {
    duration: animationDuration,
    alpha: 1,
    x: 1000,
    ease: "power4.out",
  }, "<");


  tl.from(".painter3", {
    duration: animationDuration,
    alpha: 1,
    x: -1500,
    ease: "power4.out",
  }, "<");

  // CTA Animation with yoyo effect for smoother grow/shrink
  tl.from(".cta", ctaBounceDuration, { ease: 'sine.inOut' }, "-=0")
  .to(".cta", ctaBounceDuration, { scale: 1.1, ease: 'sine.inOut', yoyo: true, repeat: 1 });
  }
  
  // Hover animation for CTA and paint cans with stagger
  let hoverAnimation = gsap
    .timeline({ paused: true, yoyo: false, repeat: 0 })
    .to([".cta", ".painters"], {
      duration: 0.3,
      scale: 1.1,
      ease: "sine.inOut",
    })
    .to([".cta", ".painters"], {
      duration: 0.3,
      scale: 1.0,
      ease: "sine.inOut",
    });
  
  function enableHoverAnimations() {
  // Restart the hover animation every time the mouse enters the CTA button
  container.addEventListener("mouseenter", () => hoverAnimation.restart());
  }
  
  // Call the function to enable hover animations
  enableHoverAnimations();
  