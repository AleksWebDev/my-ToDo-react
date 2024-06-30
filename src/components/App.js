import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Search from "./Search";

class App extends React.Component {

    state = {
        todoData: [
            {id: 1, title: 'Сделать зарядку', important: false, done: false},
            {id: 2, title: 'Почистить забу', important: true, done: false},
            {id: 3, title: 'Завтрак', important: false, done: true},
        ]
    }

    onToggleImportant = (id) => {
        this.setState((state) => {
            //Для того что бы сформировать новый массив, необходимо найти индекс нужно задачи по который был клик 
            const idx = state.todoData.findIndex((item) => {return item.id === id})
            //Сформировать новый обьект поменяв в нем поле important с true на false
            const targetElem = state.todoData[idx];
            const newItem = {...targetElem, important: !targetElem.important}
            // Формируем новый массив todos внедряя в него новый {} с задачей на тоже место где был предществующий
            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);
            return {
                todoData: [...partOne, newItem, ...partTwo]
            }
        })
    }

    onToggleDone = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex((item) => {return item.id === id});
            const targetElem = state.todoData[idx];

            const newElem = {...targetElem, done: !targetElem.done};

            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);

            return {
                todoData: [...partOne, newElem, ...partTwo]
            }
        })
    }

    render(){
        return (
            <div className="todo-app p-5">
            <Header/>
            <Search/>
            <List   data={this.state.todoData} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
            <Footer/>
            </div>
        )
    }

}
export default App;