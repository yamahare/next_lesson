import React  from 'react';

function Header(props){
    return (
        <header>
            <div>{props.header}</div>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;