// document.querySelector('#Parent').addEventListener('click' , function(e){
//     console.log(e.target.parentNode);
//     const aman = e.target.parentNode;
//     aman.remove();   
// })

document.querySelector('#Parent').addEventListener('click' , function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id);
        
        const aman = e.target.parentNode
        aman.remove()
    }
      
})


// document.querySelector('#apple').addEventListener('click' , function(e){
//     console.log("Apple clicked");  
// })