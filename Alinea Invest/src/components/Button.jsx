import React from 'react'

const Button = ({ width, height, text, backgroundColor, color, fontSize, border }) => {
    return (
        <>
            <button className="btn-main" style={{ width: width, height: height, backgroundColor: backgroundColor, color: color, fontSize: fontSize, border: border }}>{text}</button>
        </>
    )
}

export default Button
