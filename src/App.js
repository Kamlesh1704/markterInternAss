import { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import HeaderContext from './reactContext/HeaderContext';
import Classes from './components/Classes';

class App extends Component {
  state = {isActive: 'HOME'}

  changeToHome = () => {
    this.setState({isActive: 'HOME'})
  }

  changeToClasses = () => {
    this.setState({isActive: 'CLASSES'})
  }

  render() {
    const {isActive} = this.state
    return (
      <HeaderContext.Provider value={{isActive, changeToHome: this.changeToHome, changeToClasses: this.changeToClasses}}><BrowserRouter>
            <Switch>
              <Route exact path="/login" component={LoginForm} />        
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/classes" component={Classes} />
            </Switch>
          </BrowserRouter>
      </HeaderContext.Provider>
    );
  }
};

export default App;
