import React from 'react';
import { Link } from 'react-router-dom';

const LayoutIndex = () => {
    return (
        <div>
            <h1>Layouts</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="splitscreen">SplitScreen</Link>
                    </li>
                    <li>
                        <Link to="lists">Lists</Link>
                    </li>
                    <li>
                        <Link to="modal">Modal</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LayoutIndex;