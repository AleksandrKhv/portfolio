import React from 'react';
import st from './Project.module.css'

const Project = (props) => {


    return (
        <div className={st.wrapper_project}>
            <div className={st.img}>
                <a href="#" className={st.btn} >
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    dívat se
                </a>
            </div>
            <h3>{props.title}</h3>
            <span className={st.text}>{props.text}</span>
        </div>
    );
};

export default Project;