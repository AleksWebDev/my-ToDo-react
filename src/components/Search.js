import React from "react";


function Search(props) {
  return ( 
    <div className="search">
          <input
            type="text"
            placeholder="введите фразу для поиска"
            className="form-control me-2"
            value={props.term}
            onChange={(e) => {props.changeTerm(e.target.value)}}
          />
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">Все</button>
            <button type="button" className="btn btn-light">Активные</button>
            <button type="button" className="btn btn-light">Выполненные</button>
          </div>
        </div>
   );
}

export default Search