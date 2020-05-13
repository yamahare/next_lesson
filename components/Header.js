import React  from 'react';

function Header(props){
    return (
        <header>
            <div>{props.header}</div>
        </header>
    )
}

export default Header;
