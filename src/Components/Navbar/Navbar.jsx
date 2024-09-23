import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import Logo from '../Logo';
import "./navbar.css"
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [onTop, setOnTop] = useState(location.pathname === "/" || location.pathname === "/Home");
    const [navOpened, setNavOpened] = useState("");
    useEffect(() => {
        if (location.pathname !== "/" && location.pathname !== "/Home") {
            setOnTop(false);
        } else {
            setOnTop(true);
        }
        const handleScroll = () => {
            if (location.pathname === "/" || location.pathname === "/Home") {
                setOnTop(window.scrollY === 0);
            } else {
                setOnTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);
    const links = [["Home", "/"], ["About", ""], ["Map", "/Map"]];
    const myLinks = [["Linkedin", "https://www.linkedin.com/in/abdelrahman-yehia-08803a225/", "fa-brands fa-linkedin"], ["Github", "https://github.com/PISTAfff", "fa-brands fa-github"], ["Discord", "⎠⎝𝙿𝙸𝚂𝚃𝙰⎠⎝", "fa-brands fa-discord"]];
    return (
        <div
            className={`dfcc Navbar ${onTop ? "onTop" : "offTop"} ${navOpened !== "" && "navOpened"}`}
            style={{
                width: '100%',
            }}

        >
            <div
                className="dfcc LogoContainer gap-2"
                style={{
                    padding: '0px 50px',
                }}
                onMouseEnter={() => setNavOpened("")}
            >
                <Logo width={onTop ? 75 : 100} height={onTop ? 75 : 100} top={onTop ? 0 : "20px"} />
                Space Tech
            </div>
            <div className="w-50 gap-4" style={{
                padding: "0 50px",
                height: "100px",
            }}>
                <ul className='dfcc text-white w-100 h-100 gap-1'>
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className={`link ${onTop ? 'onTop' : 'offTop'}`}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setNavOpened(link[1] == "" ? link[0] : "")}
                        >
                            <Link className='navlink p-4 px-3' to={`${link[1] != "" ? link[0] : ""}`}>
                                {link[0]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`${navOpened == "About" && "Expanded"} Expander dfsc position-absolute w-100`}
                style={{
                    top: onTop ? 115 : 50,
                    left: 0,
                    height: navOpened !== 0 && "calc(500px)",
                    backgroundColor: "var(--main-color)",
                }}
                onMouseLeave={() => setNavOpened("")}
            >
                {navOpened == "About" &&
                    <div className='w-100 h-100 dfcc'>
                        <div className=' start gap-5 text-white AboutSectionU dfCcc w-50 h-75'>
                            <h1 style={{
                                padding: "0 50px",
                            }}>
                                OUR TEAM
                            </h1>
                            <p
                                className='w-75'
                                style={{
                                    padding: "0 50px"
                                }}
                            >
                                We are a group of passionate university students, driven by a commitment to excellence and innovation. Our teamwork allows us to collaborate seamlessly, leveraging each other's strengths to achieve fast and efficient results. Together, we strive to turn challenges into opportunities, delivering high-quality outcomes with remarkable productivity.
                            </p>
                            <div className='start' style={{
                                padding: "0 50px",
                            }}>
                                <Button
                                    onClick={() => window.location.href = 'https://mail.google.com/mail/u/0/?fs=1&to=freeaccforu98@gmail.com&tf=cm'}
                                    text="Contact Us"
                                    bgColor="var(--secondary-color)"
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className=' start gap-5 text-white  dfCcc  w-50 h-75'>
                            <h1 style={{
                                padding: "0 50px",
                            }}>
                                ABOUT THE SITE
                            </h1>
                            <p
                                className='w-75'
                                style={{
                                    padding: "0 50px"
                                }}
                            >
                                Welcome to Egypt Governorate Data Monitor, your comprehensive source for real-time insights and detailed reports on various metrics across Egypt's governorates. Our platform provides an intuitive interface to explore vital data, including temperature, humidity, wind speed, air pressure, vehicle counts, and population statistics.
                            </p>
                            <div className='start' style={{
                                padding: "0 50px",
                            }}>
                                <Button
                                    onClick={() => navigate("/Map", { replace: true })}
                                    text="Map"
                                    bgColor="var(--secondary-color)"
                                    color="white"
                                />
                            </div>
                            {/* <div
                                className='start pista rounded-circle bg-black dfcc mt-5'
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    padding: "20px",
                                    height: "200px",
                                    width: "200px",
                                }}
                            >
                            </div>
                            <h3 className='text-white fw-bolder start'>Abdelrahman Yehia</h3>
                            <p className="text-white start" style={{
                                padding: "0 50px",
                                maxHeight: "75px",
                            }}>
                                an 18-year-old professional software and game developer studying at New Cairo Technological University. I’ve developed over 20 games showcased on my Itch.io page and love exploring new challenges and solutions.                            </p>
                            <ul className='w-100 dfcc text-white justify-content-around'>
                                {myLinks.map((link, index) => (
                                    <div className='parentLink dfCcc' onClick={() => {
                                        if (index == 2) {
                                            navigator.clipboard.writeText(link[1]);
                                            toast.success("copied to clipboard");
                                        } else {
                                            location.href = link[1];
                                        }
                                    }}>
                                        <li
                                            key={index}
                                            className='dfcc gap-2 text-white pointer start'
                                            style={{
                                                padding: "10px 20px",
                                            }}
                                        >
                                            <i className={`dfcc ${link[2]}`}></i>
                                            {link[0]}
                                        </li>
                                        <div className='dfcc social' />
                                    </div>
                                ))}
                            </ul> */}

                        </div>
                    </div>
                }
            </div>
            <div
                className={`${navOpened == "About" && "Expanded"} transition pointer Expander blurred dfsc position-absolute w-100`}
                style={{
                    top: onTop ? 115 + 500 : 50 + 500,
                    left: 0,
                }}
                onMouseEnter={() => { setNavOpened(""); }}
            >
            </div>
        </div>
    )
}

export default Navbar