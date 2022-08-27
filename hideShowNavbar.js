function hideShowNavbar(options){
    let navbar = document.querySelector(options.navbar);   
    let times = document.querySelector(options.times);
    let overlay = document.querySelector(options.overlay);
    let navbar_icon = document.querySelector(options.navbar_icon);

    function displayNone(e){
        e.style.display = "none";
    }
    function displayBlock(e){
        e.style.display = "block";
    }

    times.onclick = function(){
        displayNone(navbar);
    }
    overlay.onclick = function(){
        displayNone(navbar);
    }
    navbar_icon.onclick = function(){
        displayBlock(navbar);
    }

}
