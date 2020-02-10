document.getElementById('search').addEventListener("click", function(){
    let search = document.getElementById("search")["value"]
    fetch(`http://maps.googleapis.com/maps/api/js?key=AIzaSyBezeHTW869CMZEa8G6XDSpIXyrlmI5zRk&callback=initMap`)
    .then(function (response){
        console.log(response.body)
        return response.json()
    })
    .then(function (res){
        console.log(res);
        document.getElementById("places").innerHTML = ""
        if(res.Error !=="Place not found"){
        res.Search.forEach(element =>{
            let li = document.createElement("li");
            li.innerText = `${element.something}, ${element.somethingelse}`
            let img = document.createElement("img");
            img.classList.add("Thing");
            img.src = element.Thing;
            li.append(img);
            document.getElementById("places").append(li);
        });}
        else{
            document.getElementById("places").innerText = "No Place Found"
        }
    })
    
})