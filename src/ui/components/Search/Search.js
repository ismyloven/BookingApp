import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// Style
import { searchWrapper } from './search.module.scss'
import Button from "../../components/_Forms/Button/Button";
import Input from "../_Forms/Input/Input";
// Parts
class Search extends Component {
    render() {
        return (
            <form className={searchWrapper}>
                <Input placeholder='Destination'/>
                <Input placeholder='Check-in'/>
                <Input placeholder='Check-out'/>
                <Input placeholder='Adults'/>
                <Input placeholder='Children'/>
                <Link to={"/hotels"} >
                <Button backgroundColor="#fd8e8e" color="white" name="search"/>
                </Link>
            </form>

        );
    }
}

export default Search;