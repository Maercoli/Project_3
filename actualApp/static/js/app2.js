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

        // console.log(dates_2019);
        // console.log(units_2019);

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

    d3.json(url_barLine).then(data=> {

        var dates_2019 = data[0].map(d => d.Date);
        var units_2019 = data[0].map(d => d.Units);
        var dates_2020 = data[1].map(d => d.Date);
        var units_2020 = data[1].map(d => d.Units);
    
        // console.log(dates_2019);
        // console.log(units_2019);
        // console.log(dates_2020);
        // console.log(units_2020);

        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selYear");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.node().value;

        var CHART = d3.selectAll("#plot").node()

         // Initialize x and y arrays
        var x = [];
        var y = [];

        switch(dataset) {
        case "database2":
            x = dates_2019;
            y = units_2019;
            break;

        case "database1":
            x = dates_2020;
            y = units_2020;
            break;

        default:
            x = dates_2019;
            y = units_2019;
            break;
        }
    
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);


  });
    
  
}

init()


// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });
// var mixedChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: 'Bar Dataset',
//             data: [10, 20, 30, 40]
//         }, {
//             label: 'Line Dataset',
//             data: [50, 50, 50, 50],

//             // Changes this dataset to become a line
//             type: 'line'
//         }],
//         labels: ['January', 'February', 'March', 'April']
//     },
//     options: options
// });