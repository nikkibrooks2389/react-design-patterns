//Main Layout -------------------------------------------------------

import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthLayout from './AuthLayout';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <AuthLayout>{children}</AuthLayout>;
    }

    return (
        <div className="main-layout">
            <Header />
            <div className="content-area">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

// export default MainLayout;

//AuthLayout -------------------------------------------------------
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <header className="auth-header">
                <h1>Welcome to My Application</h1>
            </header>
            <main className="auth-content">
                {children}
            </main>
        </div>
    );
};

// export default AuthLayout;

//Header -------------------------------------------------------

const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="header">
            <h1>My Application</h1>
            {isLoggedIn && (
                <nav>
                    <button onClick={logout}>Logout</button>
                </nav>
            )}
        </header>
    );
};

//   export default Header;
// hook for authentication -------------------------------------------------------

//To manage the authentication state, you can create a custom hook that provides the
// authentication status and related actions like login and logout.
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

//integration of the AuthProvider in the App component ----------------------------------------------------------------------------------------------

//Wrap your application with the AuthProvider to provide the authentication context to your components.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);

//using layout components in the App component -------------------------------------------------------

import React from 'react';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useAuth } from './hooks/useAuth';

function App() {
    const { isLoggedIn } = useAuth();

    return (
        <MainLayout>
            {isLoggedIn ? <HomePage /> : <LoginPage />}
        </MainLayout>
    );
}

export default App;


//-------------------------------------------------------
// Benefits of This Approach
// Consistency: Ensures a consistent look and feel across all pages of the application by using the same layout components.
// Reusability: Facilitates the reuse of layout components across different parts of the application, reducing code duplication.
// Maintainability: Centralizes the layout logic in one place, making it easier to update and maintain the layout structure.
// Scalability: Simplifies the process of scaling the application by providing a clear structure for adding new layout elements.
// Conditional Rendering: Allows you to render different layouts based on the user's authentication state, providing a customized experience for logged-in and logged-out users.
// Modularity: Keeps authentication logic separate from the main layout logic, enhancing maintainability and readability.
// Discoverability: Developers can find all relevant code for a specific feature in one place, enhancing the discoverability and readability of the code.
// By organizing layout-related components in a dedicated layout folder and incorporating authentication-aware layouts, you can manage different user experiences seamlessly within your React application, maintaining a clean and structured codebase.