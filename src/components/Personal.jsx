import { useState } from 'react'

const Personal = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone)
    }

    const handleDelete = () => {
        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <div className="card">
            <p>Name</p>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Email</p>
            <input type="text" value={email} onChange={handleEmailChange} />
            <p>Phone</p>
            <input type="text" value={phone} onChange={handlePhoneChange} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
    
}

export default Personal;