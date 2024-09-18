import { useState, useEffect } from 'react'
import "./button.css"
const Button = (props) => {
    const [hovered, setIsHoverd] = useState(false);
    return (
        <button className={`text-nowrap Btn transition rounded-1 dfsc gap-2`} style={{
            backgroundColor: "transparent",
            color: props.color,

        }}
            onMouseEnter={() => { setIsHoverd(true) }}
            onMouseLeave={() => { setIsHoverd(false) }}
            onClick={props.onClick}
        >
            {props.text}
            <i class="fa fa-arrow-right rounded-5 p-2 transition" aria-hidden="true"
                style={{
                    boxShadow: hovered ? `0px 0px 10px ${props.bgColor}` : "none",
                    color: props.color,
                    backgroundColor: props.bgColor,
                }}
            />
        </button>
    )
}

export default Button