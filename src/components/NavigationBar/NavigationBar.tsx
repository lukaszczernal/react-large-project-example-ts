import * as React from 'react';
import Theme from 'assets/theme';

import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Button
} from 'material-ui';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  appBar: {
    'background-color': Theme.palette.primary['600'] // To match X-Act design
  }
};

interface OwnProps {}

type ClassNames = keyof typeof styles;

class NavigationBar extends React.Component<OwnProps & WithStyles<ClassNames>> {
  render() {
    return (
      <AppBar position="static" className={this.props.classes.appBar}>
        <Toolbar>
          <Typography
            type="title"
            color="inherit"
            className={this.props.classes.flex}
          >
            Administration
          </Typography>
          <Button raised={true} color="primary">Log af</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
