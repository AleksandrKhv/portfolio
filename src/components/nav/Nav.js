import React from 'react';
import st from './Nav.module.css'

const Nav = () => {
    return (
        <div className={st.nav}>
            <a href="#">home
                <span/><span/><span/><span/>
            </a>
            <a href="#">skills
                <span/><span/><span/><span/>
            </a>
            <a href="#">projects
                <span/><span/><span/><span/>
            </a>
            <a href="#">Contacts
                <span/><span/><span/><span/>
            </a>
        </div>
    );
};

export default Nav;