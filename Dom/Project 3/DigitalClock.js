const timeBox = document.querySelector('.time');

// Don't make this mistake

// const date = new Date();
// const aman = document.createElement("div");
// aman.innerText = date.toLocaleTimeString();
// timeBox.appendChild(aman);
//  Better Method
setInterval(() => {
    const date = new Date();
    timeBox.innerText = date.toLocaleTimeString();
}, 1000);
