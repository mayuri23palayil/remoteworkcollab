import React from 'react';
import '../styles/Home.css';

const Home = () => {
    const handleCardClick = (feature) => {
        if (feature === 'Share Files') {
            window.location.href = 'http://localhost:5000/file-share.html'; // Redirect to file-share.html
        } else if (feature === 'Receive Files') {
            window.location.href = 'http://localhost:5000/receiver.html'; // Redirect to receiver.html
        } else if (feature === 'Collaborate') {
            window.location.href = 'https://collabspace-tau.vercel.app/'; // Redirect to external collaboration space
        } else {
            alert(`You clicked on: ${feature}`);
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome To Mayuri's Remote Work Collaboration Platform!</h1>
            <div className="cards-container">
                <div className="card" onClick={() => handleCardClick('Join a Video Call')}>
                    <h2>Join a Video Call</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('Share Files')}>
                    <h2>Share Files</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('Receive Files')}>
                    <h2>Receive Files</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('Collaborate')}>
                    <h2>Collaborate</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
