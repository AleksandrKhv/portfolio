import React from 'react';
import st from './Contacts.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={st.wrapper_contacts}>
            <div className={st.contacts + ' ' + stContainer.container}>
                <h3>Contacts</h3>
                    <form className={st.message} >
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                <a href="#" className={st.btn} >
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