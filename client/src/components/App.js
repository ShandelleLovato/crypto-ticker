import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Coin from './Coin';

class App extends Component {
  render() {
    return (
      <div>
      <Container>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <ProtectedRoute exact path='/' component={Home} />
              <ProtectedRoute
                exact
                path="/coins/:id"
                component={Coin}
              ></ProtectedRoute>
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </Container>
      </div>
    );
  }
}

export default App;
