
//  AOS.init();
const vi = document.querySelector("h1")

const sec = document.querySelector(".vi")
const dd = document.querySelector(".carimage")
const logo = document.querySelector(".image")
const ul = document.querySelector("ul")




var t1 = new TimelineMax();


// t1.fromTo(logo,.5,{opacity:"0"},{opacity:"1",ease : Bounce.easeOut})
t1.fromTo(logo,1,{height:"0px"},{height:"150px",ease : Bounce.easeOut})
// t1.fromTo(ul,.3,{opacity:"0"},{opacity:"1",ease : Power2.easeInOut})


t1.fromTo(dd,1,{height:"0px"},{height:"400px",ease : Power2.easeInOut})



t1.fromTo(vi,.5,{height:"0%"},{height:"10%"})

t1.fromTo(sec,.5,{opacity:"0"},{opacity:"1"})
// t1.fromTo(sec,1,{width:"0%"},{width:"100%"})

// t1.fromTo(sec,.5,{height:"0%"},{height:"50%",ease : Power2.easeInOut})



