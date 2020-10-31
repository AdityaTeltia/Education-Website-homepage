var tl = gsap.timeline();

tl.from('.nav-bar',{
    duration:2,
    opacity:0,
    y:-80
})

tl.from('.doubts',{
    duration:1,
    opacity:0,
    x:-100
})

tl.from('.video',{
    duration:1,
    opacity:0
})

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 

const hamburgerNavbar = document.querySelector('.media-navbar');

document.getElementById('toggle').addEventListener('click',()=>{
    document.querySelector('body').style="overflow:hidden;"
    document.querySelector('.media-navbar').classList.toggle('active');
})

document.getElementById('close').addEventListener('click',()=>{
    document.querySelector('body').style="overflow:visible;"
    document.querySelector('.media-navbar').classList.toggle('active');
})