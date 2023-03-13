
// variables

let screen = document.getElementById("screen");
let equalBtn = document.getElementById("equal");
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');


// functions

// to input on screen

function input(n) {
    return screen.value +=n ;
}

// to calc numbers
function calc(){
     screen.value = eval(screen.value);
}

// to clear screen
function clear(){
screen.value = "";
}

// to delete 
function del(){
    screen.value = screen.value.substr(0,screen.value.length-1);
}

// actions

equalBtn.onclick = calc;

clearBtn.onclick = clear;

deleteBtn.onclick = del;
