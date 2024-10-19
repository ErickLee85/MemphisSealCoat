
const menuIcon = document.querySelector('.faMenu');
const sideNav = document.querySelector('.sideNav')
const overlay = document.querySelector('.overlay');
const closeSideNav = document.querySelector('.closeButton');
const hiddenElements = document.querySelectorAll('.hidden');
var links = document.querySelectorAll(".sideNav li");
var mainLinks = document.querySelectorAll('.mainLinks li a');
var sideLinks = document.querySelectorAll('.sideLinks li a')
var bottomLinks = document.querySelectorAll('.linkHolder li a')

// mainLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         var hrefValue = this.getAttribute('href');
      
//         event.preventDefault();
//         if(hrefValue == '#' || hrefValue == 'contact.html' || hrefValue == 'about.html' || hrefValue == 'services.html' || hrefValue == 'gallery.html') {
//             window.location.href = hrefValue;
//         }
//         var targetElement = document.querySelector(hrefValue);
//         var offset = targetElement.offsetTop - 85; 
        
//         // Scroll to the target element with offset
//         window.scrollTo({
//             top: offset,
//             behavior: 'smooth' // Optional: Smooth scrolling
//         });
//         mainLinks.forEach(function(link) {
//             if (link !== this) { // Skip if it's the clicked link
//                 link.classList.remove('active');
//             }
//         });

//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });

// sideLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         var hrefValue = this.getAttribute('href');
      
//         event.preventDefault();
//         if(hrefValue == '#' || hrefValue == 'contact.html' || hrefValue == 'about.html' || hrefValue == 'services.html' || hrefValue == 'gallery.html') {
//             window.location.href = hrefValue;
//         }
//         var targetElement = document.querySelector(hrefValue);
//         var offset = targetElement.offsetTop - 85; 
        
//         // Scroll to the target element with offset
//         window.scrollTo({
//             top: offset,
//             behavior: 'smooth' // Optional: Smooth scrolling
//         });
//         mainLinks.forEach(function(link) {
//             if (link !== this) { // Skip if it's the clicked link
//                 link.classList.remove('active');
//             }
//         });

//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });

// bottomLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         var hrefValue = this.getAttribute('href');
      
//         event.preventDefault();
//         if(hrefValue == '#' || hrefValue == 'contact.html' || hrefValue == 'about.html' || hrefValue == 'services.html' || hrefValue == 'gallery.html') {
//             window.location.href = hrefValue;
//         }
//         var targetElement = document.querySelector(hrefValue);
//         var offset = targetElement.offsetTop - 85; 
        
//         // Scroll to the target element with offset
//         window.scrollTo({
//             top: offset,
//             behavior: 'smooth' // Optional: Smooth scrolling
//         });
//         mainLinks.forEach(function(link) {
//             if (link !== this) { // Skip if it's the clicked link
//                 link.classList.remove('active');
//             }
//         });

//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });

menuIcon.addEventListener('click', () => {
   sideNav.classList.add('sideNavActive')
   overlay.classList.add('activeOverlay')
})

closeSideNav.addEventListener('click', () => {
    sideNav.classList.remove('sideNavActive')
    overlay.classList.remove('activeOverlay')
 
})

overlay.addEventListener('click', () => {
    sideNav.classList.remove('sideNavActive')
    overlay.classList.remove('activeOverlay')
})



links.forEach(function(link) {
  link.addEventListener("click", () => {
    sideNav.classList.remove('sideNavActive')
    overlay.classList.remove('activeOverlay')
  });
});



const aboutFunction = () => {
    window.location.href = './about.html';
}

const scrollHome = () => {
    alert('clicked!')
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('show');
        }
    })
})

hiddenElements.forEach((element) => observer.observe(element));


const newObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('unblurred')
        } else entry.target.classList.remove('unblurred')
    });
  }, {
    threshold: 1
  });
  
  

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
           // entry.target.classList.add('growAnimation')
        } 
    });
  }, {
    threshold: 1
  });
  
  const progressBar = document.querySelectorAll('.progress-bar');
  progressBar.forEach((element) => progressObserver.observe(element));

  const blurryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('unblurry')
        } else entry.target.classList.remove('unblurry')
    });
  }, {
    threshold: 0.5
  });
  
  const blurry = document.querySelectorAll('.blurry');
  blurry.forEach((element) => blurryObserver.observe(element));


const estimateCost = () => {
var serviceSelection = document.getElementById("serviceSelection").value;
var footageInput = document.getElementById("footageInput").value;
const serviceCost = document.getElementById('serviceCost');
const priceElement = document.getElementById('estimatePrice')
if(footageInput == '' || footageInput == 0 || isNaN(footageInput)) {
   document.getElementById('footageInput').focus()
   Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please enter a valid number",
  });
   return false;
}



if(isNaN(footageInput)) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid number",
      });
    return false;
}

if(window.innerWidth < 750){
    window.scrollBy({
        top:250,
        behavior:'smooth'
    })
}

if(serviceSelection == 'sealCoat') {
   serviceCost.innerHTML = `Seal Coat `
    let minPrice = footageInput * 0.20;
    let maxPrice = footageInput * 0.30

    if(minPrice < 2500 && maxPrice <= 2500) {
       let totalPrice = 2500
        priceElement.innerHTML = `$${totalPrice.toLocaleString()}`
        return;
    }  else if(minPrice < 2500 && maxPrice > 2500 ) {
        minPrice = 2500
        priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
        return;
    } 
    else priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
}

if(serviceSelection == 'crackFill') {
    serviceCost.innerHTML = 'Crack Fill'
    let minPrice = footageInput * 1.25;
    let maxPrice = footageInput * 2.00

    if(minPrice < 1500 && maxPrice <= 1500) {
        let totalPrice = 1500;
        priceElement.innerHTML = `$${totalPrice.toLocaleString()}`;
      
    }     else if(minPrice < 1500 && maxPrice > 1500 ) {
        minPrice = 1500
        priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
        
    } 
    else priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
}

if(serviceSelection == 'parkingLotClean') {
    serviceCost.innerHTML = 'Parking Lot Cleaning'
    let minPrice = footageInput * 1.00;
    let maxPrice = footageInput * 2.50

    if(minPrice < 2500 && maxPrice <= 2500) {
        let totalPrice = 2500;
        priceElement.innerHTML = `$${totalPrice.toLocaleString()}`;
  
    }  else if(minPrice < 2500 && maxPrice > 2500 ) {
        minPrice = 2500
        priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
    } 

    else priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
}

if (serviceSelection === 'lineStriping') {
    serviceCost.innerHTML = 'Line Striping';
    let minPrice = footageInput * 1.00;
    let maxPrice = footageInput * 2.00;
    
    if (minPrice < 750 && maxPrice <= 750) {
        let totalPrice = 750;
        priceElement.innerHTML = `$${totalPrice.toLocaleString()}`;
    } else if (minPrice < 750 && maxPrice > 750) {
        minPrice = 750;
        priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
    } else {
        priceElement.innerHTML = `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`;
    }
}

}

// JavaScript

