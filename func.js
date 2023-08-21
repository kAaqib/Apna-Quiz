const nameinput = document.getElementById("yourname");
const contbtn = document.getElementById("contbtn");

contbtn.addEventListener("mouseover", (button)=>{
    let name = nameinput.value;
    if (!name) {
        button.target.classList.toggle("move");
    }
})