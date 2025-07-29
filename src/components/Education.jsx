import { useState } from 'react';
import '../styles/Education.css';

function Education() {
    // education entries - empty one to start
    const [educationEntries, setEducationEntries] = useState([
        {
            id: crypto.randomUUID(), //ensures uniqueness of each education entry - we will want an updated list of these to be created
                                     //each time an entry is added or deleted
            degree: '',
            university: '',
            subject: '',
            startDate: '',
            endDate: ''
        }
    ]);

    //this changes the information stored in the list of entries
    const handleInputChange = (e, id, field) => {
        const { value } = e.target;
        setEducationEntries(prevEntries =>
            prevEntries.map(entry =>
                entry.id === id ? { ...entry, [field]: value } : entry
            )
        );
    };

    //this adds a new education education on the page
    const handleAddEducation = () => {
        setEducationEntries(prevEntries => [
            ...prevEntries,
            {
                id: crypto.randomUUID(),
                degree: '',
                university: '',
                subject: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };

    //this removes an education experience from the page
    const handleRemoveEducation = (idToRemove) => {
        setEducationEntries(prevEntries =>
            prevEntries.filter(entry => entry.id !== idToRemove)
        );
    };

    return (
        <div id='education-section'>
            <h2 className='cv-headers'>Education</h2>
            <div className='line'></div>
            <div id='education-container'>
                {educationEntries.map(entry => (
                    <div className='education-card' key={entry.id}>
                        <div className="edu-first-row">
                            <div className='degree'>
                                <input
                                    className='degree-input'
                                    type='text'
                                    placeholder='Degree (E.g. BSc, MFA, etc.)'
                                    value={entry.degree}
                                    onChange={(e) => handleInputChange(e, entry.id, 'degree')}
                                />
                            </div>
                            <p className='education-divider'> | </p>
                            <div className='university'>
                                <input
                                    className='university-input'
                                    type='text'
                                    placeholder='University'
                                    value={entry.university}
                                    onChange={(e) => handleInputChange(e, entry.id, 'university')}
                                />
                            </div>
                        </div>
                        <div className='edu-second-row'>
                            <input
                                className='degree-subject'
                                type='text'
                                placeholder='Subject of Degree'
                                value={entry.subject}
                                onChange={(e) => handleInputChange(e, entry.id, 'subject')}
                            />
                            <p className='subject-placeholder'> - </p>
                            <div className='attendance-container'>
                                <input
                                    className='dates-attended'
                                    type='date'
                                    value={entry.startDate}
                                    onChange={(e) => handleInputChange(e, entry.id, 'startDate')}
                                />
                                <p className='attendance-divider'>to</p>
                                <input
                                    className='dates-attended'
                                    type='date'
                                    value={entry.endDate}
                                    onChange={(e) => handleInputChange(e, entry.id, 'endDate')}
                                />
                            </div>
                        </div>
                        <div className='edu-third-row'>
                            {(
                                <button
                                    className='remove-education'
                                    onClick={() => handleRemoveEducation(entry.id)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button id='add-education' onClick={handleAddEducation}>
                Add Education
            </button>
        </div>
    );
}

export default Education;