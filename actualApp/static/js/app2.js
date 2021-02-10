var url_barLine = `/api/v2/bar_line`

//Initial test to ensure that we can run the data:

function retreiveData(sample) {
    d3.json(url_barLine).then(data=> {
        console.log(data)
    });
};
retreiveData();

// Initializes the page with a default plot
function init() {

    d3.json(url_barLine).then(data=> {

        var dates_2019 = data[0].map(d => d.Date);
        var units_2019 = data[0].map(d => d.Units);

        console.log(dates_2019);
        console.log(units_2019);

        set = [{
        x: dates_2019,
        y: units_2019 }];
    
        var CHART = d3.selectAll("#plot").node();
    
        Plotly.newPlot(CHART, set);
            
    });
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("body").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.node().value;

  var CHART = d3.selectAll("#plot").node();

    // Initialize x and y arrays
  var x = [];
  var y = [];

  d3.json(url_barLine).then(data=> {

        switch(dataset) {
        case "2019":
            x = data[0].map(d => d.Date);
            y = data[0].map(d => d.Units);
            break;

        case "2020":
            x = data[1].map(d => d.Date);
            y = data[1].map(d => d.Units);
            break;

        default:
            x = data[0].map(d => d.Date);
            y = data[0].map(d => d.Units);
            break;
        }
  });
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
  
}

init()