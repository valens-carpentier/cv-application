import { useState } from 'react';

function Experience({
  className,
  companyName,
  positionTitle,
  mainResponsibilities,
  dateFrom,
  dateUntil,
  location,
  onLocationChange,
  onCompanyNameChange,
  onPositionTitleChange,
  onMainResponsibilitiesChange,
  onDateFromChange,
  onDateUntilChange,
  onSubmit,
  onDelete,
  isEditing,
  isFormValid
}) {

  return (
    <div className={className}>
        <h3>Experience</h3>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={onCompanyNameChange}
      />
      <input
        type="text"
        placeholder="Position Title"
        value={positionTitle}
        onChange={onPositionTitleChange}
      />
      <input
        type="text"
        placeholder="Main Responsibilities"
        value={mainResponsibilities}
        onChange={onMainResponsibilitiesChange}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={onLocationChange}
      />
      <input
        type="text"
        placeholder="Date From"
        value={dateFrom}
        onChange={onDateFromChange}
      />
      <input
        type="text"
        placeholder="Date Until"
        value={dateUntil}
        onChange={onDateUntilChange}
      />
      <button type="submit" onClick={onSubmit} disabled={!isFormValid}>
        {isEditing ? 'Update Experience' : 'Submit Experience'}
      </button>
      {isEditing && (
        <button type="button" onClick={onDelete}>
          Delete Experience
        </button>
      )}
    </div>
  );
}

export default Experience;