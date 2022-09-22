import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/">Home</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
