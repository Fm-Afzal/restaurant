
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".toggleNav").addEventListener("click", function () {
        document.body.classList.toggle('nav-expanded');
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: ".button-prev",
        prevEl: ".button-next",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    }
});


var swiper = new Swiper(".testimonialSlider", {
    navigation: {
        nextEl: ".button-prev",
        prevEl: ".button-next",
    },
});

function openTab(evt, language) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(language).style.display = "block";
    evt.currentTarget.className += " active";
}


const video = document.getElementById("videoContent");
const playButton = document.getElementById("playVideoContent");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

playButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    togglePlay();
});

video.addEventListener("playing", function () {
    playButton.style.opacity = 0; // Hide play button when video starts
});

video.addEventListener("pause", function () {
    playButton.style.opacity = 1; // Show play button when video is paused
});

video.addEventListener("ended", function () {
    playButton.style.opacity = 1; // Show play button when video ends
});



