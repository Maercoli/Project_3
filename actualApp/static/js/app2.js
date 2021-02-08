var url = `/api/v2/bar_line`

//Initial test to ensure that we can run the data:

function retreiveData(sample) {
    d3.json(url).then(data=> {
        console.log(data[0])
    });
};
retreiveData();
