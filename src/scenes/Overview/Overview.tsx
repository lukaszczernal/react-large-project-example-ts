import * as React from 'react';
import { connect } from 'react-redux';
import ChartBox from './ChartBox';

class Overview extends React.Component {

  render() {
    return (
      <div>
        <h2>Overview</h2>
        <ChartBox/>
      </div>
    );
  }

}

export default connect()(Overview);