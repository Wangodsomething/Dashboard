function carAccelerate(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(141deg); background-color: red;";
    document.getElementById("point").style.cssText="background-color: red;";
}
function carIdle(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(-141deg); background-color: #86ff00; transition:20s;";
    document.getElementById("point").style.cssText="background-color: #86ff00; transition:20s;";
    
}
function carBrake(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(-142deg); background-color: #86ff00; transition:1s;";
    document.getElementById("point").style.cssText="background-color: #86ff00; transition:1s;";
}

