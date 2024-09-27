import { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [name, setName] = useState('Valens Carpentier');
  const [phone, setPhone] = useState('+33 6 65 22 52 46');
  const [email, setEmail] = useState('valens.carpentier@gmail.com');

  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainResponsibilities, setMainResponsibilities] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');

  const [submittedData, setSubmittedData] = useState([
    {
      schoolName: 'Random University',
      titleOfStudy: 'Computer Science',
      location: 'New York',
      startDate: '2020',
      endDate: '2024'
    },
    {
      schoolName: 'Example College',
      titleOfStudy: 'Information Technology',
      location: 'New York',
      startDate: '2020',
      endDate: '2024'
    }
  ]);

  const [submittedExperienceData, setSubmittedExperienceData] = useState([
    {
      companyName: 'Example Company',
      positionTitle: 'Software Engineer',
      mainResponsibilities: 'Develop and maintain software applications',
      workLocation: 'New York',
      dateFrom: '2020',
      dateUntil: '2023'
    }
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex !== null) {
      setSubmittedData((prevData) =>
        prevData.map((data, index) =>
          index === selectedIndex
            ? { schoolName, titleOfStudy, location,startDate, endDate }
            : data
        )
      );
      setSelectedIndex(null);
    } else {
      setSubmittedData((prevData) => [
        ...prevData,
        {
          schoolName,
          titleOfStudy,
          location,
          startDate,
          endDate
        }
      ]);
    }
    setSchoolName('');
    setTitleOfStudy('');
    setLocation('');
    setStartDate('');
    setEndDate('');
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    if (selectedExperienceIndex !== null) {
      setSubmittedExperienceData((prevData) =>
        prevData.map((data, index) =>
          index === selectedExperienceIndex
            ? { companyName, positionTitle, mainResponsibilities, location, dateFrom, dateUntil }
            : data
        )
      );
      setSelectedExperienceIndex(null);
    } else {
      setSubmittedExperienceData((prevData) => [
        ...prevData,
        {
          companyName,
          positionTitle,
          mainResponsibilities,
          location,
          dateFrom,
          dateUntil
        }
      ]);
    }
    setCompanyName('');
    setPositionTitle('');
    setMainResponsibilities('');
    setLocation('');
    setDateFrom('');
    setDateUntil('');
  };

  const handleDeleteEducation = (index) => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
    setSelectedIndex(null);
    setSchoolName('');
    setTitleOfStudy('');
    setLocation('');
    setStartDate('');
    setEndDate('');
  };

  const handleDeleteExperience = (index) => {
    setSubmittedExperienceData((prevData) => prevData.filter((_, i) => i !== index));
    setSelectedExperienceIndex(null);
    setCompanyName('');
    setPositionTitle('');
    setMainResponsibilities('');
    setLocation('');
    setDateFrom('');
    setDateUntil('');
  };

  const handleEditEducation = (index) => {
    const data = submittedData[index];
    setSchoolName(data.schoolName);
    setTitleOfStudy(data.titleOfStudy);
    setLocation(data.location);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
    setSelectedIndex(index);
  };

  const handleEditExperience = (index) => {
    const data = submittedExperienceData[index];
    setCompanyName(data.companyName);
    setPositionTitle(data.positionTitle);
    setMainResponsibilities(data.mainResponsibilities);
    setWorkLocation(data.workLocation);
    setDateFrom(data.dateFrom);
    setDateUntil(data.dateUntil);
    setSelectedExperienceIndex(index);
  };

  return (
    <>
      <div className='left-container'>
      <div className="form-container">
        <Personal
          className="card"
          name={name}
          phone={phone}
          email={email}
          onNameChange={(e) => setName(e.target.value)}
          onPhoneChange={(e) => setPhone(e.target.value)}
          onEmailChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <form className='form-container' onSubmit={handleEducationSubmit}>
        <Education
          className="card"
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          startDate={startDate}
          endDate={endDate}
          location={location}
          onLocationChange={(e) => setLocation(e.target.value)}
          onSchoolNameChange={(e) => setSchoolName(e.target.value)}
          onTitleOfStudyChange={(e) => setTitleOfStudy(e.target.value)}
          onStartDateChange={(e) => setStartDate(e.target.value)}
          onEndDateChange={(e) => setEndDate(e.target.value)}
          onSubmit={handleEducationSubmit}
          onDelete={() => selectedIndex !== null && handleDeleteEducation(selectedIndex)}
          isEditing={selectedIndex !== null}
          isFormValid={schoolName && titleOfStudy && startDate && endDate}
        />
      </form>

      <form className='form-container' onSubmit={handleExperienceSubmit}>
        <Experience
          className="card"
          companyName={companyName}
          positionTitle={positionTitle}
          mainResponsibilities={mainResponsibilities}
          dateFrom={dateFrom}
          dateUntil={dateUntil}
          workLocation={workLocation}
          onCompanyNameChange={(e) => setCompanyName(e.target.value)}
          onPositionTitleChange={(e) => setPositionTitle(e.target.value)}
          onMainResponsibilitiesChange={(e) => setMainResponsibilities(e.target.value)}
          onWorkLocationChange={(e) => setWorkLocation(e.target.value)}
          onDateFromChange={(e) => setDateFrom(e.target.value)}
          onDateUntilChange={(e) => setDateUntil(e.target.value)}
          onSubmit={handleExperienceSubmit}
          onDelete={() => selectedExperienceIndex !== null && handleDeleteExperience(selectedExperienceIndex)}
          isEditing={selectedExperienceIndex !== null}
          isFormValid={companyName && positionTitle && mainResponsibilities && dateFrom && dateUntil}
        />
      </form>
      </div>

      <div className="resume">
        <div className="resume-header">
          <h1>{name}</h1>
          <div className="contact-info">
            <span>{email}</span>
            <span>{phone}</span>
          </div>
        </div>
        <div className="resume-education">
          <h3>Education</h3>
          {submittedData.length === 0 && (
            <p>No education data submitted yet.</p>
          )}
          {submittedData.map((data, index) => (
            <div className='cv-entry' key={index} onClick={() => handleEditEducation(index)}>
              <div className='left'>
                <p>{data.startDate} - {data.endDate}</p>
                <p>{data.location}</p>
              </div>
              <div className='right'>
                <p><strong>{data.schoolName}</strong></p>
                <p>{data.titleOfStudy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-experience">
          <h3>Experience</h3>
          {submittedExperienceData.length === 0 && (
            <p>No experience data submitted yet.</p>
          )}
          {submittedExperienceData.map((data, index) => (
            <div className='cv-entry' key={index} onClick={() => handleEditExperience(index)}>
               <div className='left'>
               <p>{data.dateFrom} - {data.dateUntil}</p>
               <p>{data.workLocation}</p>
            </div>
            <div className='right'>
              <p><strong>{data.companyName}</strong></p>
              <p>{data.positionTitle}</p>
              <p>{data.mainResponsibilities}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App