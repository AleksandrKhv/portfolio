import React from 'react';
import st from './Contacts.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={st.wrapper_contacts}>
            <div className={st.contacts + ' ' + stContainer.container}>
                <h3>Contacts</h3>
                <div className={st.message}>
                    <form action="">
                        <div><input type="text"/></div>
                        <div><input type="text"/></div>
                        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                    </form>
                </div>
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