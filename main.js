let sliderValue 

var looped = false;
let slider;
let plus;
let minus;
let eraser;
var brushType = 'normal'
var weight;
var canvas;
let savedImg;
var brushShape = 'line'
let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = "block";
  
    addBtn.addEventListener("click", (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = "none";
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
  });
var color6 
//localstorage does not support anything other than strings
colour = localStorage.getItem("colour")
const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent)
var state = 'colors'
if(colour==undefined){
    var colour = 'black';
    
}else{
    colour = window.localStorage.getItem('colour')
}
if(localStorage.getItem("weight")==null){
    weight = "10";
    console.log("h")
}else{
    weight = localStorage.getItem("weight")
}
if(localStorage.getItem("brushType")==null){
    brushType = "10";
    console.log("h")
}else{
    brushType = localStorage.getItem("brushType")
}
console.log(colour,localStorage.getItem("colour"))

const vh = document.documentElement.scrollHeight/100
const vw = document.documentElement.scrollWidth/100
const color1 = 'red'
const color2 = 'orange'
const color3 = 'yellow'
const color4 = 'green'
const color5 = 'blue'


function preload(){
    plus = loadImage('./plus_sign.webp')
    minus = loadImage('./minus_sign.png')
    eraser = loadImage('./eraser.png')
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight)
    slider  = createSlider(1, 25, 10, 0)
    slider.position(85*vw, 10*vh);
    slider.style('width', '10vw');
}

