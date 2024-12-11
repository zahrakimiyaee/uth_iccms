// function sumOfTwoNumbers(x = 0 , y = 0) {
//     // Function body
//     if (typeof x === "string") {
//         console.log("TRUE");
//     } else {
//         console.log("false");
//     }
// }

// function workingWithStrings() {
//     let testString = "In the name of God!";

//     let changedText = testString.includes("lenovo");

//     console.log("Changed Text: " + changedText);
//     console.log("Main Text: " + testString);

//     let fruits = ["apple", "orange", "melon", "grapes"];

//     for (let index = 0; index < fruits.length; index++) {
//         console.log(index + fruits[index]);
//     }
// }

function toggleImageZoom(event) {
    let zoomContainer = document.getElementById("imageZoom");

    if (zoomContainer) {
        if (!zoomContainer.classList.contains("d-none")) {
            zoomContainer.setAttribute("src", "");
            zoomContainer.classList.add("d-none");
        } else {
            if (event) {
                zoomContainer.setAttribute("src", event.target.getAttribute("src"));
                zoomContainer.classList.remove("d-none");
            }
        }
    }
}

// let notebook= prompt("enter the names");
// if (notebook.includes("finish", 0)){
//     console.log(notebook);
// } else {
//     console.log("the finish word did not enter"); 
// }

function fibo(number){
    number[0]=0;
    number[1]=1;
    for (let i = 2; i <20; i++) {
        number[i]=number[i-1]+number[i-2];
    }
    return number;
}
console.log(fibo([]));

// function factoriel(number = 1) {
//     if (number === 1) {
//         return 1;
//     }
//     return factoriel(number - 1) * number;
// }
// console.log(factoriel(5));

// function pow (number1 , number2){
//     return number1**number2;
// }
// console.log(pow(2,4));




