import { useState } from 'react'
import "./mapPage.css"

const MapPage = () => {
    const [curIcons, setCurIcons] = useState([["fa-solid fa-temperature-full", false], ["fa-solid fa-droplet", false], ["fa fa-sun", false], ["fa-solid fa-droplet-slash", false], ["fa-solid fa-snowflake", false], ["fa-solid fa-cloud", false], ["fa-solid fa-leaf", false]]);
    const [report, setReport] = useState([
        "Cairo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos distinctio vel maxime temporibus nihil officiis accusamus cupiditate nisi, quo quis vero, nulla alias suscipit similique quas consectetur adipisci voluptates",
        ["This Area Has A Positive Reason 1", "This Area Has A Positive Reason 2", "This Area Has A Positive Reason 3", "This Area Has A Positive Reason 4"],
        ["This Area Has A Negative Reason 1", "This Area Has A Negative Reason 2"],
    ])
    return (
        <div className=' MapPage dfsc'>
            <div className='MapArea dfcc w-75 h-100'>
                <div className='Maps'>
                    <div className="Map" alt="" />
                </div>
                <span className='CurrentArea'>
                    Cairo
                </span>
                <span className='AreaInfo h-100 dfCsc gap-4'>
                    <ul className='IconBar gap-3 '>
                        {curIcons.map((icon, index) => (
                            <li key={index} className={`pointer ${icon[1] && "Active"}`} onClick={() => {
                                let newIcons = [...curIcons];
                                newIcons.forEach(icon => {
                                    icon[1] = false;
                                });
                                newIcons[index][1] = !newIcons[index][1];
                                setCurIcons(newIcons);
                            }}>
                                <i class={icon[0]} aria-hidden="true" />
                            </li>

                        ))}
                    </ul>
                </span>
            </div>
            <div className='RightArea bg-white w-25 dfCsc justify-content-between'>
                <header className='w-100 fw-bolder fs-1 dfCcc py-5'
                    style={{
                        fontFamily: "monospace",
                        height: "115px",
                        marginTop: "9vh",
                    }}

                >
                    {report[0]}
                    <hr className='w-75 py-3' />
                </header>
                <span className='w-100 px-4 dfcc'>{report[1]}</span>

                <ul className='px-4 dfCcc align-items-start gap-2 w-100' style={{
                    position: "relative",
                    top: "-10px",
                }}>
                    {
                        report[2].map((info, index) => (
                            <li className=' dfsc w-100 gap-3' key={index}>
                                {info}
                                <i class="fa fa-arrow-circle-up" aria-hidden="true"
                                    style={{
                                        color: "#2A7F62"
                                    }}
                                />
                            </li>
                        ))
                    }
                    {
                        report[3].map((info, index) => (
                            <li className=' dfsc w-100 gap-3' key={index}>
                                {info}
                                <i class="fa fa-arrow-circle-down" aria-hidden="true"
                                    style={{
                                        color: "#CB4335"
                                    }}
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className='ButtonContainer w-100 dfcc justify-content-between align-items-end py-4 px-4'>
                    <button className='Button Cancel py-2 px-3 rounded-2'
                        style={{
                            color: "black",
                            backgroundColor: "var(--border-color)",
                        }}
                    >
                        Cancel
                    </button>
                    <button className='Button py-2 px-3 rounded-2'
                        style={{
                            backgroundColor: "var(--main-color)",
                            color: "var(--main-bg-color)",
                        }}
                    >
                        Save Report
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MapPage