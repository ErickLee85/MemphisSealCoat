
const menuIcon = document.querySelector('.faMenu');
const sideNav = document.querySelector('.sideNav')
const overlay = document.querySelector('.overlay');
const closeSideNav = document.querySelector('.closeButton');
const hiddenElements = document.querySelectorAll('.hidden');
var links = document.querySelectorAll(".sideNav li");
var mainLinks = document.querySelectorAll('.mainLinks li a');
var sideLinks = document.querySelectorAll('.sideLinks li a')
var bottomLinks = document.querySelectorAll('.linkHolder li a')

mainLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var hrefValue = this.getAttribute('href');
            window.location.href = hrefValue;

    });
});

sideLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var hrefValue = this.getAttribute('href');
            window.location.href = hrefValue;
    });
});

bottomLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var hrefValue = this.getAttribute('href');
            window.location.href = hrefValue;
    });
});

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
    document.body.style.visibility = 'visible';
})