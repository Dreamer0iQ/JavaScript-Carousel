//section with variables
const windowWidth = '1000px', //size of a window and picture in it 
activeColor = 'white',        //color of current slide
nonActiveColor = 'black',     // color of other slides


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

indexes.style.width = slides.length * 25 + 'px'             //if u want more space between space, u can change '25' on smth else 
fullBlock.style.width = windowWidth
sliderInner.style.display = 'flex';
sliderInner.style.transition = '0.5s all 0.1s'              //there u can change speed of an animation
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