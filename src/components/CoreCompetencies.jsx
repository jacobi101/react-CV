import { useState } from 'react'
import '../styles/Bio.css'
import profile from '../assets/profile.jpg'

function Bio() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div id='bioSection'>
                <div id="topRow">
                    <div id='leftColumn'>
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Email'/>
                        <input type='text' placeholder='Phone Number'/>
                    </div>
                    <div id='rightColumn'>
                        <img src={profile} alt='Profile Picture Placeholder' id='resume-profile' />
                        <h1><input type='text' placeholder='Job Title' /></h1>
                    </div>
                </div>
                <div id='bottomRow'>
                    <input id='blurbInput' type='text' placeholder='Quick blurb on your professional capacities.' />
                </div>
            </div>
        </>
    )
}

export default Bio