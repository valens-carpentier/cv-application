import { useState } from 'react'

const Education = () => {
    const [schoolName, setSchoolName] = useState('')
    const [titleOfStudy, setTitleOfStudy] = useState('')
    const [dateOfStudy, setDateOfStudy] = useState('')

    const handleSchoolNameChange = (e) => {
        setSchoolName(e.target.value)
    }

    const handleTitleOfStudyChange = (e) => {
        setTitleOfStudy(e.target.value)
    }
    
    const handleDateOfStudyChange = (e) => {
        setDateOfStudy(e.target.value)
    }

    return (
        <div className="card">
            <h1>Education</h1>
            <input type="text" value={schoolName} onChange={handleSchoolNameChange} />
            <input type="text" value={titleOfStudy} onChange={handleTitleOfStudyChange} />
            <input type="text" value={dateOfStudy} onChange={handleDateOfStudyChange} />
        </div>
    )
    
}

export default Education;