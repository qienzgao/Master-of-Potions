// inspired by CrazyCoding21
// GithubLink https://github.com/CrazyCoding21/CC-JavaScript-47-Runaway-Button

const img = document.getElementById("phantasyimg");

const animateMove = (element, prop, pixels) =>
    anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
    });

["mouseover", "click"].forEach(function (el) {
    img.addEventListener(el, function (event) {
        const top = getRandomNumber(window.innerHeight - this.offsetHeight);
        const left = getRandomNumber(window.innerWidth - this.offsetWidth);

        animateMove(this, "left", left).play();
        animateMove(this, "top", top).play();
    });
});

const getRandomNumber = (num) => {
    return (Math.floor(Math.random() * (num + 1))) * (Math.round(Math.random()) * 2 - 1);
};

