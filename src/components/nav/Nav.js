import React from 'react';
import st from './Nav.module.css'

const Nav = () => {
    return (
        <div className={st.nav}>
            <a href="">Главная
                <span/><span/><span/><span/></a>
            <a href="">Скиллы
                <span/><span/><span/><span/></a>
            <a href="">Проекты
                <span/><span/><span/><span/></a>
            <a href="">Контакты
                <span/><span/><span/><span/></a>
        </div>
    );
};

export default Nav;