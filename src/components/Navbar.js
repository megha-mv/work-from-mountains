import React, { Component } from 'react';
import logo from '../images/final_Logo.jpeg';
import {FaAlignRight} from 'react-icons/fa';
import{BiHomeHeart,BiLogIn} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
// import {IoMailOutline} from 'react-icons/io5'
import {MdOutlineHomeWork} from 'react-icons/md'
import {Link} from "react-router-dom"
import '../App.css'



export default class Navbar extends Component {

    state={
        isOpen:false
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt = "Work from Mountains"  height="90"/>
                        </Link>
                        <button type = "button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/"><BiHomeHeart size='40'/>Home</Link>
                        </li>
                        <li>
                            <Link to="/properties"><MdOutlineHomeWork size='40'/>Properties</Link>
                        </li>
                        <li>
                            <Link to="/about-us"><RiContactsLine size='38'/>AboutUs</Link>
                        </li>                        
                        <li>
                            <Link to="/Login"><BiLogIn size='38'/>Login/SignUp</Link>
                        </li>
                    </ul>
                </div>                
            </nav >
        )
    }
}
