import React from 'react';
import st from './Footer.module.css'
import stContainer from '../../common/styles/Container.module.css';
import reactImg from './../../assets/img/react-brands.svg'

const Footer = () => {
    return (
        <div className={st.wrapper_footer}>
            <div className={st.footer + ' ' + stContainer.container}>
                <h3>Aleksandr Khvashchevski</h3>
                <div className={st.socialIcons}>
                    <div className={st.socialIcon}><img src={reactImg} alt={'react_logo'}/></div>
                    <div className={st.socialIcon}></div>
                    <div className={st.socialIcon}></div>
                    <div className={st.socialIcon}></div>
                </div>
                <footer>
                    <p>© 2022 All rights reserved</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;