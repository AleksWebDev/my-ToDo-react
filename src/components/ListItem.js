import React from "react";

class ListItem extends React.Component{

    state = {
        important: false,
        done: false,
    }

    onImportantClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    onDoneClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    render() {

        let classImportant = 'todo-item';
        if(this.state.important === true){
            classImportant += ' important'
        }
        let classDone = 'todo-item-text';
        if(this.state.done === true){
            classDone += ' done'
        }

        return(
            <li className={classImportant}>
            <span onClick={this.onDoneClick} className={classDone}>{this.props.task.title}</span>
            <div className="btn-group">
                <button onClick={this.onImportantClick}  role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
            </div>
        </li>
        )
    }
}

export default ListItem;