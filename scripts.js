// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeOffBtn = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");
    const rocketImg = document.getElementById("rocket");
    rocketImg.style.left = "50%";
    rocketImg.style.top = "76%";
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");

    

    takeOffBtn.addEventListener("click", function (e) {
        confirm("Confirm that the shuttle is ready for takeoff.");
        console.log(e);
        if(e.isTrusted) {
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.background = "navy";
            shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
           }
    });
    landBtn.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerText = 0;
    });
    abortBtn.addEventListener("click", function(e){
        confirm("Confirm that you want to abort the mission.");
        if(e.isTrusted){
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerText = 0;
        }
    });
    upBtn.addEventListener("click",function(){
        shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
        let imgValue = parseInt(rocketImg.style.top);
        imgValue -= 4;
        rocketImg.style.top = imgValue + "%"; 
    });
    downBtn.addEventListener("click",function(){
        shuttleHeight.innerText = Number(shuttleHeight.innerText) - 10000;
        // console.log(rocketImg.style.top);
        let imgValue = parseInt(rocketImg.style.top);
        imgValue += 4;
        rocketImg.style.top = imgValue + "%"; 
    });
    leftBtn.addEventListener("click",function(){
        let imgValue = parseInt(rocketImg.style.left);
        imgValue -= 4;
        rocketImg.style.left = imgValue + "%"; 
    });
    rightBtn.addEventListener("click",function(){
        let imgValue = parseInt(rocketImg.style.left);
        imgValue += 4;
        rocketImg.style.left = imgValue + "%"; 
    });

})