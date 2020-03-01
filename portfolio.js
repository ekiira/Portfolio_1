var webSite = document.getElementById("web-sites");
var app = document.getElementById("mobile-apps");
var page = document.getElementById("landing-pages");

document.querySelectorAll(".click")[1] = app;
document.querySelectorAll(".click")[2] = webSite;
document.querySelectorAll(".click")[3] = page;

document.querySelectorAll(".click")[0].addEventListener("click", function() {
    document.querySelectorAll(".click")[0].classList.add("portfolio-menu", "active")
    document.querySelectorAll(".click")[1].classList.remove("portfolio-menu", "active")
    document.querySelectorAll(".click")[2].classList.remove("portfolio-menu", "active")
    document.querySelectorAll(".click")[3].classList.remove("portfolio-menu", "active")
        app.classList.remove("animated")
        webSite.classList.remove("animated")
        page.classList.remove("animated")
        webSite.style.display = "flex";
        app.style.display = "flex";
        page.style.display = "flex";
});

document.querySelectorAll(".click")[1].addEventListener("click", function() {
    document.querySelectorAll(".click")[1].classList.add("portfolio-menu", "active")
    document.querySelectorAll(".click")[0].classList.remove("portfolio-menu", "active")
    document.querySelectorAll(".click")[2].classList.remove("portfolio-menu", "active");
    document.querySelectorAll(".click")[3].classList.remove("portfolio-menu", "active");
     app.classList.add("animated")
       if(app) {
            webSite.style.display = "none";
            app.style.display = "flex";
           
            page.style.display = "none";
       } else{
           
       }
});

document.querySelectorAll(".click")[2].addEventListener("click", function() {
    document.querySelectorAll(".click")[2].classList.add("portfolio-menu", "active");
    document.querySelectorAll(".click")[0].classList.remove("portfolio-menu", "active");
    document.querySelectorAll(".click")[1].classList.remove("portfolio-menu", "active");
    document.querySelectorAll(".click")[3].classList.remove("portfolio-menu", "active");
    webSite.classList.add("animated");
        if(webSite) {
            webSite.style.display = "flex";
            
            app.style.display = "none";
            page.style.display = "none";
       } else{
           
       }
});

document.querySelectorAll(".click")[3].addEventListener("click", function() {
    document.querySelectorAll(".click")[3].classList.add("portfolio-menu", "active");
    document.querySelectorAll(".click")[0].classList.remove("portfolio-menu", "active");
    document.querySelectorAll(".click")[1].classList.remove("portfolio-menu", "active");
    document.querySelectorAll(".click")[2].classList.remove("portfolio-menu", "active");
    page.classList.add("animated")
        if(page) {
            webSite.style.display = "none";
            app.style.display = "none";
            page.style.display = "flex";
            
       } else{
           
       }
});