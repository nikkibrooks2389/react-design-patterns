//index.js-------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//components/UserProfile-------------------------------------------------------------------

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../store/userSelectors';
import { logoutUser } from '../store/userActions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{currentUser.name}</h1>
            <p>{currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;