
//--------------------------------------------------------
// Retrieve data from the CSV file and execute everything below
var url = `/api/v2/scatter`

//Initial test to ensure that we can run the data:

function retreiveData(sample) {
    d3.json(url).then(data=> {
        console.log(data[0])
    });
};
retreiveData();

