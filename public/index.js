

let ctx = document.getElementById('myChart')




const labels = [
    'CH-750SD',
    'S21',
    'RV-8',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'VS0',
        backgroundColor: 'red',
        data: [ 34, 40, 58], 
    }, {
        label: 'VC',
        backgroundColor: 'green',
        data: [105, 155, 205]
    }, {
        label: 'VNE',
        backgroundColor: 'blue',
        data: [140, 215, 220]
    }
]
}

let config = {
    type: 'bar',
    data, 
    options: {
        scales: {
            xAxes: { stacked: true },
            yAxes: { stacked: false },
            // y: {
            //    title: {
            //        text: 'MPH'
            //    },
            //    display: false 
            // }
        },
    }
};



let myChart = new Chart(ctx, config);
