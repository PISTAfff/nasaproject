import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import Logo from '../Logo';
import "./navbar.css"
import Button from '../Button/Button';
const Navbar = () => {
    const [onTop, setOnTop] = useState(location.pathname === "/");
    const [navOpened, setNavOpened] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setOnTop(window.scrollY === 0);
            } else {
                setOnTop(false);
            }

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const links = ["About", "Map"];
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
                <ul className='dfcc text-white w-100 h-100 gap-3'>
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className={`link ${onTop ? 'onTop' : 'offTop'}`}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                            }}
                            onClick={() => setNavOpened((prev) => {
                                if (prev === link) {
                                    return "";
                                } else {
                                    return link
                                }
                            })}
                            onMouseEnter={() => setNavOpened(link)}
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`${navOpened !== "" && "Expanded"} Expander dfsc position-absolute w-100`}
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
                        <div className=' start gap-5 text-white AboutSectionU dfCcc align-items-start w-50 h-75'>
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
                                    onClick={() => location.href = "https://mail.google.com/mail/u/0/?fs=1&to=freeaccforu98@gmail.com&tf=cm"}
                                    text="Contact Us"
                                    bgColor="var(--secondary-color)"
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className='dfCsc w-50 h-100 gap-4'>
                            <div
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
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div
                className={`${navOpened !== "" && "Expanded"} transition pointer Expander blurred dfsc position-absolute w-100`}
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