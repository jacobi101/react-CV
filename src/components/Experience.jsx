import { useState } from 'react'
import '../styles/Experience.css'

function Experience() {
    //experience entries - empty one to start
    const [experienceEntries, setExperienceEntries] = useState([
        {
            id: crypto.randomUUID(),
            position: '',
            company: '',
            location: '',
            dateFrom: '',
            dateTo: '',
            jobSummary: ''
        }
    ]);

    //change the entry already made in case it is edited
    const handleInputChange = (e, id, field) => {
        const { value } = e.target;
        setExperienceEntries(prevEntries => 
            prevEntries.map(entry =>
                entry.id === id ? {...entry, [field]: value } : entry
                )
            );
    };

    //function for adding a new experience
    const handleAddExperience = () => {
        setExperienceEntries(prevEntries => [
            ...prevEntries,
            {
                id: crypto.randomUUID(),
                position: '',
                company: '',
                location: '',
                dateFrom: '',
                dateTo: '',
                jobSummary: ''
            }
        ]);
    };

    //removes existing experience
    const handleRemoveExperience = (idToRemove) => {
        setExperienceEntries(prevEntries =>
            prevEntries.filter(entry => entry.id !== idToRemove)
        );
    };

    //factor in functions into actual return value
    return (
        <>
            <div id='experience-section'>
                <h2 className='cv-headers'>Experience</h2>
                <div className='line'></div>
                <div id='experience-container'>
                    {experienceEntries.map(entry => (
                        <div className='job-card' key={entry.id}>
                            <div className='job-first-row'>
                                <input className='job-title' type='text' placeholder='Title' value={entry.position} onChange={(e) => handleInputChange(e, entry.id, 'position')}/>
                            </div>
                            <div className='job-second-row'>
                                <div className='company-info'>
                                    <input className='company' type='text' placeholder='Company' value={entry.company} onChange={(e) => handleInputChange(e, entry.id, 'company')}/>
                                    <p className='company-divider'>|</p>
                                    <input className='location' type='text' placeholder='Location' value={entry.location} onChange={(e) => handleInputChange(e, entry.id, 'location')}/>
                                </div>
                                <div className='tenure-container'>
                                    <input className='tenure-dates' type='date' value={entry.dateFrom} onChange={(e) => handleInputChange(e, entry.id, 'dateFrom')}/>
                                    <p className='tenure-divider'>to</p>
                                    <input className='tenure-dates' type='date' value={entry.dateTo} onChange={(e) => handleInputChange(e, entry.id, 'dateTo')}/>
                                </div>
                            </div>
                            <div className='job-third-row'>
                                <textarea type="text" className='job-summary' placeholder="Position Summary" value={entry.jobSummary} onChange={(e) => handleInputChange(e, entry.id, 'jobSummary')}>example text</textarea>
                            </div>
                            <div className='job-fourth-row'>
                                <button className='remove-experience' onClick={() => handleRemoveExperience(entry.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <button id='add-experience' onClick={handleAddExperience}>
                        Add Experience
                    </button>
                </div>
            </div>
        </>
    )
}

export default Experience