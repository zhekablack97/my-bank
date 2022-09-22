import React from 'react';
import { Link } from 'react-router-dom';
export const Home: React.FC = () => {
    return (
        <div>
            home
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};
