import React, {Component} from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h2 className="header__title">Welcome to puzzle game!</h2>
            </header>
        )
    }
}

export default Header;