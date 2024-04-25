
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


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//           document.getElementById('home').style.borderBottom = '5px solid goldenrod';
//         } if(!entry.isIntersecting){
//             document.getElementById('home').style.borderBottom = '5px solid #028DD1;';
//         }
//     });
//   });
  
//   const companyInfo = document.querySelectorAll('.top');
//   companyInfo.forEach((element) => observer.observe(element));



window.addEventListener('load', () => {
    const video = document.querySelector('.heroSection .heroVideo');
    video.play();
})