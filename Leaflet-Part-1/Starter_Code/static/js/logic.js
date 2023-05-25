// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let baseMaps = {
    "Street": streetmap
}

// Create the map object with options.
var map = L.map("map", {
    center: [40.73, -74.0059],
    zoom: 3,
    layers: [streetmap]
});
let earthquakes = new L.LayerGroup();


// Create an overlayMaps object to hold the EarthQuakes layer.
var overlayMaps = {
    "Earthquakes": earthquakes
};

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then((data)=>{
    function style(feature){
        return {
            fillColor: color(feature.geometry.coordinates[2]),
            radius: radius(feature.properties.mag),
            fillOpacity: 0.8,
            weight: 0.5,
        }
    }
    function radius(mag){
        if(mag===0){
            return 1;
        }
        return mag*4;
    }
    function color(depth){
        if (depth>90){
            return "#ff0d0d";
        }
        if (depth>70){
            return "#ff4e11";
        }
        if (depth>50){
            return "#ff8e15";
        }
        if (depth>30){
            return "#fab733";
        }
        if (depth>10){
            return "#acb334";
        }
        return "#69b34c"
    }
    L.geoJson(data, {
        pointToLayer: function(feature,latlng){
            return L.circleMarker(latlng)

        },
        onEachFeature: function(feature,layer){
            layer.bindPopup("Magnitude: "
            + feature.properties.mag
            + "<br>Depth: "
            + feature.geometry.coordinates[2]
            + "<br>Location: "
            + feature.properties.place
    ) 
        },
        // Passing in our style object
        style: style
      }).addTo(map);
})


var legend = L.control({position: 'bottomright'});

legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend');
        let grades = [0, 10, 30, 50, 70, 90];
        let labels = ["#69b34c","#acb334","#fab733","#ff8e15","#ff4e11","#ff0d0d"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + labels[i] + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);