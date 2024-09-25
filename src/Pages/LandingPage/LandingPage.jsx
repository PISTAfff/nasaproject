import { useState, useEffect } from 'react'
import "./landingPage.css"
import { Typewriter } from 'react-simple-typewriter'
import Button from '../../Components/Button/Button'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {

    const navigate = useNavigate();

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
                        />
                    </div>
                    <p>
                        Obtain a detailed and comprehensive report on the current weather and environmental conditions specific to any location within Egypt. Stay informed about temperature, humidity, air quality, and other key environmental factors, tailored to your exact region.                    </p>
                    <Button onClick={() => {
                        navigate("/Map");
                    }}
                        text="Explore More" bgColor="var(--main-color)" color="white" />
                </div>
            </div>
            <div className="section dfcc  justify-content-around px-5">
                <div className='dfCcc h-100 gap-5 rightBorder align-items-start' style={{
                    width: "35%"
                }}>
                    <header className='dfsc w-50 fs-1 fw-bolder'>Climate</header>
                    <p className='fs-5 w-75 dfsc '>
                        A video About Climate Awareness : Together To Improve The Enviroment
                    </p>
                </div>
                <video controls className='VideoArea' style={{
                    pointerEvents: "all",
                    userSelect: "all",
                    width: "50%"
                }} >
                    <source src='/public/Video.mp4' style={{
                        pointerEvents: "all",
                        userSelect: "all"
                    }} type="video/mp4" />
                </video>
            </div>
            <div className='section section3 dfcc px-5'>
                <div className='dfCcc px-5 h-100 gap-5 align-items-start text-white' style={{
                    width: "50%"
                }}>
                    <header className='dfsc w-50 fs-1 fw-bolder'>Try Our Game!</header>
                    <p className='fs-5 w-75 dfsc '>
                        We Made A Little Game For You To Play.
                        its all About Saving Your Planet !
                    </p>
                    <Button onClick={() => {
                        //Download The Game
                        toast("Game Is Under development")
                    }}
                        text="Check it out" bgColor="var(--main-color)" color="white" />
                </div>
                <div className='section3Img'>
                </div>
            </div>
            <div className='dfcc justify-content-around mt-5'>
                <div className='section2 w-50 rightBorder'></div>
                <div className='dfCcc px-5 h-100 gap-5 align-items-start' style={{
                    width: "50%"
                }}>
                    <header className='dfsc w-50 fs-1 fw-bolder'>Our Planet</header>
                    <p className='fs-5 dfsc '
                        style={{
                            width: "100vw",
                        }}>
                        Learn About Your planet, See How You may be damaging it
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage