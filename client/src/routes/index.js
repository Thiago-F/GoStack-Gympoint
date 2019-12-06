import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Home} isPrivate />
        </Switch>
    );
};

export default Routes;
