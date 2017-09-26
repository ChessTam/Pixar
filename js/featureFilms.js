/*中間主體*/

var dataImg=[{
	"src":"../img/c3_teaser_poster.jpg",
	"title":"Cars 3",
	"href":"https://www.pixar.com/feature-films/cars-3"
},{
	"src":"../img/dory.jpg",
	"title":"Finding Dory",
	"href":"https://www.pixar.com/feature-films/finding-dory"
},{
	"src":"../img/16_dino.jpg",
	"title":"The Good Dinosaur",
	"href":"https://www.pixar.com/feature-films/the-good-dinosaur"
},{
	"src":"../img/15_io.jpg",
	"title":"Inside Out",
	"href":"https://www.pixar.com/feature-films/inside-out"
},{
	"src":"../img/14_MU_stroke.jpg",
	"title":"Monsters University",
	"href":"https://www.pixar.com/feature-films/monsters-university"
},{
	"src":"../img/13_brave.jpg",
	"title":"Brave",
	"href":"https://www.pixar.com/feature-films/brave"
},{
	"src":"../img/12_cars2.jpg",
	"title":"Cars 2",
	"href":"https://www.pixar.com/feature-films/cars-2"
},{
	"src":"../img/11_ts3.jpg",
	"title":"Toy Story 3",
	"href":"https://www.pixar.com/feature-films/toy-story-3"
},{
	"src":"../img/10_up.jpg",
	"title":"Up",
	"href":"https://www.pixar.com/feature-films/up"
},{
	"src":"../img/09_walle.jpg",
	"title":"WALL-E",
	"href":"https://www.pixar.com/feature-films/walle"
},{
	"src":"../img/08_rat.jpg",
	"title":"Ratatouille",
	"href":"https://www.pixar.com/feature-films/ratatouille"
},{
	"src":"../img/07_cars.jpg",
	"title":"Cars",
	"href":"https://www.pixar.com/feature-films/cars"
},{
	"src":"../img/06_incredibles.jpg",
	"title":"The Incredibles",
	"href":"https://www.pixar.com/feature-films/the-incredibles"
},{
	"src":"../img/05_nemo.jpg",
	"title":"Finding Nemo",
	"href":"https://www.pixar.com/feature-films/finding-nemo"
},{
	"src":"../img/04_monsters_stroke.jpg",
	"title":"Monsters, Inc.",
	"href":"https://www.pixar.com/feature-films/monsters-inc"
},{
	"src":"../img/03_ts2.jpg",
	"title":"Toy Story 2",
	"href":"https://www.pixar.com/feature-films/toy-story-2"
},{
	"src":"../img/02_abl.jpg",
	"title":"A Bug's Life",
	"href":"https://www.pixar.com/feature-films/a-bugs-life"
},{
	"src":"../img/01_ts.jpg",
	"title":"Toy Story",
	"href":"https://www.pixar.com/feature-films/toy-story"
}]

window.onload=function(){
	var row=document.getElementsByClassName("row")[0];
	for(var i=0;i<dataImg.length;i++){
		row.innerHTML += '<li class="col-lg-2"><a href="'+dataImg[i].href+
		'" style="background-image: url('+dataImg[i].src+');"></a><span>'+dataImg[i].title+'</span>';
	}
}

