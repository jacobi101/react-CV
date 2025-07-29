import { useState } from 'react'
import '../styles/Bio.css'
import profile from '../assets/profile.jpg'

function Bio() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div id='bio-section'>
                <div id='bio-info'>
                    <div id="bio-left-column">
                        <div id='bio-first-row'>
                            <input id='name' type='text' placeholder='Name'/>
                        </div>
                        <div id='bio-second-row'>
                            <input id='profession' type='text' placeholder='Profession'/>
                        </div>
                        <div id='bio-third-row'>
                            <input id='email' type='text' placeholder='Email'/>
                            <input id='phone' type='text' placeholder='Phone Number'/>
                        </div>
                        <div id='bio-fourth-row'>
                            <input id='website' type='text' placeholder='Website'/>
                            <input id='city' type='text' placeholder='City of Residence'/>
                        </div>
                    </div>
                    <div id='bio-right-column'>
                        <div id='profile-container'>
                            <img src={profile} alt='Profile Picture Placeholder' id='resume-profile' />
                        </div>
                    </div>
                </div>
                <div id='bio-summary-container'>
                    <h2 className='cv-headers'>Summary</h2>
                    <div className='line'></div>
                    <textarea type="text" id='bio-summary' placeholder="What should we know about you?"></textarea>
                </div>
            </div>
        </>
    )
}

export default Bio