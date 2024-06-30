import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Search from "./Search";

class App extends React.Component {

    render(){
        return (
            <div className="todo-app p-5">
            <Header/>
            <Search/>
            <List/>
            <Footer/>
            </div>
        )
    }

}
export default App;