import React from 'react';
import { Link } from 'react-router-dom';
export const About: React.FC = () => {
    return (
        <div>
            About{' '}
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};
