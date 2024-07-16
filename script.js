function dropDownButton(){
    document.addEventListener("DOMContentLoaded", function() {
        const hamburgerMenu = document.getElementById("hamburgerMenu");
        const dropdown = document.getElementById("dropdown");
    
        hamburgerMenu.addEventListener("click", function() {
            dropdown.classList.toggle("show");
        });
    
        document.addEventListener("click", function(event) {
            if (!hamburgerMenu.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    });
}
dropDownButton();

function rotated_string(){
    var element=document.querySelector("#target");
    var textNode=element.childNodes[0];
    var text=textNode.data;

    setInterval(function(){
        text=text[text.length-1] + text.substring(0,text.length-1);
        textNode.data=text;
    },200);
}

function sign_upButton() {
    var signUp = document.querySelector("#sign-up");
    var iconbtn = document.querySelector(".first-icon");
    var loginbtn = document.querySelector(".loginbtn");
    
    loginbtn.classList.add('show-signup');
    signUp.classList.add('show-signup');
    iconbtn.addEventListener('click', function() {
        signUp.classList.remove('show-signup');
    });
}


