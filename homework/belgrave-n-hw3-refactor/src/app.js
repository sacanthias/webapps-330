// displays
const dataDisplay = (callResult, containerID, classN) =>{
    if(callResult){
        let bigString = "";

        for(let result of callResult){
            console.log(result.toString());
            let image = result.images.jpg.image_url;
            if(!image) image = "images/no-image-found.png";

            let line = `<div class='${classN}'><img src='${image}' />`;
            line += `<span><a target ='_blank' href='${result.url}'>${result.title}</a>
                <br>Rating: ${result.score}</span>
                <button type='button' class='save' data-name='${result.title}' data-image='${image}' data-rating='${result.score}' data-url='${result.url}'>Save</button>
                </div>`;

            bigString += line;
        }

        document.querySelector(containerID).innerHTML = bigString;
    }
    else{
        console.log("callResult was undefined");
        return;
    }
}

// xml request code stuff
const getData = (url, containerID, classN) =>{
    // 1 - create a new XHR object
    let xhr = new XMLHttpRequest();

    xhr.onload = (e) =>{
        console.log("data has loaded")
        console.log(e.target.responseText);

        if(!e.target.responseText){
            console.log("response text was undefined");
            return Promise.reject(new Error("rejected!"));;
        }

        let obj = JSON.parse(e.target.responseText);

        if(!obj.data || obj.data.length == 0){
            //document.querySelector("#status").innerHTML = "<b>No results found for '" + displayTerm + "'</b>";
            console.log("no results found.");
            return; //bail out
        }

        callResult = obj.data;
        console.log("call result:" + callResult);
        
        dataDisplay(callResult, containerID, classN);
    }

    // 4 - open connection & send request
    xhr.open("GET", url, true);
    //console.log("request opened");
    xhr.send();
}

export {getData}