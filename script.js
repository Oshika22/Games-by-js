let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let gamePop = document.querySelector("#gamePop")
let btn = document.querySelector(".btn");
let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let light = true;
let turn = 0;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
] ;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn == 0){
            box.innerText = "O";
            if(light == true){box.style.color = "#D62828";}
            else{box.style.color = "#a61111";}
            turn = 1;
        }
        else{
            box.innerText = "X"
            if(light == true){box.style.color = "#003049";}
            else{box.style.color = "#003049";}
            turn = 0;
        }
        box.disabled = "true";
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winpatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != ""  ){
            if(p1 === p2 && p2 === p3){
                winner(p1);
            }
        }
    }
};

const winner = (win) => {
    gamePop.innerText = win;
}






//changing modes 
mode.addEventListener("click", () => {
    if(light == true){
        mode.innerText = "Light Mode"
        body.style.backgroundColor = "#101500";
        gamePop.style.backgroundColor = "#FF0062";
        boxes.forEach((box) =>{box.style.backgroundColor = "#bc6c25"});
        light = false;
    }
    else{
        mode.innerText = "Dark Mode"
        body.style.backgroundColor = "#ccff33";
        gamePop.style.backgroundColor = "#ff70a6";
        boxes.forEach((box) =>{box.style.backgroundColor = "#EAE2B7"});
        light = true;
    }

})
// reset.addEventListener("click",() =>{
//     console.log("cgtcuk");
//     boxes.style.color = "black";
// });