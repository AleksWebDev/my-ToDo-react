function Header (props) {

  let totalActiveTask = 0;
  let totalDoneTask = 0;

  props.tasks.forEach(item => {
    if(item.done === true){
      totalDoneTask++;
    }else{
      totalActiveTask++;
    }
  })

    return (
        <header className="header">
          <h1 className="header-title">Список дел</h1>
          <span  className="header-desc">{totalActiveTask} осталось, {totalDoneTask} сделано</span>
        </header>
    )
}

export default Header