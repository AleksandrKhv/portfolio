import React from 'react';
import st from './Footer.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Footer = () => {
    return (
        <div className={st.wrapper_footer}>
            <div className={st.footer + ' ' + stContainer.container}>
                <h3>Aleksandr Khvashchevski</h3>
                <div className={st.what_is_this}><p>фиксированная ширина и высота</p></div>
                <footer>
                    <p>© 2022 All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;