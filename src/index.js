import React , {component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ShoppingCart from './components/Shoppingcart';
import Home from './components/Home';
import UserProfile from './components/user/profile';
import SignIn from './components/user/signin';
import SignUp from './components/user/signup';
import Checkout from './components/shop/checkout';

import '../web/css/style.css'
import '../web/css/bootstrap.min.css'
import '../web/css/font-awesome.min.css'

class SiteMap extends React.Component{
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/shopping-cart" component={ShoppingCart}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <SiteMap />,
  document.getElementById('root')
);