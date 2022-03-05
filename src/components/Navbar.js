import React, { Component } from 'react';
import BizbirijeLogo from '../logoBizbirije.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Navbar extends Component {


    render(){

        return(
            <>
                <nav className=" justify-center">
                    <Link to="/">
                        <img className="nav w-12" src={BizbirijeLogo} />
                    </Link>
                </nav>
            </>
        );
    }
}

export default Navbar;