import { useState } from 'react';

const Personal = ({ name, phone, email, onNameChange, onPhoneChange, onEmailChange }) => {

    return (
        <div className="card">
            <h3>Personal information</h3>
            <div>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={onNameChange} 
                        placeholder="Full name"
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={onPhoneChange} 
                        placeholder="Phone number"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={onEmailChange} 
                        placeholder="Email address"
                    />
                </div>
            </div>
        </div>
    );
};

export default Personal;