import React from 'react';
import st from './Projects.module.css'
import stContainer from '../../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../Title/Title';
import imgCoffee from './../../assets/img/coffee_shop.png'
import imgTodoList from './../../assets/img/todolist.png'
import imgBootsShop from './../../assets/img/BootsShop.jpg'

const Projects = () => {

    const coffeeShop = {
        backgroundImage: 'url(' + imgCoffee + ')',
    };
    const todoList = {
        backgroundImage: 'url(' + imgTodoList + ')',
    };
    const bootsShop = {
        backgroundImage: 'url(' + imgBootsShop + ')',
    };

    return (
        <div className={st.wrapper_projects} id={'projects'}>
            <div className={st.projectContainer + ' ' + stContainer.container}>
                <Title title={'Projects'}/>
                <div className={st.projects}>
                    <Project style={coffeeShop}
                             title={'Coffee Shop'}
                             text={'used React TS, React Icons, HTML, CSS'}
                             web={"https://AleksandrKhv.github.io/coffee_web"}/>
                    <Project style={todoList}
                             title={'TodoList'}
                             text={'used React (Hooks), HTML, CSS, localStorage'}
                             web={"https://aleksandrkhv.github.io/simple_todo_list"}/>
                    <Project style={bootsShop}
                             title={'Shoe store'}
                             text={'краткое описание проекта'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;