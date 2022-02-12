import React from 'react';
import st from  './Main.module.css'
import stContainer from  './../../common/styles/Container.module.css'


const Main = () => {
    return (
        <div className={st.mainBlock}>
            <div className={stContainer.container}>
                <div className={st.title}>
                    <span>Hi There</span>
                    <h1>I am Aleksandr Khvashchevski</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={st.photo}>
                </div>
            </div>
        </div>
    );
};

export default Main;