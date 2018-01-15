import * as React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

class ChartBox extends React.Component {
    data = {
        datasets: [{
            data: [ 10, 30, 20, 40, 20, 100 ],
            backgroundColor: [
                'rgb(54,  162, 235)',
                'rgb(75,  192, 192)',
                'rgb(201, 203, 207)',
                'rgb(255, 159, 64)',
                'rgb(153, 102, 255)',
                'rgb(255, 99,  132)',
                'rgb(255, 205, 86)'
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'mocked',
            'data',
            'you',
            'shouldn`t',
            'care',
            'about'
        ]
    };

    render() {
        return (
            <div>
                <Doughnut data={this.data} />
            </div>
        );
    }

}

export default connect()(ChartBox);