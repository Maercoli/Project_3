var url = `/api/v2/covid`

//Initial test to ensure that we can run the data:

//function retreiveData(sample) {
//    d3.json(url).then(data=> {
//        console.log(data)
//    });
//};

//retreiveData();

console.log("kaka")
//SHOW ALL ALTERNATIVES USING THE DROPDOWN BUTTON: 

//var months = [1,2,3,4,5,6,7,8,9,10,11,12]

//months.forEach(function(x){

//    choice.append("option").text(x).property
//})

// We add the month number to the dropdown option:
function dropdown_options(){

    d3.json(url).then(function(x){

        const distinctCities = [...new Set(array.map(x=>x.Reporting_PHU_City))];
        distinctCities
    })
//    var choice = d3.select("#selDataset");
    
//    d3.json(url).then(function(data) {
//        var alternatives = data.names;
//        alternatives.forEach(function(x){
//            choice.append("option").text(x).property("value",x)
//        })
 //   })    
};

dropdown_options();
console.log("kaka")

    