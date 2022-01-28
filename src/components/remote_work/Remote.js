import React from 'react';
import st from './Remote.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Remote = () => {
    return (
        <div className={st.wrapper_remote}>
            <div className={st.remote + ' ' + stContainer.container}>
                <h2>Consider remote work options</h2>
                <a href="#" className={st.btn} >
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    Write me
                </a>
            </div>
        </div>
    );
};

export default Remote;