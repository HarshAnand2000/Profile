let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.3,
  opacity: 0,
});

tl.from("h1", {
  x: -1200,
  duration: 1,
  stagger: 0.4,
  opacity: 0,
});

tl.from("img", {
  x: 100,
  opacity: 0,
  duration: 0.8,
  rotate: 45,
  stagger: 0.5,
});

tl.from("#foot h3", {
  y: 50,
  duration: 0.8,
  stagger: -0.4,
  opacity: 0,
});
