## Simple carousel/slider with pure js/css
u can try it with main file "script.js" I added comments near variables. 
If u want to add configuration file, then u need to add 2 scripts in main .html file (firstly config, then main script of carousel). I added example in the bottom

## Usage/Examples

```javascript
html:
<div class = "main_block">

    <div class="slides_wrapper">

        <div class="slider_inner">

            <div class='slide'>
                <img src="35.png"> //there u can add lots of this blocks <div class='slide'>
            </div>

        </div>
    </div>
    <div class="slide_indicators"></div> //it should be empty
    <div class="slide_controllers">
        <div class="prevSlide">←</div>
        <div class="nextSlide">→</div>
    </div>
</div>

<script src="config.js"></script>
<script src="script.js"></script>
}
```
partly some of the styles setted by default with js, but its better to use file styles.css which was given in the example