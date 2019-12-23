import React from 'react';
import './Split.css';
function Split(props) {
    const comClassName = `split ${props.className}`;
    const newStyles = {flex: props.flexBasis}
return (
    <div className={comClassName} style={newStyles} >
        {props.children}
    </div>
);
    
}

export default Split;