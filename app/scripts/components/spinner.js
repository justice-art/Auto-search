import React from 'react';

export default function Spinner(props) {
    return (
        <div style={props.style} className={`spinner ${props.isDefault && 'spinner--default'} `} >
            <div className={'spinner__inner'}>
                {Array.apply(null, Array(8)).map((item, i) =>
                    <div
                        key={i}
                        className={'spinner__dot'}
                        style={{ backgroundColor: props.color }}
                    />)}
            </div>
        </div>
    );
}