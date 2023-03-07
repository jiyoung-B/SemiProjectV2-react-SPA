import React from 'react';
import '../img/smile.png'
import smile from '../img/smile.png';
import {NavLink} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h2>HELLO</h2>
            <p>Spy Family Annya</p>
            <NavLink to="/zipcode"><img src={smile} /></NavLink>
        </div>

    );
};

export default Home;