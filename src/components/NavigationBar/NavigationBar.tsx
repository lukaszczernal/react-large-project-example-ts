import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Button
} from 'material-ui';

interface OwnProps {}

type ClassNames = 'root' | 'flex' | 'appBar';

const decorate = withStyles(({palette}) => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  }
}));

const NavigationBar = decorate<OwnProps>(
  class extends React.Component<WithStyles<ClassNames>> {
    render() {
      return (
        <AppBar position="static" color="accent">
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              className={this.props.classes.flex}
            >
              Administration
            </Typography>
            <Button raised={true} color="primary">Login</Button>
          </Toolbar>
        </AppBar>
      );
    }
  }
);

export default NavigationBar;
