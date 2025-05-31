  let images = document.querySelectorAll("#slider img");
        let nextBtn = document.getElementById("nextBtn");
        let currentIndex = 0;

        nextBtn.addEventListener("click", function () {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        });

        let backbtn = document.getElementById("backbtn");

        backbtn.addEventListener("click", function () {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add("active");
        });
