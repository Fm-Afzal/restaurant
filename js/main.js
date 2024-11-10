document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".toggleNav").addEventListener("click", function () {
        document.body.classList.toggle('nav-expanded');
    });

    // document.querySelector("header .checkbox").addEventListener("click", function () {
    //     document.documentElement.classList.toggle('dark');
    // });
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




