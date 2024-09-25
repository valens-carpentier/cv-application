// Create three div with personal, education, and experience
// Each div should have a heading
// Each div should have a paragraph with the data coming from the three components education.jsx, experience.jsx and personal.jsx

import Personal from './Personal'

const Resume = () => {
    return (
        <div className = "resume">
            <div className="resume-section">
            <h2>Personal</h2>
                <p>{Personal.name}</p>
                <p>{Personal.email}</p>
                <p>{Personal.phone}</p>
            </div>
            <h2>Education</h2>
            <h2>Experience</h2>
        </div>
    )
}

export default Resume;
