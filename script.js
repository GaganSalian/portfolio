var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "30%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.5,
   marginTop: "0%"
})

gsap.from(".header-text", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});

gsap.to(".work-msg", {
  delay: 2,
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out"
});
