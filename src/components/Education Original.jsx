import { useState } from 'react'
import '../styles/Education.css'

function Education() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div id='education-section'>
                <h2 class='cv-headers'>Education</h2>
                <div class='line'></div>
                <div id='education-container'>
                    <div class='education-card'>
                        <div class="first-row">
                            <div class='degree'>
                                <input class='degree-input' type='text' placeholder='Degree (E.g. BSc, MFA, etc.)'/>
                            </div>
                            <p class='education-divider'>   -   </p>
                            <div class='university'>
                                <input class='university-input' type='text' placeholder='University'/>
                            </div>
                        </div>
                        <div class='second-row'>
                            <input class='degree-subject' type='text' placeholder='Subject of Degree' />
                            <p class='subject-placeholder'>   -   </p>
                            <div class='attendance-container'>
                                <input class='dates-attended' type='date' />
                                <p class='attendance-divider'>to</p>
                                <input class='dates-attended' type='date' />
                            </div>
                        </div>
                        <div class='third-row'>
                                <button class='remove-education'>Remove</button>
                        </div>
                    </div>
                </div>
                <button id='add-education'>Add Education</button>
            </div>
        </>
    )
}

export default Education