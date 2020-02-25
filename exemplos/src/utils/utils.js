import React from 'react';

export function addPropsToChildren(props){
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props})
    })
}