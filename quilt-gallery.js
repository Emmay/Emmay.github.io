const prevButton = document.querySelector(".btn-left");
const nextButton = document.querySelector(".btn-right");
const polaroids = document.querySelectorAll(".polaroid");
let currentlySelected = 0;

prevButton.addEventListener("click", function(){
    polaroids
[currentlySelected].classList.remove("active");
    currentlySelected--;
    polaroids
[currentlySelected].classList.add("active");
    nextButton.disabled = false;
    if(currentlySelected === 0){
        prevButton.disabled = true;
    }
});

nextButton.addEventListener("click", function(){
    polaroids
[currentlySelected].classList.remove("active");
    console.log( polaroids
    [currentlySelected]);
    currentlySelected++;
    polaroids
[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if (polaroids
    .length - 1 === currentlySelected){
        nextButton.disabled = true;
    }
});