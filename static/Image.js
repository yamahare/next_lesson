import React  from 'react';

function Image(props){

    const fname = `./static/${props.fname}`
    const size = `${props.size}px;`
    return (
        <img width={size} border="1" src={fname}></img>
    )
}

export default Image;