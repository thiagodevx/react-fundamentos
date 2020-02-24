import React from 'react';

export default props =>
    <div>
        {React.Children.map(props.children, child => {
            return React.cloneElement(child, {sobrenome: props.sobrenome})
        })}
    </div>