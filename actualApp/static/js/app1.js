var url = `/api/v2/covid`

//Initial test to ensure that we can run the data:

function retreiveData(sample) {
    d3.json(url).then(data=> {
        console.log(data)
    });
};

retreiveData();


function dropdown_menu(){

    d3.json(url).then(function(x){
// We create an array with all the cities included in each entry
    var array_v0 = [];

    for (var i = 0; i<x.length;i++){
        var datapoint = x[i]
        array_v0.push(datapoint.Reporting_PHU_City)
    };
// We create an array with all the unique values of array_v0
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    var unique = array_v0.filter(onlyUnique);

 // We add array to drop-down menu
    var choice = d3.select("#selDataset");
    
    unique.forEach(function(x){
             choice.append("option").text(x).property("value",x)
     })
  

    })};

dropdown_menu();



function test1(){

    d3.json(url).then(function(data){

        var month_dataset = [];
        var quantity_dataset = [];

        var dropdownMenuValue = d3.selectAll("#selDataset").node().value;

        for (var i = 0; i<data.length;i++){

            var datapoint = data[i]
     
            if (datapoint.Reporting_PHU_City === `${dropdownMenuValue}`) {
                month_dataset.push(datapoint.month.toString());
                quantity_dataset.push(1);
                }};

        var trace1 = {
            x:month_dataset,
            y:quantity_dataset,
            type:"bar"
        };

        var data = [trace1];
        
        var layout = {
            title: "Number of Covid-19 cases in City",
            xaxis: {title: "month"},
            yaxis: {title: "Number of Covid-19 cases"}
        };

        Plotly.newPlot("bar",data,layout);

            
    })};

test1();


d3.selectAll("#selDataset").on("change", optionChanged);

  // DETERMINE WHAT HAPPENS WHEN SOMEONE CHOOSES A DIFFERENT USER ID:
  
  function optionChanged() {
       
    d3.json(url).then(function(data) {

        var month_dataset1 = [];
        var quantity_dataset1 = [];  
        var dropdownMenuValue1 = d3.selectAll("#selDataset").node().value;

        for (var i = 0; i<data.length;i++){

            var datapoint1 = data[i]
     
            if (datapoint1.Reporting_PHU_City === `${dropdownMenuValue1}`) {
                month_dataset1.push(datapoint1.month.toString());
                quantity_dataset1.push(1);
                }};
        //Bar chart: We restyle the necessary items:

        Plotly.restyle("bar","x",[month_dataset1])
        Plotly.restyle("bar","y",[quantity_dataset1])         
        console.log(month_dataset1)
        console.log(quantity_dataset1)        
  })};