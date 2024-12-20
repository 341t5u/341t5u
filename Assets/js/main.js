/*let mixerProjects = mixitup('.projects__container',{
selectors:{
    target:'project__item',
},
animation:{
    duration:300,
},
});*/
// Get all the category elements
const projects__categories = document.querySelectorAll('.category');

// Loop through each category element
projects__container.forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.1)'; // Scale up the category on hover
        category.style.transition = 'transform 0.3s'; // Add a smooth transition effect
    });

    category.addEventListener('mouseleave', () => {
        category.style.transform = 'scale(1)'; // Reset the scale when mouse leaves
    });
});