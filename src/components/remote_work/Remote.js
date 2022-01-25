import React from 'react';
import st from './Remote.module.css'
import stContainer from '../../common/styles/Container.module.css';

const Remote = () => {
    return (
        <div className={st.wrapper_remote}>
            <div className={st.remote + ' ' + stContainer.container}>
                <h2>Consider remote work options</h2>
               <button><a href="">Write me</a></button>
            </div>
        </div>
    );
};

export default Remote;