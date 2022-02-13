import React from 'react';
import st from './Nav.module.css'

const Nav = () => {
    return (
        <div className={st.nav}>
            <a href={"#home"}>home
                <span/><span/><span/><span/>
            </a>
            <a href={"#skills"}>skills
                <span/><span/><span/><span/>
            </a>
            <a href={"#projects"}>projects
                <span/><span/><span/><span/>
            </a>
            <a href={"#contacts"}>contacts
                <span/><span/><span/><span/>
            </a>
        </div>
    );
};

export default Nav;