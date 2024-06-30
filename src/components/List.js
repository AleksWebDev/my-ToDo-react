import ListItem from "./ListItem"

function List () {


    const tasks = [
        {id: 1, title: 'Сделать зарядку'},
        {id: 2, title: 'Почистить забу'},
        {id: 3, title: 'Завтрак'},
    ]


    const render = tasks.map((task) => {
        return (
            <ListItem key={task.id} task={task}/>
        )
    })

    const emptyList = (
        <li className="todo-item justify-content-center">
            <span className="todo-item-text">Список дел пуст</span>
        </li>
    )

    return (
        <ul className="todo-list">
        {tasks.length > 0 ? render : emptyList}
      </ul>
    )
}

export default List