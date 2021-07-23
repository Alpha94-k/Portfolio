$(document).ready(function() {
            
    var move = -15;
    var zoom = 1.1;

    $('.projet').hover(function() {
        
        width = $('.projet').width() * zoom;
        height = $('.projet').height() * zoom;
        
        $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
        
        // Faire apparaitre la div description
        $(this).find('div.description').stop(false,true).fadeIn(200);
    },
    function() {
        //Reinitialiser l'image
        $(this).find('img').stop(false,true).animate({'width':$('.projet').width(), 'height':$('.projet').height(), 'top':'0', 'left':'0'}, {duration:100});	

        //Cacher la div description
        $(this).find('div.description').stop(false,true).fadeOut(200);
    });


//     const threshold = .1

//     const options = {
//         root: null,
//         rootMargin: '0px',
//         threshold
//     }

//     const handleIntersect = function (entries, observer) {
//         entries.forEach(function (entry) {
//             if (entry.intersectionRatio > threshold) {
//             entry.target.classList.remove('reveal')
//             observer.unobserve(entry.target)
//             }
//         })
//     }

//     document.documentElement.classList.add('reveal-loaded')

//     window.addEventListener("DOMContentLoaded", function () {
//         const observer = new IntersectionObserver(handleIntersect, options)
//         const targets = document.querySelectorAll('.reveal')
//         targets.forEach(function (target) {
//             observer.observe(target)
//         })
//     })

 });