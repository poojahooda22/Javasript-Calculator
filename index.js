
let expression ="";

document .querySelector(".screen").innerText = expression;

function buttonClick(event) {
    console.log(event);
    let text = event.target.innerText;
    if(text === "=") {
        expression = eval(expression);

    }
    else {
        expression += text;
    }
    document.querySelector(".screen").innerText = expression;
}