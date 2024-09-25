// add company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

import { useState } from 'react'

const Experience = () => {
    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [mainResponsibilities, setMainResponsibilities] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateUntil, setDateUntil] = useState('')

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value)
    }

    const handlePositionTitleChange = (e) => {
        setPositionTitle(e.target.value)
    }
    
    const handleMainResponsibilitiesChange = (e) => {
        setMainResponsibilities(e.target.value)
    }

    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value)
    }

    const handleDateUntilChange = (e) => {
        setDateUntil(e.target.value)
    }   

    return (
        <div className="card">
            <h1>Experience</h1>
            <input type="text" value={companyName} onChange={handleCompanyNameChange} />
            <input type="text" value={positionTitle} onChange={handlePositionTitleChange} />
            <input type="text" value={mainResponsibilities} onChange={handleMainResponsibilitiesChange} />
            <input type="text" value={dateFrom} onChange={handleDateFromChange} />
            <input type="text" value={dateUntil} onChange={handleDateUntilChange} />
        </div>
    )
    
}

export default Experience;