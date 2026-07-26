let number = Number(localStorage.getItem("tasbih")) || 0;

const data = document.getElementById("count");

data.innerText = number;

function increment() {

    number++;

    data.innerText = number;

    localStorage.setItem("tasbih", number);


    data.classList.remove("animate");

    void data.offsetWidth;

    data.classList.add("animate");


    if (navigator.vibrate) {
        navigator.vibrate(20);
    }

}