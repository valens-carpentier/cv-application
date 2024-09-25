import { useState } from 'react'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/Resume'
import './App.css'

function App() {

  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  })

  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateUntil: ''
  })

  const [resume, setResume] = useState({
    personal: personal,
    education: education,
    experience: experience
  })

  return (
    <>
      <div className="form-container">
        <Personal personal={personal} setPersonal={setPersonal} />  
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
      </div>
      <div className="resume-container">
        <Resume resume={resume} setResume={setResume} />
      </div>
    </>
  )
}

export default App
