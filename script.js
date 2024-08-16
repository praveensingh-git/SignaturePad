const colorPicker=document.getElementById('colorPicker')
const background=document.getElementById('background')
const fontSize=document.getElementById('fontSize')
const canvas=document.getElementById('myCanvas')
const clearBtn=document.getElementById('clearBtn')
const saveBtn=document.getElementById('saveBtn')
const retrieveBtn=document.getElementById('retrieveBtn')
var context = canvas.getContext('2d');

colorPicker.addEventListener('change',(e)=>{
    context.strokeStyle=e.target.value;
    context.fillStyle=e.target.value;
})
    canvas.addEventListener('mousedown',(e)=>{
        isDrawing=true;
        lastX=event.offsetX;
        lastY=event.offsetY;
    
})

canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        context.beginPath();
        context.moveTo(lastX,lastY);
        context.lineTo(event.offsetX,event.offsetY);
        context.stroke();
        
        lastX=event.offsetX;
        lastY=event.offsetY;
    }
})

canvas.addEventListener('mouseout',(e)=>{
    isDrawing=false;
    
})
canvas.addEventListener('mouseup',(e)=>{
    isDrawing=false;

})

background.addEventListener('change',(e)=>{
    canvas.style.backgroundColor=e.target.value;
})
fontSize.addEventListener('change',(e)=>{
    context.lineWidth=e.target.value
})

clearBtn.addEventListener("click",(e)=>{
    context.clearRect(0,0,canvas.width,canvas.height)
})

saveBtn.addEventListener("click",()=>{
    localStorage.setItem('canvasContents',canvas.toDataURL())
    let link=document.createElement('a')
    link.download='mySignature.png'
    link.href=canvas.toDataURL();
    link.click();
})

retrieveBtn.addEventListener('click',()=>{
    let savedCanvas=localStorage.getItem('canvasContents')
    if(savedCanvas){
        let img= new Image();
        img.src=savedCanvas;
        context.drawImage(img,0,0);
    }
})


// const colorPicker = document.getElementById('colorPicker');
// const background = document.getElementById('background');
// const fontSize = document.getElementById('fontSize');
// const canvas = document.getElementById('myCanvas');
// const clearBtn = document.getElementById('clearBtn');
// const saveBtn = document.getElementById('saveBtn');
// const retrieveBtn = document.getElementById('retrieveBtn');
// const context = canvas.getContext('2d');

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;


// context.strokeStyle = colorPicker.value;
// context.lineWidth = fontSize.value;
// canvas.style.backgroundColor = background.value;

// colorPicker.addEventListener('change', (e) => {
//     context.strokeStyle = e.target.value;
// });

// background.addEventListener('change', (e) => {
//     canvas.style.backgroundColor = e.target.value;
// });

// fontSize.addEventListener('change', (e) => {
//     context.lineWidth = e.target.value;
// });

// canvas.addEventListener('mousedown', (e) => {
//     isDrawing = true;
//     lastX = e.offsetX;
//     lastY = e.offsetY;
// });

// canvas.addEventListener('mousemove', (e) => {
//     if (isDrawing) {
//         context.beginPath();
//         context.moveTo(lastX, lastY);
//         context.lineTo(e.offsetX, e.offsetY);
//         context.stroke();
//         lastX = e.offsetX;
//         lastY = e.offsetY;
//     }
// });

// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// clearBtn.addEventListener('click', () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
// });

// saveBtn.addEventListener('click', () => {
//     const link = document.createElement('a');
//     link.download = 'signature.png';
//     link.href = canvas.toDataURL();
//     link.click();
// });

// retrieveBtn.addEventListener('click', () => {
//     const savedImage = new Image();
//     savedImage.src = localStorage.getItem('savedSignature');
//     savedImage.onload = () => context.drawImage(savedImage, 0, 0);
// });

// canvas.addEventListener('mouseup', () => {
//     const dataURL = canvas.toDataURL();
//     localStorage.setItem('savedSignature', dataURL);
// });
