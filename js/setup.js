$('.owl-carousel').owlCarousel({
    interval: 3000,
    cycle: true,
    loop:true,
    margin:8,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})