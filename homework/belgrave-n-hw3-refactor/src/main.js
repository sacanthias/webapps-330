// TODO: clean this up majorly
import * as app from './app.js';
import * as btn from './button-functions.js'

const apiPath = "https://api.tenrai.org/v1";
const prefix = "nob6010";
const listKey = prefix + "list";
const searchKey = prefix + "search";
const searchTerm = localStorage.getItem(searchKey);
const userSaved = localStorage.getItem(listKey);

let sfw;
let limit;
let anime;
let manga;
let userList = new Array();
let saveButtons = [];
let callResult;

window.onload = function(){
    populateHome();
    document.querySelector("#search").onclick = searchClicked;
    document.querySelector("#viewList").onclick = listClicked;
};

function populateHome(listKey){
    // seasonal anime
    let seasonalURL = apiPath + "/seasons/now?limit=7";
    getData(seasonalURL, "#seasonal", "aniseason");

    // top manga
    let topMangaURL = apiPath + "/top/manga?limit=7";
    getData(topMangaURL, "#top_manga", "mantop")

    // top anime
    let topAnimeURL = apiPath + "/top/anime?limit=7";
    getData(topAnimeURL, "#top_anime", "anitop");

    if(searchTerm){
        document.querySelector("#searchterm").value = searchTerm;
    }

    // checks if the user
    if(userSaved){
        userList = JSON.parse(localStorage.getItem(listKey));
        listClicked();
    }
    else{
        document.querySelector("#showList").innerHTML = "<b>No saved entries found.</b>";
    }
}


// automatically searches under new criteria if the search filters have been changed
for(let checks in document.querySelectorAll(".widget").children){
    checks.onchange = function(){
        searchClicked();
    }
}

saveButtons = document.querySelectorAll("button.save");

for(let b of saveButtons){
    b.onclick = function(e){
        console.log(userList);
        userList.push({
            title: e.target.dataset.name,
            image: e.target.dataset.image, 
            rating: e.target.dataset.rating,
            url: e.target.dataset.url
        });

        localStorage.setItem(listKey, JSON.stringify(userList));
    }
}