import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <nav>
                <ul>
                    <li><Link to="/layoutsviews">Layouts Views</Link></li>
                    <li><Link to="/containerviews">Container Views</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;