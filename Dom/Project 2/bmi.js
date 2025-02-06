const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault()

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');
    const range = document.querySelector('#range');

    if(Height=== '' || Height <= 0 || isNaN(Height)){
        results.innerHTML = `Provide a valid number this is ${Height}`;
    }else if(Weight=== '' || Weight <= 0 || isNaN(Weight)){
        results.innerHTML = `Provide a valid number this is ${Weight}`;
    }else{
        const bmi = (Weight/((Height*Height)/10000)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6){
            results.innerHTML = `<span>${bmi}</span>`
            range.innerHTML = `<span>Underweight</span>`
        }
        if(bmi >18.6 && bmi <23.6){
            results.innerHTML = `<span>${bmi}</span>`
            range.innerHTML = `<span>Normal Weight</span>`
        }
        if(bmi > 23.6){
            results.innerHTML = `<span>${bmi}</span>`
            range.innerHTML = `<span>OverWeight</span>`
        }
    }
    
    
});