'use strict';

// window.onload = function () {
//
//     const vList = [
//         './assets/video/video1.mp4',
//         './assets/video/video2.mp4',
//         './assets/video/video (1).mp4',
//         './assets/video/video (2).mp4',
//         './assets/video/video (3).mp4',
//         './assets/video/video (4).mp4',
//         './assets/video/video (5).mp4',
//         './assets/video/video (6).mp4',
//         './assets/video/video (7).mp4',
//         './assets/video/video (8).mp4',
//         './assets/video/video (9).mp4',
//         './assets/video/video (10).mp4',
//         './assets/video/video (11).mp4',
//         './assets/video/video (12).mp4',
//         './assets/video/video (13).mp4',
//         './assets/video/video (14).mp4',
//         './assets/video/video (15).mp4',
//         './assets/video/video (16).mp4'
//     ]; // 播放列表
//
//     var vLen = vList.length;
//
//     var curr = 0;
//
//     var myvideo = document.getElementById("video-details");
//
//     myvideo.onended = function () {
//         function getRandomIntInclusive(min, max) {
//             min = Math.ceil(min);
//             max = Math.floor(max);
//             return Math.floor(Math.random() * (max - min + 1)) + min; //包括最小值和最大值
//         }
//
//         var randomNum = getRandomIntInclusive(1, vList.length);
//         console.log(randomNum); // 输出生成的随机数
//
//
//         myvideo.src = vList[curr];
//
//         var $text = vList[curr];
//
//         myvideo.load();
//
//         myvideo.play();
//
//         curr++;
//
//         if (curr >= vLen) {
//
//             curr = 0; //重新循环播放
//
//         }
//
//         $(".video-details h4").text($text);
//
//     };
// }


// element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();

    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }

    });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}
