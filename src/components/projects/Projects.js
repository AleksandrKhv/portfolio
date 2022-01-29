import React from 'react';
import st from './Projects.module.css'
import stContainer from '../../common/styles/Container.module.css';
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={st.wrapper_projects}>
            <div className={st.projectContainer + ' ' + stContainer.container}>
                <h2 className={st.title}>Projects</h2>
                <div className={st.projects}>
                   <Project title={'name project1'} text={'краткое описание проектаff ffffffffff fffffffffff ffffffff fffffffff'}/>
                   <Project title={'name project2'} text={'краткое описание проекта'}/>
                   <Project title={'name project3'} text={'краткое описание проекта'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;