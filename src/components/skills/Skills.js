import React from 'react';
import st from './Skills.module.css'
import stContainer from './../../common/styles/Container.module.css'
import Skill from './skill/Skill';
import Title from '../Title/Title';

const Skills = () => {
    return (
        <div className={st.skillsBlock} id={'skills'}>
            <div className={st.skillsContainer + ' ' + stContainer.container}>
                <Title title={'Skills'}/>
                <div className={st.skills}>
                    <Skill title={'React JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam. ллолдод лолдолдодоо оддодододдоо длддллол'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'CSS (SCSS)'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'Material UI'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'TDD'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'API'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'Git'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;