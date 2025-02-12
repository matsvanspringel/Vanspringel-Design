var dropdownBool = true;

function dropdown(){
    if(dropdownBool){
        document.getElementById('nav-list').style.display = "block";
        document.getElementById('dropdownIcon').style.rotate = "180deg";
        dropdownBool = false;
    }
    else{
        document.getElementById('nav-list').style.display = "none";
        document.getElementById('dropdownIcon').style.rotate = "0deg";
        dropdownBool = true;
    }
}

function clear_form(){
    form = document.getElementById('contactForm');
    form.reset();
}