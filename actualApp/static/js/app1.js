var url = `/api/v2/covid`

//Initial test to ensure that we can run the data:

function retreiveData(sample) {
    d3.json(url).then(data=> {
        console.log(data[0])
    });
};

retreiveData();


function test1(){

    d3.json(url).then(function(data){

        var month_dataset = []
        var quantity_dataset = []

        data.forEach(function(x){

            for (var i = 0; i<data.length;i++){

                var datapoint = data[i]
     
                if (datapoint.Reporting_PHU_City === "St. Thomas") {
                     month_dataset.push(datapoint.month.toString());
                     quantity_dataset.push(1);

                }}

            console.log(month_dataset)
            console.log(quantity_dataset)
            
            })})};

test1();

console.log("testing")