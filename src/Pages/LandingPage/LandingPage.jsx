import { useState, useEffect } from 'react'
import "./landingPage.css"
import { Typewriter } from 'react-simple-typewriter'
import Button from '../../Components/Button/Button'
import toast from 'react-hot-toast'
const LandingPage = () => {

    const handleType = (count) => {
        // console.log(count)
    }
    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }

    return (
        <div className='landingPageContainer dfCcc' style={{
            width: "100%",
        }}>

            <div className='dfCcc section section1'>
                <div className='HeaderText gap-5 dfCcc text-white align-items-start' style={{
                    height: "100vh",
                }}>
                    <div className='typeWriter w-100'>
                        <Typewriter
                            words={[
                                'Weather and Environmental Conditions Reports for Egypt'
                                , 'Wherever You Are Within Egypt'
                                , 'Explore Best Weather Locations'
                            ]}
                            loop={"Infinity"}
                            cursor
                            typeSpeed={100}
                            deleteSpeed={25}
                            delaySpeed={2000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </div>
                    <p>
                        Obtain a detailed and comprehensive report on the current weather and environmental conditions specific to any location within Egypt. Stay informed about temperature, humidity, air quality, and other key environmental factors, tailored to your exact region.                    </p>
                    <Button onClick={() => {
                        location.href = "/Map"
                    }}
                        text="Explore More" bgColor="var(--main-color)" color="white" />
                </div>
            </div>
            <div className='dfCcc section'>

            </div>
        </div>
    )
}

export default LandingPage