function draw(){
    noStroke()
    slider.style('opacity',0)
    textSize(22)
    textFont('Arial')
    sliderValue = slider.value()
    if(!isMobile){
        fill('#185abd')
        rect(0, 0, 100*vw, 7.5*vh)
        while(!looped){
            fill('white')
            rect(0, 17*vh, 100*vw, 83*vh)
            looped = true
            let r = random(255)
            let g = random(255)
            let b = random(255)
            color6 = color(r,g,b)
        }
        strokeWeight(1)
        
        const transparent = color(100,50,100)
        transparent.setAlpha(0)
        stroke(transparent)
        fill('white')
        text('Colors', 43*vw, 6*vh)
        text('Help', 25*vw, 6*vh)
        text('Brush', 63*vw, 6*vh)
        fill('#185abd')
        rect((42+1)*vw, 3*vh, 4*vw, 4*vh)
        circle((42+1)*vw,5*vh,4*vh)
        circle((46+1)*vw,5*vh,4*vh)
        rect(25*vw, 3*vh, 3*vw, 4*vh)
        circle(25*vw,5*vh,4*vh)
        circle(28*vw,5*vh,4*vh)
        fill('white')
        rect(0, 7.5*vh, 100*vw, 8.5*vh)

        if(state==='colors'){
            fill(color1)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color1){
                stroke('darkblue')
                strokeWeight(5)
            }
            circle(35*vw,10*vh,4*vh)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color2){
                stroke('darkblue')
                strokeWeight(5)
            }
            fill(color2)
            circle(39*vw,10*vh,4*vh)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color3){
                stroke('darkblue')
                strokeWeight(5)
            }
            fill(color3)
            circle(43*vw,10*vh,4*vh)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color4){
                stroke('darkblue')
                strokeWeight(5)
            }
            fill(color4)
            circle(47*vw,10*vh,4*vh)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color5){
                stroke('darkblue')
                strokeWeight(5)
            }
            fill(color5)
            circle(51*vw,10*vh,4*vh)
            stroke(transparent)
            strokeWeight(0)
            if(colour===color6){
                stroke('darkblue')
                strokeWeight(5)
            }
            fill(color6)
            circle(55*vw,10*vh,4*vh)
            if(mouseIsPressed&&mouseX>23*vw&&mouseX<32*vw&&mouseY>6*vh&&mouseY<12*vh){
                fill('white')
                rect(0, 15*vh, 100*vw, 85*vh)
            }
            fill('black')
            strokeWeight(0)
            text("Clear canvas", 24*vw, 9*vh, 28*vw, 9*vh)
            fill('white')
            strokeWeight(0)
            text('Help', 25*vw, 6*vh)
            text('Brush', 63*vw, 6*vh)
            image(eraser, 59*vw, 8*vh, 4*vh, 4*vh)
            if(mouseIsPressed&&mouseX>58*vw&&mouseX<64*vw&&mouseY>7*vh&&mouseY<13*vh){
                colour = 'white'
                
            }
            
            rect((42+1)*vw, 3*vh, 4*vw, 4*vh)
            circle((42+1)*vw,5*vh,4*vh)
            circle((46+1)*vw,5*vh,4*vh)
            fill('#185abd')
            text('Colors', 43*vw, 6*vh)
        }else if(state==='help'){
            fill('white')
            
            
            
            text('Colors', 43*vw, 6*vh)
            text('Brush', 63*vw, 6*vh)
            
            rect(25*vw, 3*vh, 3*vw, 4*vh)
            circle(25*vw,5*vh,4*vh)
            circle(28*vw,5*vh,4*vh)
            
            fill('#185abd')
            text('Help', 25*vw, 6*vh)
        }else{
            fill('white')
            stroke('black')
            strokeWeight(weight)
            circle(45*vw,11*vh,4*vh)
            fill('white')
            stroke(transparent)
            strokeWeight(1)
            text('Colors', 43*vw, 6*vh)
            text('Help', 25*vw, 6*vh)
            rect(63*vw, 3*vh, 3.5*vw, 4*vh)
            circle(63*vw,5*vh,4*vh)
            circle(66.5*vw,5*vh,4*vh)
            image(plus, 45*vw+2*vh+3*vh, 8.5*vh, 5*vh, 5*vh)
            image(minus, 45*vw-2*vw-3*vw, 8.5*vh, 5*vh, 5*vh)
            fill('black')
            text("Thickness", 33*vw, 10*vh, 36.5*vw, 10*vh)
            text("Type", 53*vw, 10*vh, 55*vw, 10*vh)
            fill('white')
            stroke("black")
            strokeWeight(10)
            line(28*vw, 11*vh, 30*vw, 11*vh)
            strokeWeight(2)
            triangle(24*vw, 9*vh, 22.5*vw, 13.5*vh, 25.5*vw, 13.5*vh)
            circle(20*vw,11.3*vh,5*vh)
            slider.style('opacity',1)
            stroke(transparent)
            fill('black')
            text("Shape", 12*vw, 10*vh, 15*vw, 10*vh)
            fill(transparent)
            if(brushType==='normal'){
                stroke('darkblue')
                strokeWeight(2)
            }
            rect(59.8*vw, 9.2*vh, 6*vw, 4*vh)
            stroke(transparent)
            fill(transparent)
            if(brushType==='random'){
                stroke('darkblue')
                strokeWeight(2)
            }
            rect(67.8*vw, 9.2*vh, 5.8*vw, 4*vh)
            stroke(transparent)
            if(mouseIsPressed&&mouseX>59.8*vw&&mouseX<65*vw&&mouseY>9*vh&&mouseY<14*vh){
                brushType = 'normal'
            }else if(mouseIsPressed&&mouseX>67*vw&&mouseX<73*vw&&mouseY>9*vh&&mouseY<14*vh){
                brushType = 'random'
            }
            fill('black')
            text("Normal", 60*vw, 10*vh, 75*vw, 10*vh)
            text("Random", 67.8*vw, 10*vh,80*vw,10*vh)
            text("Randomness", 75*vw, 10*vh, 80*vw, 15*vh)
            fill('#185abd')
            text('Brush', 63*vw, 6*vh)
        }
        //not make the strokeweight too big
        if(weight>25){
            weight = 25
        }
    }
    
    
    
    
    
    
    if(mouseIsPressed&&mouseY>17*vh){
        if(brushType!='random'){

            if(brushShape==='line'){
                stroke(window.localStorage.getItem("colour"))
                strokeWeight(parseInt(weight))
                line(mouseX,mouseY,pmouseX,pmouseY)
            }else if(brushShape==='triangle'){
                stroke(window.localStorage.getItem("colour"))
                strokeWeight(parseInt(weight))
                fill(window.localStorage.getItem("colour"))
                triangle(mouseX, mouseY, mouseX-1, mouseY-1, mouseX+1, mouseY-1)
                
            }else{
                stroke(window.localStorage.getItem("colour"))
                strokeWeight(parseInt(weight))
                fill(window.localStorage.getItem("colour"))
                circle(mouseX,mouseY,1)
            }
        }else if(brushType==='random'){
            
            for(let iter = 0;iter<Math.floor(Math.random()*sliderValue);iter++){
                fill(colour)
                strokeWeight(weight)
                circle(mouseX+Math.floor(Math.random()*sliderValue),mouseY+Math.floor(Math.random()*sliderValue),2)
            }
        }
    }
        
    
    window.localStorage.setItem("weight",weight)
    window.localStorage.setItem("colour",colour)
    window.localStorage.setItem("brushType",brushType)
    console.log(localStorage.getItem("colour"))
    
    
}
function mousePressed() {
    console.log("pressed")
    
    // not make the program so picky
    if(!isMobile){
        if(mouseX>40*vw&&mouseX<50*vw&&mouseY>2*vh&&mouseY<8*vh){
            state = 'colors'
        }else if(mouseX>23*vw&&mouseX<30*vw&&mouseY>2*vh&&mouseY<8*vh){
            state = 'help'
            alert("Press Colors to view all color options and eraser and click on them to change color")
            alert("Press Brush to view all brush shape,type and thickness and click them to change the brush")
            alert(`Keyboard shortcuts
            'c' to clear canvas
            'p' to incrase stroke weight 
            'm' to decrease stroke weight
            's' to save
            'n' to change brush type to normal
            'r' to change brush type to random
            'v' to see all brush parameters
            Your current color is ${colour}
            Your current stroke weight is ${weight}
            Your current brush type is ${brushType}
            Your current brush shape is ${brushShape}
            `)
        }else if(mouseX>61*vw&&mouseX<68*vw&&mouseY>2*vh&&mouseY<8*vh){
            state = 'brush'
        }
        if(state==='colors'){

            if(mouseX>34*vw&&mouseX<34*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color1
            }else if(mouseX>38*vw&&mouseX<39*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color2
            }else if(mouseX>42*vw&&mouseX<43*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color3
            }else if(mouseX>46*vw&&mouseX<47*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color4
            }else if(mouseX>50*vw&&mouseX<51*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color5
            }else if(mouseX>54*vw&&mouseX<55*vw+4*vh+1*vw&&mouseY>8*vh&&mouseY<15*vh){
                colour = color6
            }
        }
        if(mouseX>46*vw&&mouseX<47*vw+6*vh&&mouseY>8*vh&&mouseY<14*vh&&state==='brush'){
            weight++
        }else if(mouseX>40*vw&&mouseX<40.5*vw+6*vh&&mouseY>8*vh&&mouseY<14*vh&&state==='brush'){
            weight--
        }
        if(state==='brush'){
            if(mouseX>22*vw&&mouseX<26*vw&&mouseY>8*vh&&mouseY<14*vh){
                brushShape='triangle'
            }else if(mouseX>20*vw-6*vh&&mouseX<20*vw+6*vh&&mouseY>6*vh&&mouseY<17*vh){
                brushShape='circle'
            }else if(mouseX>27*vw&&mouseX<31*vw&&mouseY>9*vh&&mouseY<13*vh){
                brushShape='line'
            }
        }
        
    }
    
    
}
function keyPressed(){

    if(key==='s'){
        savedImg = canvas.get(0,17*vh,100*vw,83*vh)
        savedImg.save('my-painting', 'png')
    }
    if(key==='p'){
        weight++
    }
    if(key==='m'){
        weight--
    }
    if(key==='c'){
        fill('white')
        rect(0,16*vh,100*vw,84*vh)
    }
    if(key==='n'){
        brushType = 'normal'
    }
    if(key==='r'){
        brushType = 'random'
    }
    if(key==='v'){
        alert(`
        Your current brush type is ${brushType}
        Your current stroke weight is ${weight}
        Your current brush shape is ${brushShape}
        Your current brush color is ${colour}
        Your current randomness of the random brush is ${sliderValue}
        `)
    }
}    
