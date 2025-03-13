import React from 'react';
import '../styles/DeveloperPage.css';

const DeveloperPage = () => {
    return (
        <div className="developer-page">
            <h1 className="page-title">Kashvi Saree - Development Team</h1>

            <p className='basic-details-project' >The Kashvi Saree project was developed as part of the Google Winter of Code (GWOC) at NIT SURAT,
                 successfully completed within a 10-day deadline. This project was a collaborative effort by my team and made the user-friendly, and efficient web platform. the contribution is given as below -</p>
            <div className="team-section">

                <div className="developer dev-yash">
                    <h2>Yash Navnath Sabne</h2>
                    <p><strong>Backend Development:</strong> Built and optimized the complete backend using Node.js & Express.js.</p>
                    <p><strong>Frontend Functionalities:</strong> Implemented core interactivity, dynamic features, and data fetching.</p>
                    <p><strong>Search & Filter System:</strong> Developed fully dynamic search bar with efficient API integration.</p>
                    <p><strong>Performance Optimization:</strong> Enhanced API efficiency, reduced load times, and optimized database queries.</p>
                </div>

                <div className="developer dev-navneet">
                    <h2>Navneet Prajapati</h2>
                    <p><strong>UI/UX Design:</strong> Crafted a visually appealing, user-friendly frontend interface.</p>
                    <p><strong>Component Styling:</strong> Applied modern styling, animations, and consistency across pages.</p>
                    <p><strong>Added Functionalities:</strong> Contributed interactive UI elements for better user engagement.</p>
                </div>

                <div className="developer dev-mohit">
                    <h2>Mohit Singh</h2>
                    <p><strong>Responsive Design:</strong> Ensured the site works smoothly across all devices.</p>
                    <p><strong>Blog Section:</strong> Designed and implemented the blog UI with user-friendly layout.</p>
                    <p><strong>General Enhancements:</strong> Suggested and improved minor UI aspects.</p>
                </div>

                <div className="developer dev-priyansh">
                    <h2>Priyansh</h2>
                    <p><strong>Testing & Debugging:</strong> Assisted with identifying and fixing minor bugs.</p> 
                    <p><strong>Minor Enhancements:</strong> Assisted with polishing smaller UI/UX details.</p>
                </div>

            </div>
 
            <h3 className='mt-2' >Thank YOU!</h3> <a href="/">get back</a>
        </div>
    );
};

export default DeveloperPage;
