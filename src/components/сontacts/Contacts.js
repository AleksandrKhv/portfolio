import React from 'react';
import st from './Contacts.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={st.wrapper_contacts}>
            <div className={st.contacts + ' ' + stContainer.container}>
                <h3>Contacts</h3>
                    <form className={st.message} >
                        <input type="text" placeholder={'Your name'}/>
                        <input type="text" placeholder={'Your e-mail'}/>
                        <textarea placeholder={'write me'}></textarea>
                    </form>
                <a href="#" className={st.btn} type='submit'>
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