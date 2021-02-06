var url = `/api/v2/covid`


function retreiveData(sample) {
    d3.json(url).then(data=> {
        console.log(data)
    });
};

retreiveData();
//data.forEach(function(x){

    