import React from "react";

class ListItem extends React.Component{
    render() {

        let classImportant = 'todo-item';
        if(this.props.task.important === true){
            classImportant += ' important'
        }
        let classDone = 'todo-item-text';
        if(this.props.task.done === true){
            classDone += ' done'
        }

        return(
            <li className={classImportant}>
            <span onClick={() => {this.props.onToggleDone(this.props.task.id)}} className={classDone}>{this.props.task.title}</span>
            <div className="btn-group">
                <button onClick={() => {this.props.onToggleImportant(this.props.task.id)}}  role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
            </div>
        </li>
        )
    }
}

export default ListItem;