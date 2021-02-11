// Create a map object
var myMap = L.map("map", {
    center: [43.6532, -79.3832],
    zoom: 5.4
  });

var corner1 = L.latLng(45, -83),
corner2 = L.latLng(41, -75),
bounds = L.latLngBounds(corner1, corner2);

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 15,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Country data
var url_app = `/api/v2/covidTmp`
var city_test  = [
  {
    name: [],
    location: [],
    cases: []
  }];
function mapData(){

  d3.json(url_app).then(function(data){

    var city = [];
    var month = [];
    var lat = [];
    var long = [];
    var location = [];
    var covid_num = [];
    
      
    //var dropdownMenuValue = d3.selectAll("#selDataset").node().value;

    for (var i = 0; i<data.length;i++){

        var datapoint = data[i]
        city.push(datapoint[0])
        //month.push(datapoint[1])
        lat.push(datapoint[1])
        long.push(datapoint[2])
        covid_num.push(datapoint[3])
        
        //console.log(datapoint)
        //if (datapoint.Reporting_PHU_City === `${dropdownMenuValue}`) {
        //    month_dataset.push(datapoint.month.toString());
        //    quantity_dataset.push(1);
        //    }};

    };
    location.push([lat,long])
    city_test.push([city,location,covid_num])
    //console.log(datapoint[0])
    //console.log(datapoint[1])
    //console.log(datapoint[2])
    //console.log(datapoint[3])
    
})};

  mapData();
  console.log(city_test)

  var cities = [
    {
      name: "Barrie",
      location: [44.41071258, -79.68630597],
      cases: 1457
    },
    {
      name: "Belleville",
      location: [44.18667362, -77.39144554],
      cases: 79
    },
    {
      name: "Brantford",
      location: [43.151811, -80.27437415],
      cases: 373
    },
    {
      name: "Brockville",
      location: [44.61584261, -75.70283308],
      cases: 453
    },
    {
      name: "Chatham",
      location: [42.403861, -82.208561],
      cases: 417
    },
    {
      name: "Cornwall",
      location: [45.02915233, -74.73629779],
      cases: 635
    },
    {
      name: "Guelph",
      location: [43.5248813, -80.2337433],
      cases: 886
    },
    {
      name: "Hamilton",
      location: [43.2576311, -79.87134089],
      cases: 1884
    },
    {
      name: "Kenora",
      location: [49.76961482, -94.48825435],
      cases: 73
    },
    {
      name: "Kingston",
      location: [44.2278735, -76.5252108],
      cases: 180
    },
    {
      name: "London",
      location: [42.98146842, -81.25401572],
      cases: 1150
    },
    {
      name: "Mississauga",
      location: [43.6474713 -79.7088933],
      cases: 14556
    },
    {
      name: "New Liskeard",
      location: [47.5092835, -79.681632],
      cases: 17
    },
    {
      name: "Newmarket",
      location: [44.048023, -79.480239],
      cases: 6985
    },
    {
      name: "North Bay",
      location: [46.31320706, -79.4678405],
      cases: 45
    },
    {
      name: "Oakville",
      location: [43.41399692, -79.74479581],
      cases: 2158
    },
    {
      name: "Ottawa",
      location: [45.3456651, -75.7639122],
      cases: 7223
    },
    {
      name: "Owen Sound",
      location: [44.57619612, -80.94097993],
      cases: 169
    },
    {
      name: "Pembroke",
      location: [45.799406, -77.118727],
      cases: 110
    },
    {
      name: "Peterborough",
      location: [44.30163229, -78.32134748],
      cases: 150
    },
    {
      name: "Point Edward",
      location: [42.98641646, -82.40480836],
      cases: 372
    },
    {
      name: "Port Hope",
      location: [43.96817279, -78.28579239],
      cases: 256
    },
    {
      name: "Sault Ste.Marie",
      location: [46.5323728, -84.3148358],
      cases: 44
    },
    {
      name: "Simcoe",
      location: [42.84782526, -80.30381491],
      cases: 532
    },
    {
      name: "St.Thomas",
      location: [42.77780366, -81.15115646],
      cases: 356
    },
    {
      name: "Stratford",
      location: [43.3686615, -81.00191283],
      cases: 155
    },
    {
      name: "Sudbury",
      location: [46.46609195, -80.99805884],
      cases: 128
    },
    {
      name: "Thorold",
      location: [43.1165366, -79.2412197],
      cases: 1511
    },
    {
      name: "Thunder Bay",
      location: [48.4005716, -89.2588508],
      cases: 117
    },
    {
      name: "Timmins",
      location: [48.47251 -81.32875],
      cases: 99
    },
    {
      name: "Toronto",
      location: [43.65659125, -79.37935801],
      cases: 27956
    },
    {
      name: "Waterloo",
      location: [43.46287573, -80.52091315],
      cases: 2213
    },
    {
      name: "Whitby",
      location: [43.898605, -78.940341],
      cases: 3108
    },
    {
      name: "Windsor",
      location: [42.3087965, -83.0336705],
      cases: 2858
    }  
  ];
  
  
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < city_test.length; i++) {
  
    // Conditionals for countries points
    var color = "";
  
    if (city_test[i].cases > 10000) {
      color = "yellow";
    }
    else if (5000 <= city_test[i].cases <= 9999) {
      color = "blue";
    }
    else if (1000 <= city_test[i].cases <= 4999) {
      color = "green";
    }
    else if (500 <= city_test[i].cases <= 999) {
      color = "pink";
    }
    else if (100 <= city_test[i].cases <= 499) {
      color = "orange";
    }
    else {
      color = "red";
    }
  
    // Add circles to map
    L.circle(city_test[i].location, {
      fillOpacity: 0.5,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: city_test[i].cases * 50
    }).bindPopup("<h1>" + city_test[i].name + "</h1> <hr> <h3>Cases: " + city_test[i].cases + "</h3>").addTo(myMap);
  }