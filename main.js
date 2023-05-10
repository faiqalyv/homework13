// const myButton = document.getElementById('burger')
// const nav = document.querySelector('.side')
// const closeButton = document.getElementById('close')

// myButton.addEventListener('click', ()=>{
//     nav.style.display = 'flex'
// })

// closeButton.addEventListener('click', ()=>{
//     nav.style.display = 'none'
// } )
const container=document.querySelector(".container")
const icon=document.querySelector(".icon")
const container1=document.querySelector(".container1")
const img=document.querySelector(".img")
let count=false;
img.addEventListener("click",()=>{
    // container1.style.display="block"
    if (!count){
        
        container1.style.display="block"
        
        
    }else
    {
        container1.style.display="none"
    }
   count=!count
})

