import React from 'react';

const Welcome = ({ role }) =>
{
    let welcomeMessage = '';

    switch (role) {
        case 'student':
            welcomeMessage = 'Welcome, Student to your Profile!'; // Customize the welcome message for students
            break;
        case 'admin':
            welcomeMessage = 'Welcome, Admin!';
            break;
        case 'instructor':
            welcomeMessage = 'Welcome, Instructor!';
            break;
        default:
            welcomeMessage = 'Welcome!';
    }

    return (
        <div className="welcome mt-32 text-title text-3xl ml-10 -mb-10">
            <h3>{welcomeMessage}</h3>
        </div>
    );
};

export default Welcome;
