import React from 'react';
import './Input.css';

const Input = ( {type, name, label} ) => {
    return (
        <div className="input-wrapper">
            <label className="label" htmlFor={name}>{label}</label>

            {type === 'textarea' ?
                <textarea className="input--textarea" name={name} id={name} rows="7" required/>
                :
                <input className="input" type={type} name={name} required />
            }
        </div>
    )
};

export default Input;