

let ctx = document.getElementById('myChart')




const labels = [
    'CH-750SD',
    'S21',
    'RV-8',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Dirty Stall Speed in MPH',
        backgroundColor: 'red',
        borderColor: 'white',
        data: [ 34, 40, 58]
    }]
}

let config = {
    type: 'bar',
    data, 
    options: {
         
        
    }
};



let myChart = new Chart(ctx, config);
