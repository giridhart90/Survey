import React from 'react';
import './App.css';
import Questions from './components/Questions';

function App() {
    return (
        <>
            <div className="header">
                Survey
            </div>
            <Questions />
            <div className="footer"></div>
        </>
    );
}

export default App;