
fetch("http://localhost:5229/api/Carousel/GetAllDataList")
  .then((response) => response.json())
  .then((data) => {
    const imageContainer = document.getElementById("slideshow");
    const dotsContainer = document.getElementById("circle");

    data.map((item) => {
        return {
            id: item.carousel_image_id,
            url: item.carousel_image,
        };
        })
        .forEach((item,index) => {
            const div = document.createElement("div");
            div.className = 'mySlides fade';
            div.id = `slide-${index + 1}`;
            const img = document.createElement("img");
            img.src = item.url;
            img.id = `${item.id}`;
            img.className = 'carousel-set';
            div.appendChild(img);
            imageContainer.appendChild(div);

            const dot = document.createElement("span");
            dot.className = 'dot';
            dot.onclick = function() {
                currentSlide(index + 1);
            };
            dotsContainer.appendChild(dot);
        });
        
        console.log(imageContainer);

        showSlides(1);
    })
    .catch((error) => console.error(error));

setInterval(function() {
    plusSlides(1);
    }, 5000);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

