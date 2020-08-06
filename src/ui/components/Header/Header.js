import React, {Component} from 'react';

// Style
import { headerWrapper } from './header.module.scss'
// Parts
import Logo from "../Logo/Logo";
import Button from "../_Forms/Button/Button";

class Header extends Component {
    render() {
        return (
            <header className={headerWrapper}>
                <Logo color={'#fd8e8e'} />
                <div>
                    <Button name="About" />
                    <Button name="My booking" />
                    <Button name="Sign in" />
                </div>
            </header>
        );
    }
}

export default Header;