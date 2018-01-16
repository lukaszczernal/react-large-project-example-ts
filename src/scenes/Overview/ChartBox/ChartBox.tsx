import * as React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class ChartBox extends React.Component {
    title = 'title of chart';
    data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [{
            label: 'last 6 days',
            data: [1, 3, 20, 10, 12, 10],
            borderColor: '#acc236',
            fill: true,
        }]
    };

    render() {
        return <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe">R</Avatar>
                }
                title="Example of Chart"
                subheader="Superawesome chart"
            />
            <CardMedia title="graph">
                <Line data={ this.data }/>
            </CardMedia>
            <CardContent>
                <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with
                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">
                    Start one thing
                </Button>
                <Button color="primary">
                    Start
                </Button>
            </CardActions>
        </Card>;
    }

}

export default connect()(ChartBox);