const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {

  if(isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if(isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if(!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if(isSliderLocked) isSliderLocked = false;
}

// const spans = document.querySelectorAll('.img-span');
// let currentIndex = 0;

// document.querySelectorAll('.img-span').forEach((item, index) => {
//     item.addEventListener('click', function() {
//         const screenWidth = window.innerWidth; 

//         if(screenWidth < 792) {
//             return false;
//         }
//         currentIndex = index; 
//         openModalWithImage(spans[currentIndex].getAttribute('data-image'));
//     });
// });

// function openModalWithImage(imageUrl) {
//     const modal = document.getElementById('image-modal');
//     const modalImg = document.getElementById('modal-img');
    
//     modal.style.display = "flex"; 
//     modalImg.style.opacity = 0;
//     modalImg.src = imageUrl;      

//     setTimeout(() => {
//         modalImg.style.opacity = 1; 
//     }, 10);  
// }

// document.querySelector('.close').addEventListener('click', function() {
//     const modalImg = document.getElementById('modal-img');
//     modalImg.style.opacity = 0; 
//     setTimeout(() => {
//         document.getElementById('image-modal').style.display = "none"; 
//     }, 300); 
// });

// document.querySelector('.prev').addEventListener('click', function() {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : spans.length - 1;
//     navigateToImage(currentIndex);
// });

// document.querySelector('.next').addEventListener('click', function() {
//     currentIndex = (currentIndex < spans.length - 1) ? currentIndex + 1 : 0;
//     navigateToImage(currentIndex);
// });

// function navigateToImage(index) {
//     const modalImg = document.getElementById('modal-img');
//     modalImg.style.opacity = 0; // Fade out the current image
//     const imageUrl = spans[index].getAttribute('data-image');

//     setTimeout(() => {
//         modalImg.src = imageUrl;  
//         modalImg.onload = () => {
//             setTimeout(() => {
//                 modalImg.style.opacity = 1; 
//             }, 10); 
//         };
//     }, 300); 
// }

// document.querySelector('.overlay').addEventListener('click', () => {
//     document.getElementById('image-modal').style.display = "none";
// });

// document.getElementById("footageInput").addEventListener("keyup", function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         estimateCost()
//     }
// });

// document.getElementById("footageInput").addEventListener("input", function(event) {
//     let value = event.target.value;
//     // Remove non-numeric characters
//     event.target.value = value.replace(/\D/g, '');
// });

// const estimateCost = () => {
//     var serviceSelection = document.getElementById("serviceSelection").value;
//     var footageInput = document.getElementById("footageInput").value;

//     if(serviceSelection === 'sealCoat') {
//         const minPrice = footageInput * 0.20;
//         const maxPrice = footageInput * 0.30;
//         if(minPrice < 2500 || maxPrice < 2500) {
//             countUpTotalPrice(2500, 3000); // Adjust final price and duration
//         } else {
//             countUp(minPrice, maxPrice, 3000); // Adjust duration
//         }
//     }
    
// }

// function countUpTotalPrice(finalPrice, duration) {
//     let currentPrice = 0;
//     const totalSteps = duration / 1000 * 40; // Number of steps needed
//     const increment = finalPrice / totalSteps; // Increment per step
    
//     const interval = setInterval(function() {
//         currentPrice += increment;
//         if(currentPrice >= finalPrice) {
//             clearInterval(interval);
//             priceElement.innerHTML = formatPrice(finalPrice);
//         } else {
//             priceElement.innerHTML = formatPrice(Math.round(currentPrice));
//         }
//     }, 1000 / 40); // Approximately 40 steps per second
// }

// function countUp(minPrice, maxPrice, duration) {
//     let currentMinPrice = 0;
//     let currentMaxPrice = 0;
//     const totalSteps = duration / 1000 * 40; // Number of steps needed
//     const minIncrement = minPrice / totalSteps; // Increment per step for minPrice
//     const maxIncrement = maxPrice / totalSteps; // Increment per step for maxPrice
    
//     const interval = setInterval(function() {
//         currentMinPrice += minIncrement;
//         currentMaxPrice += maxIncrement;
        
//         if(currentMinPrice >= minPrice && currentMaxPrice >= maxPrice) {
//             clearInterval(interval);
//             priceElement.innerHTML = `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
//         } else {
//             priceElement.innerHTML = `${formatPrice(currentMinPrice)} - ${formatPrice(currentMaxPrice)}`;
//         }
//     }, 1000 / 40); // Approximately 40 steps per second
// }

// function formatPrice(price) {
//     return price.toLocaleString();
// }



window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
    const video = document.querySelector('.heroSection .heroVideo');
    video.play();
})