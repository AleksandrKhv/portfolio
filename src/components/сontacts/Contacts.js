import React from 'react';
import st from './Contacts.module.css'
import stContainer from '../../common/styles/Container.module.css';
import Title from '../Title/Title';

const Contacts = () => {
    return (
        <div className={st.wrapper_contacts}>
            <div className={st.contacts + ' ' + stContainer.container}>
                <Title title={'Contacts'}/>
                    <form className={st.message} >
                        <input type="text" placeholder={'Your name'}/>
                        <input type="text" placeholder={'Your e-mail'}/>
                        <textarea placeholder={'write me'}/>
                    </form>
                <a href={"#"} className={st.btn} type='submit'>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    send a message
                </a>
            </div>
        </div>
    );
};

export default Contacts;