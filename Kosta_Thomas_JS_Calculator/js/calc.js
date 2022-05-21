var display = document.getElementById("display");
var numA = "";
var numB = "";
var mode = "";

function press(num) {
    if(num == 0 && numA == 0) return;
    if(numA.length == 8) return;
    numA += num;
    display.innerHTML = numA;
}

function setOP(operatorSel) {
    numB = numA;
    numA = "";
    mode = operatorSel;
}

function clr() {
    numA = "";
    numB = "";
    mode = "";
    display.innerHTML = "0";
}

function calculate() {

    calcMethod1 ();
    
    //calcMethod2 ();
}

function displayTotal(number) {
    var toDisplay = "" + number; // convert float .toString()

    if(toDisplay.length > 8) { // fit display without changing the value
        toDisplay = toDisplay.slice(0, 8);
    }

    display.innerHTML = toDisplay; 
}


// Unsafe way to do this but way less code.
//
// Assigning the total back into
// numA allows for mimicked functionality
// to a real calc when hitting '=' more then once"
//
// eval'ing a string for the math bypasses
// the need for parseFloat
function calcMethod1 () {
    numA = eval(numA + mode + numB); 
    displayTotal(numA);  
}                                    

// Long way to do it.
//
// Assigning the total back into
// numA allows for mimicked functionality
// to a real calc when hitting '=' more then once"
function calcMethod2 () {
    var floatA = parseFloat(numA);
    var floatB = parseFloat(numB);
    switch (mode) {
        case "/":
            total = floatA / floatB;
            break;
        case "*":
            total = floatA * floatB;
            break;
        case "-":
            total = floatA - floatB;
            break;
        case "+":
            total = floatA + floatB;
            break;
    }

    numA = total;
    displayTotal(numA); 
}


dragElement(document.getElementById("calc"));


// Draggable Div Function
//
//  ToDo: use class's instead of ID's
//
function dragElement(node) {
    //"static" vars
    var curserPosX = 0 
    var curserPosY = 0;
    document.getElementById(node.id).children[0].onmousedown = mouseDown;

    function mouseDown(e) {
        curserPosX = e.clientX;
        curserPosY = e.clientY;
        document.onmouseup = clearMouseEvents;
        document.onmousemove = onDrag;
    }
    
    function clearMouseEvents() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function onDrag(e) {
        var movementDeltaX = curserPosX - e.clientX;
        var movementDeltaY = curserPosY - e.clientY;

        curserPosX = e.clientX;
        curserPosY = e.clientY;

        node.style.top = (node.offsetTop - movementDeltaY) + "px";
        node.style.left = (node.offsetLeft - movementDeltaX) + "px";
    }
}