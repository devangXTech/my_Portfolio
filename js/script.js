$(function(){
    $("#header nav .fa-moon").click(function(){
        $(this).toggleClass("fa-sun");
        $("body").toggleClass("dark-mode");
    });
    const counters = document.querySelectorAll(".counter .counter-num");
        counters.forEach(counter =>{
            function counterUp (){
                const target = +counter.getAttribute("data-target");
                const counterText = +counter.innerText;
                const inc = target / 110; 
                if(counterText < target){
                    counter.innerText = Math.floor(counterText + inc);
                    setTimeout(counterUp,50);
                }else{
                    counter.innerText = target;
                };
            };
            window.addEventListener("scroll",()=>{
                let counterContainer = document.querySelector(".counter");
                let pos = Math.floor(counterContainer.getBoundingClientRect().top);
                let height = Math.floor(window.innerHeight / 1.2);
                if(height > pos){
                    counterUp();
                }
            });
    });
    const swiper = new Swiper('.service-swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
         delay: 5000,
       },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      })
        
    const swiperT = new Swiper('.testimonial-swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
        delay: 5000,
    },
        // Responsive breakpoints
        breakpoints: {
        0: {
            slidesPerView: 1,
                spaceBetween: 20
        },
        992: {
                slidesPerView: 2,
                spaceBetween: 30
        },
        }
    })
    $(".hire-me .fa-play").click(function(){
        $(".hire-me .video-container").fadeIn(500);
    });
    $(".video-container .video .fa-times").click(function(){
        $(".hire-me .video-container").fadeOut(500)
    });

    $(".blog-post .form .reply-btn").click(function(){
        $(".blog-post .form .reply").css("border","none");
        $(".blog-post .form").css("border","1px solid var(--border-color)");
        $(".blog-post .form .reply-description").css("display","none");
        $(".blog-post .form .comment-description").css("display","block");
    });
    $(".blog-post .form .cancel-reply-btn").click(function(){
        $(".blog-post .form .reply").css("border",".1rem solid var(--border-color)");
        $(".blog-post .form").css("border","none");
        $(".blog-post .form .reply-description").css("display","block");
        $(".blog-post .form .comment-description").css("display","none");
    });


    $(".projects .img").click(function(){
        $(".projects .img-container").addClass("active");
    });
    $(".projects .img-container .img-box .close-btn").click(function(){
        $(".projects .img-container").removeClass("active");
    });
    let imgSrc = document.querySelectorAll(".projects .img");
    const imgContainerImg = document.querySelector(".projects .img-container .img-box img");
    imgSrc.forEach(img =>{
        img.addEventListener("click",()=>{
            imgContainerImg.src = img.firstElementChild.src; 
        });
    });

    const breadCrumbItems = document.querySelectorAll(".projects .breadcrumb .breadcrumb-item");
    breadCrumbItems.forEach(breadCrumbItem =>{
        breadCrumbItem.addEventListener("click",()=>{         
            let active = document.querySelector(".breadcrumb .active");
            active.classList.remove("active");
            breadCrumbItem.classList.add("active");            
            imgSrc.forEach(img =>{
                const target = breadCrumbItem.getAttribute("data-target");
                if(img.classList.contains(target) || target == "all"){
                    img.parentElement.style.display = "inline-block";
                    img.parentElement.style.animation = "imgAni .5s linear";
                }else{
                    img.parentElement.style.display = "none";
                };
            });
        });
    });
    $(window).scroll(function(){
        if(window.scrollY > 100){
           $(".scroll-up").addClass("active"); 
        }else{
            $(".scroll-up").removeClass("active"); 
        };
    });
    const type = new Typed("#typed",{
        stringsElement: "#typed-strings",
		loop: true,
		typeSpeed: 100,
    });
});

             