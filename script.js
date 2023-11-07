let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function showAllImages() {
    let slides = document.getElementsByClassName("mySlides");

    if (slideIndex === 1) {
        originalSlideIndex = slideIndex;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        slideIndex = slides.length;
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[originalSlideIndex - 1].style.display = "block";
        slideIndex = originalSlideIndex;
    }
}

let slideIndexHobbies = 0; // Initialize the slide index for the Hobbies section

showSlidesHobbies();

function showSlidesHobbies() {
    let i;
    let slides = document.getElementsByClassName("mySlides-hobbies");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index and reset it if it exceeds the number of slides
    slideIndexHobbies++;
    if (slideIndexHobbies > slides.length) {
        slideIndexHobbies = 1;
    }

    // Display the current slide
    slides[slideIndexHobbies - 1].style.display = "block";

    // Set a timeout to change slides every 3 seconds (adjust the timing as needed)
    setTimeout(showSlidesHobbies, 3000);
}
