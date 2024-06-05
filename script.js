// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const labl = document.getElementById("labl");
// let count =0;
// increaseBtn.onclick = function(){
//     count++;
//     labl.textContent = count;

// }
// decreaseBtn.onclick= function(){
//     count--;
//     labl.textContent=count;
// }
// resetBtn.onclick=function()
// { count=0;
//     labl.textContent=0; 
// }
// Get the necessary HTML elements
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const labl = document.getElementById("labl");

// Initialize count variable
let count = 0;

// Update the label text content with the current count
function updateLabel() {
    labl.textContent = count;
}

// Event listener for the increase button
increaseBtn.addEventListener("click", function() {
    count++;
    updateLabel();
});

// Event listener for the decrease button
decreaseBtn.addEventListener("click", function() {
    count--;
    updateLabel();
});

// Event listener for the reset button
resetBtn.addEventListener("click", function() {
    count = 0;
    updateLabel();
});

// Initial update of label text content
updateLabel();