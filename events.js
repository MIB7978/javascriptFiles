
// document.querySelector('.class').addEventListener('click',(event)=>{
    
//     console.log("this is clicled")

//     var v = event.target;
//     // var v = event.target.className;
//     // var v =  Array.from( event.target.classList);

//     v = event.offsetX
//     v= event.clientY
//     console.log(v)


// })
// document.querySelector('.class').addEventListener('mouseover',(event)=>{
    
//     console.log("this is clicled")

//     var v = event.target;
//     // var v = event.target.className;
//     // var v =  Array.from( event.target.classList);

//     v = event.offsetX
//     v= event.clientY
//     console.log(v)


// })



document.querySelector('.btn').addEventListener('click',(event)=>{
   
      event.preventDefault()
    //   console.log('clicked')

})

document.querySelector('.btn').addEventListener('dblclick',(event)=>{
   
    event.preventDefault()
    console.log(' doubleclicked')

})
// document.querySelector('.myul').addEventListener('mouseleave',(event)=>{
   
//     // event.preventDefault()
//     console.log('mouse in')

// })
// document.querySelector('.myul').addEventListener('mouseenter',(event)=>{
   
//     // event.preventDefault()
//     console.log('mouse enter')

// })
document.querySelector('.myul').addEventListener('mousemove',(event)=>{
   
    // event.preventDefault()
    console.log('mouse enter')
    document.body.style.background = `rgb(${event.offsetX},${event.offsetY},${64})`

})




