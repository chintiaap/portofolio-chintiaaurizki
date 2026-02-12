document.addEventListener("DOMContentLoaded", function () {

    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let degree = percent * 3.6;

        circle.style.background =
            `conic-gradient(#ff4f87 ${degree}deg, #ffd6e8 ${degree}deg)`;

        circle.innerHTML = percent + "%";
    });

});
