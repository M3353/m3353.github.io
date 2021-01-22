import '../../Util/styles.css';
import './Navigation.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Digital from '../../Screens/Digital/Digital';
import Games from '../../Screens/Games/Games';
import Home from '../../Screens/Home/Home';
import Traditional from '../../Screens/Traditional/Traditional';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Navigation (){
    return (
        <div className = "contentWrap">
            <Router>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/traditional" component={Traditional} />
                        <Route exact path="/digital" component={Digital} />
                        <Route exact path="/games" component={Games} />
                    </Switch>
                <Footer />
            </Router>
      </div>
    )
}

export default Navigation;