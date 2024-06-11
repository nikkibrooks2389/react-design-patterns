//views/Home
import React from 'react';
import MainLayout from '../layout/MainLayout';

const Home = () => {
    return (
        <MainLayout>
            <div>
                <h1>Home Page</h1>
                <p>Welcome to the home page!</p>
            </div>
        </MainLayout>
    );
};

// export default Home;

//views/About---------------------------------------------------------------------------------------

import React from 'react';
import MainLayout from '../layout/MainLayout';

const About = () => {
    return (
        <MainLayout>
            <div>
                <h1>About Page</h1>
                <p>This is the about page.</p>
            </div>
        </MainLayout>
    );
};

// export default About;

//views/Dashboard---------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { fetchUserData } from '../services/userService';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData().then((data) => {
            setUserData(data);
        });
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout>
            <div>
                <h1>Dashboard</h1>
                <p>Welcome, {userData.name}!</p>
            </div>
        </MainLayout>
    );
};

// export default Dashboard;

//views/Profile---------------------------------------------------------------------------------------

import React from 'react';
import MainLayout from '../layout/MainLayout';

const Profile = () => {
    return (
        <MainLayout>
            <div>
                <h1>Profile Page</h1>
                <p>This is your profile page.</p>
            </div>
        </MainLayout>
    );
};

// export default Profile;

//views/Routes---------------------------------------------------------------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Profile from './Profile';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
};

// export default Routes;


// Integrating Views with Routes-------------------------------------------------------------------------------------------------------------------
// To integrate the views with routing, you can use a routing library like react-router-dom. 
// The routes.js file in the views folder defines the application's routes and maps them to the corresponding view components.

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './views/routes';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById('root')
);