import React from 'react';
import "./Input.css"
function Input(props) {
    return (
        <div className="input">
            {props.input}
        </div>
    );
}

export default Input;