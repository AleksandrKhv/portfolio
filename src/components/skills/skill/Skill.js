import React from 'react';
import st from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={st.skill}>
            <div className={st.icon}>

            </div>
                <h3>{props.title}</h3>
            <span className={st.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;