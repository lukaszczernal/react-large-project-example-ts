import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Button,
  Icon
} from 'material-ui';

interface OwnProps {}

type ClassNames = 'root' | 'flex' | 'appBar';

const decorate = withStyles(({palette}) => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  appBar: {
    boxShadow: 'none'
  }
}));

const NavigationBar = decorate<OwnProps>(
  class extends React.Component<WithStyles<ClassNames>> {
    render() {
      return (
        <AppBar position="static" color="accent" className={this.props.classes.appBar}>
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              className={this.props.classes.flex}
            >
              Administration
            </Typography>
            <Button color="inherit">
              <Icon>work</Icon>
              Administration
            </Button>
            <Button color="inherit">
              <Icon>group</Icon>
              Support
            </Button>
            <Button color="inherit">
              <Icon>settings</Icon>
              API GUI
            </Button>
            <Button raised={true} color="primary">Login</Button>
          </Toolbar>
        </AppBar>
      );
    }
  }
);

export default NavigationBar;
