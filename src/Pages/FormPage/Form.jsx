import React from 'react'
import './form.css'
import Button from '../../Components/Button/Button'
import { text } from '@fortawesome/fontawesome-svg-core'
const Form = () => {
    const texts = ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"]
    return (
        <div className='dfCcc flex-wrap ' style={{
            width: "100vw",
            height: "100vh",
        }}>
            {texts.map((text, index) => (
                <div className='dfcc w-50'>

                </div>
            ))}
        </div>
    )
}

export default Form;