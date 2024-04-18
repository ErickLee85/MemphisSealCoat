
const menuIcon = document.querySelector('.faMenu');
const sideNav = document.querySelector('.sideNav')
const closeSideNav = document.querySelector('.closeButton');
var links = document.querySelectorAll(".sideNav li");
var mainLinks = document.querySelectorAll('.mainLinks li a');

mainLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        
        event.preventDefault();
        var hrefValue = this.getAttribute('href');
       
        
        // Remove the 'active' class from all links within .mainLinks
        mainLinks.forEach(function(link) {
            if (link !== this) { // Skip if it's the clicked link
                link.classList.remove('active');
            }
        });

        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

menuIcon.addEventListener('click', () => {
   sideNav.classList.add('sideNavActive')

})

closeSideNav.addEventListener('click', () => {
    sideNav.classList.remove('sideNavActive')
 
})



links.forEach(function(link) {
  link.addEventListener("click", () => {
    sideNav.classList.remove('sideNavActive')
  });
});