import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import StatusBar from "./StatusBar";
import List from "./List";
import Search from "./Search";


class App extends React.Component {

    state = {
        todoData: [
            {id: 1, title: 'Сделать зарядку', important: false, done: false},
            {id: 2, title: 'Почистить забу', important: true, done: false},
            {id: 3, title: 'Завтрак', important: false, done: true},
        ],

        term: '',
        status: 'all', // active, done
        totalTask: 0,
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

    deliteTask = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex(item => item.id === id);
            
            const partOne = state.todoData.slice(0, idx);
            const partTwo = state.todoData.slice(idx + 1);

            return {
                todoData: [...partOne, ...partTwo]
            }
        })
    }

    addNewTask = (title) => {
        this.setState((state) => {

            const ID = state.todoData[state.todoData.length - 1]['id'] + 1;

            const newItem = {id: ID, title: title, important: false, done: false}

            const newArray = [...state.todoData, newItem]

            return{
                todoData: newArray,
            }
        })
    }

    search = (items, term) => {
        if(term.trim().length === 0){
            return items;
        }

        return items.filter((item) => {
            if(item.title.trim().toLowerCase().indexOf(term.toLowerCase().trim()) > -1){
                return true
            }
        })

    }

    changeTerm = (value) => {
        this.setState({
            term: value
        })
    }

    filterByStatus = (items, status) => {
        if(status === 'all'){
            return items;
        }else if(status === 'active'){
            return items.filter((item) => {return item.done === false})
        }else if(status === 'done'){
            return items.filter((item) => {return item.done === true})
        }else{
            return items;
        }
    }

    changeStatus = (status) => {
        this.setState({
            status: status
        })
    }

    render(){
        
        const visibleItems = this.search(this.state.todoData, this.state.term);
        const filteredByStatus = this.filterByStatus(visibleItems, this.state.status)

        return (
            <div className="todo-app p-5">
            <Header tasks={visibleItems} />
            <div className="search">
            <Search changeTerm={this.changeTerm} term={this.state.term}/>
            <StatusBar changeStatus={this.changeStatus} status={this.state.status}/>
            </div>
            <List data={filteredByStatus} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} deliteTask={this.deliteTask}/>
            <Footer addNewTask={this.addNewTask} />
            </div>
        )
    }

}
export default App;