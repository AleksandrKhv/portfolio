import React from 'react';
import st from './Nav.module.css'

const Nav = () => {
    return (
        <div className={st.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default Nav;