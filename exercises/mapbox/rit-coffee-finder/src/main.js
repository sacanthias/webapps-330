import * as map from "./map.js";
import * as ajax from "./ajax.js";

let poi;

const loadPOI = () =>{
  const url = "https://people.rit.edu/~acjvks/shared/330/igm-points-of-interest.php";

  const poiLoaded = (jsonString) =>{
    poi = JSON.parse(jsonString);
    console.log(poi);

    for (let p of poi){
      map.addMarker(p.coordinates, p.title, "Hello! i am a point of interest :)", "poi-marker");
    }
  }

  ajax.downloadFile(url,poiLoaded);
}

const setupUI = () =>{
  // it's easy to get [longitude,latitude] coordinates with this tool: http://geojson.io/
  const lnglatRIT = [-77.67454147338866, 43.08484339838443];
  const lnglatIGM = [-77.67990589141846, 43.08447511795301];

  // rit zoom
  btn1.onclick = () =>{
    map.setZoomLevel(15.5);
    map.setPitchAndBearing(0,0);
    map.flyTo(lnglatRIT);
  }

  // rit isometric view
  btn2.onclick = () =>{
    map.setZoomLevel(15.5);
    map.setPitchAndBearing(45,0);
    map.flyTo(lnglatRIT);
  }

  // world zoom 0
  btn3.onclick = () =>{
    map.setZoomLevel();
    map.setPitchAndBearing(0,0);
    map.flyTo();
  }

  // IGM zoom 18
  btn4.onclick = () =>{
    map.setZoomLevel(18);
    map.setPitchAndBearing(0,0);
    map.flyTo(lnglatIGM);
  }

  // load marker data
  btn5.onclick = () =>{
    // downloads data once
    if(!poi){
      loadPOI();
    }
  }
}

const init = () =>{
  map.initMap();
  map.loadMarkers();
  map.addMarkersToMap();
  setupUI();

  // map.setZoom(9);
  //map.setCenter([-96, 37.8]); // note the order - it's longitude,latitude - which is opposite of Google Maps
  //map.addControl(new mapboxgl.NavigationControl());
  //map.setStyle('mapbox://styles/mapbox/light-v11');
}

export {init};