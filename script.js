var project = ""

function change_project(chosen_project){
    localStorage.setItem('project', chosen_project)
    get_info()
}

function get_info() {
    project_info = localStorage.getItem('project')

    fetch('data/data.json').then(
        (res) => {
            if (!res.ok){
                throw new Error
            }
            return res.json()
        }).then((data) => {
            var projects = data['projecten']
            var project = projects[project_info] 
            var info_array = ['name', 'description', 'site-beschrijving', 'url', 'link']


            for(var i = 0; i < info_array.length; i++){
                var info = project[info_array[i]]

                if(info_array[i] == "url"){
                    document.getElementById(info_array[i]).src = info
                }
                else if (info_array[i] == "link"){
                    document.getElementById(info_array[i]).href = info
                }
                else {
                    document.getElementById(info_array[i]).innerHTML = info
                }
            }
        }).catch((error) => console.log(error))
} 

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