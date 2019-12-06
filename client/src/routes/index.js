import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

import Student from '../pages/Students';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Home} isPrivate />
            <Route path="/student/list" component={Student.list} isPrivate />
        </Switch>
    );
};

export default Routes;
