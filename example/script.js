if (typeof(cfg) == 'undefined'){
    console.log('u didnt load config file, default configuration was loaded')
    cfg = {
        windowWidth_cfg: '1000px',
        activeColor_cfg : 'white', 
        nonActiveColor_cfg : 'black',
        indicatorSpace_cfg: 25,
        animationDuration_cfg: 0.5,
        animationReaction_cfg: 0.1,
    }
}

//section with variables
const windowWidth = cfg.windowWidth_cfg, //size of a window and picture in it 
activeColor = cfg.activeColor_cfg,        //color of current slide
nonActiveColor = cfg.nonActiveColor_cfg,     // color of other slides

slides = document.querySelectorAll('.slide'),              //name of class in which u need to put your img <div class = 'slide'> <img> </div>

prev = document.querySelector('.prevSlide'),               //name of class for
next = document.querySelector('.nextSlide'),               //for an arrows

fullBlock = document.querySelector('.main_block'),         // main class with which arrows and indicators have positions  
slidesWrapper = document.querySelector('.slides_wrapper'), //class in 'main' class
sliderInner = document.querySelector('.slider_inner'),     //class in SlidesWrapper class
indexes = document.querySelector('.slide_indicators')      //class for an empty <div> </div>

let slideIndex = 1;
let currentLength = 0;
//============================
//section with styles setted by default
for (let i = 0; i < slides.length; i++){
    document.querySelectorAll(`.slide :nth-child(1)`)[i].style.width = windowWidth;
    let elem = document.createElement("div");
    elem.className = 'currentSlide';
    indexes.append(elem)
}
document.querySelector(`.slide_indicators :nth-child(${slideIndex})`) .style.backgroundColor = activeColor
slidesWrapper.style.width = windowWidth
const slideWidth = window.getComputedStyle(slidesWrapper).width

indexes.style.width = slides.length * cfg.indicatorSpace_cfg + 'px'             //if u want more space between space, u can change '25' on smth else 
fullBlock.style.width = windowWidth
sliderInner.style.display = 'flex';
sliderInner.style.transition = `${cfg.animationDuration_cfg}s all ${cfg.animationReaction_cfg}s`              //there u can change speed of an animation
slidesWrapper.style.overflow = 'hidden'

sliderInner.style.width = slides.length * 100 + '%';
slides.forEach(slide => slide.style.width = slideWidth)
//============================

//main functions 
next.addEventListener('click', () => {
    document.querySelectorAll('.currentSlide').forEach((item)=>{item.style.backgroundColor = nonActiveColor}) 
    
    if (currentLength == +(slideWidth.split('px')[0]) * (slides.length - 1)) {
        currentLength = 0; 
        slideIndex = 1;
        document.querySelector(`.slide_indicators :nth-child(${slideIndex})`) .style.backgroundColor = activeColor 
    }
    else {
        currentLength += +(slideWidth.split('px')[0])
        slideIndex += 1;
        document.querySelector(`.slide_indicators :nth-child(${slideIndex})`) .style.backgroundColor = activeColor
    }

    sliderInner.style.transform = `translateX(-${currentLength}px)`
})

prev.addEventListener('click', () => {
    document.querySelectorAll('.currentSlide').forEach((item)=>{item.style.backgroundColor = nonActiveColor}) 

    if (currentLength == 0) {
        currentLength = +(slideWidth.split('px')[0]) * (slides.length - 1); 
        slideIndex = slides.length;
        document.querySelector(`.slide_indicators :nth-child(${slideIndex})`) .style.backgroundColor = activeColor  
}
    else {
        currentLength -= +(slideWidth.split('px')[0]); 
        slideIndex -= 1;
        document.querySelector(`.slide_indicators :nth-child(${slideIndex})`) .style.backgroundColor = activeColor
    }

    sliderInner.style.transform = `translateX(-${currentLength}px)`
})
//============================
