import React from 'react';

import './NavBar.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
        <div className="NavBarHeader">
            <p className="NavBarHeaderText">Create & Organize you Tasks!</p>
            <div className="CreateTask">
                {/* <span>+</span> */}
                <span>Create</span>
            </div>
        </div>
    )
}

export default NavBar;