import React from "react"

class Footer extends React.Component{

  state = {
    titleTask: ''
  }

  onChangeInput = (e) => {
    this.setState({
      titleTask: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    
    if(this.state.titleTask.trim()){
      this.props.addNewTask(this.state.titleTask);
    }

    this.setState({
      titleTask: '',
    })
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className="footer">
          <input value={this.state.titleTask} onChange={this.onChangeInput} type="text" placeholder="Что необходимо сделать" className="form-control me-2" />
          <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    )
  }
}

export default Footer