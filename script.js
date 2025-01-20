function dropdown(bool){
    if(document.getElementById('body').offsetWidth < 768){
        if(bool){
            document.getElementById('nav-list').style.display = "block";
            document.getElementById('body').style.overflow = "hidden";
        }
        else{
            document.getElementById('nav-list').style.display = "none";
            document.getElementById('body').style.overflow = "inherit";
        }
    }
}