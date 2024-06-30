import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Search from "./Search";

class App extends React.Component {

    state = {
        todoData: [
            {id: 1, title: 'Сделать зарядку'},
            {id: 2, title: 'Почистить забу'},
            {id: 3, title: 'Завтрак'},
        ]
    }

    render(){
        return (
            <div className="todo-app p-5">
            <Header/>
            <Search/>
            <List data={this.state.todoData}/>
            <Footer/>
            </div>
        )
    }

}
export default App;