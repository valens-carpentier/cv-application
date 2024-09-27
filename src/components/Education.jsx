function Education({
  className,
  schoolName,
  titleOfStudy,
  startDate,
  endDate,
  location,
  onStartDateChange,
  onEndDateChange,
  onSchoolNameChange,
  onTitleOfStudyChange,
  onLocationChange,
  onSubmit,
  onDelete,
  isEditing,
  isFormValid
}) {
  return (
    <div className={className}>
        <h3>Education</h3>
      <input
        type="text"
        placeholder="School Name"
        value={schoolName}
        onChange={onSchoolNameChange}
      />
      <input
        type="text"
        placeholder="Title of Study"
        value={titleOfStudy}
        onChange={onTitleOfStudyChange}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={onLocationChange}
      />
      <input
        type="text"
        placeholder="Start Date"
        value={startDate}
        onChange={onStartDateChange}
      />
      <input
        type="text"
        placeholder="End Date"
        value={endDate}
        onChange={onEndDateChange}
      />
      <button type="submit" onClick={onSubmit} disabled={!isFormValid}>
        {isEditing ? 'Update Education' : 'Submit Education'}
      </button>
      {isEditing && (
        <button type="button" onClick={onDelete}>
          Delete Education
        </button>
      )}
    </div>
  );
}

export default Education;