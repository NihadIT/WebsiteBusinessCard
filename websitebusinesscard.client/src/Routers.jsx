import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicePage from './components/pages/ServicePage'; 

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/service" component={ServicePage} />
            </Switch>
        </Router>
    );
}

export default Routers;
