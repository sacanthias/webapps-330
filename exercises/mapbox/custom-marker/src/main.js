const init = () =>{
    // sets the access token, associating the map with your Mapbox account and its permissions
    mapboxgl.accessToken = 'pk.eyJ1Ijoibm9iNjAxMCIsImEiOiJjbXdsZDZoNmYwY3BsMnhvajQ5bmZ1MHJuIn0.N9KehoKvqPrhiKJ92hqAxA';

  // creates the map, setting the container to the id of the div you added in step 2, and setting the initial center and zoom level of the map
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [-96, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 3, // starting zoom
      style: 'mapbox://styles/mapbox/light-v11',
  });

    // map.setZoom(9);
     map.setCenter([-96, 37.8]); // note the order - it's longitude,latitude - which is opposite of Google Maps
    map.addControl(new mapboxgl.NavigationControl());
    //map.setStyle('mapbox://styles/mapbox/light-v11');

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        }
      ]
    };

    for(const feature of geojson.features){
        const marker = document.createElement('div');
        marker.className = 'marker';
        
        new mapboxgl.Marker(marker)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);
    }
}

export {init};