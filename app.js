const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "#14df97"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    //get a random number between 0 and colors length
    const randomNumber = Math.floor(Math.random() * colors.length)
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})