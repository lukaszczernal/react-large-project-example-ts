import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './assets/theme';

import Users from './scenes/Users';
import Overview from 'scenes/Overview/Overview';
import NavigationBar from './components/NavigationBar';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={ Theme }>
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/overview" component={Overview} />
            <Route
              render={() => (
                <div>
                  <Link to="/overview">
                    <Button>Overview</Button>
                  </Link>
                  <Link to="/users">
                    <Button>Users</Button>
                  </Link>
                </div>
              )}
            />
          </Switch>

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
