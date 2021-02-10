var url_app1 = `/api/v2/covid`

//Initial test to ensure that we can run the data:

//  function retreiveData(sample) {
//      d3.json(url).then(data=> {
//          console.log(data)
//      });
//  };

//retreiveData();


function dropdown_menu(){

    d3.json(url_app1).then(function(x){
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

    d3.json(url_app1).then(function(data){

        var month_dataset = [];
        var quantity_dataset = [];
        var month_test = [];

        var dropdownMenuValue = d3.selectAll("#selDataset").node().value;

        for (var i = 0; i<data.length;i++){

            var datapoint = data[i]
     
            if (datapoint.Reporting_PHU_City === `${dropdownMenuValue}`) {
                month_dataset.push(datapoint.month.toString());
                quantity_dataset.push(1);
                }};

        for (var i=0;i<month_dataset.length;i++){
            switch(month_dataset) {
                case "1":
                    month_test.push("January");
                    break;
                case "2":
                    month_test.push("February");
                    break;  
                case "3":
                    month_test.push("March");
                    break;                                         
                case "4":
                    month_test.push("April");
                    break;
                case "5":
                    month_test.push("May");
                    break;
                case "6":
                    month_test.push("June");
                    break;
                case "7":
                    month_test.push("July");
                    break;      
                case "8":
                    month_test.push("August");
                    break;
                case "9":
                    month_test.push("September"); 
                case "10":
                    month_test.push("October");
                case "11":
                    month_test.push("November");      
                case "12":
                    month_test.push("December");
                default:
                    console.log("error")                                                                 
            }
        };  
        
        console.log(month_test);

        var trace1 = {
            x:month_dataset,
            y:quantity_dataset,
            type:"bar"
        };

        var data = [trace1];
        
        var layout = {
            title: "Number of reported Covid-19 cases in your city",
            xaxis: {title: "Month"},
            yaxis: {title: "Number of Covid-19 cases reported"}
        };

        Plotly.newPlot("bar",data,layout);
        console.log(month_dataset)
        console.log(quantity_dataset)
            
    })};

test1();


d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged(){

    d3.json(url_app1).then(function(data){

        var dropdownMenuValue = d3.selectAll("#selDataset").node().value;
        console.log(dropdownMenuValue);

        var month_dataset = [];
        var quantity_dataset = [];
        // console.log(url_app1);
        for (var i = 0; i<data.length;i++){

            var datapoint = data[i]
     
            if (datapoint.Reporting_PHU_City === `${dropdownMenuValue}`) {
               month_dataset.push(datapoint.month.toString());
               quantity_dataset.push(1);
               }};

        //Bar chart: We restyle the necessary items:

         Plotly.restyle("bar","x",[month_dataset])
         Plotly.restyle("bar","y",[quantity_dataset])  

        //console.log(datapoint);
        
        console.log(month_dataset);
        console.log(quantity_dataset);

            })};


  // DETERMINE WHAT HAPPENS WHEN SOMEONE CHOOSES A DIFFERENT USER ID:
  
//   function optionChanged() {
       
//     d3.json(url).then(function(data) {

//         var month_dataset = [];
//         var quantity_dataset = [];  
//         var dropdownMenuValue = d3.selectAll("#selDataset").node().value;

//         for (var i = 0; i<data.length;i++){

//             var datapoint = data[i]
     
//             if (datapoint.Reporting_PHU_City === `${dropdownMenuValue}`) {
//                 month_dataset.push(datapoint.month.toString());
//                 quantity_dataset.push(1);
//                 }};

//        //Bar chart: We restyle the necessary items:

//         Plotly.restyle("bar","x",[month_dataset])
//         Plotly.restyle("bar","y",[quantity_dataset])         
//         console.log(dropdownMenuValue)
//         console.log(quantity_dataset)        
//   })};