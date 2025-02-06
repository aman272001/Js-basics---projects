const squares = document.querySelectorAll('.square')
// const body = document.querySelector('body')

squares.forEach((square)=>{

    square.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id === "red"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "#DE3163"){
            document.body.style.backgroundColor = e.target.id
        }
        
        
        
    })

})