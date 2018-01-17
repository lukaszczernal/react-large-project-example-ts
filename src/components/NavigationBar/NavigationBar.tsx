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

type ClassNames = 'root' | 'flex' | 'appBar' | 'button' | 'leftIcon';

const decorate = withStyles((theme) => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  appBar: {
    boxShadow: 'none'
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: 'none'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
}));

const NavigationBar = decorate<OwnProps>(
  class extends React.Component<WithStyles<ClassNames>> {
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
            <Button className={this.props.classes.button} color="contrast">
              <Icon className={this.props.classes.leftIcon}>work</Icon>
              Administration
            </Button>
            <Button className={this.props.classes.button} color="contrast">
              <Icon className={this.props.classes.leftIcon}>group</Icon>
              Support
            </Button>
            <Button className={this.props.classes.button} color="contrast">
              <Icon className={this.props.classes.leftIcon}>settings</Icon>
              API GUI
            </Button>
            <Button raised={true} color="accent">Login</Button>
          </Toolbar>
        </AppBar>
      );
    }
  }
);

export default NavigationBar;
