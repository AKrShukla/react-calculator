import React from 'react';
import "./Button.css";

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=" || val ==="⌫" || val ==="Clear";
};

const isClear = val => {
    return val ==="⌫" || val ==="Clear";
};

function Button(props) {
    return (
        <div className={`button-wrapper ${
            isOperator(props.children) ? "" : "operator"} ${isClear(props.children) ? "clear" : ""}` }
            onClick={() => props.buttonAction(props.opr ? props.opr : props.children)}>
            {props.children}
        </div>
    );
}

export default Button;