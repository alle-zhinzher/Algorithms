import React from 'react'

function Header() {
    return (
        <header className="header">
            <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png"></img>
            <nav className="nav">
                <span className="nav__link">Profile</span>
                <span className="nav__link">Messages</span>
                <span className="nav__link">Main Content</span>
            </nav>
        </header>
    )
}

export default Header
